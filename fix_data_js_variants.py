import re

path = r'C:\Users\harsh\OneDrive\Desktop\Compare\dashboard\data\data.js'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Add placeholder strings to `ascii` objects in data.js
# For ADM
adm_add = """
        v1_variant_4: "[Hero: Stitch MCP v4] -> [Overview] -> [Compact UI]",
        stitch_variant_1: "[Hero: Stitch] -> [Overview] -> [Compact UI]",
        stitch_variant_2: "[Hero: Stitch Dark] -> [Overview] -> [Compact UI]",
        stitch_variant_3: "[Hero: Stitch Alternate] -> [Overview] -> [Compact UI]"
"""
content = re.sub(r'v1_variant_4:\s*"\[Hero: Stitch MCP v4\] -> \[Overview\] -> \[Compact UI\]"', adm_add.strip(), content, count=1)

# For ELP
elp_add = """
        v1_variant_4: "[Hero: Stitch MCP v4] -> [Overview] -> [Compact UI]",
        v2_variant_1: "[Hero: Stitch Baseline] -> [Overview] -> [Compact UI]",
        v2_variant_2: "[Hero: Stitch Navy] -> [Overview] -> [Compact UI]",
        v2_variant_3: "[Hero: Stitch Compact] -> [Overview] -> [Compact UI]",
        v2_variant_4: "[Hero: Stitch MCP v4] -> [Overview] -> [Compact UI]"
"""
# Find ELP block and add
def add_to_elp(match):
    return match.group(0).replace('v1_variant_4: "[Hero: Stitch MCP v4] -> [Overview] -> [Compact UI]"', elp_add.strip())

content = re.sub(r'id:\s*[\'"]elp[\'"][\s\S]+?v1_variant_4:\s*"\[Hero: Stitch MCP v4\] -> \[Overview\] -> \[Compact UI\]"', add_to_elp, content, count=1)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated data.js with placeholders for all variants.")
