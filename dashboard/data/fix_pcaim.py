import re

with open('dashboard/data/data.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Fix PCAIM marketingHtml
pcaim_index = text.find('"id": "pcaim"')
if pcaim_index != -1:
    ascii_index = text.find('"ascii": {', pcaim_index)
    if ascii_index != -1:
        # Fix marketingHtml
        marketing_html_str = '"marketingHtml": "\\n\\n\\n     ⚠ NO MARKETING HTML PROVIDED\\n\\n\\n"'
        if marketing_html_str in text:
            text = text.replace(marketing_html_str, '"marketingHtml": "Not Applicable — no marketing HTML provided"')

        # Fix v1_variant_4 which is wrong
        v1_var4_str = '"v1_variant_4": "[Hero: Stitch MCP v4] -> [Overview] -> [Compact UI]"'
        if v1_var4_str in text:
            text = text.replace(v1_var4_str, '"v1_variant_4": "Not Applicable — no variant 4 generated"')

with open('dashboard/data/data.js', 'w', encoding='utf-8') as f:
    f.write(text)
print("Fixed PCAIM in data.js")
