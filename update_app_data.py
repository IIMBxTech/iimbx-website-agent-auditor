import re
import json

app_path = r'c:\Users\harsh\OneDrive\Desktop\Compare\dashboard\js\app.js'
with open(app_path, 'r', encoding='utf-8') as f:
    app_content = f.read()

# Update friendly labels
new_labels = '''const friendlyLabels = {
      none: 'None',
      oldSite: 'Old Website',
      marketingHtml: 'Marketing HTML',
      v1Staging: 'V2 Staging (Original)',
      proposedV1: 'Proposed Layout v1',
      proposedV2: 'Proposed Layout v2',
      proposedV3: 'Proposed Layout v3',
      v1_variant_1: 'V1 Prototype 1 (Baseline)',
      v1_variant_2: 'V1 Prototype 2 (Dark Mode)',
      v1_variant_3: 'V1 Prototype 3 (Compact)',
      v2Staging: 'V2 Staging URL',
      v2_variant_1: 'V2 Prototype 1 (Baseline)',
      v2_variant_2: 'V2 Prototype 2 (Navy Custom)',
      v2_variant_3: 'V2 Prototype 3 (Compact)'
    };'''
app_content = re.sub(r'const friendlyLabels = \{[^}]+\};', new_labels, app_content)

# Update select options
options_template = """
        <option value="none" ${VAR === 'none' ? 'selected' : ''}>None</option>
        <option value="oldSite" ${VAR === 'oldSite' ? 'selected' : ''}>Old Site</option>
        <option value="marketingHtml" ${VAR === 'marketingHtml' ? 'selected' : ''}>Marketing HTML</option>
        <option value="v1_variant_1" ${VAR === 'v1_variant_1' ? 'selected' : ''}>V1 Prototype 1 (Baseline)</option>
        <option value="v1_variant_2" ${VAR === 'v1_variant_2' ? 'selected' : ''}>V1 Prototype 2 (Dark Mode)</option>
        <option value="v1_variant_3" ${VAR === 'v1_variant_3' ? 'selected' : ''}>V1 Prototype 3 (Compact)</option>
        <option value="v2Staging" ${VAR === 'v2Staging' ? 'selected' : ''}>V2 Staging</option>
        <option value="v2_variant_1" ${VAR === 'v2_variant_1' ? 'selected' : ''}>V2 Prototype 1 (Baseline)</option>
        <option value="v2_variant_2" ${VAR === 'v2_variant_2' ? 'selected' : ''}>V2 Prototype 2 (Navy Custom)</option>
        <option value="v2_variant_3" ${VAR === 'v2_variant_3' ? 'selected' : ''}>V2 Prototype 3 (Compact)</option>
"""
sel_left = options_template.replace('VAR', 'currentWfLeft')
sel_middle = options_template.replace('VAR', 'currentWfMiddle')
sel_right = options_template.replace('VAR', 'currentWfRight')

dropdowns = f"""
      <select id="sel-left" style="margin-right: 10px; padding: 4px; border-radius: 4px;">{sel_left}</select>
      <select id="sel-middle" style="margin-right: 10px; padding: 4px; border-radius: 4px;">{sel_middle}</select>
      <select id="sel-right" style="padding: 4px; border-radius: 4px;">{sel_right}</select>
"""
app_content = re.sub(r'wfSourceTabs\.innerHTML = `.*?<select id="sel-right".*?</select>\s*`;', 'wfSourceTabs.innerHTML = `' + dropdowns + '`;', app_content, flags=re.DOTALL)

with open(app_path, 'w', encoding='utf-8') as f:
    f.write(app_content)

# Update Data.js
data_path = r'c:\Users\harsh\OneDrive\Desktop\Compare\dashboard\data\data.js'
with open(data_path, 'r', encoding='utf-8') as f:
    data_content = f.read()

