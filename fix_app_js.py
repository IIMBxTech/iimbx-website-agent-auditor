import re

path = r'c:\Users\harsh\OneDrive\Desktop\Compare\dashboard\js\app.js'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix the button text logic
old_btn_logic = """      if (currentWfRight === 'v2_variant_3') v = 'V2 Prototype 3';"""
new_btn_logic = """      if (currentWfRight === 'v2_variant_3') v = 'V2 Prototype 3';
      if (currentWfRight === 'v1_variant_4') v = 'V1 Prototype 4 (Stitch)';
      if (currentWfRight === 'v2_variant_4') v = 'V2 Prototype 4 (Stitch)';"""
content = content.replace(old_btn_logic, new_btn_logic)

# Fix the file URL logic
old_url_logic = """        if (currentWfRight.startsWith('v1_variant_')) version = currentWfRight;
        if (currentWfRight.startsWith('v2_variant_')) version = currentWfRight;
        const fileUrl = `../prototypes/${prog.id}_${version}.html`;"""
new_url_logic = """        if (currentWfRight.startsWith('v1_variant_')) version = currentWfRight;
        if (currentWfRight.startsWith('v2_variant_')) version = currentWfRight;
        
        let fileUrl = `../prototypes/${prog.id}_${version}.html`;
        if (currentWfRight === 'v1_variant_4') {
            if (prog.id === 'elp') {
                fileUrl = `../prototypes/elp_v1_stitch_v4.html`;
            } else {
                fileUrl = `../prototypes/${prog.id}_stitch_v4.html`;
            }
        } else if (currentWfRight === 'v2_variant_4') {
            fileUrl = `../prototypes/elp_v2_stitch_v4.html`;
        }
        """
content = content.replace(old_url_logic, new_url_logic)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)
