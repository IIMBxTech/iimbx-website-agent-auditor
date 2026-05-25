# Agent 11 · Mobile Responsiveness Auditor
**Role:** Analyzer | **Layer:** 3 | **Input:** Agent 02 (prototype CSS)

---

## Purpose
Check that the prototype handles mobile and tablet viewports correctly. IIMBx learners increasingly access programme pages on mobile — a broken mobile layout directly kills applications.

---

## Execution Steps

### Step 1 — Inventory Breakpoints
Extract all `@media` queries from the CSS. The marketing head's standard breakpoints are:
- `1100px` — tablet/small desktop (grid collapses)
- `600px` — mobile (nav links hidden, single column)

Flag if:
- No breakpoints exist → ⚫ Brand Fail (page is not responsive)
- Only one breakpoint → 🟡 Medium (missing intermediate breakpoints)

### Step 2 — Check Critical Mobile Behaviors

| Element | Expected Mobile Behavior | Check |
|:--|:--|:--|
| Navigation | Links hidden, only logo + CTA visible | `.nav__links{display:none}` at 600px |
| Hero grid | Single column stack | `grid-template-columns:1fr` |
| Stats grid | Single column | `grid-template-columns:1fr` at 600px |
| Theme grid | Single column (was 5-col) | Check 600px rule |
| Faculty grid | Single column (was 4-col) | Check 600px rule |
| Course table | 2-column (num + name) | Check 1100px rule |
| Two-column layouts | Stack to single column | Check `.two-col` at 1100px |
| Fee table + sidebar | Stack to single column | Check `.fee-wrap` at 1100px |
| Timeline | 2-col at tablet, 1-col at mobile | Check both breakpoints |
| Final CTA grid | Single column | Check `.final__inner` |
| Font sizes | Should be readable at 320px+ | No font below 13px on mobile |

### Step 3 — Check Touch Targets
Minimum touch target size: 44x44px (Apple HIG) / 48x48px (Material).
- CTA buttons should have `padding: 16px+` on mobile
- Nav CTA should remain visible and tappable
- Accordion/FAQ triggers should be large enough

### Step 4 — Check for Horizontal Overflow
Look for elements that could cause horizontal scroll on mobile:
- Fixed-width elements (`width: 560px` in hero pseudo-element)
- `overflow-x: hidden` on body (this is a band-aid, not a fix)
- Wide tables or grids that don't collapse

### Step 5 — Output

```
MOBILE_AUDIT:
  score: [0-100]
  breakpoints_found: [list]
  breakpoints_missing: [list]
  issues:
    - element: "Theme grid (5-col)"
      problem: "Stacks to 5 rows on mobile = excessive scroll"
      severity: 🟠 High
      fix: "Use horizontal scroll or accordion on mobile"
  touch_targets_ok: true/false
  horizontal_overflow_risk: true/false
```
