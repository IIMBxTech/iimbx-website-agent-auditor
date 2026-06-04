import re

path = r'C:\Users\harsh\OneDrive\Desktop\Compare\dashboard\data\data.js'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

ids = re.findall(r'"id"\s*:\s*"([^"]+)"|id\s*:\s*"([^"]+)"', content)
print([i[0] or i[1] for i in ids])
