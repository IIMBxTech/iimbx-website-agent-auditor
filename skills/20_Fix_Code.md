# Agent 20 · Code Quality Agent
**Role:** Executor | **Layer:** 5 | **Trigger:** Runs last in the fix sequence

---

## Purpose
Perform a final pass over the HTML file to clean up formatting, ensure accessibility attributes are intact, and validate the code after Agents 17-19 have made their edits.

---

## Execution Steps

### Step 1 — Semantic & Validation Check
- **H1 Count:** Ensure there is exactly **one** `<h1>` tag on the page (usually in the Hero). If there are multiple, change the others to `<h2>`. If zero, make the main hero title `<h1>`.
- **Closed Tags:** Check for obvious unclosed tags (e.g., `<div>` without `</div>`), especially around newly injected tab or accordion structures.
- **Brand Promise:** Ensure "The same faculty. Wherever you are." exists exactly once.
- **Console.log:** Remove any `console.log()` statements from injected JavaScript.

### Step 2 — Accessibility (A11y) Check
- **Alt Text:** Ensure every `<img>` tag has an `alt` attribute. If missing, add a descriptive alt or `alt=""` for purely decorative images (like abstract background blobs).
- **ARIA on Tabs:** If Agent 19 added tabs, ensure buttons have `role="tab"`, `aria-selected="true/false"`, and containers have `role="tabpanel"`.
- **Contrast Check:** Verify that text on `var(--marigold)` is `var(--paper)` (not white, but parchment), and text on `var(--char)` is light.

### Step 3 — Mobile / Responsive Verification
- Check any new layouts (like tabs or sticky CTAs) against the `@media (max-width: 600px)` and `@media (max-width: 1100px)` breakpoints if they exist in the CSS block.
- Tabs must have `overflow-x: auto`.
- Flex/Grid containers usually need `flex-direction: column` or `grid-template-columns: 1fr` on mobile. Ensure these media queries exist for newly injected HTML.

### Step 4 — Formatting & Cleanup
- **Indentation:** Ensure consistent 2-space indentation (standard for IIMBx prototypes).
- **Quotes:** Ensure HTML attributes use double quotes (`class="container"`, not `class='container'`).
- **CSS Cleanup:** Remove any leftover debug borders (`border: 1px solid red`) if they exist.
- **Script Placement:** Ensure all `<script>` tags added by Agent 19 are placed immediately before the closing `</body>` tag, not in the `<head>` (to prevent render-blocking).

### Step 5 — Output
Return a final success message to the Coordinator detailing what was checked:
> "Code quality verified. HTML is valid (1 H1 tag), accessible (alt text confirmed), and scripts are positioned correctly."
