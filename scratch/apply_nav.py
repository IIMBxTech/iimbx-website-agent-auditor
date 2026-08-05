"""
Apply the unified mega menu nav + utility bar to ALL variant HTML pages.
Also fix index.html to redirect to homepage_v4_stitch.html.
"""
import os, re

PROJ = r'c:\Users\harsh\OneDrive\Desktop\IIMBx live project krishtech site agents latest'
VARIANTS = os.path.join(PROJ, 'variants')

# ============ MEGA MENU CSS (to inject into <style>) ============
MEGA_CSS = """
        /* Mega Menu */
        .mega-trigger { 
            position: static; 
            display: flex; 
            align-items: center; 
            gap: 5px;
            padding: 10px 0;
        }
        .mega-trigger i.fa-plus { font-size: 10px; transition: transform 0.3s; }
        .mega-trigger:hover i.fa-plus { transform: rotate(45deg); color: var(--logo-red); }
        .mega-menu {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: var(--white);
            box-shadow: 0 20px 60px rgba(0,0,0,0.15);
            border-top: 3px solid var(--logo-red);
            z-index: 999;
        }
        .mega-trigger::after {
            content: '';
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            height: 20px;
            background: transparent;
        }
        .mega-trigger:hover .mega-menu,
        .mega-menu:hover { display: flex; }
        .mega-col-1 {
            width: 240px; flex-shrink: 0;
            background: var(--gray-light);
            padding: 32px 0;
            border-right: 1px solid var(--gray-border);
        }
        .mega-col-1 a {
            display: flex; align-items: center; justify-content: space-between;
            padding: 14px 28px; font-family: 'Barlow', sans-serif;
            font-weight: 700; font-size: 15px; text-transform: uppercase;
            color: var(--charcoal); text-decoration: none; transition: all 0.15s; letter-spacing: 0.5px;
        }
        .mega-col-1 a:hover, .mega-col-1 a.active { color: var(--logo-red); background: var(--white); border-left: 3px solid var(--logo-red); }
        .mega-col-1 a i { font-size: 11px; color: var(--logo-red); opacity: 0.7; }
        .mega-col-2 {
            width: 250px; flex-shrink: 0;
            padding: 32px 24px;
            border-right: 1px solid var(--gray-border);
        }
        .mega-col-2 a {
            display: flex; align-items: center; justify-content: space-between;
            padding: 11px 14px; font-family: 'Barlow', sans-serif;
            font-weight: 600; font-size: 14px; text-transform: uppercase;
            color: var(--charcoal); text-decoration: none; border-radius: 6px; transition: all 0.15s; letter-spacing: 0.3px;
        }
        .mega-col-2 a:hover, .mega-col-2 a.active { color: var(--logo-red); background: rgba(192,0,0,0.05); }
        .mega-col-3 { flex: 1; padding: 32px 40px; }
        .mega-col-3 h4 { font-family: 'Barlow', sans-serif; font-size: 14px; font-weight: 700; text-transform: uppercase; color: var(--ink); margin-bottom: 18px; letter-spacing: 1.5px; }
        .mega-products-list { display: grid; grid-template-columns: 1fr 1fr; gap: 4px 40px; }
        .mega-products-list a { font-size: 14px; font-family: 'Inter', sans-serif; font-weight: 500; color: var(--charcoal); text-decoration: none; padding: 8px 0; display: block; line-height: 1.5; transition: color 0.15s; }
        .mega-products-list a::before { content: '\\2022  '; color: var(--logo-red); font-weight: bold; }
        .mega-products-list a:hover { color: var(--logo-red); }
        .mega-products-list .product-sub { font-size: 12px; color: #999; display: block; margin-top: 1px; padding-left: 14px; font-style: italic; font-weight: 400; }
        @media (max-width: 900px) { .mega-menu { display: none !important; } }
"""

