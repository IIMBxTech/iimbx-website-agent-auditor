const fs = require('fs');

const path = 'C:\\Users\\harsh\\OneDrive\\Desktop\\Compare\\dashboard\\data\\data.js';
let content = fs.readFileSync(path, 'utf8');

const window = {};
eval(content);

const data = window.AUDIT_DATA;

data.forEach(prog => {
  if (prog.wireframes && prog.wireframes.html) {
    // Clear out the HTML strings to make the file lightweight
    prog.wireframes.html = {};
  }
});

const newContent = `window.AUDIT_DATA = ${JSON.stringify(data, null, 2)};`;
fs.writeFileSync(path, newContent, 'utf8');
console.log("Successfully stripped heavy HTML strings from data.js");