match = re.search(r'window\.AUDIT_DATA\s*=\s*(\[.*\]);?', data_content, flags=re.DOTALL)
if match:
    json_str = match.group(1)
    data = json.loads(json_str)

    for item in data:
        if item['id'] == 'elp':
            item['wireframes']['ascii']['v1_variant_1'] = """┌─── NAVBAR ──────────────────────────┐
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

            item['wireframes']['ascii']['v1_variant_2'] = """┌─── NAVBAR [DARK]────────────────────┐
│ IIMBx Logo | Links | Login          │
├─── HERO [DARK]──────────────────────┤
│ ELP Title | Next Cohort | CTA       │
├─── OVERVIEW [DARK]──────────────────┤
│ About the programme (8 months)      │
├─── THEMES (V1) [DARK]───────────────┤
│ Infinite scroll list                │
│  ⚠ MISSING: Faculty                 │
│  ⚠ MISSING: Testimonials            │
│  ⚠ MISSING: Fees                    │
├─── FOOTER [DARK]────────────────────┤
│ Contact | Links                     │
└─────────────────────────────────────┘"""

            item['wireframes']['ascii']['v1_variant_3'] = """┌─── NAVBAR ──────────────────────────┐
│ IIMBx Logo | Links | Login          │
├─── HERO ────────────────────────────┤
│ ELP Title | Next Cohort | CTA       │
├─── OVERVIEW ────────────────────────┤
│ About the programme (8 months)      │
├─── THEMES (V1 COMPACT) ─────────────┤
│ Compact Grid view                   │
│  ⚠ MISSING: Faculty                 │
│  ⚠ MISSING: Testimonials            │
│  ⚠ MISSING: Fees                    │
├─── FOOTER ──────────────────────────┤
│ Contact | Links                     │
└─────────────────────────────────────┘"""

            item['wireframes']['ascii']['v2_variant_1'] = """┌─── NAVBAR ──────────────────────────┐
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

            item['wireframes']['ascii']['v2_variant_2'] = """┌─── NAVBAR ──────────────────────────┐
│ IIMBx Logo | Links | Login          │
├─── HERO (V2 DARK) ──────────────────┤
│ Open for Aug 2026 | 11 Modules      │
├─── OVERVIEW ────────────────────────┤
│ About the programme (8 months)      │
├─── THEMES (V2 GRID DARK) ───────────┤
│ 3x2 Grid with Red Hover             │
├─── FACULTY ─────────────────────────┤
│ Prof Shainesh + 8 Faculty Grid      │
├─── WHO IT IS FOR ───────────────────┤
│ Split Navy/Paper cards              │
├─── FEES ────────────────────────────┤
│ ₹2,80,000+ Table                    │
├─── FINAL CTA ───────────────────────┤
│ Eight months... | Apply | Brochure  │
└─────────────────────────────────────┘
 ⚠ BEYOND BRAND COMPLIANCE 
 EXCEEDS 70/15/15 COLOR RULE FOR DARK 
 MODE IMPACT (NAVY DOMINATES PAPER)"""

            item['wireframes']['ascii']['v2_variant_3'] = """┌─── NAVBAR ──────────────────────────┐
│ IIMBx Logo | Links | Login          │
├─── HERO (V2 COMPACT) ───────────────┤
│ Open for Aug 2026 | 11 Modules      │
├─── OVERVIEW ────────────────────────┤
│ About the programme (8 months)      │
├─── THEMES (V2 COMPACT) ─────────────┤
│ 2x3 Compact Grid                    │
├─── FACULTY (COMPACT) ───────────────┤
│ Prof Shainesh + 2x4 Faculty Grid    │
├─── WHO IT IS FOR ───────────────────┤
│ Split Navy/Paper cards              │
├─── FEES ────────────────────────────┤
│ ₹2,80,000+ Table                    │
├─── FINAL CTA ───────────────────────┤
│ Eight months... | Apply | Brochure  │
└─────────────────────────────────────┘"""
            break

    new_content = 'window.AUDIT_DATA = ' + json.dumps(data, indent=2) + ';'
    with open(data_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
