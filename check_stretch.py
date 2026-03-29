import pandas as pd

file_path = '/Users/stephenroach/Documents/Monfrere/GA Ecommerce_purchases_Item_name032026.csv'
df = pd.read_csv(file_path, skiprows=9)

print("Rows with 'stretch':")
stretch = df[df['Item name'].str.contains('stretch', case=False, na=False)]
print(len(stretch))
if not stretch.empty:
    print(stretch['Item name'].head(5))

print("\nRows with 'indigo':")
indigo = df[df['Item name'].str.contains('indigo', case=False, na=False)]
print(len(indigo))
if not indigo.empty:
    print(indigo['Item name'].head(5))

print("\nTotal items in dataset:", len(df))
print("\nTop 20 items overall:")
print(df['Item name'].value_counts().head(20))
