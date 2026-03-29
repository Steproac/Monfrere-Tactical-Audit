import pandas as pd
import numpy as np
import plotly.express as px
import plotly.graph_objects as go
import os
import warnings
warnings.filterwarnings('ignore')

# 1. Setup paths
META_FILES = [
    "Meta_Daily_MONFRERE-Ads-Fe-28-2023-Dec-31-2023 _v2.csv",
    "Meta_Daily_MONFRERE-Ads-Jan-1-2024-Dec-31-2024_v2.csv",
    "Meta_Daily_MONFRERE-Ads-Jan-1-2025-Dec-31-2025_v2.csv",
    "Meta_Daily_MONFRERE-Ads-Jan-1-2026-Mar-29-2026_v2.csv"
]
AWIN_FILES = ["AWIN transactions_103309_2024-01-01_2026-03-06.csv"]
SHOPIFY_ORDER_FILES = ["Shopify_orders_export_1.csv", "Shopify_orders_export_2.csv"]
SHOPIFY_ABANDONED_FILE = "Shopify_Abandoned checkouts_export_032026.csv"

print("--- STARTING TACTICAL AUDIT (DEEP FUNNEL & SHOPIFY SOURCE OF TRUTH) ---")

# ==========================================
# SHOPIFY PROCESSING (SOURCE OF TRUTH)
# ==========================================
print(f"\nProcessing Shopify Orders Data...")
shopify_dfs = []
for file in SHOPIFY_ORDER_FILES:
    if os.path.exists(file):
        shopify_dfs.append(pd.read_csv(file, low_memory=False))
    else:
        print(f"Warning: {file} not found.")

if shopify_dfs:
    orders_df = pd.concat(shopify_dfs, ignore_index=True)
    orders_df['Total'] = pd.to_numeric(orders_df['Total'], errors='coerce').fillna(0)
    
    # Get unique orders
    order_level = orders_df.drop_duplicates(subset=['Name']).copy()
    paid_orders = order_level[order_level['Financial Status'].isin(['paid', 'partially_refunded'])].copy()

    total_shopify_rev = paid_orders['Total'].sum()
    total_paid_orders = len(paid_orders)

    # New vs Returning
    paid_orders['Created at'] = pd.to_datetime(paid_orders['Created at'], errors='coerce', utc=True)
    paid_orders = paid_orders.sort_values(by='Created at')

    first_purchase = paid_orders.groupby('Email')['Created at'].min().reset_index()
    first_purchase.rename(columns={'Created at': 'First Purchase Date'}, inplace=True)
    paid_orders = paid_orders.merge(first_purchase, on='Email', how='left')
    paid_orders['Is_New'] = paid_orders['Created at'] == paid_orders['First Purchase Date']

    new_customers = paid_orders['Is_New'].sum()
    returning_orders = (~paid_orders['Is_New']).sum()
    
    # Lifetime Value (LTV)
    ltv = paid_orders.groupby('Email')['Total'].sum().mean()
    
    # Discount Usage
    discount_orders = paid_orders[paid_orders['Discount Code'].notna() & (paid_orders['Discount Code'] != '')]
    total_discount_orders = len(discount_orders)
    discount_revenue = discount_orders['Total'].sum()

    print(f"Total True Pipeline Revenue (Shopify): ${total_shopify_rev:,.2f}")
    print(f"Total Orders: {total_paid_orders:,} | New Customers: {new_customers:,} | Returning: {returning_orders:,}")
    print(f"Average Customer LTV: ${ltv:,.2f}")
    print(f"Discount Code Usage: {total_discount_orders:,} orders (${discount_revenue:,.2f} associated rev)")

    # Product Profitability (Gross)
    orders_df['Lineitem quantity'] = pd.to_numeric(orders_df['Lineitem quantity'], errors='coerce').fillna(0)
    orders_df['Lineitem price'] = pd.to_numeric(orders_df['Lineitem price'], errors='coerce').fillna(0)
    
    # Filter out shipping/package protection
    products_df = orders_df[~orders_df['Lineitem name'].str.contains('Protection', case=False, na=False)]
    
    product_agg = products_df.groupby('Lineitem sku').agg(
        ProductName=('Lineitem name', 'first'),
        UnitsSold=('Lineitem quantity', 'sum'),
        GrossRev=pd.NamedAgg(column='Lineitem price', aggfunc=lambda x: (x * products_df.loc[x.index, 'Lineitem quantity']).sum())
    ).sort_values('GrossRev', ascending=False)
    
    print("\n--- TOP 5 PRODUCTS BY GROSS REVENUE ---")
    print(product_agg[['ProductName', 'UnitsSold', 'GrossRev']].head(5).to_string())

else:
    print("No Shopify files processed.")
    total_shopify_rev = 0
    new_customers = 0

# ==========================================
# META ADS PROCESSING
# ==========================================
print(f"\nProcessing Meta Data: {META_FILES}")
meta_dfs = []
for file in META_FILES:
    if os.path.exists(file):
        meta_dfs.append(pd.read_csv(file, low_memory=False))
    else:
        print(f"Warning: {file} not found.")

