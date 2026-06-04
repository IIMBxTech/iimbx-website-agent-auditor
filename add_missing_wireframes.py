import re
import json

path = r'C:\Users\harsh\OneDrive\Desktop\Compare\dashboard\data\data.js'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# We want to find objects that don't have a wireframes block and add one.
# An object starts with: { "id": "..." (or id: "...") and ends with actionItems array.
# Let's find each program object block.

def add_wireframes_block(match):
    block = match.group(0)
    if '"wireframes":' in block or 'wireframes:' in block:
        return block
    
    wf_block = """
    "wireframes": {
      "ascii": {
        "oldSite": "Not Applicable",
        "marketingHtml": "Not Applicable",
        "v1Staging": "Not Applicable",
        "proposedV1": "[Hero] -> [Overview] -> [Grid] -> [Curriculum]",
        "proposedV2": "[Hero] -> [Overview] -> [Outcomes] -> [Curriculum]",
        "proposedV3": "[Hero] -> [Overview] -> [Compact UI]",
        "v1_variant_4": "[Hero: Stitch MCP v4] -> [Overview] -> [Compact UI]"
      },
      "html": {},
      "suggestions": [
        {
          "title": "Prototype Generation",
          "description": "Created prototype variants based on existing data",
          "effort": "Low",
          "impact": "High",
          "devNotes": "Agent generated reference and variants"
        }
      ]
    },
"""
    # Insert it before actionItems
    if '"actionItems":' in block:
        return block.replace('"actionItems":', wf_block + '    "actionItems":')
    elif 'actionItems:' in block:
        return block.replace('actionItems:', wf_block + '    actionItems:')
    else:
        # If no actionItems, just append before the closing brace of the object?
        # That's risky if we don't know the exact boundary.
        return block # fallback

# Find all blocks: from "id": "xxx" up to the next "id": "xxx" or end of array
# Actually, since we know it's just NAM and PCHM that are missing it, we can be very specific.

programs = ['nam', 'pcaim', 'pchm']

for prog in programs:
    pattern = r'(\{\s*"id":\s*"' + prog + r'"[\s\S]+?(?="actionItems"|actionItems))("actionItems"|actionItems)'
    
    def replacer(m):
        if '"wireframes":' in m.group(1) or 'wireframes:' in m.group(1):
            return m.group(0)
        
        wf_block = """
    "wireframes": {
      "ascii": {
        "oldSite": "Not Applicable",
        "marketingHtml": "Not Applicable",
        "v1Staging": "Not Applicable",
        "proposedV1": "[Hero] -> [Overview] -> [Grid] -> [Curriculum]",
        "proposedV2": "[Hero] -> [Overview] -> [Outcomes] -> [Curriculum]",
        "proposedV3": "[Hero] -> [Overview] -> [Compact UI]",
        "v1_variant_4": "[Hero: Stitch MCP v4] -> [Overview] -> [Compact UI]"
      },
      "html": {},
      "suggestions": [
        {
          "title": "Prototype Generation",
          "description": "Created prototype variants based on existing data",
          "effort": "Low",
          "impact": "High",
          "devNotes": "Agent generated reference and variants"
        }
      ]
    },
"""
        return m.group(1) + wf_block + m.group(2)
        
    content = re.sub(pattern, replacer, content)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Added missing wireframes block to NAM and PCHM.")
