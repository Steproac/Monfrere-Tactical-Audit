import pandas as pd

file_path = '/Users/stephenroach/Documents/Monfrere/GA Ecommerce_purchases_Item_name032026.csv'
df = pd.read_csv(file_path, skiprows=9)

stretch_items = df[df['Item name'].str.contains('stretch', case=False, na=False)]
print("Total rows with 'stretch':", len(stretch_items))
if len(stretch_items) > 0:
    print("Sample of 'stretch' items:")
    print(stretch_items['Item name'].head(10))

indigo_items = df[df['Item name'].str.contains('indigo', case=False, na=False)]
print("\nTotal rows with 'indigo':", len(indigo_items))
if len(indigo_items) > 0:
    print("Sample of 'indigo' items:")
    print(indigo_items['Item name'].head(10))
