# Agent 08 · Fact Accuracy Auditor
**Role:** Analyzer | **Layer:** 3 | **Input:** Agent 01 (old site data) + Agent 02 (prototype data) + AGENTS.md §4

---

## Purpose
Verify that every factual claim in the new HTML prototype is accurate. Cross-reference against `AGENTS.md §4` (the canonical programme reference library) and the old live site. Flag any invented, outdated, or inconsistent data.

**This agent exists because the brand team's #1 rule is: "You never guess."**

---

## What Counts as a "Fact" (Must Be Verified)

| Fact Category | Examples | Source of Truth |
|:--|:--|:--|
| Programme duration | "8 months", "10 months" | §4 + old site |
| Module/course names | "PM for Impact", "Corporate Finance" | §4 + old site |
| Module count | "11 courses", "9 courses" | §4 |
| Faculty names | "Prof. Vasanthi Srinivasan" | §4 |
| Faculty departments | "Quantitative Methods & IS" | §4 |
| Fee amounts | "₹2,45,000", "₹1,25,000" | §4 + old site |
| Dates | "August 2026", "Batch 3" | §4 (re-fetch if stale) |
| Eligibility | "3-8 yrs experience" | §4 |
| Credential | "Professional Certificate from IIM Bangalore" | §4 |
| Contact details | Email, phone, WhatsApp | §4 |
| Testimonial names | "Neha Shah", "Aditya Sen" | Verify they exist in old site or are flagged as new |

---

## Execution Steps

### Step 1 — Identify the Programme
Match the prototype to a programme in §4: ELP (§4.3), PCHM (§4.2), PCAIM (§4.1), or NAM (§4.4).

### Step 2 — Build Fact Comparison Table

For each fact category, compare three sources:

| Fact | AGENTS.md §4 | Old Live Site | New Prototype | Match? |
|:--|:--|:--|:--|:--|
| Duration | [value] | [value] | [value] | ✅/⚠️/❌ |

### Step 3 — Flag Discrepancies with Severity

| Severity | When |
|:--|:--|
| ⚫ Brand Fail | Faculty name misspelled, wrong department |
| 🔴 Critical | Fee amount different from §4 without explanation |
| 🟠 High | Duration changed (7→8 months) — could be intentional v2.0 update |
| 🟡 Medium | Date format inconsistent |
| 🟢 Low | Slight wording difference in credential name |

### Step 4 — Special Rules
- **Duration discrepancies (e.g., 7→8 months for ELP):** The old ELP was 7 months. ELP 2.0 is 8 months. This is likely an intentional update, not an error. Flag as 🟠 with note: "Verify with marketing head — appears to be an ELP 2.0 update."
- **Faculty not in §4:** If the prototype lists faculty who aren't in AGENTS.md §4, flag as 🟡 with note: "New faculty addition — verify and update §4."
- **Testimonials:** If learner names in the prototype don't appear on the old site, they may be from newer batches. Flag as 🟡, not 🔴.

### Step 5 — Output

```
FACT_AUDIT:
  score: [0-100]
  programme: [name]
  facts_checked: [N]
  facts_matched: [N]
  discrepancies: [N]
  table: [full comparison table]
  recommendations:
    - "Update AGENTS.md §4.3 duration from 7 to 8 months if confirmed"
    - "Verify new faculty: Pavan Soni, Soudeep Deb"
```
