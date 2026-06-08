import os
import re
import glob

def px_to_tailwind(px_str):
    try:
        px = float(px_str)
    except:
        return "text-base"
    if px <= 12: return "text-xs"
    if px <= 14: return "text-sm"
    if px <= 16: return "text-base"
    if px <= 18: return "text-lg"
    if px <= 20: return "text-xl"
    if px <= 24: return "text-2xl"
    if px <= 30: return "text-3xl"
    if px <= 36: return "text-4xl"
    if px <= 48: return "text-5xl"
    if px <= 60: return "text-6xl"
    if px <= 72: return "text-7xl"
    if px <= 96: return "text-8xl"
    return "text-9xl"

def vw_to_tailwind(vw_str):
    try:
        vw = float(vw_str)
    except:
        return "text-base"
    if vw <= 2: return "text-base"
    if vw <= 3: return "text-lg"
    if vw <= 4: return "text-2xl"
    if vw <= 6: return "text-4xl"
    if vw <= 10: return "text-7xl"
    return "text-9xl"

def replace_text_arbitrary(match):
    val = match.group(1)
    if val.endswith('px'):
        return px_to_tailwind(val[:-2])
    elif val.endswith('vw'):
        return vw_to_tailwind(val[:-2])
    else:
        return "text-base" # fallback

def fix_full_bleed(content):
    # We will search for tags with bg-, w-full, and max-w-
    # This is a bit tricky, let's just do targeted replacements based on what we saw
    
    # Pattern to match <TAG class="..."> that has all 3 properties
    pattern = r'(<(footer|nav|section|header)\s+[^>]*class=["\'])([^"\']*)(["\'][^>]*>)'
    
    def replacer(m):
        prefix = m.group(1)
        tag = m.group(2)
        classes = m.group(3)
        suffix = m.group(4)
        
        # Check if it has w-full, max-w-, and bg-
        if re.search(r'\bw-full\b', classes) and re.search(r'\bmax-w-[\w-]+\b', classes) and re.search(r'\bbg-[\w/-]+\b', classes):
            # We need to split classes into background-related and layout-related
            class_list = classes.split()
            bg_classes = []
            inner_classes = []
            for c in class_list:
                if c.startswith('bg-') or c == 'w-full' or c.startswith('border-') or c.startswith('dark:bg-'):
                    bg_classes.append(c)
                else:
                    inner_classes.append(c)
            
            # Reconstruct the tag
            new_tag = f'{prefix}{" ".join(bg_classes)}{suffix}\n<div class="{" ".join(inner_classes)} w-full">'
            return new_tag
        return m.group(0)

    new_content = re.sub(pattern, replacer, content)
    
    # We also need to add </div> before the closing tag, if we wrapped it.
    # To do this safely, we will just manually find and replace the closing tags in the files that were modified.
    # Actually, if we just modify the start tag, the HTML will be malformed.
    # Let's do it with a more manual approach for the 8 tags we found.
    return new_content

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original_content = content

    # 1. Arbitrary font sizes
    content = re.sub(r'text-\[([0-9.]+(?:px|vw|rem|em))\]', replace_text_arbitrary, content)

    # 2. Extreme staggering
    content = re.sub(r'\bmb-24\b', 'mb-12', content)
    content = re.sub(r'\bmb-32\b', 'mb-16', content)
    content = re.sub(r'\bmt-16\b', 'mt-8', content)
    content = re.sub(r'\bmt-20\b', 'mt-8', content)
    content = re.sub(r'\bmt-24\b', 'mt-12', content)
    content = re.sub(r'\bmt-32\b', 'mt-12', content)
    content = re.sub(r'\bmt-\[\d+px\]', 'mt-12', content)

    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Fixed typo/staggering in {os.path.basename(filepath)}")

if __name__ == "__main__":
    files = glob.glob('c:/Users/harsh/OneDrive/Desktop/Compare/prototypes/*.html')
    for f in files:
        process_file(f)
