import pandas as pd
import numpy as np
import os
import warnings
warnings.filterwarnings('ignore')

print("--- DEEP FUNNEL INSIGHTS (SHOPIFY + META) ---")

# 1. SHOPIFY 
shopify_files = ["Shopify_orders_export_1.csv", "Shopify_orders_export_2.csv"]
shopify_dfs = [pd.read_csv(f, low_memory=False) for f in shopify_files if os.path.exists(f)]

total_shopify_rev = 0
new_customers = 0

if shopify_dfs:
    orders_df = pd.concat(shopify_dfs, ignore_index=True)
    orders_df['Total'] = pd.to_numeric(orders_df['Total'], errors='coerce').fillna(0)
    
    order_level = orders_df.drop_duplicates(subset=['Name']).copy()
    paid_orders = order_level[order_level['Financial Status'].isin(['paid', 'partially_refunded'])].copy()

    total_shopify_rev = paid_orders['Total'].sum()
    
    paid_orders['Created at'] = pd.to_datetime(paid_orders['Created at'], errors='coerce', utc=True)
    first_purchase = paid_orders.groupby('Email')['Created at'].min().reset_index()
    first_purchase.rename(columns={'Created at': 'First Purchase Date'}, inplace=True)
    paid_orders = paid_orders.merge(first_purchase, on='Email', how='left')
    
    new_customers = (paid_orders['Created at'] == paid_orders['First Purchase Date']).sum()
    ltv = paid_orders.groupby('Email')['Total'].sum().mean()

    print(f"Total True Revenue (Shopify): ${total_shopify_rev:,.2f}")
    print(f"Total New Customers: {new_customers:,}")
    print(f"Average Customer LTV: ${ltv:,.2f}")

# 2. META
meta_files = [
    "Meta_Daily_MONFRERE-Ads-Fe-28-2023-Dec-31-2023 _v2.csv",
    "Meta_Daily_MONFRERE-Ads-Jan-1-2024-Dec-31-2024_v2.csv",
    "Meta_Daily_MONFRERE-Ads-Jan-1-2025-Dec-31-2025_v2.csv",
    "Meta_Daily_MONFRERE-Ads-Jan-1-2026-Mar-29-2026_v2.csv"
]
meta_dfs = [pd.read_csv(f, low_memory=False) for f in meta_files if os.path.exists(f)]

if meta_dfs:
    meta_df = pd.concat(meta_dfs, ignore_index=True)
    meta_df['Amount spent (USD)'] = pd.to_numeric(meta_df['Amount spent (USD)'], errors='coerce').fillna(0)
    meta_df['Purchases'] = pd.to_numeric(meta_df['Purchases'], errors='coerce').fillna(0)
    
    total_spend = meta_df['Amount spent (USD)'].sum()
    total_purchases = meta_df['Purchases'].sum()
    
    print(f"Total Meta Spend: ${total_spend:,.2f}")
    print(f"Meta Claimed Purchases: {total_purchases:,.0f}")
    
    if total_shopify_rev > 0:
        print(f"True Blended ROAS (Shopify Rev / Meta Spend): {(total_shopify_rev / total_spend):.2f}x")
    if new_customers > 0:
        print(f"True CAC (Meta Spend / New Shopify Customers): ${(total_spend / new_customers):,.2f}")

print("\n--- AWIN INSIGHTS ---")
awin_file = "AWIN transactions_103309_2024-01-01_2026-03-06.csv"
if os.path.exists(awin_file):
    awin_df = pd.read_csv(awin_file, low_memory=False)
    awin_df['is_new'] = awin_df['customer_acquisition'].astype(str).str.lower().str.contains('new').astype(int)
    awin_grouped = awin_df.groupby('site_name').agg(
        total_transactions=('id', 'count'),
        new_customers=('is_new', 'sum')
    ).reset_index()

    awin_grouped['NCAR'] = awin_grouped['new_customers'] / awin_grouped['total_transactions']
    planters = awin_grouped[awin_grouped['NCAR'] >= 0.20]
    harvesters = awin_grouped[awin_grouped['NCAR'] < 0.20]

    print(f"Total Active Affiliates: {len(awin_grouped[awin_grouped['total_transactions']>0])}")
    print(f"Planters (>=20% NCAR): {len(planters)}")
    print(f"Harvesters (<20% NCAR): {len(harvesters)}")
