import re

app_path = r'c:\Users\harsh\OneDrive\Desktop\Compare\dashboard\js\app.js'
with open(app_path, 'r', encoding='utf-8') as f:
    app_content = f.read()

# Fix preview-html click handler
old_click = r"""      document\.getElementById\('preview-html'\)\.addEventListener\('click', \(\) => \{
        let version = 'v1';
        if \(currentWfRight === 'proposedV2'\) version = 'v2';
        if \(currentWfRight === 'proposedV3'\) version = 'v3';
        const fileUrl = `\.\./prototypes/\$\{prog\.id\}_\$\{version\}\.html`;"""

new_click = """      document.getElementById('preview-html').addEventListener('click', () => {
        let version = 'v1';
        if (currentWfRight === 'proposedV2') version = 'v2';
        if (currentWfRight === 'proposedV3') version = 'v3';
        if (currentWfRight.startsWith('v1_variant_')) version = currentWfRight;
        if (currentWfRight.startsWith('v2_variant_')) version = currentWfRight;
        const fileUrl = `../prototypes/${prog.id}_${version}.html`;"""

app_content = re.sub(old_click, new_click, app_content)

# Fix preview btn text
old_text = r"""    const previewBtn = document\.getElementById\('preview-html'\);
    if \(previewBtn\) \{
      let v = 'v1';
      if \(currentWfRight === 'proposedV2'\) v = 'v2';
      if \(currentWfRight === 'proposedV3'\) v = 'v3';
      previewBtn\.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> Preview Prototype HTML \$\{v\.toUpperCase\(\)\}`;
    \}"""

new_text = """    const previewBtn = document.getElementById('preview-html');
    if (previewBtn) {
      let v = 'V1';
      if (currentWfRight === 'proposedV2') v = 'V2';
      if (currentWfRight === 'proposedV3') v = 'V3';
      if (currentWfRight === 'v1_variant_1') v = 'V1 Prototype 1';
      if (currentWfRight === 'v1_variant_2') v = 'V1 Prototype 2';
      if (currentWfRight === 'v1_variant_3') v = 'V1 Prototype 3';
      if (currentWfRight === 'v2_variant_1') v = 'V2 Prototype 1';
      if (currentWfRight === 'v2_variant_2') v = 'V2 Prototype 2';
      if (currentWfRight === 'v2_variant_3') v = 'V2 Prototype 3';
      previewBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> Preview: ${v}`;
    }"""

app_content = re.sub(old_text, new_text, app_content)

with open(app_path, 'w', encoding='utf-8') as f:
    f.write(app_content)
