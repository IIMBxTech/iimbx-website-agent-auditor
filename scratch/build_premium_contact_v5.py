import re

def build_premium_contact():
    with open("variants/contact_v2_stitch.html", "r", encoding="utf-8") as f:
        html = f.read()

    # Extract top part (everything before <header class="page-header">)
    top_match = re.split(r'<!-- Page Header -->|<header class="page-header">', html, maxsplit=1)
    if len(top_match) < 2:
        print("Could not find header split")
        return
    top_part = top_match[0]

    # Extract bottom part (everything from <footer> onwards)
    bottom_match = re.split(r'<footer', html, maxsplit=1)
    if len(bottom_match) < 2:
        print("Could not find footer split")
        return
    bottom_part = "<footer" + bottom_match[1]

    # Premium CSS to append to top_part
    premium_css = """
    /* Premium UI/UX Contact Styles */
    body { background: #FFFFFF; font-family: 'Inter', sans-serif; color: #333333; }
    
    .premium-hero {
        position: relative;
        height: 450px;
        background: url('../assets/indian_dealership_showroom.jpg') center/cover no-repeat;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: #FFFFFF;
    }
    .premium-hero::before {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(135deg, rgba(26,26,26,0.9) 0%, rgba(0,0,0,0.6) 100%);
        z-index: 1;
    }
    .hero-content {
        position: relative;
        z-index: 2;
        max-width: 800px;
        padding: 0 20px;
    }
    .hero-eyebrow {
        font-size: 14px;
        font-weight: 800;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: #FDB913;
        margin-bottom: 16px;
        display: block;
    }
    .hero-content h1 {
        font-family: 'Barlow', sans-serif;
        font-size: 56px;
        font-weight: 800;
        margin-bottom: 20px;
        line-height: 1.1;
    }
    .hero-content p {
        font-size: 18px;
        color: #E5E7EB;
        line-height: 1.6;
    }

    .contact-wrapper {
        max-width: 1200px;
        margin: -80px auto 80px;
        position: relative;
        z-index: 10;
        display: grid;
        grid-template-columns: 1fr 1.2fr;
        gap: 40px;
        padding: 0 20px;
    }

    /* Contact Info Cards */
    .info-column {
        display: flex;
        flex-direction: column;
        gap: 24px;
    }
    .info-card {
        background: #FFFFFF;
        padding: 32px;
        border-radius: 16px;
        box-shadow: 0 12px 35px rgba(0,0,0,0.06);
        border: 1px solid #F3F4F6;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        display: flex;
        gap: 20px;
        align-items: flex-start;
    }
    .info-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 45px rgba(192,0,0,0.08);
        border-color: #FDB913;
    }
    .icon-box {
        width: 54px;
        height: 54px;
        background: #FEF2F2;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }
    .icon-box i {
        font-size: 24px;
        color: #C00000;
    }
    .info-text h3 {
        font-family: 'Barlow', sans-serif;
        font-size: 20px;
        font-weight: 700;
        color: #1A1A1A;
        margin-bottom: 8px;
    }
    .info-text p, .info-text a {
        font-size: 15px;
        color: #4B5563;
        line-height: 1.6;
        text-decoration: none;
    }
    .info-text a:hover {
        color: #C00000;
    }

    /* Modern Form */
    .form-column {
        background: #FFFFFF;
        padding: 48px;
        border-radius: 16px;
        box-shadow: 0 12px 40px rgba(0,0,0,0.08);
        border: 1px solid #E5E7EB;
    }
    .form-header {
        margin-bottom: 32px;
    }
    .form-header h2 {
        font-family: 'Barlow', sans-serif;
        font-size: 32px;
        font-weight: 800;
        color: #1A1A1A;
        margin-bottom: 8px;
    }
    .form-header p {
        color: #6B7280;
        font-size: 15px;
    }
    .input-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        margin-bottom: 20px;
    }
    .input-group {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    .input-group.full {
        grid-column: 1 / -1;
    }
    .input-group label {
        font-size: 13px;
        font-weight: 700;
        color: #374151;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }
    .premium-input {
        width: 100%;
        padding: 14px 16px;
        background: #F9FAFB;
        border: 2px solid #E5E7EB;
        border-radius: 8px;
        font-size: 15px;
        color: #1A1A1A;
        transition: all 0.2s ease;
        font-family: 'Inter', sans-serif;
    }
    .premium-input:focus {
        outline: none;
        border-color: #C00000;
        background: #FFFFFF;
        box-shadow: 0 0 0 4px rgba(192,0,0,0.1);
    }
    textarea.premium-input {
        resize: vertical;
        min-height: 120px;
    }
    .premium-btn {
        width: 100%;
        padding: 16px;
        background: #C00000;
        color: #FFFFFF;
        font-family: 'Barlow', sans-serif;
        font-size: 18px;
        font-weight: 700;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.3s ease;
        text-transform: uppercase;
        letter-spacing: 1px;
    }
    .premium-btn:hover {
        background: #A00000;
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(192,0,0,0.3);
    }

    /* Map Section */
    .premium-map {
        width: 100%;
        height: 500px;
        position: relative;
    }
    .premium-map iframe {
        width: 100%;
        height: 100%;
        border: 0;
        filter: grayscale(100%) contrast(1.1) opacity(0.8);
        transition: filter 0.5s ease;
    }
    .premium-map:hover iframe {
        filter: grayscale(0%) contrast(1) opacity(1);
    }

    @media (max-width: 900px) {
        .contact-wrapper {
            grid-template-columns: 1fr;
            margin-top: 40px;
        }
        .premium-hero { height: 350px; }
        .hero-content h1 { font-size: 40px; }
    }
    @media (max-width: 600px) {
        .input-grid { grid-template-columns: 1fr; }
        .form-column { padding: 30px 20px; }
    }
    """

    if "/* Premium UI/UX Contact Styles */" not in top_part:
        top_part = top_part.replace("</head>", f"<style>{premium_css}</style>\n</head>")

    middle_part = """
<!-- Premium Hero -->
<section class="premium-hero">
    <div class="hero-content">
        <span class="hero-eyebrow">Support & Dealership Inquiries</span>
        <h1>We're Here to <span>Help.</span></h1>
        <p>Whether you need technical support for your machinery, want to inquire about genuine spare parts, or are looking to join our nationwide dealer network.</p>
    </div>
</section>

<!-- Contact Block -->
<div class="contact-wrapper">
    
    <!-- Info Cards -->
    <div class="info-column">
        <div class="info-card">
            <div class="icon-box"><i class="fas fa-headset"></i></div>
            <div class="info-text">
                <h3>Customer Support</h3>
                <p>For service requests, warranty claims, and general inquiries.</p>
                <a href="tel:+919157062093" style="display:block; margin-top:8px; font-weight:700; color:#1A1A1A;">+91 91570 62093</a>
                <a href="mailto:info@krishitek.com" style="display:block; font-weight:600; color:#C00000;">info@krishitek.com</a>
            </div>
        </div>

        <div class="info-card">
            <div class="icon-box"><i class="fas fa-handshake"></i></div>
            <div class="info-text">
                <h3>Dealer Network</h3>
                <p>Interested in becoming a KrishiTek authorized dealer?</p>
                <a href="mailto:dealers@krishitek.com" style="display:block; margin-top:8px; font-weight:600; color:#C00000;">dealers@krishitek.com</a>
            </div>
        </div>

        <div class="info-card">
            <div class="icon-box"><i class="fas fa-map-marker-alt"></i></div>
            <div class="info-text">
                <h3>Headquarters</h3>
                <p>Plot No. 22, Prime Industrial Park,<br>Santej, Ahmedabad,<br>Gujarat 382721</p>
            </div>
        </div>
    </div>

    <!-- Contact Form -->
    <div class="form-column">
        <div class="form-header">
            <h2>Send a Message</h2>
            <p>Fill out the form below and our team will get back to you within 24 hours.</p>
        </div>
        <form action="#" method="POST">
            <div class="input-grid">
                <div class="input-group">
                    <label>First Name</label>
                    <input type="text" class="premium-input" placeholder="e.g. Ramesh" required>
                </div>
                <div class="input-group">
                    <label>Last Name</label>
                    <input type="text" class="premium-input" placeholder="e.g. Patel" required>
                </div>
                <div class="input-group">
                    <label>Phone Number</label>
                    <input type="tel" class="premium-input" placeholder="+91" required>
                </div>
                <div class="input-group">
                    <label>Inquiry Type</label>
                    <select class="premium-input">
                        <option>General Support</option>
                        <option>Spare Parts</option>
                        <option>Dealership</option>
                        <option>Warranty Claim</option>
                    </select>
                </div>
                <div class="input-group full">
                    <label>Your Message</label>
                    <textarea class="premium-input" placeholder="How can we help you?" required></textarea>
                </div>
            </div>
            <button type="submit" class="premium-btn">Send Message <i class="fas fa-paper-plane" style="margin-left:8px;"></i></button>
        </form>
    </div>

</div>

<!-- Premium Map -->
<section class="premium-map">
    <iframe src="https://maps.google.com/maps?q=Krishitek+Industries+Pvt+Ltd,+Plot+No.+22,+Prime+Industrial+Park,+Santej,+Ahmedabad,+Gujarat+382721&t=&z=15&ie=UTF8&iwloc=&output=embed" allowfullscreen="" loading="lazy"></iframe>
</section>
"""

    full_html = top_part + middle_part + bottom_part

    with open("variants/contact_v5_premium.html", "w", encoding="utf-8") as f:
        f.write(full_html)
        
    print("Built variants/contact_v5_premium.html successfully!")

    # Update dashboard
    with open("design_dashboard.html", "r", encoding="utf-8") as f:
        db_html = f.read()
    
    # We'll just prepend this new variant to the contact array
    db_html = db_html.replace(
        '"contact": {\n                title: "Contact Us",\n                desc: "Support and Inquiries page",\n                variants: [',
        '"contact": {\n                title: "Contact Us",\n                desc: "Support and Inquiries page",\n                variants: [\n                    { name: "Premium Redesign (New)", file: "variants/contact_v5_premium.html" },'
    )
    
    with open("design_dashboard.html", "w", encoding="utf-8") as f:
        f.write(db_html)
        
    print("Updated dashboard!")

build_premium_contact()
