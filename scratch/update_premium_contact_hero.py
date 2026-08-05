import re

with open("variants/contact_v5_premium.html", "r", encoding="utf-8") as f:
    html = f.read()

# CSS to update
new_css = """
    .premium-hero {
        position: relative;
        height: 380px; /* slightly shorter to fit the image nicely */
        background: #111111; /* solid dark to match the flat minimal vibe */
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 5%;
        overflow: hidden;
    }
    .premium-hero::before {
        content: '';
        position: absolute;
        inset: 0;
        background: radial-gradient(circle at top right, rgba(192,0,0,0.15) 0%, transparent 60%);
        z-index: 1;
    }
    .hero-content {
        position: relative;
        z-index: 2;
        max-width: 50%;
        text-align: left; /* align left for split layout */
    }
    .hero-eyebrow {
        font-size: 14px;
        font-weight: 800;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: #FDB913;
        margin-bottom: 12px;
        display: flex;
        align-items: center;
        gap: 8px;
    }
    .hero-eyebrow::before {
        content: '';
        width: 20px;
        height: 2px;
        background: #FDB913;
        display: inline-block;
    }
    .hero-content h1 {
        font-family: 'Barlow', sans-serif;
        font-size: 52px;
        font-weight: 800;
        margin-bottom: 16px;
        line-height: 1.1;
        color: #FFFFFF;
    }
    .hero-content h1 span {
        color: #C00000;
        display: inline-block;
        position: relative;
    }
    .hero-content h1 span::after {
        content: '';
        position: absolute;
        bottom: 8px;
        left: 0;
        right: 0;
        height: 8px;
        background: rgba(253,185,19,0.3);
        z-index: -1;
    }
    .hero-content p {
        font-size: 17px;
        color: #D1D5DB;
        line-height: 1.6;
        max-width: 90%;
    }
    
    .hero-image-wrap {
        position: absolute;
        right: 5%;
        bottom: -20px;
        height: 320px;
        width: 450px;
        z-index: 1;
        mix-blend-mode: screen;
        opacity: 0.95;
    }
    .hero-image-wrap img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: bottom right;
    }
    @media (max-width: 900px) {
        .premium-hero { height: auto; flex-direction: column; padding: 60px 5% 40px; text-align: center; }
        .hero-content { max-width: 100%; text-align: center; margin-bottom: 30px; }
        .hero-eyebrow { justify-content: center; }
        .hero-content p { max-width: 100%; }
        .hero-image-wrap { position: relative; right: auto; bottom: auto; height: 220px; width: 100%; }
    }
"""

# HTML to update
new_hero_html = """
<!-- Premium Hero -->
<section class="premium-hero">
    <div class="hero-content">
        <span class="hero-eyebrow">Support & Inquiries</span>
        <h1>Contact <span>Us</span></h1>
        <p>Whether you need technical support for your machinery, want to inquire about genuine spare parts, or are looking to join our nationwide dealer network, we are here to help.</p>
    </div>
    <div class="hero-image-wrap">
        <img src="../assets/contact_hero_transparent.png" alt="KrishiTek Support Team">
    </div>
</section>
"""

# Replace the CSS
css_pattern = re.compile(r'\.premium-hero \{.*?\n    \}', re.DOTALL)
html = re.sub(r'\.premium-hero\s*\{.*?(?=\.contact-wrapper)', new_css, html, flags=re.DOTALL)

# Replace the HTML
hero_pattern = re.compile(r'<!-- Premium Hero -->.*?<\/section>', re.DOTALL)
html = hero_pattern.sub(new_hero_html, html)

with open("variants/contact_v5_premium.html", "w", encoding="utf-8") as f:
    f.write(html)

print("Updated hero section successfully!")
