import re
path = r'C:\Users\harsh\OneDrive\Desktop\Compare\dashboard\data\data.js'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

match = re.search(r'id:\s*[\'"]elp[\'"][\s\S]+?wireframes:\s*\{[\s\S]+?html:\s*\{[^\}]*\}', content)
if match:
    print(match.group(0))
