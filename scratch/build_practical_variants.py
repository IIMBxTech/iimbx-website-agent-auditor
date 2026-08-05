import os
import re

def build_practical_variants():
    # 2. Build Practical Contact Us
    with open("variants/contact_v2_stitch.html", "r", encoding="utf-8") as f:
        contact_html = f.read()

    compact_hero_css = """
    /* Compact Practical Hero */
    .page-header {
        background: #111111 !important;
        padding: 40px 5% !important;
        height: 250px !important; /* Approx 2.5 inches */
        display: flex;
        align-items: center;
        justify-content: space-between;
        overflow: hidden;
        position: relative;
    }
    .page-header-left {
        position: relative;
        z-index: 2;
        max-width: 50%;
    }
    .page-title {
        font-size: 36px !important;
        color: #FFFFFF !important;
        margin-bottom: 10px !important;
    }
    .page-subtitle {
        font-size: 16px !important;
        color: #CCCCCC !important;
    }
    .page-header-right {
        position: absolute;
        right: 5%;
        bottom: -20px;
        height: 280px;
        width: 400px;
        z-index: 1;
        mix-blend-mode: screen;
        opacity: 0.9;
    }
    .page-header-right img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: bottom right;
    }
    @media (max-width: 768px) {
        .page-header { height: auto !important; flex-direction: column; padding-top: 60px !important; }
        .page-header-left { max-width: 100%; text-align: center; margin-bottom: 30px; }
        .page-header-right { position: relative; right: auto; bottom: auto; height: 200px; }
    }
    """

    if "/* Compact Practical Hero */" not in contact_html:
        contact_html = contact_html.replace("</head>", f"<style>{compact_hero_css}</style>\n</head>")

    with open("variants/contact_v4_practical.html", "w", encoding="utf-8") as f:
        f.write(contact_html)

    print("Successfully built practical variants!")

build_practical_variants()
