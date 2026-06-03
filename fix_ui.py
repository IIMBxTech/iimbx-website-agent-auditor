import re

app_path = r'c:\Users\harsh\OneDrive\Desktop\Compare\dashboard\js\app.js'
with open(app_path, 'r', encoding='utf-8') as f:
    app_content = f.read()

# Replace the wfSourceTabs.innerHTML injection
old_pattern = r'wfSourceTabs\.innerHTML\s*=\s*`\s*<select id="sel-left"[^>]*>.*?</select>\s*`;'

new_dropdowns = """wfSourceTabs.innerHTML = `
      <div style="display: flex; gap: 8px; align-items: center;">
      <select id="sel-left" style="padding: 6px 10px; border-radius: 6px; border: none; background: #2D3748; color: white; max-width: 200px; outline: none; cursor: pointer; font-size: 13px;">
        <option value="none" ${currentWfLeft === 'none' ? 'selected' : ''}>None</option>
        <option value="oldSite" ${currentWfLeft === 'oldSite' ? 'selected' : ''}>Old Site</option>
        <option value="marketingHtml" ${currentWfLeft === 'marketingHtml' ? 'selected' : ''}>Marketing HTML</option>
        <option value="v1_variant_1" ${currentWfLeft === 'v1_variant_1' ? 'selected' : ''}>V1 Prototype 1 (Baseline)</option>
        <option value="v1_variant_2" ${currentWfLeft === 'v1_variant_2' ? 'selected' : ''}>V1 Prototype 2 (Dark Mode)</option>
        <option value="v1_variant_3" ${currentWfLeft === 'v1_variant_3' ? 'selected' : ''}>V1 Prototype 3 (Compact)</option>
        <option value="v2Staging" ${currentWfLeft === 'v2Staging' ? 'selected' : ''}>V2 Staging</option>
        <option value="v2_variant_1" ${currentWfLeft === 'v2_variant_1' ? 'selected' : ''}>V2 Prototype 1 (Baseline)</option>
        <option value="v2_variant_2" ${currentWfLeft === 'v2_variant_2' ? 'selected' : ''}>V2 Prototype 2 (Navy Custom)</option>
        <option value="v2_variant_3" ${currentWfLeft === 'v2_variant_3' ? 'selected' : ''}>V2 Prototype 3 (Compact)</option>
      </select>
      <select id="sel-middle" style="padding: 6px 10px; border-radius: 6px; border: none; background: #2D3748; color: white; max-width: 200px; outline: none; cursor: pointer; font-size: 13px;">
        <option value="none" ${currentWfMiddle === 'none' ? 'selected' : ''}>None</option>
        <option value="oldSite" ${currentWfMiddle === 'oldSite' ? 'selected' : ''}>Old Site</option>
        <option value="marketingHtml" ${currentWfMiddle === 'marketingHtml' ? 'selected' : ''}>Marketing HTML</option>
        <option value="v1_variant_1" ${currentWfMiddle === 'v1_variant_1' ? 'selected' : ''}>V1 Prototype 1 (Baseline)</option>
        <option value="v1_variant_2" ${currentWfMiddle === 'v1_variant_2' ? 'selected' : ''}>V1 Prototype 2 (Dark Mode)</option>
        <option value="v1_variant_3" ${currentWfMiddle === 'v1_variant_3' ? 'selected' : ''}>V1 Prototype 3 (Compact)</option>
        <option value="v2Staging" ${currentWfMiddle === 'v2Staging' ? 'selected' : ''}>V2 Staging</option>
        <option value="v2_variant_1" ${currentWfMiddle === 'v2_variant_1' ? 'selected' : ''}>V2 Prototype 1 (Baseline)</option>
        <option value="v2_variant_2" ${currentWfMiddle === 'v2_variant_2' ? 'selected' : ''}>V2 Prototype 2 (Navy Custom)</option>
        <option value="v2_variant_3" ${currentWfMiddle === 'v2_variant_3' ? 'selected' : ''}>V2 Prototype 3 (Compact)</option>
      </select>
      <select id="sel-right" style="padding: 6px 10px; border-radius: 6px; border: none; background: #2D3748; color: white; max-width: 200px; outline: none; cursor: pointer; font-size: 13px;">
        <option value="none" ${currentWfRight === 'none' ? 'selected' : ''}>None</option>
        <option value="oldSite" ${currentWfRight === 'oldSite' ? 'selected' : ''}>Old Site</option>
        <option value="marketingHtml" ${currentWfRight === 'marketingHtml' ? 'selected' : ''}>Marketing HTML</option>
        <option value="v1_variant_1" ${currentWfRight === 'v1_variant_1' ? 'selected' : ''}>V1 Prototype 1 (Baseline)</option>
        <option value="v1_variant_2" ${currentWfRight === 'v1_variant_2' ? 'selected' : ''}>V1 Prototype 2 (Dark Mode)</option>
        <option value="v1_variant_3" ${currentWfRight === 'v1_variant_3' ? 'selected' : ''}>V1 Prototype 3 (Compact)</option>
        <option value="v2Staging" ${currentWfRight === 'v2Staging' ? 'selected' : ''}>V2 Staging</option>
        <option value="v2_variant_1" ${currentWfRight === 'v2_variant_1' ? 'selected' : ''}>V2 Prototype 1 (Baseline)</option>
        <option value="v2_variant_2" ${currentWfRight === 'v2_variant_2' ? 'selected' : ''}>V2 Prototype 2 (Navy Custom)</option>
        <option value="v2_variant_3" ${currentWfRight === 'v2_variant_3' ? 'selected' : ''}>V2 Prototype 3 (Compact)</option>
      </select>
      </div>
`;"""

app_content = re.sub(old_pattern, new_dropdowns, app_content, flags=re.DOTALL)

with open(app_path, 'w', encoding='utf-8') as f:
    f.write(app_content)
