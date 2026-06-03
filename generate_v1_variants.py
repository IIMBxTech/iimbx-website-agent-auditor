import os
import shutil

src_v1 = r'c:\Users\harsh\OneDrive\Desktop\Compare\ELP_Landing.html'
prototypes_dir = r'c:\Users\harsh\OneDrive\Desktop\Compare\prototypes'

v1_files = [
    os.path.join(prototypes_dir, 'elp_v1_variant_1.html'),
    os.path.join(prototypes_dir, 'elp_v1_variant_2.html'),
    os.path.join(prototypes_dir, 'elp_v1_variant_3.html')
]

v2_files = [
    os.path.join(prototypes_dir, 'elp_v2_variant_1.html'),
    os.path.join(prototypes_dir, 'elp_v2_variant_2.html'),
    os.path.join(prototypes_dir, 'elp_v2_variant_3.html')
]

# Create V1 Variants
for f in v1_files:
    shutil.copy2(src_v1, f)

# Apply V1 Variant 2 Dark Mode
with open(v1_files[1], 'r', encoding='utf-8') as f:
    c = f.read()
c = c.replace('--canvas: #F4EFE3', '--canvas: #1A1B1E').replace('--charcoal: #1A1B1E', '--charcoal: #FFFFFF').replace('--paper: #FBF8F1', '--paper: #25262B').replace('color: var(--char)', 'color: white')
with open(v1_files[1], 'w', encoding='utf-8') as f:
    f.write(c)

# Apply V1 Variant 3 Different Accent
with open(v1_files[2], 'r', encoding='utf-8') as f:
    c = f.read()
c = c.replace('--marigold: #C97138', '--marigold: #AE2C2A') # Use Crimson instead of Marigold for accents
with open(v1_files[2], 'w', encoding='utf-8') as f:
    f.write(c)

def add_badge(filepath, stage_text):
    if not os.path.exists(filepath):
        return
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    badge = f"""
<div style="position: fixed; bottom: 20px; right: 20px; background: #000; color: #fff; padding: 10px 15px; border-radius: 8px; font-family: monospace; z-index: 9999; box-shadow: 0 4px 12px rgba(0,0,0,0.5);">
  {stage_text}
</div>
</body>"""
    if "V1 Stage Prototype" not in content and "V2 Stage Prototype" not in content:
        content = content.replace('</body>', badge)
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)

for i, f in enumerate(v1_files):
    add_badge(f, f"V1 Stage Prototype - Variant {i+1}")

for i, f in enumerate(v2_files):
    add_badge(f, f"V2 Stage Prototype - Variant {i+1}")
