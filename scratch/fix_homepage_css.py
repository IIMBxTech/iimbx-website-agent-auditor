import re

filepath = 'variants/homepage_v4_stitch.html'
with open(filepath, 'r', encoding='utf-8') as f:
    html = f.read()

# I need to replace the old /* Mega Menu */ block with the new one from about_v1.html
with open('variants/about_v1.html', 'r', encoding='utf-8') as f:
    about_html = f.read()

css_match = re.search(r'(/\* Mega Menu \*/.*?</style>)', about_html, re.DOTALL)
if css_match:
    mega_css = css_match.group(1).replace('</style>', '')
    
    # Now replace the mega menu block in homepage
    hp_html = re.sub(r'/\* Mega Menu \*/.*?@media.*?\} \}', mega_css, html, flags=re.DOTALL)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(hp_html)
    print("Fixed homepage CSS!")
else:
    print("Could not find mega CSS")
