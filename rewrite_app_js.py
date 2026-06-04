import re

path = r'C:\Users\harsh\OneDrive\Desktop\Compare\dashboard\js\app.js'
with open(path, 'r', encoding='utf-8') as f:
    app_js = f.read()

download_logic = """          activePanes.forEach(paneId => {
            let fileUrl = '';
            if (prog.id === 'adm') {
                if (paneId === 'v1_variant_1') fileUrl = `../prototypes/adm_v1_variant_1.html`;
                else if (paneId === 'v1_variant_2') fileUrl = `../prototypes/adm_v1_variant_2.html`;
                else if (paneId === 'v1_variant_3') fileUrl = `../prototypes/adm_v1_variant_3.html`;
                else if (paneId === 'stitch_variant_1') fileUrl = `../prototypes/adm_stitch_variant_1.html`;
                else if (paneId === 'stitch_variant_2') fileUrl = `../prototypes/adm_stitch_variant_2.html`;
                else if (paneId === 'stitch_variant_3') fileUrl = `../prototypes/adm_stitch_variant_3.html`;
                else if (paneId === 'v1_variant_4') fileUrl = `../prototypes/adm_stitch_v4.html`;
            } else if (prog.id === 'elp') {
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
                if (paneId === 'proposedV1') fileUrl = `../prototypes/${prog.id}_v1.html`;
                else if (paneId === 'proposedV2') fileUrl = `../prototypes/${prog.id}_v2.html`;
                else if (paneId === 'proposedV3') fileUrl = `../prototypes/${prog.id}_v3.html`;
                else if (paneId === 'v1_variant_4') fileUrl = `../prototypes/${prog.id}_stitch_v4.html`;
            }

            if (!fileUrl) {
                // Ignore external live sites for physical file download
                return;
            }

            const a = document.createElement('a');
            a.href = fileUrl;
            a.download = fileUrl.split('/').pop();
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
          });"""

old_download = """          activePanes.forEach(paneId => {
            const htmlContent = prog.wireframes.html[paneId] || 'No HTML available';
            const blob = new Blob([htmlContent], { type: 'text/html' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${prog.shortName}_${paneId}.html`;
            a.click();
            URL.revokeObjectURL(url);
          });"""

app_js = app_js.replace(old_download, download_logic)

# Replace the text content setting
old_text1 = "wfPaneLeft.textContent = currentProgramme.wireframes[currentViewMode][currentWfLeft] || 'No wireframe available for this view';"
new_text1 = "wfPaneLeft.textContent = currentProgramme.wireframes[currentViewMode][currentWfLeft] || (currentViewMode === 'html' ? 'HTML source code is now physically separated to make the dashboard lighter.\\nPlease use the \"Download HTML Codes\" or \"Preview HTML\" buttons instead.' : 'No wireframe available for this view');"
app_js = app_js.replace(old_text1, new_text1)

old_text2 = "wfPaneMiddle.textContent = currentProgramme.wireframes[currentViewMode][currentWfMiddle] || 'No wireframe available for this view';"
new_text2 = "wfPaneMiddle.textContent = currentProgramme.wireframes[currentViewMode][currentWfMiddle] || (currentViewMode === 'html' ? 'HTML source code is now physically separated to make the dashboard lighter.\\nPlease use the \"Download HTML Codes\" or \"Preview HTML\" buttons instead.' : 'No wireframe available for this view');"
app_js = app_js.replace(old_text2, new_text2)

old_text3 = "wfPaneRight.textContent = currentProgramme.wireframes[currentViewMode][currentWfRight] || 'No wireframe available for this view';"
new_text3 = "wfPaneRight.textContent = currentProgramme.wireframes[currentViewMode][currentWfRight] || (currentViewMode === 'html' ? 'HTML source code is now physically separated to make the dashboard lighter.\\nPlease use the \"Download HTML Codes\" or \"Preview HTML\" buttons instead.' : 'No wireframe available for this view');"
app_js = app_js.replace(old_text3, new_text3)

with open(path, 'w', encoding='utf-8') as f:
    f.write(app_js)
