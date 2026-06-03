import re

path = r'c:\Users\harsh\OneDrive\Desktop\Compare\dashboard\data\data.js'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# For each program, we need to inject v1_variant_4 into wireframes.ascii
# Let's find "proposed: .*" and insert v1_variant_4 after it.
def insert_after_proposed(match):
    original = match.group(0)
    # determine which prog by context? Actually, we can just blindly add v1_variant_4 to all
    # wait, ELP has proposedV1, proposedV2, proposedV3.
    return original + ',\n        v1_variant_4: "[Hero: Stitch MCP v4] -> [Overview] -> [Compact UI]"'

# For NAM, PCAIM, PCHM, ADM they have 'proposed: "..."'
content = re.sub(r'proposed: "[^"]+"', insert_after_proposed, content)

# For ELP, it has proposedV1, proposedV2, proposedV3
def insert_after_proposedV3(match):
    original = match.group(0)
    return original + ',\n        v1_variant_4: "[Hero: ELP V1] -> [Stitch MCP v4]",\n        v2_variant_4: "[Hero: ELP V2] -> [Stitch MCP v4]"'

content = re.sub(r'proposedV3: "[^"]+"', insert_after_proposedV3, content)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)
