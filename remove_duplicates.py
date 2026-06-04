import os
import re

# 1. Delete the physical duplicate files
files_to_delete = [
    r"C:\Users\harsh\OneDrive\Desktop\Compare\prototypes\adm_stitch_variant_1.html",
    r"C:\Users\harsh\OneDrive\Desktop\Compare\prototypes\adm_stitch_variant_2.html",
    r"C:\Users\harsh\OneDrive\Desktop\Compare\prototypes\adm_stitch_variant_3.html"
]

for file_path in files_to_delete:
    if os.path.exists(file_path):
        os.remove(file_path)
        print(f"Deleted: {file_path}")

# 2. Update data.js to remove them from UI
data_js_path = r"C:\Users\harsh\OneDrive\Desktop\Compare\dashboard\data\data.js"
with open(data_js_path, 'r', encoding='utf-8') as f:
    data_content = f.read()

# We need to remove the keys stitch_variant_1, stitch_variant_2, stitch_variant_3 from data.js.
# They look like: "stitch_variant_1": "[Hero] -> [Overview] -> [Modules]",
# We will just use regex to remove those lines globally.

data_content = re.sub(r'\s*"stitch_variant_1":\s*".*?",', '', data_content)
data_content = re.sub(r'\s*"stitch_variant_2":\s*".*?",', '', data_content)
data_content = re.sub(r'\s*"stitch_variant_3":\s*".*?",', '', data_content)

# In case the last one didn't have a comma, it wouldn't match. Let's make comma optional.
# Actually, wait. Let's be very careful to only replace it if it's there.
data_content = re.sub(r'\s*"stitch_variant_[123]":\s*".*?"(?:,)?', '', data_content)

with open(data_js_path, 'w', encoding='utf-8') as f:
    f.write(data_content)
print("Updated data.js")

# 3. Update app.js to remove routing
app_js_path = r"C:\Users\harsh\OneDrive\Desktop\Compare\dashboard\js\app.js"
with open(app_js_path, 'r', encoding='utf-8') as f:
    app_content = f.read()

# Remove the lines referring to stitch_variant_[123]
lines = app_content.split('\n')
new_lines = [line for line in lines if "stitch_variant_1" not in line and "stitch_variant_2" not in line and "stitch_variant_3" not in line]

with open(app_js_path, 'w', encoding='utf-8') as f:
    f.write('\n'.join(new_lines))
print("Updated app.js")

