import os
import re

path = r"c:\Users\harsh\OneDrive\Desktop\Compare\prototypes\adm_stitch_v4.html"

banner = """
<div style="text-align:center; padding: 12px; font-weight:bold; color: #F4EFE3; background: #1A1B1E; border-bottom: 3px solid #C97138; font-size: 14px; position: sticky; top: 0; z-index: 9999; letter-spacing: 1px; text-transform: uppercase; font-family: Inter, sans-serif;">
    ✨ Stitch MCP used to create this prototype ✨
</div>
"""

styles = """
<style>
/* CSS Overrides to fix empty space and image bugs */
.py-64 { padding-top: 32px !important; padding-bottom: 32px !important; }
.py-32 { padding-top: 16px !important; padding-bottom: 16px !important; }
.gap-64 { gap: 32px !important; }
.gap-32 { gap: 16px !important; }
.my-64 { margin-top: 32px !important; margin-bottom: 32px !important; }
.mt-64 { margin-top: 32px !important; }
.mb-64 { margin-bottom: 32px !important; }

/* Fallback for broken images to show a solid block */
img {
    background-color: #1A1B1E;
    color: #F4EFE3;
    display: block;
    font-family: Inter, sans-serif;
    font-size: 12px;
    text-align: center;
    position: relative;
}
img::after {
    content: "Image Placeholder";
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-color: #1A1B1E;
    border: 1px solid #C97138;
}
</style>
"""

placeholder_img = "https://placehold.co/1200x800/1A1B1E/C97138?text=Image+Placeholder"

with open(path, 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Inject Styles
if "<head>" in html:
    html = html.replace("</head>", f"{styles}\n</head>")
else:
    html = styles + html
    
# 2. Inject Banner
if "<body>" in html:
    html = html.replace("<body>", f"<body>\n{banner}")
else:
    html = banner + html
    
# 3. Replace problematic img sources
def replace_img_src(match):
    src = match.group(1)
    if not src.startswith("http") or "contribution.usercontent" not in src:
        return f'src="{placeholder_img}"'
    return match.group(0)
    
html = re.sub(r'src="([^"]+)"', replace_img_src, html)

with open(path, 'w', encoding='utf-8') as f:
    f.write(html)
    
print(f"Processed {os.path.basename(path)}")
