import os
import re

app_js_path = r'c:\Users\harsh\OneDrive\Desktop\Compare\dashboard\js\app.js'
with open(app_js_path, 'r', encoding='utf-8') as f:
    app_js = f.read()

# Replace updateWfViews function entirely
new_updateWfViews = """
  function updateWfViews() {
    const friendlyLabels = {
      none: 'None',
      oldSite: 'Old Website',
      marketingHtml: 'Marketing HTML',
      v1Staging: currentProgramme.id === 'elp' ? 'V2 Staging (Original)' : 'V1 Staging',
      proposedV1: 'Proposed Layout v1',
      proposedV2: 'Proposed Layout v2',
      proposedV3: 'Proposed Layout v3',
      v1_variant_1: 'V1 Prototype 1 (Baseline)',
      v1_variant_2: 'V1 Prototype 2 (Dark Mode)',
      v1_variant_3: 'V1 Prototype 3 (Compact)',
      stitch_variant_1: 'Stitch Prototype 1',
      stitch_variant_2: 'Stitch Prototype 2',
      stitch_variant_3: 'Stitch Prototype 3',
      v1_variant_4: 'Stitch Prototype 4',
      v2Staging: 'V2 Staging URL',
      v2_variant_1: 'V2 Prototype 1 (Baseline)',
      v2_variant_2: 'V2 Prototype 2 (Navy Custom)',
      v2_variant_3: 'V2 Prototype 3 (Compact)',
      v2_variant_4: 'V2 Prototype 4 (Stitch)'
    };

    const colLeft = document.getElementById('wf-col-left');
    colLeft.style.display = 'flex';
    if (currentWfLeft === 'none') {
      wfLabelLeft.textContent = `Left: ${friendlyLabels['none']}`;
      wfPaneLeft.textContent = '';
    } else {
      wfLabelLeft.textContent = `Left: ${friendlyLabels[currentWfLeft]}`;
      wfPaneLeft.textContent = currentProgramme.wireframes[currentViewMode][currentWfLeft] || 'No wireframe available for this view';
    }
    
    const colMiddle = document.getElementById('wf-col-middle');
    if (colMiddle) {
      colMiddle.style.display = 'flex';
      if (currentWfMiddle === 'none') {
        wfLabelMiddle.textContent = `Middle: ${friendlyLabels['none']}`;
        wfPaneMiddle.textContent = '';
      } else {
        wfLabelMiddle.textContent = `Middle: ${friendlyLabels[currentWfMiddle]}`;
        wfPaneMiddle.textContent = currentProgramme.wireframes[currentViewMode][currentWfMiddle] || 'No wireframe available for this view';
      }
    }
    
    const colRight = document.getElementById('wf-col-right');
    colRight.style.display = 'flex';
    if (currentWfRight === 'none') {
      wfLabelRight.textContent = `Proposed Layout: ${friendlyLabels['none']}`;
      wfPaneRight.textContent = '';
    } else {
      wfLabelRight.textContent = `Proposed Layout: ${friendlyLabels[currentWfRight]}`;
      wfPaneRight.textContent = currentProgramme.wireframes[currentViewMode][currentWfRight] || 'No wireframe available for this view';
    }
    
    const previewBtn = document.getElementById('preview-html');
    if (previewBtn) {
      let v = friendlyLabels[currentWfRight] || 'V1';
      previewBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> Preview: ${v}`;
    }

    // Build options dynamically based on prog.id
    let options = `
      <option value="none">None</option>
      <option value="oldSite">Old Site</option>
      <option value="marketingHtml">Marketing HTML</option>
      <option value="v1Staging">${currentProgramme.id === 'elp' ? 'V2 Staging' : 'V1 Staging'}</option>
    `;

    if (currentProgramme.id === 'adm') {
        options += `
          <option value="v1_variant_1">V1 Prototype 1 (Baseline)</option>
          <option value="v1_variant_2">V1 Prototype 2 (Dark Mode)</option>
          <option value="v1_variant_3">V1 Prototype 3 (Compact)</option>
          <option value="stitch_variant_1">Stitch Prototype 1</option>
          <option value="stitch_variant_2">Stitch Prototype 2</option>
          <option value="stitch_variant_3">Stitch Prototype 3</option>
          <option value="v1_variant_4">Stitch Prototype 4</option>
        `;
    } else if (currentProgramme.id === 'elp') {
        options += `
          <option value="proposedV1">Proposed Layout v1</option>
          <option value="proposedV2">Proposed Layout v2</option>
          <option value="proposedV3">Proposed Layout v3</option>
          <option value="v1_variant_1">V1 Prototype 1 (Baseline)</option>
          <option value="v1_variant_2">V1 Prototype 2 (Dark Mode)</option>
          <option value="v1_variant_3">V1 Prototype 3 (Compact)</option>
          <option value="v1_variant_4">V1 Prototype 4 (Stitch)</option>
          <option value="v2_variant_1">V2 Prototype 1 (Baseline)</option>
          <option value="v2_variant_2">V2 Prototype 2 (Navy Custom)</option>
          <option value="v2_variant_3">V2 Prototype 3 (Compact)</option>
          <option value="v2_variant_4">V2 Prototype 4 (Stitch)</option>
        `;
    } else {
        // NAM, PCAIM, PCHM
        options += `
          <option value="proposedV1">Proposed Layout v1</option>
          <option value="proposedV2">Proposed Layout v2</option>
          <option value="proposedV3">Proposed Layout v3</option>
          <option value="v1_variant_4">Stitch Prototype 4</option>
        `;
    }

    // Replace the select options
    const setSelectOptions = (id, currentVal) => {
        const sel = document.getElementById(id);
        if (!sel) return;
        sel.innerHTML = options;
        sel.value = currentVal;
        // if the currentVal is not in the options (e.g. switching programmes), fallback to 'none'
        if (sel.value !== currentVal) {
            sel.value = 'none';
        }
    };

    // Ensure we don't duplicate the selects, just update them if they exist
    if (!document.getElementById('sel-left')) {
        wfSourceTabs.innerHTML = `
          <div style="display: flex; gap: 8px; align-items: center;">
            <select id="sel-left" style="padding: 6px 10px; border-radius: 6px; border: none; background: #2D3748; color: white; max-width: 200px; outline: none; cursor: pointer; font-size: 13px;"></select>
            <select id="sel-middle" style="padding: 6px 10px; border-radius: 6px; border: none; background: #2D3748; color: white; max-width: 200px; outline: none; cursor: pointer; font-size: 13px;"></select>
            <select id="sel-right" style="padding: 6px 10px; border-radius: 6px; border: none; background: #2D3748; color: white; max-width: 200px; outline: none; cursor: pointer; font-size: 13px;"></select>
          </div>
        `;
        document.getElementById('sel-left').addEventListener('change', (e) => { currentWfLeft = e.target.value; updateWfViews(); });
        document.getElementById('sel-middle').addEventListener('change', (e) => { currentWfMiddle = e.target.value; updateWfViews(); });
        document.getElementById('sel-right').addEventListener('change', (e) => { currentWfRight = e.target.value; updateWfViews(); });
    }

    setSelectOptions('sel-left', currentWfLeft);
    setSelectOptions('sel-middle', currentWfMiddle);
    setSelectOptions('sel-right', currentWfRight);
    
    // Also update our state variables in case they were invalidated by the switch
    currentWfLeft = document.getElementById('sel-left').value;
    currentWfMiddle = document.getElementById('sel-middle').value;
    currentWfRight = document.getElementById('sel-right').value;
  }
"""

