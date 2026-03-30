import streamlit as st
import pandas as pd
import plotly.express as px
import plotly.graph_objects as go
import numpy as np
import os
import datetime

st.set_page_config(layout="wide", page_title="Monfrère Tactical Audit Dashboard")

# Inline CSS to polish the Streamlit UI to match the reference look
st.markdown("""
<style>
    /* Hide main menu and footer */
    #MainMenu {visibility: hidden;}
    footer {visibility: hidden;}
    
    /* Style headers */
    h1, h2, h3 {
        color: #FFFFFF !important;
        font-weight: 600 !important;
    }
    
    /* Style metric cards */
    div[data-testid="metric-container"] {
        background-color: #1C2135;
        border: 1px solid #2A314A;
        padding: 5% 5% 5% 10%;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    /* Add a subtle line underneath header */
    hr {
        border-color: #2A314A !important;
    }
</style>
""", unsafe_allow_html=True)

st.title("Monfrère Tactical Audit (Shopify + Media Insights)")

# --- CACHE DATA LOADERS ---
@st.cache_data
def load_shopify_data():
    # Cache Bust 1
    files = ["Shopify_orders_export_1.csv", "Shopify_orders_export_2.csv"]
    dfs = []
    for f in files:
        if os.path.exists(f):
            dfs.append(pd.read_csv(f, low_memory=False))
            
    if not dfs:
        return pd.DataFrame(), pd.DataFrame()
        
    orders_df = pd.concat(dfs, ignore_index=True)
    orders_df['Total'] = pd.to_numeric(orders_df['Total'], errors='coerce').fillna(0)
    orders_df['Lineitem quantity'] = pd.to_numeric(orders_df['Lineitem quantity'], errors='coerce').fillna(0)
    orders_df['Lineitem price'] = pd.to_numeric(orders_df['Lineitem price'], errors='coerce').fillna(0)
    
    order_level = orders_df.drop_duplicates(subset=['Name']).copy()
    paid_orders = order_level[order_level['Financial Status'].isin(['paid', 'partially_refunded'])].copy()
    
    paid_orders['date'] = pd.to_datetime(paid_orders['Created at'], errors='coerce', utc=True)
    paid_orders = paid_orders.sort_values(by='date')
    
    first_purchase = paid_orders.groupby('Email')['date'].min().reset_index()
    first_purchase.rename(columns={'date': 'First Purchase Date'}, inplace=True)
    paid_orders = paid_orders.merge(first_purchase, on='Email', how='left')
    paid_orders['Is_New'] = paid_orders['date'] == paid_orders['First Purchase Date']
    paid_orders['Used_Discount'] = paid_orders['Discount Code'].notna() & (paid_orders['Discount Code'] != '')
    
    return paid_orders, orders_df

@st.cache_data
def load_abandoned_checkouts():
    f = "Shopify_Abandoned checkouts_export_032026.csv"
    if os.path.exists(f):
        df = pd.read_csv(f, low_memory=False)
        df['Total'] = pd.to_numeric(df.get('Total', 0), errors='coerce').fillna(0)
        return df
    return pd.DataFrame()

@st.cache_data
def load_meta_data():
    # Cache Bust 1
    files = [
        "Meta_Daily_MONFRERE-Ads-Fe-28-2023-Dec-31-2023 _v2.csv",
        "Meta_Daily_MONFRERE-Ads-Jan-1-2024-Dec-31-2024_v2.csv",
        "Meta_Daily_MONFRERE-Ads-Jan-1-2025-Dec-31-2025_v2.csv",
        "Meta_Daily_MONFRERE-Ads-Jan-1-2026-Mar-29-2026_v2.csv"
    ]
    dfs = []
    for f in files:
        if os.path.exists(f):
            dfs.append(pd.read_csv(f, low_memory=False))
            
    if not dfs:
        return pd.DataFrame()
        
    meta_df = pd.concat(dfs, ignore_index=True)
    meta_df['date'] = pd.to_datetime(meta_df['Reporting starts'], errors='coerce', utc=True)
    meta_df['Amount spent (USD)'] = pd.to_numeric(meta_df['Amount spent (USD)'], errors='coerce').fillna(0)
    meta_df['Purchases'] = pd.to_numeric(meta_df['Purchases'], errors='coerce').fillna(0)
    meta_df['Reported ROAS'] = pd.to_numeric(meta_df.get('Purchase ROAS (return on ad spend)', 0), errors='coerce').fillna(0)
    return meta_df.dropna(subset=['date'])

