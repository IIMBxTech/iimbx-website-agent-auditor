import os, re

PROJ = r'c:\Users\harsh\OneDrive\Desktop\IIMBx live project krishtech site agents latest\variants'

# Read the template from power_weeder_5_5wp
with open(os.path.join(PROJ, 'power_weeder_5_5wp_product_page.html'), 'r', encoding='utf-8') as f:
    TEMPLATE = f.read()

# Extract the CSS+head section (before <body>) and footer section
head_match = re.search(r'(<!DOCTYPE html>.*?</head>)', TEMPLATE, re.DOTALL)
HEAD = head_match.group(1) if head_match else ""

# Extract utility bar + nav
utilnav_match = re.search(r'(<div class="utility-bar">.*?</nav>)', TEMPLATE, re.DOTALL)
UTILNAV = utilnav_match.group(1) if utilnav_match else ""

# Extract footer
footer_match = re.search(r'(<footer>.*?</html>)', TEMPLATE, re.DOTALL)
FOOTER = footer_match.group(1) if footer_match else ""

# ===== SPARE PARTS DATA =====
spare_parts = {
    "spare_accelerator_throttle_lever": {
        "title": "Accelerator / Throttle Lever",
        "image": "https://www.krishitek.com/wp-content/uploads/2024/07/Accelerator-Throttle-Lever-300x300.jpg",
        "desc": "High-quality accelerator and throttle lever for precise speed control in power weeders and reapers.",
        "compat": "Power Weeders (5.5WP, 7CR, 7BR, 7FR), Mini Tiller 3WP",
        "material": "Hardened Steel with Rubber Grip"
    },
    "spare_big_blade": {
        "title": "Big Blade (Tilling Blade)",
        "image": "https://www.krishitek.com/wp-content/uploads/2024/07/Big-Blade-Tilling-Blade-300x300.jpg",
        "desc": "Heavy-duty tilling blade designed for deep soil penetration and weed removal.",
        "compat": "Power Weeders (5.5WP, 7CR, 7BR)",
        "material": "High Carbon Steel, Heat Treated"
    },
    "spare_chain_cover_assy": {
        "title": "Chain Cover Assembly",
        "image": "https://www.krishitek.com/wp-content/uploads/2024/07/Chain-Cover-Assembly-300x300.jpg",
        "desc": "Protective chain cover assembly to shield the drive chain from debris and dirt.",
        "compat": "Self Propelled Reapers (Ki-120, Combine 4.8WP)",
        "material": "Powder-Coated Mild Steel"
    },
    "spare_clutch_lever": {
        "title": "Clutch Lever (Reaper)",
        "image": "https://www.krishitek.com/wp-content/uploads/2024/07/Clutch-Lever-300x300.jpg",
        "desc": "Precision-machined clutch lever for smooth engagement and disengagement of the drive.",
        "compat": "Self Propelled Reapers (Ki-120, Combine 4.8WP)",
        "material": "Forged Steel with Chrome Plating"
    },
    "spare_clutch_lever_weeder": {
        "title": "Clutch Lever (Power Weeder)",
        "image": "https://www.krishitek.com/wp-content/uploads/2024/07/Clutch-Lever-Weeder-300x300.jpg",
        "desc": "Ergonomic clutch lever specifically designed for power weeder operation comfort.",
        "compat": "Power Weeders (5.5WP, 7CR, 7BR, 7FR)",
        "material": "Forged Steel with Rubber Grip"
    },
    "spare_conveyor_chain": {
        "title": "Conveyor Chain",
        "image": "https://www.krishitek.com/wp-content/uploads/2024/07/Conveyor-Chain-300x300.jpg",
        "desc": "Heavy-duty roller conveyor chain for efficient crop conveyance in reapers.",
        "compat": "Self Propelled Reapers (Ki-120, Combine 4.8WP), Tractor Reapers",
        "material": "Alloy Steel, Oil-Hardened"
    },
    "spare_cutterbar": {
        "title": "Cutterbar Assembly",
        "image": "https://www.krishitek.com/wp-content/uploads/2024/07/Cutterbar-Assembly-300x300.jpg",
        "desc": "Complete cutterbar assembly with reciprocating knife bar for clean and precise crop cutting.",
        "compat": "All Reaptek Reapers (Ki-120, Combine, T7/T6/T5/T4, PT4/PT5, C4/C5, Reaptek 3)",
        "material": "High Carbon Steel Blades, Mild Steel Frame"
    },
    "spare_harvesting_gear_box_assy": {
        "title": "Harvesting Gear Box Assembly",
        "image": "https://www.krishitek.com/wp-content/uploads/2024/07/Harvesting-Gear-Box-Assembly-300x300.jpg",
        "desc": "Complete gearbox assembly for the harvesting mechanism, ensuring smooth power transfer.",
        "compat": "Self Propelled Reapers (Ki-120, Combine 4.8WP)",
        "material": "Cast Iron Housing, Hardened Steel Gears"
    },
    "spare_harvesting_gearbox_clutch_cable": {
        "title": "Harvesting Gearbox Clutch Cable",
        "image": "https://www.krishitek.com/wp-content/uploads/2024/07/Harvesting-Gearbox-Clutch-Cable-300x300.jpg",
        "desc": "Flexible clutch cable connecting the clutch lever to the harvesting gearbox.",
        "compat": "Self Propelled Reapers (Ki-120, Combine 4.8WP)",
        "material": "Braided Steel Wire with PVC Sheath"
    },
    "spare_main_gear_box_assy": {
        "title": "Main Gear Box Assembly",
        "image": "https://www.krishitek.com/wp-content/uploads/2024/07/Main-Gear-Box-Assembly-300x300.jpg",
        "desc": "Primary transmission gearbox assembly for power distribution to wheels and attachments.",
        "compat": "Power Weeders (5.5WP, 7CR), Self Propelled Reapers",
        "material": "Cast Iron Housing, Hardened Steel Gears"
    },
    "spare_main_gearbox_clutch_cable": {
        "title": "Main Gearbox Clutch Cable",
        "image": "https://www.krishitek.com/wp-content/uploads/2024/07/Main-Gearbox-Clutch-Cable-300x300.jpg",
        "desc": "Heavy-duty clutch cable for the main gearbox engagement system.",
        "compat": "Power Weeders (5.5WP, 7CR), Self Propelled Reapers",
        "material": "Braided Steel Wire with PVC Sheath"
    },
    "spare_recoil_starter": {
        "title": "Recoil Starter Assembly",
        "image": "https://www.krishitek.com/wp-content/uploads/2024/07/Recoil-Starter-Assembly-300x300.jpg",
        "desc": "Complete recoil starter assembly for easy engine start-up in the field.",
        "compat": "Power Weeders (5.5WP, 7CR, 7BR, 7FR), Mini Tiller 3WP, Reapers",
        "material": "High-Impact Plastic Housing, Steel Spring"
    },
    "spare_reverse_gear_cable": {
        "title": "Reverse Gear Cable",
        "image": "https://www.krishitek.com/wp-content/uploads/2024/07/Reverse-Gear-Cable-300x300.jpg",
        "desc": "Reverse gear engagement cable for smooth forward-to-reverse transition.",
        "compat": "Power Weeders (5.5WP, 7CR), Self Propelled Reapers",
        "material": "Braided Steel Wire with PVC Sheath"
    },
    "spare_rotavator_blade": {
        "title": "Rotavator Blade",
        "image": "https://www.krishitek.com/wp-content/uploads/2024/07/Rotavator-Blade-300x300.jpg",
        "desc": "Sharp rotavator blade for efficient soil tillage and weed cutting.",
        "compat": "Power Weeders (5.5WP, 7CR, 7BR, 7FR)",
        "material": "High Carbon Boron Steel, Heat Treated"
    },
    "spare_rotavator_disc": {
        "title": "Rotavator Disc",
        "image": "https://www.krishitek.com/wp-content/uploads/2024/07/Rotavator-Disc-300x300.jpg",
        "desc": "Heavy-duty rotavator disc for mounting blades and ensuring balanced rotation.",
        "compat": "Power Weeders (5.5WP, 7CR, 7BR)",
        "material": "Cast Iron, Precision Machined"
    },
    "spare_safety_pin_lock": {
        "title": "Safety Pin Lock",
        "image": "https://www.krishitek.com/wp-content/uploads/2024/07/Safety-Pin-Lock-300x300.jpg",
        "desc": "Quick-release safety pin lock for secure attachment of blades and components.",
        "compat": "All KrishiTek Power Weeders and Reapers",
        "material": "Zinc-Plated Hardened Steel"
    },
    "spare_safety_pin": {
        "title": "Safety Pin",
        "image": "https://www.krishitek.com/wp-content/uploads/2024/07/Safety-Pin-300x300.jpg",
        "desc": "Standard safety pin for securing rotating components during operation.",
        "compat": "All KrishiTek Power Weeders and Reapers",
        "material": "Zinc-Plated Hardened Steel"
    },
    "spare_small_blade": {
        "title": "Small Blade (Weeding Blade)",
        "image": "https://www.krishitek.com/wp-content/uploads/2024/07/Small-Blade-Weeding-Blade-300x300.jpg",
        "desc": "Precision small blade for fine weeding between crop rows without damaging plants.",
        "compat": "Power Weeders (5.5WP, 7CR, 7FR), Mini Tiller 3WP",
        "material": "High Carbon Steel, Heat Treated"
    },
    "spare_star_wheel": {
        "title": "Star Wheel",
        "image": "https://www.krishitek.com/wp-content/uploads/2024/07/Star-Wheel-300x300.jpg",
        "desc": "Star wheel assembly for improved traction and soil engagement during operation.",
        "compat": "Power Weeders (5.5WP, 7CR, 7BR, 7FR)",
        "material": "Cast Iron, Powder-Coated"
    },
}