# ============ NAV HTML (utility bar + nav with mega menu) ============
NAV_HTML = """<div class="utility-bar">
<a class="dealer-btn" href="contact_v5_premium.html">Dealer Inquiry Form</a>
<div class="lang-dropdown">
<img alt="EN" src="https://flagcdn.com/w20/gb.png" width="16"/> English <i class="fas fa-caret-down"></i>
<div class="lang-menu">
<a href="#"><img alt="IN" src="https://flagcdn.com/w20/in.png" width="16"/> Hindi</a>
<a href="#"><img alt="IN" src="https://flagcdn.com/w20/in.png" width="16"/> Gujarati</a>
<a href="#"><img alt="IN" src="https://flagcdn.com/w20/in.png" width="16"/> Marathi</a>
<a href="#"><img alt="IN" src="https://flagcdn.com/w20/in.png" width="16"/> Tamil</a>
<a href="#"><img alt="IN" src="https://flagcdn.com/w20/in.png" width="16"/> Telugu</a>
</div>
</div>
<div class="social-links">
<a class="bg-fb" href="#"><i class="fab fa-facebook-f"></i></a>
<a class="bg-in" href="#"><i class="fab fa-linkedin-in"></i></a>
<a class="bg-ig" href="#"><i class="fab fa-instagram"></i></a>
<a class="bg-phone" href="#"><i class="fas fa-phone"></i></a>
<a class="bg-map" href="#"><i class="fas fa-map-marker-alt"></i></a>
</div>
</div>
<nav>
<a class="logo" href="homepage_v4_stitch.html">
<img alt="KrishiTek Logo" onerror="this.src='https://via.placeholder.com/150x50/FFFFFF/C00000?text=KRISHITEK'" src="https://www.krishitek.com/wp-content/uploads/2022/11/LOGO.png"/>
KRISHITEK
</a>
<div class="nav-links">
<a href="about_v1.html">ABOUT</a>
<div class="mega-trigger">
PRODUCTS <i class="fas fa-plus" style="font-size:10px;"></i>
<div class="mega-menu">
<div class="mega-col-1">
<a class="active" href="product_catalog_v1.html" data-cat="agri">AGRI MACHINERY <i class="fas fa-chevron-right"></i></a>
<a href="spare_parts_v1.html" data-cat="spare">SPARE PARTS</a>
<a href="services_v1.html" data-cat="services">SERVICES & SUPPORT</a>
</div>
<div class="mega-col-2">
<a class="active" href="#" data-subcat="reapers">REAPERS & HARVESTERS <i class="fas fa-chevron-right" style="font-size:10px; color:var(--logo-red);"></i></a>
<a href="#" data-subcat="weeders">POWER WEEDERS</a>
<a href="#" data-subcat="tillers">MINI TILLERS</a>
<a href="#" data-subcat="tractor">TRACTOR ATTACHMENTS</a>
</div>
<div class="mega-col-3">
<h4>PRODUCTS</h4>
<div class="mega-products-list">
<a href="reaptek_ki_120_product_page.html">Self Propelled Power Reaper<span class="product-sub">Reaptek Ki-120 (Multicrop)</span></a>
<a href="reaptek_combine_4_8wp_product_page.html">Power Reaper Cum Weeder<span class="product-sub">Reaptek 4.8WP Multipurpose</span></a>
<a href="power_weeder_5_5wp_product_page.html">Power Weeder 5.5WP<span class="product-sub">Heavy Duty Gearbox</span></a>
<a href="power_weeder_7cr_product_page.html">Power Weeder 7CR<span class="product-sub">Chain Drive Rotary</span></a>
<a href="power_weeder_7br_product_page.html">Back Rotary Weeder 7BR<span class="product-sub">Rear Tine Rotary</span></a>
<a href="power_weeder_7fr_product_page.html">Front Rotary Weeder 7FR<span class="product-sub">Front Tine Rotary</span></a>
<a href="mini_tiller_powertek_3wp_product_page.html">Mini Power Tiller 3WP<span class="product-sub">Compact Powertek</span></a>
<a href="reaptek_3_product_page.html">Power Weeder Attachment<span class="product-sub">Reaptek 3</span></a>
</div>
</div>
</div>
</div>
<a href="dealership_v1.html">FIND A DEALER</a>
<a href="blog_v1.html">BLOG</a>
<a href="media_v1_stitch.html">MEDIA</a>
<a href="spare_parts_v1.html">SPARE PARTS</a>
<a href="contact_v5_premium.html">CONTACT</a>
</div>
<div class="menu-toggle">&#9776;</div>
</nav>"""

