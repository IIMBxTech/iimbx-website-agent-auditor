import os
import re
import glob

def fix_tracking(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original_content = content
    
    # We want to match <h1...>, <h2...>, etc. with classes text-5xl, text-6xl, text-7xl, text-8xl, text-9xl
    # and if they don't have tracking-tight, we add it.
    
    def replacer(m):
        full_match = m.group(0)
        class_match = re.search(r'class=["\']([^"\']+)["\']', full_match)
        if class_match:
            classes = class_match.group(1)
            # check if large heading
            if re.search(r'\b(text-5xl|text-6xl|text-7xl|text-8xl|text-9xl)\b', classes):
                # check if missing tracking-tight
                if 'tracking-tight' not in classes:
                    # we only add it if it's a serif font or explicit font-family or font-display
                    if 'font-serif' in classes or 'font-display' in classes or 'Source Serif' in full_match:
                        new_classes = classes + " tracking-tight"
                        return full_match.replace(class_match.group(0), f'class="{new_classes}"')
        return full_match

    content = re.sub(r'<h[1-6][^>]*>', replacer, content)

    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Added tracking-tight in {os.path.basename(filepath)}")

if __name__ == "__main__":
    files = glob.glob('c:/Users/harsh/OneDrive/Desktop/Compare/prototypes/*.html')
    for f in files:
        fix_tracking(f)
