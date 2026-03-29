import pandas as pd

df1 = pd.read_csv('/Users/stephenroach/Documents/Monfrere/Shopify_orders_export_1.csv', low_memory=False)
df2 = pd.read_csv('/Users/stephenroach/Documents/Monfrere/Shopify_orders_export_2.csv', low_memory=False)
df = pd.concat([df1, df2], ignore_index=True)

print("Top 10 Lineitem Names (unique):")
print(df['Lineitem name'].value_counts().head(10))

print("\nSample of Tags:")
print(df['Tags'].dropna().unique()[:10])
