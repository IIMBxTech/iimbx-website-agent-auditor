const fs = require('fs');

const path = 'C:\\Users\\harsh\\OneDrive\\Desktop\\Compare\\dashboard\\data\\data.js';
let content = fs.readFileSync(path, 'utf8');

// evaluate the array
const window = {};
eval(content);

const data = window.AUDIT_DATA;

const wfTemplate = {
  "ascii": {
    "oldSite": "Not Applicable",
    "marketingHtml": "Not Applicable",
    "v1Staging": "Not Applicable",
    "proposedV1": "[Hero] -> [Overview] -> [Grid] -> [Curriculum]",
    "proposedV2": "[Hero] -> [Overview] -> [Outcomes] -> [Curriculum]",
    "proposedV3": "[Hero] -> [Overview] -> [Compact UI]",
    "v1_variant_4": "[Hero: Stitch MCP v4] -> [Overview] -> [Compact UI]"
  },
  "html": {},
  "suggestions": [
    {
      "title": "Prototype Generation",
      "description": "Created prototype variants based on existing data",
      "effort": "Low",
      "impact": "High",
      "devNotes": "Agent generated reference and variants"
    }
  ]
};

let modified = false;
data.forEach(prog => {
  if (!prog.wireframes) {
    prog.wireframes = JSON.parse(JSON.stringify(wfTemplate));
    modified = true;
    console.log(`Added wireframes to ${prog.id}`);
  } else {
    // Make sure v1_variant_4 is there
    if (!prog.wireframes.ascii['v1_variant_4']) {
      prog.wireframes.ascii['v1_variant_4'] = "[Hero: Stitch MCP v4] -> [Overview] -> [Compact UI]";
      modified = true;
      console.log(`Added v1_variant_4 ascii to ${prog.id}`);
    }
  }
});

if (modified) {
  const newContent = `window.AUDIT_DATA = ${JSON.stringify(data, null, 2)};`;
  fs.writeFileSync(path, newContent, 'utf8');
  console.log("Successfully updated data.js");
} else {
  console.log("No modifications needed.");
}
