import pandas as pd
import re

file_path = '/Users/stephenroach/Documents/Monfrere/GA Ecommerce_purchases_Item_name032026.csv'
# Read lines to find the header row dynamically
header_row = 0
with open(file_path, 'r', encoding='utf-8') as f:
    for i, line in enumerate(f):
        if 'Item name' in line and 'Date' in line:
            header_row = i
            break

df = pd.read_csv(file_path, skiprows=header_row)

def parse_item(name):
    name = str(name)
    fabric = "Other"
    body = "Unknown"
    size = "Unknown"
    color = "Unknown"
    
    # 1. Size
    if "/" in name:
        parts = name.split("/")
        size = parts[-1].strip()
        name = parts[0].strip()
        
    # 2. Fabric
    fabrics = ["Butter Suede", "Parisian Luxe", "Stretch Denim"]
    for f in fabrics:
        if f.lower() in name.lower():
            fabric = f
            break
            
    # 3. Body (First word before the fabric, or just the first word)
    # usually "Maverick Butter Suede"
    if fabric != "Other":
        # Extract everything before the fabric as body
        idx = name.lower().find(fabric.lower())
        if idx > 0:
            body = name[:idx].strip()
        else:
            body = name.split(" ")[0].strip() # Fallback
            
        # Extract Color (everything after the fabric)
        # e.g., "Maverick Butter Suede Noir - Suede Noir"
        after_fabric = name[idx + len(fabric):].strip()
        # if there's a '-', take the part before the '-' as the primary color or the whole thing
        color_parts = after_fabric.split("-")
        color = color_parts[0].strip()
        if not color and len(color_parts) > 1:
             color = color_parts[1].strip()
    else:
        body = name.split(" ")[0].strip()
        
    return pd.Series([fabric, body, color, size])

df[['Fabric', 'Body', 'Color', 'Size']] = df['Item name'].apply(parse_item)

print(df[['Item name', 'Fabric', 'Body', 'Color', 'Size']].head(10))
print(df.groupby('Fabric').size())

