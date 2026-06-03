import json
import re

filepath = r'c:\Users\harsh\OneDrive\Desktop\Compare\dashboard\data\data.js'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

match = re.search(r'window\.AUDIT_DATA\s*=\s*(\[.*\]);?', content, flags=re.DOTALL)
if match:
    json_str = match.group(1)
    data = json.loads(json_str)

    # Update ELP
    for item in data:
        if item['id'] == 'elp':
            item['summary'] = 'Marketing HTML (V1) is present but missing Faculty and Testimonials. V2 Staging URL introduces new layout, 8-month duration, and full Faculty/Fees sections. The wireframes and prototypes below reflect both V1 and V2 states.'
            item['scores'] = {'brand': 100, 'content': 70, 'ux': 60}
            
            # Restore gaps based on V1 ELP_Landing.html
            gaps = item['contentGaps']
            for gap in gaps:
                gap['severity'] = 'ok'
                gap['verdict'] = 'present'
                if gap['section'] == 'Overview':
                    gap['marketingHtml'] = {'present': True, 'detail': '8 months (V1 discrepancy)'}
                    gap['verdict'] = 'discrepancy'
                    gap['severity'] = 'warning'
                elif gap['section'] == 'Faculty':
                    gap['marketingHtml'] = {'present': False, 'detail': 'Missing in V1'}
                    gap['verdict'] = 'missing'
                    gap['severity'] = 'critical'
                elif gap['section'] == 'Testimonials':
                    gap['marketingHtml'] = {'present': False, 'detail': 'Missing in V1'}
                    gap['verdict'] = 'missing'
                    gap['severity'] = 'critical'
                elif gap['section'] == 'Fees':
                    gap['marketingHtml'] = {'present': False, 'detail': 'Missing in V1'}
                    gap['verdict'] = 'missing'
                    gap['severity'] = 'critical'
                elif gap['section'] == 'FAQs':
                    gap['marketingHtml'] = {'present': False, 'detail': 'Missing in V1'}
                    gap['verdict'] = 'missing'
                    gap['severity'] = 'high'
                else:
                    gap['marketingHtml'] = {'present': True, 'detail': 'Present in V1'}
                
                if 'explanation' in gap:
                    del gap['explanation']
                    
            item['wireframes']['ascii']['marketingHtml'] = """┌─── NAVBAR ──────────────────────────┐
│ IIMBx Logo | Links | Login          │
├─── HERO ────────────────────────────┤
│ ELP Title | Next Cohort | CTA       │
├─── OVERVIEW ────────────────────────┤
│ About the programme (8 months)      │
├─── THEMES (V1) ─────────────────────┤
│ Infinite scroll list                │
│                                     │
│  ⚠ MISSING: Faculty                 │
│  ⚠ MISSING: Testimonials            │
│  ⚠ MISSING: Fees                    │
│                                     │
├─── FOOTER ──────────────────────────┤
│ Contact | Links                     │
└─────────────────────────────────────┘"""

            item['wireframes']['ascii']['v2Staging'] = """┌─── NAVBAR ──────────────────────────┐
│ IIMBx Logo | Links | Login          │
├─── HERO (V2) ───────────────────────┤
│ Open for Aug 2026 | 11 Modules      │
├─── OVERVIEW ────────────────────────┤
│ About the programme (8 months)      │
├─── THEMES (V2 GRID) ────────────────┤
│ 3x2 Grid with Red Hover             │
├─── FACULTY ─────────────────────────┤
│ Prof Shainesh + 8 Faculty Grid      │
├─── WHO IT IS FOR ───────────────────┤
│ Split Navy/Paper cards              │
├─── FEES ────────────────────────────┤
│ ₹2,80,000+ Table                    │
├─── FINAL CTA ───────────────────────┤
│ Eight months... | Apply | Brochure  │
└─────────────────────────────────────┘"""
            break

    # Write back
    new_content = 'window.AUDIT_DATA = ' + json.dumps(data, indent=2) + ';'
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
