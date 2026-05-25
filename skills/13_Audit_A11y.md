# Agent 13 · Accessibility Auditor
**Role:** Analyzer | **Layer:** 3 | **Input:** Agent 02 (prototype HTML)

---

## Purpose
Ensure the prototype meets WCAG 2.1 AA accessibility standards. Education pages must be accessible to all users, including those using screen readers, keyboard navigation, or high-contrast modes.

---

## Execution Steps

### Step 1 — Color Contrast
Check text-on-background contrast ratios:

| Combination | Required Ratio | Common IIMBx Issue |
|:--|:--|:--|
| Charcoal on Parchment | 4.5:1 min (AA) | Usually passes ✅ |
| White on Charcoal | 4.5:1 min | Usually passes ✅ |
| Marigold on Parchment | 3:1 min (large text) | ⚠️ Borderline — Marigold (#C97138) on Parchment (#F4EFE3) may fail for small text |
| Marigold on Charcoal | 4.5:1 min | Usually passes ✅ |
| Stone (#5B5F66) on Parchment | 4.5:1 min | ⚠️ Check — secondary text might fail |

### Step 2 — Keyboard Navigation
- Can all interactive elements be reached via Tab key?
- Do links and buttons have visible `:focus` styles?
- Is the tab order logical (follows visual order)?
- Can modal/accordion be opened and closed via keyboard?

### Step 3 — ARIA Attributes
Check for:
- `aria-label` on icon-only buttons
- `aria-expanded` on accordion/FAQ toggles
- `role="navigation"` on nav elements
- `role="banner"` on header
- `aria-current="page"` on active nav link

### Step 4 — Screen Reader Friendliness
- Images have descriptive `alt` text (checked by Agent 12, cross-reference)
- Decorative images have `alt=""` (empty alt, not missing alt)
- Form inputs have associated `<label>` elements
- Headings create a logical document outline

### Step 5 — Motion & Animation
Check `@media (prefers-reduced-motion)`:
- Does the page respect this media query?
- Are animations disabled when the user prefers reduced motion?
- The marketing head's prototypes typically include this — verify it's present

### Step 6 — Output

```
A11Y_AUDIT:
  score: [0-100]
  contrast_issues: [list of failing combinations]
  keyboard_navigation: "Full" / "Partial" / "None"
  focus_styles: true/false
  aria_attributes: "Good" / "Missing on [elements]"
  reduced_motion: "Respected" / "Not implemented"
  issues:
    - severity: 🟠 High
      element: "Marigold eyebrow text on parchment"
      problem: "Contrast ratio 3.8:1, needs 4.5:1 for small text"
      fix: "Darken eyebrow text to #A85E2A or increase font size to 14px+"
```
