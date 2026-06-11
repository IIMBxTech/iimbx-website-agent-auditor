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
     "dispatch_log": {},
     "workers": {
       "brand":   { "status": "pending", "findings": [] },
       "content": { "status": "pending", "findings": [] },
       "ux_tech": { "status": "pending", "findings": [] }
     },
     "executor_ready": false
   }
   ```
3. **Computed Style Dump:** Before dispatching workers, extract and save a computed style snapshot of the target HTML to `/audit/computed_styles.json`, following the selector and property list defined in `VIEWPORT_SPEC.md`. If the HTML is not parseable, stop and report the error to the user immediately.
4. Dispatch all three workers simultaneously. Immediately write to the manifest:
   ```json
   "dispatch_log": {
     "brand":   { "dispatched_at": "<timestamp>", "confirmed": true },
     "content": { "dispatched_at": "<timestamp>", "confirmed": true },
     "ux_tech": { "dispatched_at": "<timestamp>", "confirmed": true }
   }
   ```
5. Poll manifest every 30s. 
   - If a worker's status remains "pending" after 60 seconds, log it as `"confirmed": false` in the `dispatch_log` (e.g., `dispatch_log.brand.confirmed: false`) and re-dispatch exactly ONCE. Do not re-dispatch more than once — escalate to the user instead.
   - When all workers show status: "done", set `executor_ready: true` and dispatch the Executor.
6. If any worker shows status: "error", log it and do NOT dispatch
   the Executor. Report the issue to the user.
7. **Run History Log:** After every completed run (whether successful or stopped by errors), append one entry to `/audit/run_log.json` using the following schema:
   ```json
   {
     "run_id": "<timestamp>",
     "target_file": "<filename>",
     "task": "<description>",
     "workers_fired": ["brand", "content", "ux_tech"],
     "findings_total": <int>,
     "findings_fixed": <int>,
     "findings_flagged": <int>,
     "executor_ran": <bool>,
     "duration_seconds": <int>
   }
   ```
   *Note: This file is append-only. Never overwrite previous entries. Use it to detect if the same finding appears in 3+ consecutive runs (which signals the Executor's fix is not sticking → escalate to user).*

---

## Layer 2 — Specialist Workers (stateless, parallel)

Each worker reads the manifest, does its job, writes findings back,
sets its own status to "done" or "error". That is its entire scope.

**MANDATORY: Scratchpad before verdict**
Before writing any finding to the manifest, every worker MUST first write a private reasoning block:
  `"reasoning": "I found selector .hero-wrapper with max-width:720px. The VIEWPORT_SPEC requires no container below 1100px. This will collapse the layout on 1440px screens. Confidence: high because the rule is unambiguous."`
Only after completing the reasoning block may the worker write the finding. If the reasoning reveals the rule is ambiguous, set confidence: "low" — do not attempt to resolve it. The reasoning field is NOT shown in report.md. It exists only so the worker catches its own wrong conclusions before committing them.

### Worker A — Brand Auditor
Reads: `/audit/computed_styles.json` (mandatory), target HTML, Brand Playbook hex codes & typography rules.
Checks:
  - Every background and text color against the approved palette
  - Font families and weights against Source Serif 4 spec
  - Banned words list (e.g. "world-class", "innovative")
Writes to manifest.workers.brand.findings:
  ```json
  [{ "reasoning": "<private thoughts>", "type": "color|font|voice", "element": "<CSS selector>",
     "current": "<value>", "required": "<value>",
     "confidence": "high|low" }]
  ```

### Worker B — Content Auditor
Reads: `/audit/computed_styles.json` (mandatory), target HTML, live page (fetched), Brand Playbook facts.
Checks:
  - Mandatory sections present (Hero, Faculty, FAQs)
  - Prices and durations match the rulebook exactly
  - No fabricated faculty names (cross-reference live site)
Writes to manifest.workers.content.findings:
  ```json
  [{ "reasoning": "<private thoughts>", "type": "missing_section|wrong_fact|extra_content",
     "detail": "<description>", "confidence": "high|low" }]
  ```

### Worker C — UX & Tech Auditor
Reads: `/audit/computed_styles.json` (mandatory), target HTML, VIEWPORT_SPEC.md.
Checks:
  - **Layout Audit:** Run against VIEWPORT_SPEC.md before checking mobile/SEO/a11y.
  - Mobile breakpoints (viewport meta, no fixed-width elements >375px)
  - Heading hierarchy (one H1, logical H2/H3 nesting)
  - Alt text on all images
  - Open Graph / meta description tags present

**Additional step: Layout Audit**
SCAN FOR (and flag as findings if found):
  1. Any max-width value below 1100px on body, main, or a top-level section/div that wraps the full page layout
  2. Any hero or above-fold section NOT using CSS Grid or Flexbox with at least 2 explicit columns at desktop
  3. Any container using padding-left or margin-left > 15% of viewport
  4. The hero right-side card — check it is in normal document flow (not float, not position:absolute, not display:none at desktop)
  5. Section vertical padding below 60px at desktop

Writes to manifest.workers.ux_tech.findings:
  ```json
  [{ "reasoning": "<private thoughts>", "type": "mobile|a11y|seo|layout", "element": "<selector or tag>",
     "issue": "<what was found>", "fix": "<exact CSS replacement>", "confidence": "high|low" }]
  ```
IMPORTANT: For `layout` types, the `fix` field must contain the exact CSS property:value pair to apply. Do not write vague instructions like "increase padding". Write: "padding: 80px 48px" or "max-width: 1200px".

---

## Layer 3 — Executor

**Trigger:** manifest.executor_ready === true

**Steps:**
1. Read the full manifest. Group findings by confidence.
2. Apply all high-confidence fixes sequentially in this order:
   a. Layout fixes first (max-width, grid columns, padding — from ux_tech findings type:"layout")
   b. Brand fixes second (swap hex values, fix font declarations)
   c. Content fixes third (inject missing sections, correct facts)
   d. A11y/SEO fixes last (add alt text, fix viewport, add meta tags)

   **Layout Specific Rule:** For layout fixes specifically, after applying, verify the fix did not introduce a new max-width conflict by scanning the full CSS for any remaining container width constraints on the same element.
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

## Conflict resolution

If a worker finds that two authoritative sources disagree (e.g. BRAND_DATA.md says #C8602A but the live site uses #D85A30), the worker MUST:
1. Write BOTH values to the finding:
   `"current_in_source": "#D85A30", "required_per_brand_data": "#C8602A", "confidence": "conflict"`
2. NOT attempt to decide which is correct.
3. NOT apply any fix for this finding.

The Orchestrator surfaces all conflict findings to the user in a separate section of `report.md` titled "Needs your decision". These are never auto-fixed.

---

## What agents must NEVER do

- Call another agent's function or tool directly
- Write to a file path outside their designated scope
- Make assumptions when confidence is low — write the flag, stop
- Run more than one tool call per finding
- Fetch external URLs unless explicitly listed in the task
