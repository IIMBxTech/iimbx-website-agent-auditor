# Agent 14 · Wireframe Generator
**Role:** Synthesizer | **Layer:** 4 | **Input:** Agent 09 (scroll data) + Agent 10 (layout problems)

---

## Purpose
Produce visual wireframe pairs (current layout vs proposed optimization) using **ASCII art and Mermaid block diagrams only**. These wireframes go into the audit report and the dashboard for the PM and designer to review.

**Critical rule: NEVER use `generate_image`. Wireframes are text-only.**

---

## Output Format 1: Mermaid Block Diagram (Page-Level)

Show the full page as a vertical stack of labeled blocks. Each block shows:
- Emoji prefix for scanning
- Section name
- Estimated scroll height
- ⚠️ for problems, ✅ for improvements

**Current Layout Example:**
```mermaid
block-beta
    columns 1
    NAV["🔝 Sticky Nav — Logo · Links · CTA"]
    HERO["🏠 HERO — H1 · Lede · Chips · CTA ≈ 1.0 scroll"]
    STATS["📊 Stats Ribbon ≈ 0.3 scroll"]
    WHY["📝 Why This Programme — 6 objectives ≈ 1.0 scroll"]
    THEMES["📚 Theme Grid — 5 themes ≈ 0.8 scroll"]
    COURSES["📋 Course Table — 11 rows ≈ 1.5 scrolls ⚠️"]
    CAPSTONE["🎯 Capstone Section ≈ 1.0 scroll"]
    FACULTY["👩‍🏫 Faculty — 1 spotlight + 8 grid ≈ 1.5 scrolls ⚠️"]
    WHO["👤 Who + Eligibility ≈ 0.8 scroll"]
    TESTIMONIALS["💬 Testimonials ≈ 0.6 scroll"]
    TIMELINE["📅 Timeline ≈ 0.5 scroll"]
    FAQ["❓ FAQs — 4 items (not collapsed) ≈ 0.8 scroll ⚠️"]
    FEES["💰 Fees + Dates ≈ 0.8 scroll"]
    CTA["🚀 Final CTA ≈ 1.2 scroll"]
    FOOTER["📧 Footer ≈ 0.2 scroll"]
```

**Proposed Layout Example:**
```mermaid
block-beta
    columns 1
    NAV2["🔝 Sticky Nav — Logo · Links · CTA"]
    HERO2["🏠 HERO (unchanged) ≈ 1.0 scroll"]
    STATS2["📊 Stats Ribbon ≈ 0.3 scroll"]
    TABS["📑 TABBED: Why | Themes | Courses ≈ 1.2 scrolls ✅ SAVED 1.1"]
    CAPSTONE2["🎯 Capstone ≈ 1.0 scroll"]
    FAC2["👩‍🏫 Faculty — 4 shown, expand for rest ≈ 0.8 scroll ✅ SAVED 0.7"]
    SPLIT["👤 Who + Eligibility (already split) ≈ 0.8 scroll"]
    TEST2["💬 Testimonials ≈ 0.6 scroll"]
    COMBINED["📅💰 Timeline + Fees + Dates (combined) ≈ 0.8 scroll ✅ SAVED 0.5"]
    FAQ2["❓ FAQs (accordion, collapsed) ≈ 0.3 scroll ✅ SAVED 0.5"]
    CTA2["🚀 Final CTA ≈ 1.2 scroll"]
    STICKY["📌 Sticky bottom CTA bar (always visible) ✅ NEW"]
    FOOTER2["📧 Footer ≈ 0.2 scroll"]
```

---

## Output Format 2: ASCII Wireframe (Section-Level)

For the most bloated section, show a detailed before/after:

```
BEFORE:                          AFTER:
┌────────────────────┐          ┌────────────────────┐
│ Course 01          │          │ [All] [T1] [T2]... │
│ Course 02          │          │ ─────────────────  │
│ Course 03          │          │ ┌──────┐ ┌──────┐  │
│ Course 04          │    →     │ │ C01  │ │ C02  │  │
│ Course 05          │          │ └──────┘ └──────┘  │
│ ...                │          │ ┌──────┐ ┌──────┐  │
│ Course 11          │          │ │ C03  │ │ C04  │  │
└────────────────────┘          └────────────────────┘
  (11 rows = 1.5 scrolls)        (tabbed = 0.8 scrolls)
```

---

## Conventions
- Use `┌ ─ ┐ │ └ ┘` for boxes
- Use `[ Tab ]` syntax for tab bars
- Use `▶ Item` for collapsed accordion, `▼ Item` for expanded
- Keep ASCII width ≤ 55 characters
- Always show scroll savings in the summary line

---

## Output to Coordinator

```
WIREFRAMES:
  page_level:
    current: [Mermaid code block]
    proposed: [Mermaid code block]
  section_level:
    section: "[name]"
    before: [ASCII]
    after: [ASCII]
  scroll_savings:
    current: [X.X] scrolls
    proposed: [Y.Y] scrolls
    saved: [Z.Z] scrolls ([N]% reduction)
```
