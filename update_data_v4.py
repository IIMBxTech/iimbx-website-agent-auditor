import re

path = r'c:\Users\harsh\OneDrive\Desktop\Compare\dashboard\data\data.js'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Add v1_variant_4 to NAM
content = content.replace(
    'v1_variant_3: "[Hero: NAM] -> [Overview + Audience + Instructor] -> [Grid: Themes] -> [Accordion: Modules]",',
    'v1_variant_3: "[Hero: NAM] -> [Overview + Audience + Instructor] -> [Grid: Themes] -> [Accordion: Modules]",\n      v1_variant_4: "[Hero: NAM] -> [Stitch MCP v4] -> [Overview] -> [Compact UI]",'
)

# Add v1_variant_4 to PCAIM
content = content.replace(
    'v1_variant_3: "[Hero: PCAIM] -> [Overview + Audience + Instructor] -> [Grid: Outcomes] -> [Accordion: Modules]",',
    'v1_variant_3: "[Hero: PCAIM] -> [Overview + Audience + Instructor] -> [Grid: Outcomes] -> [Accordion: Modules]",\n      v1_variant_4: "[Hero: PCAIM] -> [Stitch MCP v4] -> [Overview] -> [Compact UI]",'
)

# Add v1_variant_4 to PCHM
content = content.replace(
    'v1_variant_3: "[Hero: PCHM] -> [Overview + Audience + Instructor] -> [Grid: Outcomes] -> [Accordion: Courses]",',
    'v1_variant_3: "[Hero: PCHM] -> [Overview + Audience + Instructor] -> [Grid: Outcomes] -> [Accordion: Courses]",\n      v1_variant_4: "[Hero: PCHM] -> [Stitch MCP v4] -> [Overview] -> [Compact UI]",'
)

# Add v1_variant_4 and v2_variant_4 to ELP
content = content.replace(
    'v1_variant_3: "[Hero: V1] -> [Overview] -> [Grid: Themes] -> [Cards: Profiles]",',
    'v1_variant_3: "[Hero: V1] -> [Overview] -> [Grid: Themes] -> [Cards: Profiles]",\n      v1_variant_4: "[Hero: ELP V1] -> [Stitch MCP v4] -> [Overview] -> [Compact UI]",'
)
content = content.replace(
    'v2_variant_3: "[Hero: V2 Video] -> [Overview] -> [Marquee: Logos] -> [Grid: Themes]",',
    'v2_variant_3: "[Hero: V2 Video] -> [Overview] -> [Marquee: Logos] -> [Grid: Themes]",\n      v2_variant_4: "[Hero: ELP V2] -> [Stitch MCP v4] -> [Interactive UI] -> [Compact]",'
)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)
