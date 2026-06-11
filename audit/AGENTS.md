# IIMBx Antigravity Swarm — AGENTS.md v2

## Architecture: 3 layers, 1 manifest, no chains

### Non-negotiable rules
1. No agent may call another agent directly. All communication happens
   through the Audit Manifest JSON file at /audit/manifest.json.
2. Layer 2 workers run in parallel. Do not wait for each other.
3. The Executor (Layer 3) may only run AFTER all workers have written
   their findings to the manifest and set status: "done".
4. If a worker is uncertain about a finding, it writes
   confidence: "low" in the manifest and stops. It does NOT attempt
   a fix. The Orchestrator re-reads and re-dispatches if needed.
5. Stitch MCP is called by the Orchestrator only, not by workers.

---

## Layer 1 — Orchestrator

**Trigger:** User instruction (e.g. "fix Design 2 brand colors")

**Steps:**
1. Read the Brand Playbook (pdf_text.txt) and the target HTML file.
2. Create /audit/manifest.json with this skeleton:
   ```json
   {
     "target_file": "<path>",
     "task": "<one-sentence description>",
     "workers": {
       "brand":   { "status": "pending", "findings": [] },
       "content": { "status": "pending", "findings": [] },
       "ux_tech": { "status": "pending", "findings": [] }
     },
     "executor_ready": false
   }
   ```
3. Dispatch all three workers simultaneously.
4. Poll manifest every 30s. When all workers show status: "done",
   set executor_ready: true and dispatch the Executor.
5. If any worker shows status: "error", log it and do NOT dispatch
   the Executor. Report the issue to the user.

---

## Layer 2 — Specialist Workers (stateless, parallel)

Each worker reads the manifest, does its job, writes findings back,
sets its own status to "done" or "error". That is its entire scope.

### Worker A — Brand Auditor
Reads: target HTML, Brand Playbook hex codes & typography rules.
Checks:
  - Every background and text color against the approved palette
  - Font families and weights against Source Serif 4 spec
  - Banned words list (e.g. "world-class", "innovative")
Writes to manifest.workers.brand.findings:
  ```json
  [{ "type": "color|font|voice", "element": "<CSS selector>",
     "current": "<value>", "required": "<value>",
     "confidence": "high|low" }]
  ```

### Worker B — Content Auditor
Reads: target HTML, live page (fetched), Brand Playbook facts.
Checks:
  - Mandatory sections present (Hero, Faculty, FAQs)
  - Prices and durations match the rulebook exactly
  - No fabricated faculty names (cross-reference live site)
Writes to manifest.workers.content.findings:
  ```json
  [{ "type": "missing_section|wrong_fact|extra_content",
     "detail": "<description>", "confidence": "high|low" }]
  ```

### Worker C — UX & Tech Auditor
Reads: target HTML only.
Checks:
  - Mobile breakpoints (viewport meta, no fixed-width elements >375px)
  - Heading hierarchy (one H1, logical H2/H3 nesting)
  - Alt text on all images
  - Open Graph / meta description tags present
Writes to manifest.workers.ux_tech.findings:
  ```json
  [{ "type": "mobile|a11y|seo", "element": "<selector or tag>",
     "issue": "<description>", "confidence": "high|low" }]
  ```

---

## Layer 3 — Executor

**Trigger:** manifest.executor_ready === true

**Steps:**
1. Read the full manifest. Group findings by confidence.
2. Apply all high-confidence fixes sequentially:
   a. Brand fixes first (swap hex values, fix font declarations)
   b. Content fixes second (inject missing sections, correct facts)
   c. UX fixes last (add alt text, fix viewport, add meta tags)
3. For low-confidence findings: add an HTML comment
   `<!-- AUDIT FLAG: [finding detail] — needs manual review -->`
   Do NOT attempt to fix these automatically.
4. Write the patched HTML to /output/<filename>_patched.html
5. Update /audit/report.md with a human-readable summary.
6. Update /audit/data.js for the visual dashboard.

---

## Stitch MCP — Usage rules

- Called by the Orchestrator only, before dispatching workers.
- Use case: when the task requires generating a new UI variant or
  applying an overarching design system, not for individual CSS fixes.
- After Stitch returns output, save it to /stitch/output.html before
  the Brand Auditor runs — so the auditor checks Stitch's output too.

---

## What agents must NEVER do

- Call another agent's function or tool directly
- Write to a file path outside their designated scope
- Make assumptions when confidence is low — write the flag, stop
- Run more than one tool call per finding
- Fetch external URLs unless explicitly listed in the task
