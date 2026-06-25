import os
import re
import glob

# Target directory
target_dir = r"C:\Users\harsh\OneDrive\Desktop\website audit experimenet with new brand comp\prototypes"

html_files = glob.glob(os.path.join(target_dir, "*.html"))

fixed_count = 0
for filepath in html_files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original_content = content
    
    # 1. Arbitrary font sizes
    content = re.sub(r'\btext-\[\d+(px|vw|em|rem)\]\b', '', content)
    
    # 2. Extreme staggering
    content = re.sub(r'\b(mt|mb|pt|pb)-(16|20|24|32|40|48|56|64)\b', r'\1-8', content)
    
    # 3. Broken full-bleed backgrounds: removing max-w-max-width if w-full is present on the same class
    def fix_full_bleed(match):
        classes = match.group(1).split()
        if 'w-full' in classes and 'max-w-max-width' in classes:
            classes.remove('max-w-max-width')
        return 'class="' + ' '.join(classes) + '"'

    content = re.sub(r'class="([^"]*)"', fix_full_bleed, content)
    
    # cleanup extra spaces
    content = re.sub(r'class="\s+', 'class="', content)
    content = re.sub(r'\s+"', '"', content)

    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        fixed_count += 1
        print(f"Fixed {os.path.basename(filepath)}")

print(f"Health check and auto-fix complete. Fixed {fixed_count} files.")
