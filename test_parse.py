import pandas as pd
import numpy as np
import warnings
warnings.filterwarnings('ignore')

orders1 = pd.read_csv('/Users/stephenroach/Documents/Monfrere/Shopify_orders_export_1.csv', low_memory=False)
orders2 = pd.read_csv('/Users/stephenroach/Documents/Monfrere/Shopify_orders_export_2.csv', low_memory=False)
orders = pd.concat([orders1, orders2], ignore_index=True)

print("Columns:", orders.columns[:15].tolist())

orders['Total'] = pd.to_numeric(orders['Total'], errors='coerce')

# Get unique orders
order_level = orders.drop_duplicates(subset=['Name']).copy()
paid_orders = order_level[order_level['Financial Status'].isin(['paid', 'partially_refunded'])].copy()

total_rev = paid_orders['Total'].sum()
print(f"Total Shopify Revenue: ${total_rev:,.2f}")
print(f"Total Paid Orders: {len(paid_orders)}")

# New vs Returning
paid_orders['Created at'] = pd.to_datetime(paid_orders['Created at'], errors='coerce', utc=True)
paid_orders = paid_orders.sort_values(by='Created at')

first_purchase = paid_orders.groupby('Email')['Created at'].min().reset_index()
first_purchase.rename(columns={'Created at': 'First Purchase Date'}, inplace=True)

paid_orders = paid_orders.merge(first_purchase, on='Email', how='left')
paid_orders['Is_New'] = paid_orders['Created at'] == paid_orders['First Purchase Date']

print("New Customers:", paid_orders['Is_New'].sum())
print("Returning Orders:", (~paid_orders['Is_New']).sum())

# LTV
ltv = paid_orders.groupby('Email')['Total'].sum().mean()
print(f"Average LTV: ${ltv:,.2f}")

product_agg = orders.groupby('Lineitem name').agg(
    Qty=('Lineitem quantity', 'sum'),
).sort_values('Qty', ascending=False)
print("Top Product:\n", product_agg.head(2))

abandoned = pd.read_csv('/Users/stephenroach/Documents/Monfrere/Shopify_Abandoned checkouts_export_032026.csv', low_memory=False)
if 'Total' in abandoned.columns:
    abandoned['Total'] = pd.to_numeric(abandoned['Total'], errors='coerce')
    print(f"Abandoned Total: ${abandoned['Total'].sum():,.2f}")

