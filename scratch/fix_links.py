import os, glob
for f in glob.glob('**/*.html', recursive=True):
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    if 'homepage_v4_stitch.html#about' in content:
        content = content.replace('homepage_v4_stitch.html#about', 'about_v1.html')
        with open(f, 'w', encoding='utf-8') as file:
            file.write(content)
