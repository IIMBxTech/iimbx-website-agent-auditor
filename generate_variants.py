import os
import shutil

base_file = r'c:\Users\harsh\OneDrive\Desktop\Compare\prototypes\elp_v2.html'
var1 = r'c:\Users\harsh\OneDrive\Desktop\Compare\prototypes\elp_v2_variant_1.html'
var2 = r'c:\Users\harsh\OneDrive\Desktop\Compare\prototypes\elp_v2_variant_2.html'
var3 = r'c:\Users\harsh\OneDrive\Desktop\Compare\prototypes\elp_v2_variant_3.html'

shutil.copy2(base_file, var1)

with open(base_file, 'r', encoding='utf-8') as f:
    content = f.read()

# Variant 2: Dark Mode
v2_content = content.replace(
    '--canvas: #F4EFE3', '--canvas: var(--navy-deep)'
).replace(
    '--paper: #FBF8F1', '--paper: #0B1535'
).replace(
    '--charcoal: #1A1B1E', '--charcoal: #FFFFFF'
).replace(
    'color: var(--char)', 'color: white'
).replace(
    'background:var(--paper-2)', 'background:rgba(255,255,255,0.05)'
).replace(
    'background: var(--paper-2)', 'background: rgba(255,255,255,0.05)'
).replace(
    'background: white', 'background: var(--navy)'
).replace(
    'color: var(--stone)', 'color: rgba(255,255,255,0.7)'
).replace(
    'class="who-card-light"', 'class="who-card-light" style="color: white; border-color: rgba(255,255,255,0.1)"'
).replace(
    '<h2 style="font-size: 36px; font-weight: 500;">Faculty. <em style="color: var(--crimson);">IIM Bangalore.</em></h2>',
    '<h2 style="font-size: 36px; font-weight: 500; color: white;">Faculty. <em style="color: var(--crimson);">IIM Bangalore.</em></h2>'
).replace(
    'color: var(--charcoal)', 'color: white'
)
with open(var2, 'w', encoding='utf-8') as f:
    f.write(v2_content)

# Variant 3: Compact / Modern
v3_content = content.replace(
    'grid-template-columns:repeat(3,1fr)', 'grid-template-columns:repeat(2,1fr)'
).replace(
    '.theme:nth-child(3n){border-right:none}', '.theme:nth-child(2n){border-right:none}'
).replace(
    'fac-grid-v2 { display: grid; grid-template-columns: repeat(4, 1fr)', 
    'fac-grid-v2 { display: grid; grid-template-columns: repeat(2, 1fr)'
)
with open(var3, 'w', encoding='utf-8') as f:
    f.write(v3_content)

print("Generated 3 variants successfully.")