@st.cache_data
def load_awin_raw_data():
    if os.path.exists("AWIN transactions_103309_2024-01-01_2026-03-06.csv"):
        awin_df = pd.read_csv("AWIN transactions_103309_2024-01-01_2026-03-06.csv", low_memory=False)
        awin_df['date'] = pd.to_datetime(awin_df['date'], errors='coerce', utc=True)
        awin_df['site_name'] = awin_df['site_name'].fillna('Unknown')
        awin_df['is_new'] = awin_df['customer_acquisition'].astype(str).str.lower().str.contains('new').astype(int)
        return awin_df.dropna(subset=['date'])
    return pd.DataFrame()

@st.cache_data
def load_ga_merch_data():
    # Cache Bust 1
    ga_file = "GA Ecommerce_purchases_Item_name032026.csv"
    if not os.path.exists(ga_file):
        return pd.DataFrame()
        
    # Read GA CSV (Skipping Google export metadata lines)
    # Finding header row index dynamically to ensure robustness
    header_idx = 9
    try:
        df = pd.read_csv(ga_file, skiprows=header_idx)
    except:
        return pd.DataFrame()

    if 'Item name' not in df.columns:
        return pd.DataFrame()
        
    df['Items viewed'] = pd.to_numeric(df['Items viewed'].astype(str).str.replace(',', ''), errors='coerce').fillna(0)
    df['Items purchased'] = pd.to_numeric(df['Items purchased'].astype(str).str.replace(',', ''), errors='coerce').fillna(0)
    df['Item revenue'] = pd.to_numeric(df['Item revenue'].astype(str).str.replace('$', '').str.replace(',', ''), errors='coerce').fillna(0)
    
    # Parser Engine
    def extract_attributes(row):
        name = str(row['Item name'])
        fabric, body, color, size = "Other / Unknown", "Unknown", "Unknown", "Unknown"
        
        # 1. Extract Size (After slash)
        if "/" in name:
            parts = name.split("/")
            size = parts[-1].strip()
            name = parts[0].strip()
            
        # 2. Extract Fabric
        target_fabrics = [
            "Butter Suede", "Parisian Luxe", "Stretch Denim", "Indigo", 
            "Coated", "Velvet", "Leather", "Stretch"
        ]
        for t in target_fabrics:
            if t.lower() in name.lower():
                fabric = t
                break
                
        # 3. Extract Body & Color
        if fabric != "Other / Unknown":
            idx = name.lower().find(fabric.lower())
            if idx > 0:
                body = name[:idx].strip()
            else:
                body = name.split(" ")[0].strip()
                
            after_fabric = name[idx + len(fabric):].strip()
            color_parts = after_fabric.split("-")
            color = color_parts[0].strip() if color_parts[0].strip() else (color_parts[1].strip() if len(color_parts) > 1 else "Unknown")
            if not color: color = "Unknown"
        else:
            body = name.split(" ")[0].strip()
            
        return pd.Series([fabric, body, color, size])

    # Apply parser
    df[['Fabric', 'Body', 'Color', 'Size']] = df.apply(extract_attributes, axis=1)
    
    # Add a pseudo date to allow global date filtering if 'Date' exists
    if 'Date' in df.columns:
        # GA exports dates often formatted as YYYYMMDD string
        df['date'] = pd.to_datetime(df['Date'].astype(str), format='%Y%m%d', errors='coerce', utc=True)
    else:
        # Fallback date if not present
        df['date'] = pd.to_datetime('today', utc=True)
        
    return df

