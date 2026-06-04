import re
data_js_path = r"C:\Users\harsh\OneDrive\Desktop\Compare\dashboard\data\data.js"
with open(data_js_path, 'r', encoding='utf-8') as f:
    data_content = f.read()

# Fix the trailing comma issue safely
data_content = re.sub(r'",\s*}', '"\n      }', data_content)

with open(data_js_path, 'w', encoding='utf-8') as f:
    f.write(data_content)
