import os, glob

VARIANTS = 'variants'
files = glob.glob(os.path.join(VARIANTS, 'spare_*_product_page.html'))

# Read a good product page to get the nav and footer
with open(os.path.join(VARIANTS, 'power_weeder_5_5wp_product_page.html'), 'r', encoding='utf-8') as f:
    html = f.read()

nav_part = html.split('<section class="product-layout">')[0]
footer_part = '<section class="specs-section">' + html.split('<section class="specs-section">')[1]

# We will replace the specs section with a generic spare parts spec table
generic_specs = """
<div class="specs-container">
<h2 class="specs-title">Component Details</h2>
<div class="specs-grid">
    <div class="spec-card">
        <div class="spec-label">Material</div>
        <div class="spec-value">High-Grade Industrial Steel / Alloy</div>
    </div>
    <div class="spec-card">
        <div class="spec-label">Compatibility</div>
        <div class="spec-value">Krishitek Power Reapers / Weeders</div>
    </div>
    <div class="spec-card">
        <div class="spec-label">Durability</div>
        <div class="spec-value">Tested for continuous heavy-duty use</div>
    </div>
    <div class="spec-card">
        <div class="spec-label">Installation</div>
        <div class="spec-value">Direct OEM Replacement</div>
    </div>
</div>
</div>
</section>
<footer>
"""

footer_part = footer_part.split('</section>')[0] + generic_specs + html.split('<footer>')[1]

TEMPLATE = nav_part + """
<section class="product-layout">
<div class="product-gallery">
<div class="main-image"><img alt="{title}" src="../assets/part_lever.png" onerror="this.src='https://via.placeholder.com/600x400/F7F9FA/333333?text={url_title}'"/></div>
</div>
<div class="product-details">
<div class="product-category">Genuine Spare Part</div>
<h1 class="product-title">{title}</h1>
<div class="product-price">Request Quote</div>
<ul class="feature-list">
    <li><i class="fas fa-check-circle"></i> 100% Genuine Krishitek Component</li>
    <li><i class="fas fa-check-circle"></i> Built to exact OEM specifications</li>
    <li><i class="fas fa-check-circle"></i> Maximum durability and field lifespan</li>
    <li><i class="fas fa-check-circle"></i> Available at all authorized Krishitek dealers</li>
</ul>
<div class="action-btns">
<a class="btn" href="contact_v5_premium.html">Contact for Pricing</a>
<a class="btn btn-outline" href="spare_parts_v1.html">Back to Spares</a>
</div>
</div>
</section>
""" + footer_part

for fpath in files:
    fname = os.path.basename(fpath)
    title = fname.replace('spare_', '').replace('_product_page.html', '').replace('_', ' ').title()
    url_title = title.replace(' ', '+')
    
    new_html = TEMPLATE.replace('{title}', title).replace('{url_title}', url_title)
    
    # Adjust image icon based on type
    if 'blade' in title.lower() or 'cutter' in title.lower():
        new_html = new_html.replace('../assets/part_lever.png', '../assets/part_blade.png')
    elif 'gear' in title.lower() or 'starter' in title.lower() or 'chain' in title.lower() or 'wheel' in title.lower():
        new_html = new_html.replace('../assets/part_lever.png', '../assets/part_gearbox.png')
    elif 'cable' in title.lower():
        new_html = new_html.replace('../assets/part_lever.png', '../assets/part_cable.png')
        
    with open(fpath, 'w', encoding='utf-8') as f:
        f.write(new_html)

print(f"Fixed {len(files)} spare parts pages with the premium layout!")
