import re

with open("design_dashboard.html", "r", encoding="utf-8") as f:
    db_html = f.read()

# Clean up about variants
about_replacement = """            "about": {
                title: "About Us",
                desc: "Company story and values",
                variants: [
                    { name: "Clean Professional Layout", file: "variants/about_v4_practical.html" },
                    { name: "Original Stitch Layout", file: "variants/about_v1.html" }
                ]
            },"""
db_html = re.sub(r'"about": \{.*?\],?\s*\},', about_replacement, db_html, flags=re.DOTALL)

# Clean up contact variants
contact_replacement = """            "contact": {
                title: "Contact Us",
                desc: "Support and Inquiries page",
                variants: [
                    { name: "Clean Professional Layout", file: "variants/contact_v4_practical.html" },
                    { name: "Original Stitch Layout", file: "variants/contact_v2_stitch.html" }
                ]
            },"""
db_html = re.sub(r'"contact": \{.*?\],?\s*\},', contact_replacement, db_html, flags=re.DOTALL)

with open("design_dashboard.html", "w", encoding="utf-8") as f:
    f.write(db_html)

print("Dashboard cleaned up!")
