import re
import subprocess

# Get old HP perfectly from git directly
old_hp_bytes = subprocess.check_output(['git', 'show', '1da6f2c:variants/homepage_v4_stitch.html'])
old_hp = old_hp_bytes.decode('utf-8')

with open('variants/homepage_v4_stitch.html', 'r', encoding='utf-8') as f:
    curr_hp = f.read()

with open('variants/about_v1.html', 'r', encoding='utf-8') as f:
    about_html = f.read()

# 1. Extract NAV_HTML from about
nav_match = re.search(r'(<nav>.*?</nav>)', about_html, re.DOTALL)
nav_html = nav_match.group(1)

# 2. Extract MEGA_CSS from about
css_match = re.search(r'(/\* Mega Menu \*/.*?</style>)', about_html, re.DOTALL)
mega_css = css_match.group(1).replace('</style>', '')

# 3. Extract MEGA_JS from about
js_match = re.search(r'(<script>\s*// Mega Menu Hover Logic.*?</script>)', about_html, re.DOTALL)
mega_js = js_match.group(1)

# 4. Extract CAROUSEL from curr_hp
carousel_match = re.search(r'(<div class="carousel" id="product-carousel">.*?</div>\s*</div>)', curr_hp, re.DOTALL)
carousel_html = carousel_match.group(1)

# --- NOW ASSEMBLE ---
new_hp = old_hp

# A. Replace NAV
new_hp = re.sub(r'<nav>.*?</nav>', nav_html, new_hp, flags=re.DOTALL)

# B. Inject JS after </nav>
if '// Mega Menu Hover Logic' not in new_hp:
    new_hp = new_hp.replace('</nav>', '</nav>\n' + mega_js)

# C. Replace CAROUSEL
new_hp = re.sub(r'<div class="carousel" id="product-carousel">.*?</div>\s*</div>', carousel_html, new_hp, flags=re.DOTALL)

# D. Replace MEGA CSS
# Find start of old Mega Menu CSS
start_idx = new_hp.find('/* Mega Menu */')
# Find the end of it (the next comment)
end_idx = new_hp.find('/* Hero Section - V4 Farmer Immersive */', start_idx)

if start_idx != -1 and end_idx != -1:
    new_hp = new_hp[:start_idx] + mega_css + "\n        " + new_hp[end_idx:]
    with open('variants/homepage_v4_stitch.html', 'w', encoding='utf-8') as f:
        f.write(new_hp)
    print("Perfect stitch complete!")
else:
    print(f"Could not find CSS boundaries! start={start_idx}, end={end_idx}")