app_js = re.sub(r'function updateWfViews\(\) \{[\s\S]+?\}\s*wfClose\.addEventListener', new_updateWfViews + "\n  wfClose.addEventListener", app_js)

# Also need to fix the Preview HTML file routing mapping
# The mapping logic is currently embedded in `renderActions()`
new_preview_routing = """
      document.getElementById('preview-html').addEventListener('click', () => {
        let fileUrl = '';
        if (prog.id === 'adm') {
            if (currentWfRight === 'v1_variant_1') fileUrl = '../prototypes/adm_v1_variant_1.html';
            else if (currentWfRight === 'v1_variant_2') fileUrl = '../prototypes/adm_v1_variant_2.html';
            else if (currentWfRight === 'v1_variant_3') fileUrl = '../prototypes/adm_v1_variant_3.html';
            else if (currentWfRight === 'stitch_variant_1') fileUrl = '../prototypes/adm_stitch_variant_1.html';
            else if (currentWfRight === 'stitch_variant_2') fileUrl = '../prototypes/adm_stitch_variant_2.html';
            else if (currentWfRight === 'stitch_variant_3') fileUrl = '../prototypes/adm_stitch_variant_3.html';
            else if (currentWfRight === 'v1_variant_4') fileUrl = '../prototypes/adm_stitch_v4.html';
        } else if (prog.id === 'elp') {
            if (currentWfRight === 'proposedV1') fileUrl = '../prototypes/elp_v1.html';
            else if (currentWfRight === 'proposedV2') fileUrl = '../prototypes/elp_v2.html';
            else if (currentWfRight === 'proposedV3') fileUrl = '../prototypes/elp_v3.html';
            else if (currentWfRight === 'v1_variant_1') fileUrl = '../prototypes/elp_v1_variant_1.html';
            else if (currentWfRight === 'v1_variant_2') fileUrl = '../prototypes/elp_v1_variant_2.html';
            else if (currentWfRight === 'v1_variant_3') fileUrl = '../prototypes/elp_v1_variant_3.html';
            else if (currentWfRight === 'v1_variant_4') fileUrl = '../prototypes/elp_v1_stitch_v4.html';
            else if (currentWfRight === 'v2_variant_1') fileUrl = '../prototypes/elp_v2_variant_1.html';
            else if (currentWfRight === 'v2_variant_2') fileUrl = '../prototypes/elp_v2_variant_2.html';
            else if (currentWfRight === 'v2_variant_3') fileUrl = '../prototypes/elp_v2_variant_3.html';
            else if (currentWfRight === 'v2_variant_4') fileUrl = '../prototypes/elp_v2_stitch_v4.html';
        } else {
            if (currentWfRight === 'proposedV1') fileUrl = `../prototypes/${prog.id}_v1.html`;
            else if (currentWfRight === 'proposedV2') fileUrl = `../prototypes/${prog.id}_v2.html`;
            else if (currentWfRight === 'proposedV3') fileUrl = `../prototypes/${prog.id}_v3.html`;
            else if (currentWfRight === 'v1_variant_4') fileUrl = `../prototypes/${prog.id}_stitch_v4.html`;
        }
        
        if (fileUrl) {
            window.open(fileUrl, '_blank');
        } else {
            alert('No preview available for this layout option.');
        }
      });
"""

app_js = re.sub(r"document\.getElementById\('preview-html'\)\.addEventListener\('click', \(\) => \{[\s\S]+?window\.open\(fileUrl, '_blank'\);\s*\}\);", new_preview_routing, app_js)

with open(app_js_path, 'w', encoding='utf-8') as f:
    f.write(app_js)
