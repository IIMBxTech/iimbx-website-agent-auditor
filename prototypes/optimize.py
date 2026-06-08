import os
import re
import glob

def optimize_html(content):
    # 1. Eliminate redundant Tailwind classes in class="..."
    def deduplicate_classes(match):
        classes = match.group(1).split()
        seen = set()
        deduped = []
        for c in classes:
            if c not in seen:
                seen.add(c)
                deduped.append(c)
        return 'class="' + ' '.join(deduped) + '"'
    
    content = re.sub(r'class="([^"]+)"', deduplicate_classes, content)
    
    # 2. Reduce overly nested HTML structures (e.g., <div><div>...</div></div> without attributes)
    # Simple unwrapping of divs that only have another div inside them
    # Because full DOM parsing might break formatting, we use basic regex for safe cases
    content = re.sub(r'<div>\s*<div([^>]*)>', r'<div\1>', content)
    content = re.sub(r'</div>\s*</div>', r'</div>', content)

    # 3. Consolidate repetitive utility blocks (e.g., duplicate empty style tags)
    content = re.sub(r'<style>\s*</style>', '', content)
    
    # Also strip out empty classes
    content = content.replace('class=""', '')
    
    return content

def main():
    directory = "c:/Users/harsh/OneDrive/Desktop/Compare/prototypes"
    html_files = glob.glob(os.path.join(directory, "*.html"))
    
    total_files = len(html_files)
    modified_files = 0
    
    for filepath in html_files:
        with open(filepath, 'r', encoding='utf-8') as f:
            original = f.read()
            
        optimized = optimize_html(original)
        
        if original != optimized:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(optimized)
            modified_files += 1
            print(f"Optimized: {os.path.basename(filepath)}")
            
    print(f"\nOptimization complete. Modified {modified_files} out of {total_files} HTML files.")

if __name__ == "__main__":
    main()
