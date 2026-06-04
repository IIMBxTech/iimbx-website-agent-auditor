import re

path = r'C:\Users\harsh\OneDrive\Desktop\Compare\dashboard\data\data.js'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

for prog in ['nam', 'pcaim', 'pchm']:
    # Simple search for prog id
    match = re.search(r'\{\s*"id":\s*"' + prog + r'"[\s\S]+?(?=\{[\s\S]*"id":|$)', content)
    if match:
        has_wf = '"wireframes":' in match.group(0) or 'wireframes:' in match.group(0)
        print(f'{prog} has wireframes block: {has_wf}')
    else:
        print(f'{prog} not found')
