import os, re
import importlib.util

# 1. Read master_rebuild to get PRODUCT_MAP and PRICING_MAP
with open('scratch/master_rebuild.py', 'r', encoding='utf-8') as f:
    master_code = f.read()

# We can execute a part of it to get the maps, or just parse it.
# It's easier to just parse the product data directly, since we can see the image links in master_rebuild.py!
# Wait, let's just write a script that imports master_rebuild's maps.

spec = importlib.util.spec_from_file_location("master", "scratch/master_rebuild.py")
master = importlib.util.module_from_spec(spec)
spec.loader.exec_module(master)

PRODUCT_MAP = master.PRODUCT_MAP
try:
    master.extract_pricing()
    PRICING_MAP = master.PRICING_MAP
except:
    PRICING_MAP = {}

carousel_html = ""
for name, pmap in PRODUCT_MAP.items():
    file = pmap['file']
    img = pmap['image']
    price_key = pmap.get('price_key')
    
    price_str = "Price on Request"
    if price_key and price_key in PRICING_MAP:
        price_str = "₹" + "{:,.0f}".format(PRICING_MAP[price_key])
        
    card_html = f'''<!-- Product Card -->
<a class="product-card" href="{file}" style="text-decoration: none; color: inherit; display: block;">
<div class="product-image"><img alt="{name}" src="{img}"/></div>
<div class="product-info">
<div>
<div class="product-name" style="font-size:14px; white-space: normal; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; height: 42px;">{name}</div>
<div class="product-price" style="margin-top: 5px;">{price_str}</div>
</div>
<button class="info-btn" title="View Details">+</button>
</div>
</a>
'''
    carousel_html += card_html

# 2. Inject into homepage_v4_stitch.html
homepage_path = 'variants/homepage_v4_stitch.html'
with open(homepage_path, 'r', encoding='utf-8') as f:
    hp_html = f.read()

# Find the carousel block
pattern = r'(<div class="carousel" id="product-carousel">).*?(</div>\s*</div>\s*</section>)'
match = re.search(pattern, hp_html, re.DOTALL)
if match:
    new_html = hp_html[:match.start(1) + len(match.group(1))] + '\n' + carousel_html + match.group(2) + hp_html[match.end(2):]
    with open(homepage_path, 'w', encoding='utf-8') as f:
        f.write(new_html)
    print("Injected all 11 products into homepage carousel!")
else:
    print("Could not find carousel block")
