import os

replacements = [
    {
        "file": "adm_stitch_v4.html",
        "old": '<footer class="w-full bg-charcoal text-parchment flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-6 md:px-8 py-12 pb-32 md:pb-12 border-t border-charcoal/10">',
        "new": '<footer class="w-full bg-charcoal border-t border-charcoal/10">\n<div class="text-parchment flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-6 md:px-8 py-12 pb-32 md:pb-12 w-full">',
        "tag": "footer"
    },
    {
        "file": "adm_v1_variant_1.html",
        "old": '<footer class="w-full py-margin-desktop bg-charcoal dark:bg-charcoal-muted grid grid-cols-1 md:grid-cols-4 gap-gutter max-w-max-width mx-auto px-margin-desktop">',
        "new": '<footer class="w-full bg-charcoal dark:bg-charcoal-muted">\n<div class="py-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-gutter max-w-max-width mx-auto px-margin-desktop w-full">',
        "tag": "footer"
    },
    {
        "file": "adm_v1_variant_2.html",
        "old": '<footer class="w-full py-margin-desktop bg-charcoal dark:bg-charcoal-muted grid grid-cols-1 md:grid-cols-4 gap-gutter max-w-max-width mx-auto px-margin-desktop">',
        "new": '<footer class="w-full bg-charcoal dark:bg-charcoal-muted">\n<div class="py-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-gutter max-w-max-width mx-auto px-margin-desktop w-full">',
        "tag": "footer"
    },
    {
        "file": "contact_v2_stitch.html",
        "old": '<nav class="bg-surface flex justify-between items-center w-full px-margin-desktop max-w-max-width mx-auto h-20 border-b border-charcoal-muted/10">',
        "new": '<nav class="bg-surface w-full border-b border-charcoal-muted/10">\n<div class="flex justify-between items-center px-margin-desktop max-w-max-width mx-auto h-20 w-full">',
        "tag": "nav"
    },
    {
        "file": "contact_v2_stitch.html",
        "old": '<footer class="bg-charcoal w-full py-16 px-margin-desktop max-w-max-width mx-auto flex flex-col md:flex-row justify-between border-t border-charcoal-muted/20">',
        "new": '<footer class="bg-charcoal w-full border-t border-charcoal-muted/20">\n<div class="py-16 px-margin-desktop max-w-max-width mx-auto flex flex-col md:flex-row justify-between w-full">',
        "tag": "footer"
    },
    {
        "file": "nam_stitch_v4.html",
        "old": '<footer class="w-full bg-charcoal text-parchment flex flex-col justify-center items-center max-w-7xl mx-auto px-6 md:px-8 py-12 pb-24 md:pb-12 border-t border-charcoal-muted">',
        "new": '<footer class="w-full bg-charcoal border-t border-charcoal-muted">\n<div class="text-parchment flex flex-col justify-center items-center max-w-7xl mx-auto px-6 md:px-8 py-12 pb-24 md:pb-12 w-full">',
        "tag": "footer"
    },
    {
        "file": "pcaim_stitch_v4.html",
        "old": '<footer class="w-full bg-charcoal text-parchment flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-6 md:px-8 py-12 pb-24 md:pb-12 border-t border-marigold">',
        "new": '<footer class="w-full bg-charcoal border-t border-marigold">\n<div class="text-parchment flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-6 md:px-8 py-12 pb-24 md:pb-12 w-full">',
        "tag": "footer"
    },
    {
        "file": "pchm_stitch_v4.html",
        "old": '<footer class="w-full bg-charcoal text-parchment flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-6 md:px-8 py-12 pb-32 md:pb-12 border-t border-marigold">',
        "new": '<footer class="w-full bg-charcoal border-t border-marigold">\n<div class="text-parchment flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-6 md:px-8 py-12 pb-32 md:pb-12 w-full">',
        "tag": "footer"
    }
]

for r in replacements:
    path = os.path.join('c:/Users/harsh/OneDrive/Desktop/Compare/prototypes', r['file'])
    if os.path.exists(path):
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        if r['old'] in content:
            content = content.replace(r['old'], r['new'])
            
            # Now we need to append </div> right before the closing tag.
            # But the closing tag could be at the end of the file or somewhere else.
            # We will split at the last occurrence of </tag> or something.
            # Usually, there's only one </nav> and one </footer> in a file.
            closing = f"</{r['tag']}>"
            
            # Replace the *last* occurrence of the closing tag with "</div></tag>"
            # Just to be safe, rsplit with maxsplit=1
            parts = content.rsplit(closing, 1)
            if len(parts) == 2:
                content = parts[0] + f"</div>\n{closing}" + parts[1]
                
            with open(path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed full-bleed in {r['file']} for tag {r['tag']}")
