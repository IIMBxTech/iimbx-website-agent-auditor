import re

path = r'c:\Users\harsh\OneDrive\Desktop\Compare\dashboard\js\app.js'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Update friendlyLabels
content = content.replace(
    "v1_variant_3: 'V1 Prototype 3 (Compact)',",
    "v1_variant_3: 'V1 Prototype 3 (Compact)',\n      v1_variant_4: 'V1 Prototype 4 (Stitch)',"
)
content = content.replace(
    "v2_variant_3: 'V2 Prototype 3 (Compact)'",
    "v2_variant_3: 'V2 Prototype 3 (Compact)',\n      v2_variant_4: 'V2 Prototype 4 (Stitch)'"
)

# Update dropdowns (there are 3 dropdowns, we need to add v1_variant_4 after v1_variant_3)
content = content.replace(
    '<option value="v1_variant_3" ${currentWfLeft === \'v1_variant_3\' ? \'selected\' : \'\'}>V1 Prototype 3 (Compact)</option>',
    '<option value="v1_variant_3" ${currentWfLeft === \'v1_variant_3\' ? \'selected\' : \'\'}>V1 Prototype 3 (Compact)</option>\n        <option value="v1_variant_4" ${currentWfLeft === \'v1_variant_4\' ? \'selected\' : \'\'}>V1 Prototype 4 (Stitch)</option>'
)
content = content.replace(
    '<option value="v1_variant_3" ${currentWfMiddle === \'v1_variant_3\' ? \'selected\' : \'\'}>V1 Prototype 3 (Compact)</option>',
    '<option value="v1_variant_3" ${currentWfMiddle === \'v1_variant_3\' ? \'selected\' : \'\'}>V1 Prototype 3 (Compact)</option>\n        <option value="v1_variant_4" ${currentWfMiddle === \'v1_variant_4\' ? \'selected\' : \'\'}>V1 Prototype 4 (Stitch)</option>'
)
content = content.replace(
    '<option value="v1_variant_3" ${currentWfRight === \'v1_variant_3\' ? \'selected\' : \'\'}>V1 Prototype 3 (Compact)</option>',
    '<option value="v1_variant_3" ${currentWfRight === \'v1_variant_3\' ? \'selected\' : \'\'}>V1 Prototype 3 (Compact)</option>\n        <option value="v1_variant_4" ${currentWfRight === \'v1_variant_4\' ? \'selected\' : \'\'}>V1 Prototype 4 (Stitch)</option>'
)

# And v2_variant_4 for ELP
content = content.replace(
    '<option value="v2_variant_3" ${currentWfLeft === \'v2_variant_3\' ? \'selected\' : \'\'}>V2 Prototype 3 (Compact)</option>',
    '<option value="v2_variant_3" ${currentWfLeft === \'v2_variant_3\' ? \'selected\' : \'\'}>V2 Prototype 3 (Compact)</option>\n        <option value="v2_variant_4" ${currentWfLeft === \'v2_variant_4\' ? \'selected\' : \'\'}>V2 Prototype 4 (Stitch)</option>'
)
content = content.replace(
    '<option value="v2_variant_3" ${currentWfMiddle === \'v2_variant_3\' ? \'selected\' : \'\'}>V2 Prototype 3 (Compact)</option>',
    '<option value="v2_variant_3" ${currentWfMiddle === \'v2_variant_3\' ? \'selected\' : \'\'}>V2 Prototype 3 (Compact)</option>\n        <option value="v2_variant_4" ${currentWfMiddle === \'v2_variant_4\' ? \'selected\' : \'\'}>V2 Prototype 4 (Stitch)</option>'
)
content = content.replace(
    '<option value="v2_variant_3" ${currentWfRight === \'v2_variant_3\' ? \'selected\' : \'\'}>V2 Prototype 3 (Compact)</option>',
    '<option value="v2_variant_3" ${currentWfRight === \'v2_variant_3\' ? \'selected\' : \'\'}>V2 Prototype 3 (Compact)</option>\n        <option value="v2_variant_4" ${currentWfRight === \'v2_variant_4\' ? \'selected\' : \'\'}>V2 Prototype 4 (Stitch)</option>'
)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)