# ============ FOOTER HTML ============
FOOTER_HTML = """<footer>
<div class="footer-grid">
<div class="footer-col" style="grid-column: span 2;">
<h4>About Us</h4>
<p class="about-text">We are a manufacturer of Agriculture Equipment. We design, develop and MAKE IN INDIA. We aspire to provide products and services to Farmers that are always customer-centric and can generate maximum value for what they have invested.</p>
<div style="background: white; padding: 10px 15px; border-radius: 6px; display: inline-block;">
<img alt="Make In India" src="../assets/make_in_india.webp" style="max-height: 60px; width: auto; display: block;"/>
</div>
</div>
<div class="footer-col">
<h4>Quick Links</h4>
<ul>
<li><a href="product_catalog_v1.html">Product Categories</a></li>
<li><a href="services_v1.html">Services</a></li>
<li><a href="spare_parts_v1.html">Spare Parts</a></li>
<li><a href="about_v1.html">About</a></li>
<li><a href="contact_v5_premium.html">Contact Us</a></li>
<li><a href="blog_v1.html">Blog</a></li>
</ul>
</div>
<div class="footer-col">
<h4>Products</h4>
<ul>
<li><a href="reaptek_ki_120_product_page.html">Self Propelled Power Reaper</a></li>
<li><a href="reaptek_combine_4_8wp_product_page.html">Power Reaper Cum Weeder</a></li>
<li><a href="power_weeder_5_5wp_product_page.html">Power Weeder 5.5WP</a></li>
<li><a href="power_weeder_7cr_product_page.html">Power Weeder 7CR</a></li>
<li><a href="mini_tiller_powertek_3wp_product_page.html">Mini Power Tiller 3WP</a></li>
</ul>
</div>
<div class="footer-col">
<h4>GET IN TOUCH</h4>
<div style="display: flex; gap: 10px; margin-bottom: 12px; align-items: flex-start;">
<i class="fas fa-envelope" style="color: var(--brand-yellow); margin-top: 4px; min-width: 14px;"></i>
<p style="margin: 0;">Email: info@krishitek.com</p>
</div>
<div style="display: flex; gap: 10px; margin-bottom: 12px; align-items: flex-start;">
<i class="fas fa-phone-alt" style="color: var(--brand-yellow); margin-top: 4px; min-width: 14px; transform: scaleX(-1);"></i>
<p style="margin: 0;">Phone: +91 91570 62093<br/>+91 74860 29216</p>
</div>
<div style="display: flex; gap: 10px; margin-bottom: 20px; align-items: flex-start;">
<i class="fas fa-map-marker-alt" style="color: var(--brand-yellow); margin-top: 4px; min-width: 14px;"></i>
<p style="margin: 0;">Address: Krishitek Industries Pvt. Ltd.<br/>Plot No. 22, Prime Industrial Park,<br/>Santej, Ahmedabad- 382721,<br/>Gujarat, INDIA</p>
</div>
<a href="contact_v5_premium.html" style="background: var(--brand-yellow); color: var(--ink); padding: 8px 16px; border-radius: 4px; font-weight: bold; text-decoration: none;">Contact Us</a>
</div>
</div>
<div class="footer-bottom">&copy; 2026 KrishiTek. All rights reserved.</div>
</footer>
<script src="../assets/chatbot_widget.js"></script>"""

# Pages to skip (admin/internal pages, homepage already done)
SKIP = {
    'homepage_v4_stitch.html',  # already has mega menu
    'dealer_login.html',
    'dealer_dashboard.html',
    'master_dashboard.html',
    'md_dashboard.html',
    'employee_portal.html',
    'login.html',
    'ai_chatbot_dashboard.html',
}

count = 0
errors = []

for fname in os.listdir(VARIANTS):
    if not fname.endswith('.html'):
        continue
    if fname in SKIP:
        continue
    
    fpath = os.path.join(VARIANTS, fname)
    with open(fpath, 'r', encoding='utf-8', errors='replace') as f:
        html = f.read()
    
    if len(html) < 100:
        errors.append(f"SKIP {fname}: too small ({len(html)} bytes)")
        continue
    
    original = html
    
    # 1. Inject mega menu CSS before </style>
    if 'mega-trigger' not in html and '</style>' in html:
        html = html.replace('</style>', MEGA_CSS + '\n    </style>', 1)
    
    # 2. Also ensure nav has position:relative for mega menu positioning
    if 'position: relative;' not in html and 'nav {' in html:
        html = html.replace('nav {', 'nav { position: relative;', 1)
    
    # 3. Replace utility-bar + nav block
    # Pattern: from <div class="utility-bar"> to </nav>
    nav_pattern = re.compile(
        r'<div class="utility-bar">.*?</nav>',
        re.DOTALL
    )
    if nav_pattern.search(html):
        html = nav_pattern.sub(NAV_HTML, html, count=1)
    
    # 4. Replace footer
    footer_pattern = re.compile(
        r'<footer>.*?</footer>\s*(?:<script[^>]*chatbot[^>]*></script>)?',
        re.DOTALL
    )
    if footer_pattern.search(html):
        html = footer_pattern.sub(FOOTER_HTML, html, count=1)
    
    # 5. Fix any remaining broken links
    html = html.replace('href="contact_v2_stitch.html"', 'href="contact_v5_premium.html"')
    html = html.replace('href="blog_v2_stitch.html"', 'href="blog_v1.html"')
    html = html.replace('href="product_catalog_v2_stitch.html"', 'href="product_catalog_v1.html"')
    html = html.replace('href="spare_parts_v2_stitch.html"', 'href="spare_parts_v1.html"')
    html = html.replace('href="homepage_v5_special.html"', 'href="homepage_v4_stitch.html"')
    
    if html != original:
        with open(fpath, 'w', encoding='utf-8') as f:
            f.write(html)
        count += 1
        print(f"UPDATED: {fname} ({len(html)} bytes)")
    else:
        print(f"NO CHANGE: {fname}")

# Fix index.html to redirect to homepage_v4
index_path = os.path.join(PROJ, 'index.html')
with open(index_path, 'w', encoding='utf-8') as f:
    f.write('''<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="refresh" content="0; url=variants/homepage_v4_stitch.html">
    <title>KrishiTek - Agriculture Machinery</title>
</head>
<body>
    <p>Redirecting to <a href="variants/homepage_v4_stitch.html">KrishiTek Homepage</a>...</p>
</body>
</html>
''')
print(f"\nINDEX.HTML: Redirects to homepage_v4_stitch.html")

print(f"\n=== TOTAL UPDATED: {count} pages ===")
if errors:
    print(f"ERRORS: {errors}")
