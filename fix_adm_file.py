import re

path = r'c:\Users\harsh\OneDrive\Desktop\Compare\dashboard\data\data.js'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('file: "adm_old_site_reference_agent_gen.html"', 'file: "Not provided"')

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)
