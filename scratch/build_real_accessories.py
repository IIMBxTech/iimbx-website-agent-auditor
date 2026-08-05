import os

VARIANTS = 'variants'
with open(os.path.join(VARIANTS, 'power_weeder_5_5wp_product_page.html'), 'r', encoding='utf-8') as f:
    html = f.read()

nav_part = html.split('<section class="product-layout">')[0]
footer_part = '<section class="specs-section">' + html.split('<section class="specs-section">')[1]

TEMPLATE = nav_part + """
<section class="product-layout">
<div class="product-gallery">
<div class="main-image"><img alt="{title}" src="../assets/part_lever.png" onerror="this.src='https://via.placeholder.com/600x400/F7F9FA/333333?text={url_title}'"/></div>
</div>
<div class="product-details">
<div class="product-category">{category}</div>
<h1 class="product-title">{title}</h1>
<div class="product-price">Rs.{price}</div>
<ul class="feature-list">
    <li><i class="fas fa-check-circle"></i> Official Krishitek Accessory</li>
    <li><i class="fas fa-check-circle"></i> Guaranteed fit and performance</li>
    <li><i class="fas fa-check-circle"></i> High-quality heavy-duty materials</li>
</ul>
<div class="action-btns">
<a class="btn" href="contact_v5_premium.html">Contact for Booking</a>
<a class="btn btn-outline" href="spare_parts_v1.html">Back to Catalog</a>
</div>
</div>
</section>
""" + footer_part

# Create accessories
accessories = [
    ('saati_cultivator_product_page.html', 'Saati - The Cultivator', 'Power Weeder Attachment', '11500.0'),
    ('iron_wheel_w_product_page.html', 'Iron Wheel W', 'Power Weeder Attachment', '7500.0'),
    ('ridger_w_product_page.html', 'Ridger W', 'Power Weeder Attachment', '2500.0'),
    ('chaff_cutter_product_page.html', 'Chaff Cutter (3HP Copper Motor)', 'Chaff Cutter', '26000.0')
]

for fname, title, cat, price in accessories:
    fpath = os.path.join(VARIANTS, fname)
    url_title = title.replace(' ', '+')
    new_html = TEMPLATE.replace('{title}', title).replace('{url_title}', url_title).replace('{category}', cat).replace('{price}', price)
    with open(fpath, 'w', encoding='utf-8') as f:
        f.write(new_html)

print("Accessories built!")
