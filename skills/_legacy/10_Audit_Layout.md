# Agent 10 · Layout Analyzer
**Role:** Analyzer | **Layer:** 3 | **Input:** Agent 02 (prototype structure) + Agent 09 (scroll data)

---

## Purpose
Identify specific layout problems that cause vertical bloat: repetitive card grids, sections that should be tabbed, content that should be behind accordions, and CTA visibility issues. Propose concrete fixes using the 6 approved UX patterns.

---

## The 6 Approved UX Patterns

### Pattern 1: Tab Consolidation
**When:** 3+ sequential sections share the same visual treatment
**Savings:** 40-60% of combined height
**IIMBx example:** The Themes grid + Course table could be a single tabbed section

### Pattern 2: Accordion Collapse
**When:** 5+ items in a list (FAQs, modules)
**Savings:** 60-80% of section height
**IIMBx example:** FAQs should be collapsed by default, expand on click

### Pattern 3: Side-by-Side Split
**When:** Two related sections appear back-to-back
**Savings:** ~50% on desktop
**IIMBx example:** "Who It Is For" + "Eligibility" → two-column layout

### Pattern 4: Sticky CTA Bar
**When:** Primary CTA only visible at top and bottom
**Savings:** No height savings, but +15-20% conversion improvement
**IIMBx example:** Fixed bottom bar with programme name + "Apply Now"

### Pattern 5: Progressive Disclosure Cards
**When:** Cards have both title and long description
**Savings:** 30-50%
**IIMBx example:** Course table shows title + faculty, full description on hover/click

### Pattern 6: Inline Key Dates
**When:** Dates/fees buried in separate section far from CTA
**Savings:** Eliminates ~0.8 scroll
**IIMBx example:** Embed key dates as chips inside the Final CTA section

---

## Execution Steps

### Step 1 — Identify Layout Problems
Scan the page structure for these red flags:

| Problem | How to Detect |
|:--|:--|
| **Vertical bloat** | Any section > 1.2 estimated scrolls |
| **Repetitive grids** | 2+ sections using the same card grid layout back-to-back |
| **Missing accordion** | FAQ items rendered as static blocks, not collapsible |
| **CTA buried** | No CTA visible between scroll 1 and the final section |
| **Mobile penalty** | 5-column grid that will stack to 5 rows on mobile |
| **No sticky nav** | Nav doesn't have `position: sticky` or `position: fixed` |

### Step 2 — Map Problems to Patterns
For each problem found, recommend which of the 6 patterns to apply.

### Step 3 — Output

```
LAYOUT_AUDIT:
  score: [0-100]
  problems_found: [N]
  problems:
    - id: 1
      type: "Vertical bloat"
      section: "Curriculum"
      severity: 🟠 High
      current_scrolls: 1.5
      pattern: "Tab Consolidation (Pattern 1)"
      proposed_scrolls: 0.8
      savings: "0.7 scrolls (47%)"
    - id: 2
      type: "CTA buried"
      section: "Global"
      severity: 🔴 Critical
      pattern: "Sticky CTA Bar (Pattern 4)"
      savings: "Conversion improvement, no height savings"
```