def build_spare_page(key, data):
    title = data["title"]
    image = data["image"]
    desc = data["desc"]
    compat = data["compat"]
    material = data["material"]
    
    return f'''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>KrishiTek - {title}</title>
<link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700&amp;family=Inter:wght@400;500;600&amp;display=swap" rel="stylesheet"/>
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet"/>
<style>
        :root {{
            --brand-yellow: #FDB913;
            --logo-red: #C00000;
            --charcoal: #333333;
            --ink: #1A1A1A;
            --white: #FFFFFF;
            --yellow-tint: #FEF3D0;
            --gray-light: #F7F9FA;
            --gray-border: #EAEAEA;
        }}
        * {{ margin: 0; padding: 0; box-sizing: border-box; }}
        body {{ font-family: 'Inter', sans-serif; color: var(--charcoal); background-color: var(--white); line-height: 1.6; -webkit-font-smoothing: antialiased; }}
        h1, h2, h3, h4, h5, h6, .btn {{ font-family: 'Barlow', sans-serif; }}
        .utility-bar {{ position: relative; z-index: 1001; background: var(--white); padding: 8px 5%; display: flex; justify-content: flex-end; align-items: center; gap: 24px; font-size: 13px; border-bottom: 1px solid var(--gray-border); }}
        .dealer-btn {{ background: #28a745; color: var(--white); padding: 6px 16px; border-radius: 4px; text-decoration: none; font-weight: 600; transition: background 0.2s; }}
        .dealer-btn:hover {{ background: #218838; }}
        .lang-dropdown {{ position: relative; cursor: pointer; font-weight: 600; display: flex; align-items: center; gap: 6px; color: var(--ink); }}
        .lang-dropdown:hover .lang-menu {{ display: block; }}
        .lang-menu {{ display: none; position: absolute; top: 100%; right: 0; background: var(--white); box-shadow: 0 5px 15px rgba(0,0,0,0.1); border-radius: 4px; padding: 10px 0; z-index: 1001; min-width: 140px; border: 1px solid var(--gray-border); }}
        .lang-menu a {{ display: block; padding: 8px 16px; color: var(--charcoal); text-decoration: none; font-weight: 500; display: flex; align-items: center; gap: 8px; }}
        .lang-menu a:hover {{ background: var(--gray-light); color: var(--logo-red); }}
        .social-links {{ display: flex; gap: 4px; }}
        .social-links a {{ display: flex; align-items: center; justify-content: center; width: 26px; height: 26px; color: var(--white); text-decoration: none; border-radius: 2px; font-size: 13px; transition: opacity 0.2s; }}
        .social-links a:hover {{ opacity: 0.8; }}
        .bg-fb {{ background: #3b5998; }} .bg-in {{ background: #007bb5; }} .bg-ig {{ background: #e1306c; }}
        .bg-yt {{ background: #ff0000; }} .bg-phone, .bg-map {{ background: var(--logo-red); }}
        nav {{ display: flex; justify-content: space-between; align-items: center; padding: 1.2rem 5%; background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(10px); position: sticky; top: 0; z-index: 1000; border-bottom: 1px solid var(--gray-border); box-shadow: 0 4px 20px rgba(0,0,0,0.03); transition: all 0.3s ease; }}
        .logo {{ font-weight: 700; font-size: 24px; color: var(--logo-red); text-decoration: none; letter-spacing: 0.5px; display: flex; align-items: center; gap: 10px; }}
        .logo img {{ height: 40px; width: auto; object-fit: contain; }}
        .nav-links {{ display: flex; gap: 1.5rem; flex-wrap: wrap; justify-content: center; }}
        .nav-links a {{ text-decoration: none; color: var(--charcoal); font-weight: 600; font-size: 14px; transition: color 0.2s ease; }}
        .nav-links a:hover {{ color: var(--logo-red); }}
        .btn {{ background-color: var(--logo-red); color: var(--white); padding: 12px 28px; border: none; border-radius: 6px; font-weight: 600; cursor: pointer; text-decoration: none; transition: transform 0.2s, box-shadow 0.2s; }}
        .btn:hover {{ transform: translateY(-2px); box-shadow: 0 6px 15px rgba(192, 0, 0, 0.2); }}
        .menu-toggle {{ display: none; font-size: 24px; cursor: pointer; }}
        .product-layout {{ display: flex; padding: 80px 5%; gap: 60px; max-width: 1400px; margin: 0 auto; flex-wrap: wrap; }}
        .product-gallery {{ flex: 1; min-width: 300px; }}
        .main-image {{ width: 100%; min-height: 400px; background: var(--gray-light); border-radius: 16px; display: flex; align-items: center; justify-content: center; overflow: hidden; border: 1px solid var(--gray-border); padding: 20px; }}
        .main-image img {{ width: 100%; height: auto; object-fit: contain; mix-blend-mode: multiply; transition: transform 0.5s ease; }}
        .main-image:hover img {{ transform: scale(1.05); }}
        .product-details {{ flex: 1; min-width: 300px; display: flex; flex-direction: column; justify-content: center; }}
        .product-category {{ color: var(--logo-red); font-family: 'Barlow'; font-weight: 700; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px; }}
        .product-title {{ font-size: 48px; color: var(--ink); margin-bottom: 20px; line-height: 1.1; letter-spacing: -0.5px; }}
        .product-price {{ font-size: 32px; color: var(--charcoal); font-weight: bold; margin-bottom: 30px; font-family: 'Barlow'; }}
        .product-description {{ font-size: 18px; color: #555; margin-bottom: 40px; line-height: 1.8; }}
        .feature-list {{ list-style: none; margin-bottom: 50px; }}
        .feature-list li {{ padding-left: 36px; position: relative; margin-bottom: 16px; font-weight: 500; font-size: 16px; }}
        .feature-list li::before {{ content: '✓'; color: var(--white); background: var(--brand-yellow); width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; position: absolute; left: 0; top: -2px; font-size: 14px; font-weight: bold; }}
        .action-btns {{ display: flex; gap: 20px; flex-wrap: wrap; }}
        .action-btns .btn {{ padding: 16px 40px; font-size: 18px; text-align: center; flex: 1; min-width: 200px; }}
        .btn-outline {{ background: transparent; border: 2px solid var(--gray-border); color: var(--ink); }}
        .btn-outline:hover {{ border-color: var(--charcoal); transform: translateY(-2px); box-shadow: 0 6px 15px rgba(0,0,0,0.05); }}
        .specs-section {{ padding: 100px 5%; background: var(--gray-light); border-top: 1px solid var(--gray-border); }}
        .specs-container {{ max-width: 1000px; margin: 0 auto; background: var(--white); padding: 50px; border-radius: 16px; box-shadow: 0 10px 30px rgba(0,0,0,0.03); border: 1px solid var(--gray-border); }}
        .specs-title {{ font-size: 32px; color: var(--ink); margin-bottom: 40px; border-bottom: 3px solid var(--brand-yellow); padding-bottom: 15px; display: inline-block; }}
        .specs-grid {{ display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px; }}
        .spec-item {{ display: flex; justify-content: space-between; padding-bottom: 16px; border-bottom: 1px solid var(--gray-border); }}
        .spec-label {{ font-weight: 600; color: var(--charcoal); }}
        .spec-value {{ color: #777; font-weight: 500; }}
        @media (max-width: 900px) {{
            .nav-links {{ display: none; }}
            .menu-toggle {{ display: block; }}
            .product-layout {{ padding: 40px 5%; gap: 40px; }}
            .product-title {{ font-size: 38px; }}
        }}
        @media (max-width: 600px) {{
            .product-title {{ font-size: 32px; }}
            .action-btns {{ flex-direction: column; }}
            .action-btns .btn {{ width: 100%; }}
            .specs-container {{ padding: 30px 20px; }}
        }}
        footer {{ background-color: var(--ink); color: var(--white); padding: 80px 5% 40px; margin-top: auto; border-top: 5px solid var(--brand-yellow); }}
        .footer-grid {{ display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 40px; margin-bottom: 60px; }}
        .footer-col h4 {{ color: var(--brand-yellow); margin-bottom: 24px; font-size: 20px; letter-spacing: 0.5px; text-transform: uppercase; }}
        .about-text {{ color: #A0AEC0; font-size: 15px; line-height: 1.8; margin-bottom: 20px; }}
        .footer-col ul {{ list-style: none; }}
        .footer-col ul li {{ margin-bottom: 12px; }}
        .footer-col ul a, .footer-col p {{ color: #A0AEC0; text-decoration: none; font-size: 14px; transition: color 0.2s; display: inline-block; line-height: 1.6; }}
        .footer-col ul a:hover {{ color: var(--white); transform: translateX(5px); }}
        .footer-bottom {{ text-align: center; color: #555; padding-top: 30px; border-top: 1px solid #333; font-size: 14px; }}
</style>
</head>
<body>
<div class="utility-bar">
<a class="dealer-btn" href="contact_v2_stitch.html">Dealer Inquiry Form</a>
<div class="lang-dropdown">
<img alt="EN" src="https://flagcdn.com/w20/gb.png" width="16"/> English <i class="fas fa-caret-down"></i>
<div class="lang-menu">
<a href="#"><img alt="IN" src="https://flagcdn.com/w20/in.png" width="16"/> Hindi</a>
<a href="#"><img alt="IN" src="https://flagcdn.com/w20/in.png" width="16"/> Gujarati</a>
<a href="#"><img alt="IN" src="https://flagcdn.com/w20/in.png" width="16"/> Marathi</a>
<a href="#"><img alt="IN" src="https://flagcdn.com/w20/in.png" width="16"/> Tamil</a>
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
<a href="homepage_v4_stitch.html">Home</a>
<a href="product_catalog_v1.html">Product Categories</a>
<a href="spare_parts_v1.html">Spare Parts &amp; Accessories</a>
<a href="about_v1.html">About</a>
<a href="contact_v2_stitch.html">Contact Us</a>
<a href="media_v1_stitch.html">Media</a>
<a href="blog_v1.html">Blog</a>
</div>
<div class="menu-toggle">☰</div>
</nav>
<section class="product-layout">
<div class="product-gallery">
<div class="main-image"><img alt="{title}" src="{image}"/></div>
</div>
<div class="product-details">
<div class="product-category">Spare Parts &amp; Accessories</div>
<h1 class="product-title">{title}</h1>
<div class="product-price">Get Quote</div>
<p class="product-description">{desc}</p>
<ul class="feature-list">
<li>Genuine KrishiTek OEM spare part</li>
<li>Precision-manufactured for exact fit and performance</li>
<li>Compatible with: {compat}</li>
<li>Easy installation with standard tools</li>
<li>After-sales support and bulk order discounts available</li>
</ul>
<div class="action-btns">
<a class="btn" href="contact_v2_stitch.html">Get Quote</a>
<a class="btn btn-outline" href="spare_parts_v1.html">View All Spare Parts</a>
</div>
</div>
</section>
<section class="specs-section">
<div class="specs-container">
<h2 class="specs-title">Technical Specifications</h2>
<div class="specs-grid">
<div class="spec-item"><span class="spec-label">Part Name</span><span class="spec-value">{title}</span></div>
<div class="spec-item"><span class="spec-label">Material</span><span class="spec-value">{material}</span></div>
<div class="spec-item"><span class="spec-label">Compatibility</span><span class="spec-value">{compat}</span></div>
<div class="spec-item"><span class="spec-label">Warranty</span><span class="spec-value">Manufacturing Defect Covered</span></div>
<div class="spec-item"><span class="spec-label">Origin</span><span class="spec-value">Made in India</span></div>
</div>
</div>
</section>
<footer>
<div class="footer-grid">
<div class="footer-col" style="grid-column: span 2;">
<h4>About Us</h4>
<p class="about-text">We are a manufacturer of Agriculture Equipment. We design, develop and MAKE IN INDIA. We aspire to provide products and services to Farmers that are always customer-centric and can generate maximum value for what they have invested.</p>
</div>
<div class="footer-col">
<h4>Quick Links</h4>
<ul>
<li><a href="product_catalog_v1.html">Product Categories</a></li>
<li><a href="services_v1.html">Services</a></li>
<li><a href="spare_parts_v1.html">Spare Parts</a></li>
<li><a href="about_v1.html">About</a></li>
<li><a href="contact_v2_stitch.html">Contact Us</a></li>
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
<a href="contact_v2_stitch.html" style="background: var(--brand-yellow); color: var(--ink); padding: 8px 16px; border-radius: 4px; font-weight: bold; text-decoration: none;">Contact Us</a>
</div>
</div>
<div class="footer-bottom">© 2026 KrishiTek. All rights reserved.</div>
</footer>
<script src="../assets/chatbot_widget.js"></script>
</body>
</html>'''

