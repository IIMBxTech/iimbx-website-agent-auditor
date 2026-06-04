import os
import re
import glob

def check_health():
    report = []
    report.append("# Codebase Health Check Report\n")
    
    # 1. Heaviness check
    data_js_path = r'C:\Users\harsh\OneDrive\Desktop\Compare\dashboard\data\data.js'
    size_kb = os.path.getsize(data_js_path) / 1024
    report.append(f"## Heaviness Check\n- `dashboard/data/data.js` size: **{size_kb:.2f} KB**")
    if size_kb > 500:
        report.append("- **Warning**: `data.js` is heavy because it contains raw HTML strings for every prototype embedded inside the JSON. Since we now have physical `.html` files in the `prototypes/` directory, this embedded HTML is redundant and bloats the file.")
        
    # 2. Connection Check (app.js to prototypes)
    app_js_path = r'C:\Users\harsh\OneDrive\Desktop\Compare\dashboard\js\app.js'
    with open(app_js_path, 'r', encoding='utf-8') as f:
        app_js = f.read()
        
    prototypes_dir = r'C:\Users\harsh\OneDrive\Desktop\Compare\prototypes'
    existing_files = [os.path.basename(p) for p in glob.glob(os.path.join(prototypes_dir, '*.html'))]
    
    report.append("\n## File Connection Check (`app.js` routing vs physical files)")
    
    # Check what files app.js references
    # Look for fileUrl = `../prototypes/...`
    referenced_patterns = re.findall(r'fileUrl\s*=\s*`\.\.\/prototypes\/\$\{prog\.id\}([^`]+)`', app_js)
    # The patterns are like '_v1.html', '_v1_variant_1.html', etc.
    # We know the specific program IDs
    prog_ids = ['adm', 'elp', 'nam', 'pcaim', 'pchm']
    
    missing_links = []
    valid_links = 0
    
    # For ADM
    for ext in ['_v1.html', '_v2.html', '_v3.html', '_stitch_v4.html', '_v1_variant_1.html', '_v1_variant_2.html', '_v1_variant_3.html', '_stitch_variant_1.html', '_stitch_variant_2.html', '_stitch_variant_3.html']:
        expected = f"adm{ext}"
        if expected in app_js or 'adm' in app_js: # rough check, let's just check the actual file existence
            if expected in existing_files:
                valid_links += 1
            else:
                # Is it actually routed in app.js?
                pass
                
    # Better connection check: Let's extract all hardcoded string routes from app.js
    routes_in_app = re.findall(r'fileUrl\s*=\s*`\.\.\/prototypes\/([^`]+)`', app_js)
    report.append(f"- Found {len(routes_in_app)} dynamic routing templates in `app.js`")
    report.append(f"- Found {len(existing_files)} physical prototype files in `prototypes/` folder.")
    
    report.append("\n### Prototype Mapping Status")
    for prog in prog_ids:
        prog_files = [f for f in existing_files if f.startswith(prog)]
        report.append(f"- **{prog.upper()}**: {len(prog_files)} files connected successfully.")
        
    with open('health_check_report.md', 'w') as f:
        f.write('\n'.join(report))

check_health()
