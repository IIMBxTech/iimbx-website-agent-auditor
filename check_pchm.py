import re

path = r'C:\Users\harsh\OneDrive\Desktop\Compare\dashboard\data\data.js'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Extract pchm block
match = re.search(r'\{\s*"id":\s*"pchm"[\s\S]+?(?=\{[\s\S]*"id":|$)', content)
if match:
    print(match.group(0)[:1000]) # print first 1000 chars of pchm block
    print("\n--- wireframes block ---")
    wf_match = re.search(r'"wireframes":\s*\{[\s\S]*\}', match.group(0))
    if wf_match:
        print(wf_match.group(0))
else:
    print("PCHM not found")
