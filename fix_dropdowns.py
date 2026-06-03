import re

app_path = r'c:\Users\harsh\OneDrive\Desktop\Compare\dashboard\js\app.js'
with open(app_path, 'r', encoding='utf-8') as f:
    app_content = f.read()

def replace_select(select_id, current_var):
    old_options = f"""      <select id="{select_id}" style="padding: 6px 10px; border-radius: 6px; border: none; background: #2D3748; color: white; max-width: 200px; outline: none; cursor: pointer; font-size: 13px;">
        <option value="none" ${{{current_var} === 'none' ? 'selected' : ''}}>None</option>
        <option value="oldSite" ${{{current_var} === 'oldSite' ? 'selected' : ''}}>Old Site</option>
        <option value="marketingHtml" ${{{current_var} === 'marketingHtml' ? 'selected' : ''}}>Marketing HTML</option>
        <option value="v1_variant_1" ${{{current_var} === 'v1_variant_1' ? 'selected' : ''}}>V1 Prototype 1 (Baseline)</option>
        <option value="v1_variant_2" ${{{current_var} === 'v1_variant_2' ? 'selected' : ''}}>V1 Prototype 2 (Dark Mode)</option>
        <option value="v1_variant_3" ${{{current_var} === 'v1_variant_3' ? 'selected' : ''}}>V1 Prototype 3 (Compact)</option>
        <option value="v2Staging" ${{{current_var} === 'v2Staging' ? 'selected' : ''}}>V2 Staging</option>
        <option value="v2_variant_1" ${{{current_var} === 'v2_variant_1' ? 'selected' : ''}}>V2 Prototype 1 (Baseline)</option>
        <option value="v2_variant_2" ${{{current_var} === 'v2_variant_2' ? 'selected' : ''}}>V2 Prototype 2 (Navy Custom)</option>
        <option value="v2_variant_3" ${{{current_var} === 'v2_variant_3' ? 'selected' : ''}}>V2 Prototype 3 (Compact)</option>
      </select>"""
      
    new_options = f"""      <select id="{select_id}" style="padding: 6px 10px; border-radius: 6px; border: none; background: #2D3748; color: white; max-width: 200px; outline: none; cursor: pointer; font-size: 13px;">
        <option value="none" ${{{current_var} === 'none' ? 'selected' : ''}}>None</option>
        <option value="oldSite" ${{{current_var} === 'oldSite' ? 'selected' : ''}}>Old Site</option>
        <option value="marketingHtml" ${{{current_var} === 'marketingHtml' ? 'selected' : ''}}>Marketing HTML</option>
        <option value="v1_variant_1" ${{{current_var} === 'v1_variant_1' ? 'selected' : ''}}>V1 Prototype 1 (Baseline)</option>
        <option value="v1_variant_2" ${{{current_var} === 'v1_variant_2' ? 'selected' : ''}}>V1 Prototype 2 (Dark Mode)</option>
        <option value="v1_variant_3" ${{{current_var} === 'v1_variant_3' ? 'selected' : ''}}>V1 Prototype 3 (Compact)</option>
        ${{currentProgramme.id === 'elp' ? `
        <option value="v2Staging" ${{{current_var} === 'v2Staging' ? 'selected' : ''}}>V2 Staging</option>
        <option value="v2_variant_1" ${{{current_var} === 'v2_variant_1' ? 'selected' : ''}}>V2 Prototype 1 (Baseline)</option>
        <option value="v2_variant_2" ${{{current_var} === 'v2_variant_2' ? 'selected' : ''}}>V2 Prototype 2 (Navy Custom)</option>
        <option value="v2_variant_3" ${{{current_var} === 'v2_variant_3' ? 'selected' : ''}}>V2 Prototype 3 (Compact)</option>
        ` : ''}}
      </select>"""
    return old_options, new_options

old1, new1 = replace_select('sel-left', 'currentWfLeft')
app_content = app_content.replace(old1, new1)

old2, new2 = replace_select('sel-middle', 'currentWfMiddle')
app_content = app_content.replace(old2, new2)

old3, new3 = replace_select('sel-right', 'currentWfRight')
app_content = app_content.replace(old3, new3)

with open(app_path, 'w', encoding='utf-8') as f:
    f.write(app_content)
