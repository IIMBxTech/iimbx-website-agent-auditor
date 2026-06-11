# Agent 09 · Scroll Depth Analyst
**Role:** Analyzer | **Layer:** 3 | **Input:** Agent 02 (prototype structure)

---

## Purpose
Measure the vertical scroll depth of the prototype page and assess whether it is too long, too short, or well-calibrated. Long pages kill conversion on education landing pages.

---

## Scroll Estimation Method

### Height per Section Type
| Section Pattern | Estimated Scroll (viewports) |
|:--|:--|
| Hero (split layout, min-height 82vh+) | 1.0 |
| Stats ribbon (padding 70px, single row) | 0.3 |
| Section with 2-column grid, 6 items | 1.0 |
| Section with 5-column theme grid | 0.8 |
| 11-row course table | 1.5 |
| Faculty spotlight (featured + 8 grid) | 1.5 |
| Two-column Who/Eligibility | 0.8 |
| Testimonials (2-column, 2 cards) | 0.6 |
| Timeline (4-column grid) | 0.5 |
| Capstone section (2-column) | 1.0 |
| FAQs (4 items, not collapsed) | 0.8 |
| Fees (table + sidebar) | 0.8 |
| Final CTA (dark, with info grid) | 1.2 |
| Brand Promise band | 0.2 |
| Footer | 0.2 |

### Target Ranges
| Metric | Under | Target | Over |
|:--|:--|:--|:--|
| Total scrolls | < 4 | 4–6 | > 6 |
| Word count | < 800 | 800–1,500 | > 1,500 |
| Section count | < 8 | 8–12 | > 12 |

---

## Execution Steps

### Step 1 — Count and Classify Sections
List every `<section>` and major structural `<div>` (with IDs or significant classes). Classify each by the patterns above.

### Step 2 — Sum Scroll Estimates
Add up the estimated viewports. Record:
- Total estimated scrolls
- The 3 longest sections (candidates for compression)

### Step 3 — Word Count Estimate
Count approximate visible words (exclude HTML tags, CSS, script). Use Agent 02's word count if available.

### Step 4 — Density Assessment
- **Too sparse:** < 4 scrolls or < 800 words → the page doesn't have enough content to convert
- **Right:** 4–6 scrolls, 800–1500 words → good information density with progressive disclosure
- **Too dense:** > 6 scrolls or > 1500 words → user will abandon before reaching the CTA

### Step 5 — Output

```
SCROLL_AUDIT:
  score: [0-100]
  estimated_scrolls: [X.X]
  target_scrolls: "4-6"
  verdict: "Under" / "Right" / "Over"
  word_count: [N]
  section_count: [N]
  longest_sections:
    - name: "Curriculum"
      scrolls: 1.5
      suggestion: "Tab consolidation could reduce to 0.8"
    - name: "Faculty"
      scrolls: 1.5
      suggestion: "Collapse grid to show 4, expand on click"
  density: "Too sparse" / "Right" / "Too dense"
```
