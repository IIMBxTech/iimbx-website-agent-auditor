import os

files_to_fix = [
    r"c:\Users\harsh\OneDrive\Desktop\Compare\output\programmes_list_variant_1_patched.html",
    r"c:\Users\harsh\OneDrive\Desktop\Compare\output\programmes_list_variant_2_patched.html",
    r"c:\Users\harsh\OneDrive\Desktop\Compare\output\programmes_list_variant_3_patched.html",
    r"c:\Users\harsh\OneDrive\Desktop\Compare\prototypes\programmes_list_variant_1.html",
    r"c:\Users\harsh\OneDrive\Desktop\Compare\prototypes\programmes_list_variant_2.html",
    r"c:\Users\harsh\OneDrive\Desktop\Compare\prototypes\programmes_list_variant_3.html"
]

for file_path in files_to_fix:
    if not os.path.exists(file_path):
        continue
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Replacements
    content = content.replace("Institutional Academic Registry", "IIMBx")
    content = content.replace("© 2024 IIMBx.", "© 2026 IIMBx.")
    content = content.replace("Contact Research Office", "Contact Us")

    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)

print("Footers fixed successfully in all 6 files.")
