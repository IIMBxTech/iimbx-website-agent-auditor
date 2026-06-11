# Agent 12 · SEO Auditor
**Role:** Analyzer | **Layer:** 3 | **Input:** Agent 02 (prototype structure)

---

## Purpose
Check that the prototype follows SEO best practices. IIMBx programme pages must rank for queries like "IIM Bangalore online programme", "AI for managers course IIMB", "hospital management certificate IIMB".

---

## Execution Steps

### Step 1 — Title Tag
- Must exist and be descriptive
- Should include: programme name + "IIMBx" or "IIM Bangalore"
- Length: 50-60 characters
- Good: "IIMBx · Emerging Leaders Programme 2.0"
- Bad: "Landing Page" or missing entirely

### Step 2 — Meta Description
- Check for `<meta name="description">` tag
- Should summarize the programme in 150-160 characters
- Should include key terms: programme name, IIM Bangalore, duration, format
- Missing → 🟠 High

### Step 3 — Heading Hierarchy
- Exactly ONE `<h1>` per page (multiple h1s → 🔴 Critical)
- H2s should follow H1 logically (no skipping from H1 to H4)
- Each section should have its own H2
- H3s should nest under H2s

### Step 4 — Image Alt Text
Check every `<img>` tag:
- Must have `alt` attribute
- Alt text must be descriptive (not "image1.jpg")
- Faculty photos: `alt="Prof. [Name]"` — includes the name
- Logo: `alt="IIMBx · An initiative of IIM Bangalore"`
- Missing alt → 🟡 Medium (accessibility + SEO impact)

### Step 5 — Semantic HTML
- Uses `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>` appropriately
- Interactive elements have unique `id` or `data-testid`
- Links have descriptive text (not "click here")
- CTA buttons use `<a>` with clear href

### Step 6 — Structured Data (Bonus)
Check for JSON-LD or microdata:
- `Course` schema for the programme
- `Organization` schema for IIMBx
- Missing → 🟢 Low (nice-to-have)

### Step 7 — Output

```
SEO_AUDIT:
  score: [0-100]
  title: {present: true/false, content: "[text]", length: N, quality: "Good/Needs work"}
  meta_description: {present: true/false, content: "[text]", length: N}
  h1_count: [N]
  heading_hierarchy: "Valid" / "Broken at [element]"
  images_total: [N]
  images_with_alt: [N]
  images_missing_alt: [list of src paths]
  semantic_html: "Good" / "Needs improvement"
  structured_data: "Present" / "Missing"
  issues: [list with severity]
```