if meta_dfs:
    meta_df = pd.concat(meta_dfs, ignore_index=True)
    
    meta_df['Amount spent (USD)'] = pd.to_numeric(meta_df['Amount spent (USD)'], errors='coerce').fillna(0)
    meta_df['Purchases'] = pd.to_numeric(meta_df['Purchases'], errors='coerce').fillna(0)
    
    ad_df = meta_df.groupby(['Ad name', 'Ad set name']).agg({
        'Amount spent (USD)': 'sum',
        'Purchases': 'sum'
    }).reset_index()

    ad_df.rename(columns={'Amount spent (USD)': 'Spend', 'Ad name': 'Ad Name'}, inplace=True)
    ad_df = ad_df[ad_df['Spend'] > 0]

    total_meta_spend = ad_df['Spend'].sum()
    total_meta_purchases = ad_df['Purchases'].sum()

    print(f"Total Meta Ad Spend: ${total_meta_spend:,.2f}")
    print(f"Meta Reported Purchases: {total_meta_purchases:,.0f}")
    
    if total_shopify_rev > 0:
        true_blended_roas = total_shopify_rev / total_meta_spend if total_meta_spend > 0 else 0
        true_cac = total_meta_spend / new_customers if new_customers > 0 else 0
        meta_over_reporting = (total_meta_purchases / total_paid_orders) if total_paid_orders > 0 else 0
        
        print(f"\n--- TRUE BUSINESS METRICS (MER) ---")
        print(f"True Blended ROAS (Shopify Rev / Meta Spend): {true_blended_roas:.2f}x")
        print(f"True Customer Acquisition Cost (CAC): ${true_cac:,.2f}")
        print(f"Meta Platform claimed {meta_over_reporting*100:.1f}% of total store orders.")

    # Analysis I: Wasted Spend based on Meta CPA
    print("\nCalculating Wasted Spend (Ad-Level Inefficiency)...")
    account_cpa = total_meta_spend / total_meta_purchases if total_meta_purchases > 0 else 0
    failure_multiplier = 3
    spend_threshold = account_cpa * failure_multiplier

    wasted_spend_df = ad_df[(ad_df['Spend'] > spend_threshold) & (ad_df['Purchases'] == 0)].copy()
    total_waste = wasted_spend_df['Spend'].sum()

    print(f"Total Wasted Meta Spend (Ads with 0 conversions & high spend): ${total_waste:,.2f}")

    if not wasted_spend_df.empty:
        top_wasted = wasted_spend_df.sort_values('Spend', ascending=False).head(15)
        fig_waste = px.bar(
            top_wasted.sort_values('Spend', ascending=True),
            x='Spend',
            y='Ad Name',
            orientation='h',
            title=f'Immediate Action Required: Statistically Inefficient Ad Spend (${total_waste:,.0f} Total Waste)',
            color_discrete_sequence=['#D500F9'],
            text='Spend'
        )
        fig_waste.update_traces(texttemplate='$%{text:,.0f}', textposition='outside')
        fig_waste.update_layout(
            template='plotly_dark',
            plot_bgcolor='#000000', paper_bgcolor='#000000',
            width=1000, height=500,
            xaxis_title='Wasted Spend ($)',
            yaxis_title='',
            font=dict(size=14, color='#E0E0E0')
        )
        fig_waste.write_html("wasted_spend_bar_chart.html")
        print("Saved wasted_spend_bar_chart.html")
else:
    print("No Meta files processed.")


# ==========================================
# AWIN AFFILIATE PROCESSING (TRANSACTIONS)
# ==========================================
print(f"\nProcessing Awin Transactions Data: {AWIN_FILES}")
awin_dfs = []
for file in AWIN_FILES:
    if os.path.exists(file):
        awin_dfs.append(pd.read_csv(file, low_memory=False))

if awin_dfs:
    awin_df = pd.concat(awin_dfs, ignore_index=True)
    awin_df['site_name'] = awin_df.get('site_name', 'Unknown').fillna('Unknown')
    awin_df['is_new'] = awin_df['customer_acquisition'].astype(str).str.lower().str.contains('new').astype(int)
    
    awin_grouped = awin_df.groupby('site_name').agg(
        total_transactions=('id', 'count'),
        new_customers=('is_new', 'sum')
    ).reset_index()

    active_aff = awin_grouped[awin_grouped['total_transactions'] > 0].copy()
    active_aff['NCAR_Percentage'] = (active_aff['new_customers'] / active_aff['total_transactions']) * 100
    active_aff = active_aff.sort_values('total_transactions', ascending=False)
    
    active_aff['Partner_Type'] = np.where(active_aff['NCAR_Percentage'] < 20, 'Harvester (Coupon/Low Incr.)', 'Planter (Content/High Incr.)')
    
    print("\n--- NEW CUSTOMER ACQUISITION RATE (AFFILIATES) ---")
    print("Note: Correlate these Harvesters with the heavy Discount Code Usage metric from Shopify.")
    output_aff = active_aff[['site_name', 'total_transactions', 'new_customers', 'NCAR_Percentage', 'Partner_Type']]
    print(output_aff.head(10).to_string(index=False))
else:
    print(f"Could not find Awin files.")

# ==========================================
# ABANDONED CHECKOUTS
# ==========================================
if os.path.exists(SHOPIFY_ABANDONED_FILE):
    abandoned_df = pd.read_csv(SHOPIFY_ABANDONED_FILE, low_memory=False)
    abandoned_df['Total'] = pd.to_numeric(abandoned_df.get('Total', 0), errors='coerce').fillna(0)
    ab_total = abandoned_df['Total'].sum()
    print(f"\n--- CHECKOUT LEAKAGE ---")
    print(f"Total Abandoned Checkout Value: ${ab_total:,.2f}")

print("\n--- TACTICAL AUDIT COMPLETED ---")
