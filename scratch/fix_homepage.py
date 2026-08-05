import os, re

VARIANTS = 'variants'
homepage_path = os.path.join(VARIANTS, 'homepage_v4_stitch.html')
about_path = os.path.join(VARIANTS, 'about_v1.html')

with open(homepage_path, 'r', encoding='utf-8') as f:
    hp_html = f.read()

with open(about_path, 'r', encoding='utf-8') as f:
    about_html = f.read()

# 1. Extract MEGA_CSS from about
# It is between /* Mega Menu */ and </style>
css_match = re.search(r'(/\* Mega Menu \*/.*?</style>)', about_html, re.DOTALL)
if css_match:
    mega_css = css_match.group(1).replace('</style>', '')
else:
    print("Could not find mega CSS")
    exit(1)

# 2. Extract MEGA_JS from about
# It is between <script> // Mega Menu Hover Logic and </script>
js_match = re.search(r'(<script>\s*// Mega Menu Hover Logic.*?</script>)', about_html, re.DOTALL)
if js_match:
    mega_js = js_match.group(1)
else:
    print("Could not find mega JS")
    exit(1)

# 3. Extract <nav>...</nav> from about
nav_match = re.search(r'(<nav>.*?</nav>)', about_html, re.DOTALL)
if nav_match:
    nav_html = nav_match.group(1)
else:
    print("Could not find nav")
    exit(1)

# Now inject these into homepage
# 1. Replace </style> with mega_css + </style>
if '/* Mega Menu */' not in hp_html:
    hp_html = hp_html.replace('</style>', '\n' + mega_css + '\n</style>')

# 2. Replace <nav>...</nav> with nav_html
hp_html = re.sub(r'<nav>.*?</nav>', nav_html, hp_html, flags=re.DOTALL)

# 3. Inject JS right after </nav>
if '// Mega Menu Hover Logic' not in hp_html:
    hp_html = hp_html.replace('</nav>', '</nav>\n' + mega_js)

with open(homepage_path, 'w', encoding='utf-8') as f:
    f.write(hp_html)
print("Homepage surgically fixed!")
