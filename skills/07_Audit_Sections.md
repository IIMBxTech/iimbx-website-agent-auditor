# Agent 07 · Section Completeness Auditor
**Role:** Analyzer | **Layer:** 3 | **Input:** Agent 02 (prototype structure) + Agent 03 (required sections)

---

## Purpose
Check whether the new HTML prototype contains ALL required sections. A missing section is a content gap that could block conversion or reduce trust.

---

## The IIMBx Section Checklist (15 Required Sections)

| # | Section | Priority | Why It Matters |
|:--|:--|:--|:--|
| 1 | Sticky Navigation | 🔴 Critical | Users need persistent access to Apply CTA |
| 2 | Hero Section | 🔴 Critical | First impression. Must have H1, lede, CTA |
| 3 | Stats Ribbon | 🟠 High | Social proof through numbers (duration, courses, etc.) |
| 4 | Programme Overview | 🔴 Critical | "Why should I care?" — the value proposition |
| 5 | Curriculum / Themes | 🔴 Critical | The product itself. What will I learn? |
| 6 | Faculty Section | 🟠 High | Trust signal. IIM Bangalore faculty names = credibility |
| 7 | Who It's For | 🟠 High | Self-selection. "Is this for me?" |
| 8 | Eligibility | 🟡 Medium | Prevents unqualified applications |
| 9 | Testimonials | 🟠 High | Social proof from real learners |
| 10 | Timeline / Arc | 🟡 Medium | "What does the journey look like?" |
| 11 | FAQs | 🟠 High | Objection handling. Reduces support queries |
| 12 | Fees & Key Dates | 🔴 Critical | Conversion blocker if missing |
| 13 | Final CTA Section | 🔴 Critical | The close. Must have Apply + Contact |
| 14 | Brand Promise Band | 🟡 Medium | "The same faculty. Wherever you are." |
| 15 | Footer | 🟢 Low | Legal, branding, copyright |

---

## Execution Steps

### Step 1 — Match Sections
For each of the 15 required sections, check Agent 02's section inventory:
- Look for matching `<section>` tags, IDs, class names, or heading text
- A section counts as "present" if it has at least a heading and one content element
- A section with only a heading and no content = "Present but empty" → flag as 🟡

### Step 2 — Check Section Quality
For present sections, do a quick quality check:

| Section | Minimum Content |
|:--|:--|
| Hero | H1 + lede paragraph + at least 1 CTA button |
| Curriculum | At least 3 modules/courses listed with names |
| Faculty | At least 2 faculty names with roles |
| Testimonials | At least 2 quotes with names and roles |
| FAQs | At least 4 Q&A pairs |
| Fees | Programme fee amount clearly stated |

### Step 3 — Compare with Old Site
Using Agent 01's output, check if the old site had sections that the new prototype is missing. This is the **content regression** check.

### Step 4 — Output

```
SECTION_AUDIT:
  score: [0-100]
  total_required: 15
  present: [N]
  missing: [N]
  sections:
    - name: "Sticky Navigation"
      present: true/false
      quality: "Good" / "Needs work" / "Empty"
      old_site_had_it: true/false
      severity_if_missing: 🔴
    ...
  regressions: [sections that existed on old site but are missing in prototype]
```
