import json

with open('dashboard/data/data.js', 'r', encoding='utf-8') as f:
    text = f.read()

json_str = text.split('window.AUDIT_DATA = ')[1].strip()
if json_str.endswith(';'):
    json_str = json_str[:-1]

data = json.loads(json_str)

def fix_dict(d):
    for k, v in d.items():
        if isinstance(v, str):
            try:
                # 'â”' is \xe2\x80\x9d (mojibake for quotes or parts of box chars)
                # 'â€”' is \xe2\x80\x94 (mojibake for em-dash)
                # 'Ã¢' is part of other utf-8 encoding errors
                # 'A ' or 'A' might be from '—' 
                
                # Check for telltale double-encoded bytes
                test_bytes = v.encode('cp1252')
                fixed = test_bytes.decode('utf-8')
                
                # If it successfully decodes, and is different, we replace it
                if fixed != v:
                    d[k] = fixed
            except:
                pass
        elif isinstance(v, dict):
            fix_dict(v)
        elif isinstance(v, list):
            for item in v:
                if isinstance(item, dict):
                    fix_dict(item)

for prog in data:
    if 'wireframes' in prog:
        fix_dict(prog['wireframes'])

new_json_str = json.dumps(data, indent=2, ensure_ascii=False)
new_text = 'window.AUDIT_DATA = ' + new_json_str + ';\n'

with open('dashboard/data/data.js', 'w', encoding='utf-8') as f:
    f.write(new_text)

print('Fixed mojibake in wireframes using JSON parsing.')