# Build Reaptek Ki-120 page using the same template style as other product pages
reaptek_ki120 = build_spare_page.__code__  # placeholder - we'll build it separately

# Generate all 19 spare part pages
count = 0
for key, data in spare_parts.items():
    filename = f"{key}_product_page.html"
    filepath = os.path.join(PROJ, filename)
    if os.path.getsize(filepath) == 0:
        html = build_spare_page(key, data)
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(html)
        count += 1
        print(f"BUILT: {filename} ({os.path.getsize(filepath)} bytes)")

# Build reaptek_ki_120 product page
ki120_path = os.path.join(PROJ, 'reaptek_ki_120_product_page.html')
if os.path.exists(ki120_path) and os.path.getsize(ki120_path) == 0:
    with open(os.path.join(PROJ, 'reaptek_combine_4_8wp_product_page.html'), 'r', encoding='utf-8') as f:
        ki120_html = f.read()
    # Replace product-specific content
    ki120_html = ki120_html.replace('Power Reaper Cum Weeder (Reaptek Combine 4.8Wp)', 'Self Propelled Power Reaper (Reaptek Ki-120)')
    ki120_html = ki120_html.replace('Reaptek Combine 4.8Wp', 'Reaptek Ki-120')
    ki120_html = ki120_html.replace('Power-Reaper-Cum-Weeder-Dual-Function-300x300.jpg', 'Self-Propelled-Power-Reape-300x300.jpg')
    ki120_html = ki120_html.replace('A dual-function machine that operates as both a power weeder and a power reaper.', 'The Krishitek Self-Propelled Reaper is proudly manufactured in India, ensuring a 100% indigenous machine designed with Indian farmers in mind.')
    with open(ki120_path, 'w', encoding='utf-8') as f:
        f.write(ki120_html)
    count += 1
    print(f"BUILT: reaptek_ki_120_product_page.html ({os.path.getsize(ki120_path)} bytes)")

