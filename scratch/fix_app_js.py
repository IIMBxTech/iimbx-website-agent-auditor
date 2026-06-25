with open(r"c:\Users\harsh\OneDrive\Desktop\Compare\dashboard\js\app.js", "r", encoding="utf-8") as f:
    js = f.read()

# 1. preview-html block
preview_block = """        } else if (prog.id === 'programmes_listing') {
            if (currentWfRight === 'v1_variant_1') fileUrl = '../output/programmes_list_variant_1_patched.html';
            else if (currentWfRight === 'v1_variant_2') fileUrl = '../output/programmes_list_variant_2_patched.html';
            else if (currentWfRight === 'v1_variant_3') fileUrl = '../output/programmes_list_variant_3_patched.html';
        } else {"""
js = js.replace("} else {\n            if (currentWfRight === 'proposedV1')", preview_block + "\n            if (currentWfRight === 'proposedV1')", 1)

# 2. dl-html block
dl_block = """            } else if (prog.id === 'programmes_listing') {
                if (paneId === 'v1_variant_1') fileUrl = '../output/programmes_list_variant_1_patched.html';
                else if (paneId === 'v1_variant_2') fileUrl = '../output/programmes_list_variant_2_patched.html';
                else if (paneId === 'v1_variant_3') fileUrl = '../output/programmes_list_variant_3_patched.html';
            } else {"""
js = js.replace("} else {\n                if (paneId === 'proposedV1')", dl_block + "\n                if (paneId === 'proposedV1')", 1)


# 3. fetchHtmlSource block
fetch_block = """    } else if (progId === 'programmes_listing') {
        if (paneId === 'v1_variant_1') fileUrl = '../output/programmes_list_variant_1_patched.html';
        else if (paneId === 'v1_variant_2') fileUrl = '../output/programmes_list_variant_2_patched.html';
        else if (paneId === 'v1_variant_3') fileUrl = '../output/programmes_list_variant_3_patched.html';
    } else {"""
js = js.replace("} else {\n        if (paneId === 'proposedV1')", fetch_block + "\n        if (paneId === 'proposedV1')", 1)


# 4. updateWfViews options block
options_block = """    } else if (currentProgramme.id === 'programmes_listing') {
        options += `
          <option value="v1_variant_1">Design 1 — Hybrid (Patched)</option>
          <option value="v1_variant_2">Design 2 — Masonry (Patched)</option>
          <option value="v1_variant_3">Design 3 — List (Patched)</option>
        `;
    } else {"""
js = js.replace("    } else {\n        // NAM, PCAIM, PCHM", options_block + "\n        // NAM, PCAIM, PCHM", 1)


with open(r"c:\Users\harsh\OneDrive\Desktop\Compare\dashboard\js\app.js", "w", encoding="utf-8") as f:
    f.write(js)
