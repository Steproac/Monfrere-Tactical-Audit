Here is the complete, detailed Markdown execution playbook for the Phase 1 Tactical Audit. You can copy this directly into your local Notion, Obsidian, or project documentation folder.

It covers environment setup, data ingestion, the three core analyses (Creative Quadrants, Wasted Spend, Affiliate Quality), and exporting the visualizations via an interactive Streamlit dashboard for the client deck.

# ---

**Triacaf Execution Playbook: Monfrère Tactical Audit (Phase 1)**

**Project Goal:** Deliver immediate, tangible ROI by identifying creative winners, eliminating statistically significant ad waste, and scoring affiliate quality.

**Tech Stack:** Python, Pandas, Plotly, Streamlit (Local Environment)

**Estimated Execution Time:** 10–15 Hours

## ---

**1. Environment Setup & Prerequisites**

Before handling the client CSV exports, ensure your local Python environment (VS Code, Jupyter, or Colab) has the required data science and visualization libraries installed.

### **Installation**

Run the following in your terminal or notebook environment:

```bash
pip install pandas numpy plotly streamlit
```

### **Required Data Extracts**

Request the following raw data from the Monfrère team:

1. **Meta Ads Export (Deep Funnel):** Ad Name, Ad Set Name, Spend, Purchases, Purchase ROAS.  
2. **Awin Transactions Export:** Raw transaction-level data including Publisher/Site Name, Sale Amount, and Customer Acquisition (New vs Returning).
3. **Shopify/GA (Optional but Recommended):** To establish a blended Average Order Value (AOV) if Meta drops conversion value tracking.

## ---

**2. Core Analysis Logic & Data Processing**

Real-world ad exports contain null values and missing ROAS calculations. This logic cleans the data for modeling. We will use this logic to build our interactive dashboard.

### **Meta Ads Processing (ROAS & Wasted Spend)**
Missing Meta revenue is a common issue. We solve this by taking the known Purchases and multiplying by a blended AOV from Shopify/Awin, or using Reported ROAS if available.

```python
# 1. Clean Meta data
meta_df['Amount spent (USD)'] = pd.to_numeric(meta_df['Amount spent (USD)'], errors='coerce').fillna(0)
meta_df['Purchases'] = pd.to_numeric(meta_df['Purchases'], errors='coerce').fillna(0)
meta_df['Reported ROAS'] = pd.to_numeric(meta_df['Purchase ROAS (return on ad spend)'], errors='coerce').fillna(0)

# 2. Estimate Revenue and calculate True ROAS
ESTIMATED_AOV = 300.0
ad_df['Revenue'] = np.where(ad_df['Reported ROAS'] > 0, ad_df['Spend'] * ad_df['Reported ROAS'], ad_df['Purchases'] * ESTIMATED_AOV)
ad_df['ROAS'] = np.where(ad_df['Spend'] > 0, ad_df['Revenue'] / ad_df['Spend'], 0)

# 3. Wasted Spend "Kill Switch" Calculation
account_cpa = total_spend / total_purchases
failure_multiplier = 3  # Target CPA Threshold
spend_threshold = account_cpa * failure_multiplier
wasted_spend_df = ad_df[(ad_df['Spend'] > spend_threshold) & (ad_df['Purchases'] == 0)]
```

### **Awin Affiliate Incrementality (NCAR)**
Instead of relying on top-level performance reports, we parse the raw transaction rows to find the exact New Customer Acquisition Rate (NCAR).

```python
# 1. Flag new customers from raw transactions
awin_df['is_new'] = awin_df['customer_acquisition'].astype(str).str.lower().str.contains('new').astype(int)

# 2. Group by Publisher and calculate NCAR
awin_grouped = awin_df.groupby('site_name').agg(
    total_transactions=('id', 'count'),
    new_customers=('is_new', 'sum')
).reset_index()

active_aff['NCAR_Percentage'] = (active_aff['new_customers'] / active_aff['total_transactions']) * 100

# 3. Classify Planters vs Harvesters
active_aff['Partner_Type'] = np.where(active_aff['NCAR_Percentage'] < 20, 'Harvester (Coupon/Low Incr.)', 'Planter (Content/High Incr.)')
```

## ---

**3. Visualization Upgrade: Interactive Streamlit Dashboard**

Static charts are standard, but a "Dark Mode" interactive web dashboard creates a premium agency experience. We package the analyses above into a `dashboard.py` file using Streamlit.

### **Key Dashboard Features to Implement:**
1. **Interactive Sidebar Filters:** Allow filtering Meta data by `Ad Set Name` and Awin data by global `Date Range` and `Partner Type`.
2. **Creative Quadrant Matrix (Plotly Scatter):** Map `Spend` (X) vs `ROAS` (Y). Bubble size represents spend. Crosshairs at the median metrics divide the chart into Winners, Hidden Gems, Losers, and Money Pits.
3. **Statistically Inefficient Spend (Plotly Bar):** An interactive horizontal bar chart displaying exactly which ad names are burning budget according to the Kill Switch logic.
4. **Affiliate Landscape (Plotly Bubble):** Map Affiliate `Volume` vs `NCAR %` to visually separate Planters (healthy) from Harvesters (toxic).

### **Execution:**
Run the dashboard locally to present live to the client, or deploy it via Streamlit Community Cloud:
```bash
streamlit run dashboard.py
```

## ---

**4. The Client Presentation Hook**

To maintain a polished, professional aesthetic for the slide deck, take screenshots from the live dashboard, but keep the dashboard open during the call.

**The Golden Hook for Phase 2 Retention:** 
Use the output from the Wasted Spend module (the exact dollar amount of "Kill Switch" waste identified) as the hook. 

> *"Just in this initial tactical pass, we mathematically isolated $X that was burned on inefficient creative. For the Phase 2 monthly retainer, imagine how much more budget we will recover by plugging this exact Python script directly into your Meta API for real-time daily automated kill-switches."*