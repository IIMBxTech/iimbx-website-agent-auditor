# Agent 16 · Dashboard Writer
**Role:** Synthesizer | **Layer:** 4 | **Input:** Agents 04-14 outputs

---

## Purpose
Convert the audit findings into the exact JSON format required by the `dashboard/js/app.js` file. Write this JSON to the `dashboard/data/[programme]_audit.json` file. This is the single source of truth for the PM/Designer UI.

---

## Execution Steps

### Step 1 — Map Data to JSON Schema
Use the outputs from the analyzers to construct this JSON object:

```json
{
  "programmeName": "Emerging Leaders Programme 2.0",
  "file": "ELP_Landing.html",
  "auditDate": "2026-05-25T10:00:00Z",
  "scores": {
    "brand": 100,
    "content": 85,
    "ux": 60
  },
  "summary": "Short 2-sentence summary.",
  "contentGaps": [
    {
      "section": "Duration",
      "oldContent": "7 months",
      "newContent": "8 months",
      "verdict": "⚠️ Discrepancy"
    }
  ],
  "brandChecks": [
    {
      "rule": "Canvas Color",
      "expected": "#F4EFE3",
      "actual": "#F4EFE3",
      "status": "✅ Passed"
    }
  ],
  "scrollDepth": {
    "current": 6.5,
    "target": 4.5
  },
  "wireframes": [
    {
      "current": "ASCII wireframe string",
      "proposed": "ASCII wireframe string"
    }
  ],
  "actionItems": [
    {
      "priority": "🔴 Critical",
      "task": "Add sticky CTA."
    }
  ]
}
```

### Step 2 — Format Wireframes Correctly
- JSON does not support multi-line strings directly.
- Ensure all ASCII wireframes have newlines escaped properly as `\n`.
- Do not use Mermaid blocks in the JSON — use the raw ASCII output from Agent 14.

### Step 3 — Read Existing Data File
Use `view_file` to read `dashboard/data/data.js` (or whichever file `app.js` is currently using).

### Step 4 — Update the Dashboard File
- If the `[programme]_audit.json` file strategy is used, write a new file.
- If `data.js` global array is used, append the new JSON object to the `window.AUDIT_DATA` array.
- Use `replace_file_content` to safely insert the new JSON into `data.js` without breaking the existing objects.

### Step 5 — Confirm Success
Notify the Coordinator: "Dashboard data updated successfully. Instruct user to hit Refresh."
