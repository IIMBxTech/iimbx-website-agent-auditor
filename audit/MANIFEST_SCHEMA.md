# Audit Manifest — JSON Schema Reference
**Purpose:** Documents the exact JSON structure that workers write to and the Executor reads from. No ambiguity at runtime.

---

## File Location

```
audit/manifest.json
```

---

## Full Schema

```json
{
  "target_file": "string — absolute path to the HTML file being audited",
  "task": "string — one-sentence description of what the audit/fix is for",
  "created_at": "string — ISO 8601 timestamp",
  "workers": {
    "brand": {
      "status": "pending | running | done | error",
      "started_at": "string — ISO 8601 timestamp (set by worker on start)",
      "completed_at": "string — ISO 8601 timestamp (set by worker on completion)",
      "findings": [
        {
          "type": "color | font | voice",
          "element": "string — CSS selector, line number, or DOM path",
          "current": "string — the current value found in the HTML",
          "required": "string — the correct value per BRAND_DATA.md",
          "confidence": "high | low"
        }
      ]
    },
    "content": {
      "status": "pending | running | done | error",
      "started_at": "string",
      "completed_at": "string",
      "findings": [
        {
          "type": "missing_section | wrong_fact | extra_content",
          "detail": "string — human-readable description of the issue",
          "confidence": "high | low"
        }
      ]
    },
    "ux_tech": {
      "status": "pending | running | done | error",
      "started_at": "string",
      "completed_at": "string",
      "findings": [
        {
          "type": "mobile | a11y | seo",
          "element": "string — CSS selector, tag name, or DOM path",
          "issue": "string — human-readable description of the problem",
          "confidence": "high | low"
        }
      ]
    }
  },
  "executor_ready": "boolean — set to true by Orchestrator when all workers are done",
  "executor_status": "pending | running | done | error",
  "output_file": "string — path to the patched HTML in /output/",
  "report_path": "string — path to audit/report.md"
}
```

---

## Worker Write Rules

1. A worker sets its own `status` to `"running"` when it starts.
2. A worker writes its `findings` array when complete.
3. A worker sets `status` to `"done"` after writing findings.
4. If a worker encounters an unrecoverable error, it sets `status` to `"error"` and writes a single finding with `detail` explaining what went wrong.
5. A worker MUST NOT modify any other worker's section of the manifest.
6. A worker MUST NOT set `executor_ready` — only the Orchestrator does that.

---

## Confidence Levels

| Level | Meaning | Executor Behaviour |
| :--- | :--- | :--- |
| `high` | Worker is certain the finding is correct | Executor applies the fix automatically |
| `low` | Worker suspects an issue but isn't sure | Executor adds an HTML comment flag, does NOT fix |

---

## Executor Read Rules

1. Executor reads the full manifest only when `executor_ready === true`.
2. Executor processes findings in strict order: brand → content → ux_tech.
3. Within each worker's findings, high-confidence items are processed first.
4. Executor writes the patched file to `output/<filename>_patched.html`.
5. Executor updates `executor_status` to `"done"` when complete.
6. Executor writes `audit/report.md` with a human-readable summary.

---

## Example — Empty Manifest (Template)

```json
{
  "target_file": "",
  "task": "",
  "created_at": "",
  "workers": {
    "brand":   { "status": "pending", "findings": [] },
    "content": { "status": "pending", "findings": [] },
    "ux_tech": { "status": "pending", "findings": [] }
  },
  "executor_ready": false,
  "executor_status": "pending",
  "output_file": "",
  "report_path": ""
}
```
