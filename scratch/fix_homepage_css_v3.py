import re

filepath = 'variants/homepage_v4_stitch.html'
with open(filepath, 'r', encoding='utf-8') as f:
    hp_html = f.read()

with open('variants/about_v1.html', 'r', encoding='utf-8') as f:
    about_html = f.read()

# Get the Mega Menu block from about_v1
css_match = re.search(r'(/\* Mega Menu \*/.*?</style>)', about_html, re.DOTALL)
if css_match:
    mega_css = css_match.group(1).replace('</style>', '')
    
    # Replace the old Mega Menu block in homepage_v4_stitch.html
    hp_html = re.sub(r'/\* Mega Menu \*/.*?@media[^}]*\}\s*\}', mega_css, hp_html, flags=re.DOTALL)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(hp_html)
    print("CSS Replaced!")
else:
    print("Failed")
