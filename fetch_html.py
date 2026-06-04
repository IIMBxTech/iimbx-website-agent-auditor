import re

path = r'C:\Users\harsh\OneDrive\Desktop\Compare\dashboard\js\app.js'
with open(path, 'r', encoding='utf-8') as f:
    app_js = f.read()

# Helper function
helper_func = """  function fetchHtmlSource(progId, paneId, targetElement) {
    targetElement.textContent = "Loading HTML source...";
    let fileUrl = '';
    if (progId === 'adm') {
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
  }

  function updateWfViews() {"""

app_js = app_js.replace("  function updateWfViews() {", helper_func)

# Replace the assignment for Left
old_left = "wfPaneLeft.textContent = currentProgramme.wireframes[currentViewMode][currentWfLeft] || (currentViewMode === 'html' ? 'HTML source code is now physically separated to make the dashboard lighter.\\nPlease use the \"Download HTML Codes\" or \"Preview HTML\" buttons instead.' : 'No wireframe available for this view');"
new_left = """      if (currentViewMode === 'html') {
        fetchHtmlSource(currentProgramme.id, currentWfLeft, wfPaneLeft);
      } else {
        wfPaneLeft.textContent = currentProgramme.wireframes[currentViewMode][currentWfLeft] || 'No wireframe available for this view';
      }"""
app_js = app_js.replace(old_left, new_left)

# Replace the assignment for Middle
old_middle = "wfPaneMiddle.textContent = currentProgramme.wireframes[currentViewMode][currentWfMiddle] || (currentViewMode === 'html' ? 'HTML source code is now physically separated to make the dashboard lighter.\\nPlease use the \"Download HTML Codes\" or \"Preview HTML\" buttons instead.' : 'No wireframe available for this view');"
new_middle = """        if (currentViewMode === 'html') {
          fetchHtmlSource(currentProgramme.id, currentWfMiddle, wfPaneMiddle);
        } else {
          wfPaneMiddle.textContent = currentProgramme.wireframes[currentViewMode][currentWfMiddle] || 'No wireframe available for this view';
        }"""
app_js = app_js.replace(old_middle, new_middle)

# Replace the assignment for Right
old_right = "wfPaneRight.textContent = currentProgramme.wireframes[currentViewMode][currentWfRight] || (currentViewMode === 'html' ? 'HTML source code is now physically separated to make the dashboard lighter.\\nPlease use the \"Download HTML Codes\" or \"Preview HTML\" buttons instead.' : 'No wireframe available for this view');"
new_right = """      if (currentViewMode === 'html') {
        fetchHtmlSource(currentProgramme.id, currentWfRight, wfPaneRight);
      } else {
        wfPaneRight.textContent = currentProgramme.wireframes[currentViewMode][currentWfRight] || 'No wireframe available for this view';
      }"""
app_js = app_js.replace(old_right, new_right)

with open(path, 'w', encoding='utf-8') as f:
    f.write(app_js)
