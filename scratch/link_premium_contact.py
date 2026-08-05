import os
import glob

def link_premium_contact():
    files = glob.glob("variants/*.html")
    for f in files:
        with open(f, "r", encoding="utf-8") as file:
            content = file.read()
            
        # Replace links pointing to contact_v2_stitch.html (or contact_v4) to contact_v5_premium.html
        content = content.replace('"contact_v2_stitch.html"', '"contact_v5_premium.html"')
        content = content.replace('"contact_v4_practical.html"', '"contact_v5_premium.html"')
        content = content.replace('"contact_v3_uiux_promax.html"', '"contact_v5_premium.html"')
        content = content.replace('"contact_v1.html"', '"contact_v5_premium.html"')
        
        with open(f, "w", encoding="utf-8") as file:
            file.write(content)

    print("Successfully updated all Contact Us links across the website to point to the new premium design!")

link_premium_contact()
