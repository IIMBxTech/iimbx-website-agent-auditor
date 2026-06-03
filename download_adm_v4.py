import json
import urllib.request

path = r'C:\Users\harsh\.gemini\antigravity\brain\b7949d7a-22ea-4112-a853-8137a7c63942\.system_generated\steps\2120\output.txt'
with open(path, 'r', encoding='utf-8') as f:
    data = json.load(f)

url = ""
for comp in data.get('outputComponents', []):
    if 'design' in comp:
        screens = comp['design'].get('screens', [])
        if screens and 'htmlCode' in screens[0]:
            url = screens[0]['htmlCode'].get('downloadUrl', '')

if not url:
    print("Could not find download URL")
else:
    print(f"Downloading from {url}")
    out_path = r'C:\Users\harsh\OneDrive\Desktop\Compare\prototypes\adm_stitch_v4.html'
    urllib.request.urlretrieve(url, out_path)
    print(f"Saved to {out_path}")
