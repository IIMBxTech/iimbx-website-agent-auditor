filepath = 'variants/homepage_v4_stitch.html'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the form feed character with \f
# The form feed character is ASCII 12, which is '\x0c' in Python
# We want it to be literally '\f105' in the HTML string, so '\\f105'
if '\x0c105' in content:
    content = content.replace('\x0c105', '\\f105')
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print("Fixed form feed bug!")
else:
    print("No form feed bug found.")