# Helper formatting
def style_plotly_fig(fig):
    fig.update_layout(
        plot_bgcolor="rgba(0,0,0,0)",
        paper_bgcolor="rgba(0,0,0,0)",
        font=dict(color="#E0E6ED"),
        margin=dict(l=20, r=20, t=40, b=20)
    )
    if 'xaxis' in fig.layout and hasattr(fig.layout.xaxis, 'showgrid'):
        fig.update_xaxes(showgrid=True, gridwidth=1, gridcolor='#2A314A', zerolinecolor='#2A314A')
    if 'yaxis' in fig.layout and hasattr(fig.layout.yaxis, 'showgrid'):
         fig.update_yaxes(showgrid=True, gridwidth=1, gridcolor='#2A314A', zerolinecolor='#2A314A')
    return fig

try:
    shopify_raw_df, order_lines_df = load_shopify_data()
    meta_raw_df = load_meta_data()
    awin_raw_df = load_awin_raw_data()
    abandoned_df = load_abandoned_checkouts()
    ga_merch_df = load_ga_merch_data()
    
    if shopify_raw_df.empty or meta_raw_df.empty:
        st.error("Could not load Core data files (Shopify or Meta v2). Please check file paths.")
        st.stop()
        
    # --- SIDEBAR FILTERS ---
    st.sidebar.header("Global Date Filter")
    
    min_date_val = meta_raw_df['date'].min().date()
    max_date_val = meta_raw_df['date'].max().date()
    
    date_preset = st.sidebar.selectbox("Date Preset", ["All Time", "Year to Date", "Last 30 Days", "Custom Range"])
    
    if date_preset == "All Time":
        start_date, end_date = min_date_val, max_date_val
    elif date_preset == "Year to Date":
        today = datetime.date.today()
        start_date = datetime.date(today.year, 1, 1)
        end_date = max_date_val
    elif date_preset == "Last 30 Days":
        start_date = max_date_val - datetime.timedelta(days=30)
        end_date = max_date_val
    else:
        date_range = st.sidebar.date_input("Custom Range", [min_date_val, max_date_val], min_value=min_date_val, max_value=max_date_val)
        if isinstance(date_range, tuple) and len(date_range) == 2:
            start_date, end_date = date_range
        elif isinstance(date_range, tuple) and len(date_range) == 1:
            start_date = end_date = date_range[0]
        else:
            start_date, end_date = min_date_val, max_date_val
            
    # Apply Global Date Filter
    shopify_filtered = shopify_raw_df[(shopify_raw_df['date'].dt.date >= start_date) & (shopify_raw_df['date'].dt.date <= end_date)]
    meta_filtered = meta_raw_df[(meta_raw_df['date'].dt.date >= start_date) & (meta_raw_df['date'].dt.date <= end_date)]
    awin_filtered = awin_raw_df[(awin_raw_df['date'].dt.date >= start_date) & (awin_raw_df['date'].dt.date <= end_date)] if not awin_raw_df.empty else pd.DataFrame()
    ga_filtered = ga_merch_df[(ga_merch_df['date'].dt.date >= start_date) & (ga_merch_df['date'].dt.date <= end_date)] if not ga_merch_df.empty else pd.DataFrame()

    st.sidebar.divider()
    
    st.sidebar.header("Shopify Context Filters")
    cohort_filter = st.sidebar.radio("Customer Cohort", ["All Customers", "New Customers Only", "Returning Customers Only"])
    if cohort_filter == "New Customers Only": shopify_filtered = shopify_filtered[shopify_filtered['Is_New'] == True]
    elif cohort_filter == "Returning Customers Only": shopify_filtered = shopify_filtered[shopify_filtered['Is_New'] == False]
        
    promo_filter = st.sidebar.radio("Promotion Type", ["All Transactions", "Promo Code Used", "Full Price Only"])
    if promo_filter == "Promo Code Used": shopify_filtered = shopify_filtered[shopify_filtered['Used_Discount'] == True]
    elif promo_filter == "Full Price Only": shopify_filtered = shopify_filtered[shopify_filtered['Used_Discount'] == False]

    st.sidebar.divider()
    st.sidebar.header("Meta Ads Filters")
    available_adsets = sorted(meta_filtered['Ad set name'].dropna().unique())
    selected_adsets = st.sidebar.multiselect("Filter by Ad Set", options=available_adsets, default=available_adsets)
    if selected_adsets: meta_filtered = meta_filtered[meta_filtered['Ad set name'].isin(selected_adsets)]
        
    available_ads = sorted(meta_filtered['Ad name'].dropna().unique())
    selected_ads = st.sidebar.multiselect("Filter by Creative (Ad Name)", options=available_ads, default=available_ads)
    if selected_ads: meta_filtered = meta_filtered[meta_filtered['Ad name'].isin(selected_ads)]
    
    # -----------------------------------------------
    # 1. CORE KPI AGGREGATION & DISPLAY
    # -----------------------------------------------
    total_store_rev = shopify_filtered['Total'].sum()
    new_customers = shopify_filtered['Is_New'].sum()
    returning_customers = len(shopify_filtered) - new_customers
    global_ltv = shopify_raw_df.groupby('Email')['Total'].sum().mean()
    abandoned_total = abandoned_df['Total'].sum() if not abandoned_df.empty else 0
    
    ad_df = meta_filtered.groupby(['Ad name', 'Ad set name']).agg({'Amount spent (USD)': 'sum', 'Purchases': 'sum', 'Reported ROAS': 'mean'}).reset_index()
    ad_df.rename(columns={'Amount spent (USD)': 'Spend', 'Ad name': 'Ad Name'}, inplace=True)
    ad_df = ad_df[ad_df['Spend'] > 0]
    total_meta_spend = ad_df['Spend'].sum()
    
    true_blended_roas = total_store_rev / total_meta_spend if total_meta_spend > 0 else 0
    true_cac = total_meta_spend / new_customers if new_customers > 0 else 0

    st.header("1. True Business Analytics (MER)")
    colS1, colS2, colS3, colS4, colS5 = st.columns(5)
    colS1.metric("Filtered Store Revenue", f"${total_store_rev:,.0f}")
    colS2.metric("Filtered True ROAS", f"{true_blended_roas:.2f}x")
    colS3.metric("True Acq. Cost (CAC)", f"${true_cac:,.2f}")
    colS4.metric("Lifelong LTV (Unfiltered)", f"${global_ltv:,.0f}")
    colS5.metric("Abandoned Checkout Leak", f"${abandoned_total:,.0f}")

    # -----------------------------------------------
    # 2. MERCHANDISING INTELLIGENCE (GA)
    # -----------------------------------------------
    st.divider()
    st.header("2. Merchandising Intelligence (Fabric & Body Analysis)")
    if not ga_filtered.empty:
        st.markdown("NLP-driven parsing of Google Analytics parameters to isolate conversion metrics by specific fabric and body styles.")
        
        # Aggregate stats by Fabric Group
        fabric_agg = ga_filtered.groupby('Fabric').agg(
            Views=('Items viewed', 'sum'),
            Purchases=('Items purchased', 'sum'),
            Revenue=('Item revenue', 'sum')
        ).reset_index()
        fabric_agg['Conversion_Rate_Pct'] = np.where(fabric_agg['Views'] > 0, (fabric_agg['Purchases'] / fabric_agg['Views']) * 100, 0)
        
        # Remove empty noise
        fabric_agg = fabric_agg[fabric_agg['Views'] > 0].sort_values('Revenue', ascending=False)

        colM1, colM2 = st.columns([1, 1])
        with colM1:
            # Sales Velocity (Revenue) by Fabric
            fig_fab_rev = px.bar(
                fabric_agg, x='Fabric', y='Revenue', color='Fabric',
                title='Primary Sales Demand by Fabric Group',
                text='Revenue', color_discrete_sequence=px.colors.qualitative.Pastel
            )
            fig_fab_rev.update_traces(texttemplate='$%{text:,.0f}', textposition='outside')
            fig_fab_rev = style_plotly_fig(fig_fab_rev)
            st.plotly_chart(fig_fab_rev, use_container_width=True)
            
        with colM2:
            # Conversion Rate Bubble / Bar
            fig_fab_cr = px.bar(
                fabric_agg, x='Fabric', y='Conversion_Rate_Pct', color='Fabric',
                title='Conversion Efficiency (Views to Purchases) %',
                text='Conversion_Rate_Pct', color_discrete_sequence=px.colors.qualitative.Pastel
            )
            fig_fab_cr.update_traces(texttemplate='%{text:.2f}%', textposition='outside')
            fig_fab_cr = style_plotly_fig(fig_fab_cr)
            st.plotly_chart(fig_fab_cr, use_container_width=True)
            
        # Sales Velocity by Body & Fabric Layout (Matrix)
        st.markdown("#### Item Revenue Matrix: Body vs Fabric")
        body_fab_agg = ga_filtered.groupby(['Body', 'Fabric']).agg({'Items purchased': 'sum', 'Item revenue': 'sum'}).reset_index()
        
        # Filter noise where 0 revenue
        body_fab_agg = body_fab_agg[body_fab_agg['Item revenue'] > 0]
        
        # Bar Chart split by Fabric
        if not body_fab_agg.empty:
            # Determine Top 20 Bodies by total revenue to keep the chart clean
            top_bodies = body_fab_agg.groupby('Body')['Item revenue'].sum().nlargest(20).index
            filtered_matrix = body_fab_agg[body_fab_agg['Body'].isin(top_bodies)]
            
            fig_matrix = px.bar(
                filtered_matrix.sort_values('Item revenue', ascending=True),
                x='Item revenue', y='Body', color='Fabric', orientation='h',
                title='Top 20 Silhouettes (Body) Revenue Broken Down by Fabric',
                color_discrete_sequence=px.colors.qualitative.Pastel,
                hover_data=['Items purchased']
            )
            fig_matrix = style_plotly_fig(fig_matrix)
            fig_matrix.update_layout(height=600)
            st.plotly_chart(fig_matrix, use_container_width=True)
    else:
        st.warning("Google Analytics Ecom Dataset not found or filters yielded no valid merchandising data.")


    # -----------------------------------------------
    # 3. SHOPIFY PRODUCT BASICS & TRAJECTORY
    # -----------------------------------------------
    st.divider()
    st.header("3. Store Pipeline (Shopify Financials)")
    col_chart1, col_chart2 = st.columns([1.5, 1])
    with col_chart1:
        shopify_time = shopify_filtered.groupby([shopify_filtered['date'].dt.to_period('W'), 'Is_New']).size().reset_index(name='Orders')
        shopify_time['Week'] = shopify_time['date'].dt.to_timestamp()
        shopify_time['Customer Type'] = np.where(shopify_time['Is_New'], 'New Customer', 'Returning Customer')
        if not shopify_time.empty:
            fig_time = px.area(
                shopify_time, x='Week', y='Orders', color='Customer Type', 
                title='Acquisition Trajectory: New vs. Returning Volume (Weekly)',
                color_discrete_map={'New Customer': '#4F8BF9', 'Returning Customer': '#00C853'}
            )
            fig_time = style_plotly_fig(fig_time)
            st.plotly_chart(fig_time, use_container_width=True)

    with col_chart2:
        discount_split = shopify_filtered.groupby('Used_Discount')['Total'].sum().reset_index()
        discount_split['Type'] = np.where(discount_split['Used_Discount'], 'Discount Code Used', 'Full Price')
        if not discount_split.empty and discount_split['Total'].sum() > 0:
            fig_pie = px.pie(
                discount_split, values='Total', names='Type', title='Revenue: Promo vs Full Margin',
                hole=0.4, color='Type', color_discrete_map={'Discount Code Used': '#FFB74D', 'Full Price': '#8A2BE2'}
            )
            fig_pie.update_layout(plot_bgcolor="rgba(0,0,0,0)", paper_bgcolor="rgba(0,0,0,0)", font=dict(color="#E0E6ED"))
            st.plotly_chart(fig_pie, use_container_width=True)

    valid_order_names = shopify_filtered['Name'].tolist()
    filtered_lines = order_lines_df[order_lines_df['Name'].isin(valid_order_names) & ~order_lines_df['Lineitem name'].str.contains('Protection', case=False, na=False)]
    if not filtered_lines.empty:
        prod_agg = filtered_lines.groupby('Lineitem sku').apply(lambda x: pd.Series({'Product Name': x['Lineitem name'].iloc[0], 'Gross Revenue': (x['Lineitem quantity'] * x['Lineitem price']).sum()})).reset_index().sort_values('Gross Revenue', ascending=False).head(10)
        if prod_agg['Gross Revenue'].sum() > 0:
            fig_prod = px.bar(
                prod_agg.sort_values('Gross Revenue', ascending=True),
                x='Gross Revenue', y='Product Name', orientation='h',
                title='Top 10 High-Level Grossing Products',
                color_discrete_sequence=['#4F8BF9'], text='Gross Revenue'
            )
            fig_prod.update_traces(texttemplate='$%{text:,.0f}', textposition='outside')
            fig_prod = style_plotly_fig(fig_prod)
            fig_prod.update_layout(margin=dict(l=250))
            st.plotly_chart(fig_prod, use_container_width=True)


    # -----------------------------------------------
    # 4. MEDIA ANALYTICS (META & AWIN)
    # -----------------------------------------------
    st.divider()
    st.header("4. Media Analytics (Meta Wasted Spend & Awin Leakage)")
    account_cpa_val = total_meta_spend / ad_df['Purchases'].sum() if not ad_df.empty and ad_df['Purchases'].sum() > 0 else 0
    
    colA, colB = st.columns([1, 2])
    with colA:
        failure_multiplier = st.slider("CPA Failure Multiplier Threshold", min_value=1.0, max_value=5.0, value=3.0, step=0.5)
        spend_threshold = account_cpa_val * failure_multiplier
        wasted_spend_df = ad_df[(ad_df['Spend'] > spend_threshold) & (ad_df['Purchases'] == 0)].copy()
        total_waste = wasted_spend_df['Spend'].sum()
        
        st.metric("Filtered Wasted Spend", f"${total_waste:,.0f}")
        st.caption(f"Flagging ads with **$0 revenue** and spend > **${spend_threshold:,.0f}**")
        
    with colB:
        if not wasted_spend_df.empty:
            top_wasted = wasted_spend_df.sort_values('Spend', ascending=False)
            fig_waste = px.bar(
                top_wasted.sort_values('Spend', ascending=True),
                x='Spend', y='Ad Name', orientation='h',
                title='Statistically Inefficient Ad Spend',
                color_discrete_sequence=['#FF4B4B']
            )
            fig_waste.update_layout(height=max(400, len(top_wasted) * 25))
            fig_waste = style_plotly_fig(fig_waste)
            st.plotly_chart(fig_waste, use_container_width=True)
        else:
            st.info("No ads meet the statistical failure threshold based on current filters.")

    # Awin Code Box
    if not awin_filtered.empty:
        awin_grouped = awin_filtered.groupby('site_name').agg(total_transactions=('id', 'count'), new_customers=('is_new', 'sum')).reset_index()
        active_aff = awin_grouped[awin_grouped['total_transactions'] > 0].copy()
        active_aff['NCAR_Percentage'] = (active_aff['new_customers'] / active_aff['total_transactions']) * 100
        active_aff['Partner_Type'] = np.where(active_aff['NCAR_Percentage'] < 50, 'Harvester (Coupon/Low Incr.)', 'Planter (Content/High Incr.)')
        
        if not active_aff.empty:
            st.markdown("### Affiliate Incrementality Chart")
            fig_aff = px.scatter(
                active_aff, x='total_transactions', y='NCAR_Percentage', 
                color='Partner_Type', hover_name='site_name', size='total_transactions',
                color_discrete_map={"Planter (Content/High Incr.)": "#00C853", "Harvester (Coupon/Low Incr.)": "#FF4B4B"}
            )
            fig_aff = style_plotly_fig(fig_aff)
            st.plotly_chart(fig_aff, use_container_width=True)

except Exception as e:
    st.error(f"Error loading dashboard: {e}")
