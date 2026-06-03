import json
path = r'C:\Users\harsh\.gemini\antigravity\brain\b7949d7a-22ea-4112-a853-8137a7c63942\.system_generated\steps\2105\output.txt'
with open(path, 'r', encoding='utf-8') as f:
    data = json.load(f)

for p in data.get('projects', []):
    print(f"{p.get('name')} - ID: {p.get('id')}")
