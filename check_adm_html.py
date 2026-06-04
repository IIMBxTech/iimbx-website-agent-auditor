import json
import re

path = r'C:\Users\harsh\OneDrive\Desktop\Compare\dashboard\data\data.js'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Just print the first 2000 chars of data.js which contains ADM to check if html is there
print(content[:2000])
