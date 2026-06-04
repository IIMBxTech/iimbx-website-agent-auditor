import re
path = r'C:\Users\harsh\OneDrive\Desktop\Compare\dashboard\data\data.js'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

match = re.search(r'\{\s*"id":\s*"pchm"[\s\S]+?(?=\{[\s\S]*"id":|$)', content)
if match:
    print('PCHM HAS WIREFRAMES?', 'wireframes' in match.group(0))
else:
    print('PCHM block not found')
