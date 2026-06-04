import re

path = r'C:\Users\harsh\OneDrive\Desktop\Compare\dashboard\js\app.js'
with open(path, 'r', encoding='utf-8') as f:
    app_js = f.read()

# I need to rewrite `fetchHtmlSource`
helper_func = """  function fetchHtmlSource(progId, paneId, targetElement) {
    targetElement.textContent = "Loading HTML source...";
    let fileUrl = '';
    
    // Specifically handle marketingHtml mapping to the physical file found at the root
    if (paneId === 'marketingHtml') {
        if (progId === 'adm') fileUrl = '../adm_old_site_reference_agent_gen.html';
        else if (progId === 'pcaim') fileUrl = '../AI_For_Managers_agent_gen.html';
        else if (progId === 'pchm') fileUrl = '../pchm_v1_marketing_html.html';
        else if (progId === 'nam') fileUrl = '../nam_v1_marketing_html.html';
        else if (progId === 'elp') fileUrl = '../elp_v1_marketing_html.html';
    } else if (progId === 'adm') {
        if (paneId === 'v1_variant_1') fileUrl = `../prototypes/adm_v1_variant_1.html`;
        else if (paneId === 'v1_variant_2') fileUrl = `../prototypes/adm_v1_variant_2.html`;
        else if (paneId === 'v1_variant_3') fileUrl = `../prototypes/adm_v1_variant_3.html`;
        else if (paneId === 'stitch_variant_1') fileUrl = `../prototypes/adm_stitch_variant_1.html`;
        else if (paneId === 'stitch_variant_2') fileUrl = `../prototypes/adm_stitch_variant_2.html`;
        else if (paneId === 'stitch_variant_3') fileUrl = `../prototypes/adm_stitch_variant_3.html`;
        else if (paneId === 'v1_variant_4') fileUrl = `../prototypes/adm_stitch_v4.html`;
    } else if (progId === 'elp') {
        if (paneId === 'proposedV1') fileUrl = `../prototypes/elp_v1.html`;
        else if (paneId === 'proposedV2') fileUrl = `../prototypes/elp_v2.html`;
        else if (paneId === 'proposedV3') fileUrl = `../prototypes/elp_v3.html`;
        else if (paneId === 'v1_variant_1') fileUrl = `../prototypes/elp_v1_variant_1.html`;
        else if (paneId === 'v1_variant_2') fileUrl = `../prototypes/elp_v1_variant_2.html`;
        else if (paneId === 'v1_variant_3') fileUrl = `../prototypes/elp_v1_variant_3.html`;
        else if (paneId === 'v2_variant_1') fileUrl = `../prototypes/elp_v2_variant_1.html`;
        else if (paneId === 'v2_variant_2') fileUrl = `../prototypes/elp_v2_variant_2.html`;
        else if (paneId === 'v2_variant_3') fileUrl = `../prototypes/elp_v2_variant_3.html`;
        else if (paneId === 'v1_variant_4') fileUrl = `../prototypes/elp_v1_stitch_v4.html`;
        else if (paneId === 'v2_variant_4') fileUrl = `../prototypes/elp_v2_stitch_v4.html`;
    } else {
        if (paneId === 'proposedV1') fileUrl = `../prototypes/${progId}_v1.html`;
        else if (paneId === 'proposedV2') fileUrl = `../prototypes/${progId}_v2.html`;
        else if (paneId === 'proposedV3') fileUrl = `../prototypes/${progId}_v3.html`;
        else if (paneId === 'v1_variant_4') fileUrl = `../prototypes/${progId}_stitch_v4.html`;
    }

    if (!fileUrl) {
        targetElement.textContent = "HTML not available for external URLs. Please check the actual site.";
        return;
    }

    fetch(fileUrl)
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.text();
        })
        .then(text => {
            targetElement.textContent = text;
        })
        .catch(err => {
            targetElement.textContent = "Failed to load HTML source: " + err.message;
        });
  }"""

# Find the start and end of fetchHtmlSource and replace it
start_idx = app_js.find('  function fetchHtmlSource')
end_idx = app_js.find('  function updateWfViews() {')
if start_idx != -1 and end_idx != -1:
    app_js = app_js[:start_idx] + helper_func + '\n\n' + app_js[end_idx:]

with open(path, 'w', encoding='utf-8') as f:
    f.write(app_js)
