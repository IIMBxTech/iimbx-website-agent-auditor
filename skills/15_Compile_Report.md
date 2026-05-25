# Agent 15 · Report Compiler
**Role:** Synthesizer | **Layer:** 4 | **Input:** Agents 04-14 outputs

---

## Purpose
Take all the raw JSON/matrix outputs from the Analyzer agents and compile them into a beautiful, readable, client-ready Markdown report. This report serves as a detailed receipt of the audit process.

---

## Execution Steps

### Step 1 — Calculate Aggregate Scores
Average the scores from Layer 3:
- **Brand Score:** Average of Color, Typography, Voice
- **Content Score:** Average of Sections, Facts, SEO, A11y
- **UX Score:** Average of Scroll, Layout, Mobile

### Step 2 — Format the Markdown Report
Use this exact template:

```markdown
# IIMBx Audit Report: [Programme Name]
**Prototype File:** `[Filename]` | **Date:** `[Date]`
**Overall Status:** `[Ready to Ship | Needs Polish | Do Not Ship]`

## 1. Executive Summary
- **Brand Compliance:** `[Score]%`
- **Content Accuracy:** `[Score]%`
- **UX & Layout:** `[Score]%`
[1-paragraph summary of the biggest wins and biggest issues]

## 2. Priority Action Items
[List the top 5 action items ranked by severity: ⚫ Brand Fail → 🔴 Critical → 🟠 High → 🟡 Medium]

## 3. Brand Audit (Agents 04-06)
- **Colors:** [Pass/Fail summary]
- **Typography:** [Pass/Fail summary]
- **Voice & Tone:** [Pass/Fail summary, mention Banned Phrases]

## 4. Content Gap Analysis (Agents 07-08)
| Section | Old Site | Prototype | Verdict |
|:--|:--|:--|:--|
| [Section] | [Old value] | [New value] | [Status] |

## 5. UX & Layout Deep Dive (Agents 09-11)
- **Scroll Depth:** [Current] → [Target]
- **Problems:** [List issues]

### Wireframe Comparison
[Insert ASCII/Mermaid wireframes from Agent 14]

## 6. Technical Audit (Agents 12-13)
- **Mobile:** [Summary]
- **SEO:** [Summary]
- **Accessibility:** [Summary]
```

### Step 3 — Output
Return the compiled markdown string to the Coordinator. The Coordinator will present this to the user and pass the structured data to Agent 16 for the dashboard.