# Build contact_v5_premium (copy of contact_v2_stitch which is the final version)
for variant_copy in [
    ('contact_v2_stitch.html', 'contact_v5_premium.html'),
    ('contact_v2_stitch.html', 'contact_v4_practical.html'),
    ('contact_v2_stitch.html', 'contact_v3_uiux_promax.html'),
    ('about_v1.html', 'about_v4_practical.html'),
    ('about_v1.html', 'about_v2_uiux_promax.html'),
]:
    src, dst = variant_copy
    dst_path = os.path.join(PROJ, dst)
    if os.path.exists(dst_path) and os.path.getsize(dst_path) == 0:
        src_path = os.path.join(PROJ, src)
        if os.path.exists(src_path) and os.path.getsize(src_path) > 0:
            with open(src_path, 'r', encoding='utf-8') as f:
                content = f.read()
            with open(dst_path, 'w', encoding='utf-8') as f:
                f.write(content)
            count += 1
            print(f"COPIED: {src} -> {dst} ({os.path.getsize(dst_path)} bytes)")

print(f"\n=== TOTAL REBUILT: {count} files ===")

# Final check
still_empty = []
for root, dirs, files in os.walk(PROJ):
    if '.git' in root or 'node_modules' in root:
        continue
    for f in files:
        fp = os.path.join(root, f)
        if f.endswith('.html') and os.path.getsize(fp) == 0:
            still_empty.append(f)

if still_empty:
    print(f"Still empty: {still_empty}")
else:
    print("ALL HTML FILES NOW HAVE CONTENT!")
