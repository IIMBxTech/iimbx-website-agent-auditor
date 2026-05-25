# IIMBx Content & Brand Audit — Skill Definition
**Version:** 2.0 | **Maintained by:** IIMBx Brand Team | **Applies to:** All course landing page prototypes

> **Purpose:** This file is the complete operating procedure for auditing any IIMBx HTML course page. When invoked, follow every step in sequence and produce the full structured report defined in §6. Do not skip steps or produce partial output.

---

## §1 · Brand Playbook Reference (May 2026)

These are non-negotiable. Any deviation is a **brand failure**, not a suggestion.

### 1.1 Color System
| Token | Hex | Role | Where it Applies |
| :--- | :--- | :--- | :--- |
| Parchment | `#F4EFE3` | Canvas (50–70% of surface) | Body backgrounds, cards, section backgrounds |
| Charcoal | `#1A1B1E` | Structure (15%) | Body text, navbars, dark sections |
| Marigold | `#C97138` | Spark / Accent (10–15%) | CTAs, icons, highlights, eyebrows |
| IIMB Crimson | `#AE2C2A` | Institutional (≤20%) | Logo crest, certificates, formal launches only |
| IIMBx Navy | `#172D6B` | Institutional (≤20%) | Logo wordmark, formal/institutional use only |
| **❌ BANNED** | Any green, teal, eucalyptus, apricot, purple | — | Never permitted on Sister-Brand surfaces |

**The 70/15/15 Rule (Sister-Brand surfaces like landing pages):**
- 70% Parchment as canvas
- 15% Charcoal for structure/text
- 15% Marigold for accents

**Institutional surfaces only** (certificates, formal announcements): Crimson + Navy may flood backgrounds.

### 1.2 Typography
| Role | Primary Font | Fallback | Usage |
| :--- | :--- | :--- | :--- |
| Display / Headings | `Tiempos Headline` | `Source Serif 4`, `Source Serif Pro`, `Georgia` | H1, H2, hero titles |
| Body / UI | `Inter` | `IBM Plex Sans`, `system-ui` | Paragraphs, labels, nav |
| Monospace / Eyebrows | `IBM Plex Mono` | `Courier New` | Hex codes, badge labels, `EYEBROW TEXT` |

**❌ NOT ALLOWED:** `Cormorant Garamond`, `Playfair Display`, `Raleway`, or any decorative serif not listed above.

### 1.3 Voice & Tone Checklist
Run every major text block through these 6 rules:
1. [ ] Written in plain English — no jargon or buzzwords
2. [ ] Makes a concrete claim or says nothing at all
3. [ ] Uses strong verbs and concrete nouns
4. [ ] Adjectives are seasoning — not the main ingredient
5. [ ] Addresses one person ("you", not "learners")
6. [ ] Ends the sentence on the strongest word

**Brand Promise (use once per page, never as a headline):**
> "The same faculty. Wherever you are."

**Banned Phrases:** "cutting-edge", "world-class", "state-of-the-art", "immersive", "leveraging", "empowering yourself", "once-in-a-lifetime", "gamified"

---

## §2 · Content Inventory Checklist

Every IIMBx course landing page MUST have these sections. For each one, record:
- ✅ Present and complete
- ⚠️ Present but incomplete or inaccurate
- ❌ Missing entirely

### 2.1 Above-the-Fold / Hero Section
- [ ] Programme full name (official title from the old site)
- [ ] Eyebrow label (domain, e.g., "Healthcare", "Management") — must use `IBM Plex Mono` styling
- [ ] Headline (in `Source Serif 4` / Tiempos)
- [ ] Sub-headline or lede (max 2 sentences, plain English)
- [ ] Primary CTA button ("Apply Now" or "Start Application")
- [ ] Secondary CTA ("Download Brochure" or "Explore Curriculum")
- [ ] At least 3 meta-chips with key facts (duration, mode, credential type)
- [ ] Key dates visible or accessible within the hero

### 2.2 Programme Overview
- [ ] Clear description of what the programme is (matches old site description)
- [ ] Duration stated explicitly (e.g., "10 months", "12 months")
- [ ] Delivery mode stated (Online, Blended, On-campus)
- [ ] IIMB faculty attribution (e.g., "Taught by IIMB faculty")

### 2.3 Curriculum / Modules
- [ ] Total number of courses/modules explicitly stated
- [ ] Each module named (not just described generically)
- [ ] Each module has a brief description (1–2 lines)
- [ ] Total course hours or effort per week mentioned
- [ ] Capstone project mentioned (if applicable)

### 2.4 Who It Is For (Target Audience)
- [ ] At least 3 distinct audience personas listed
- [ ] Each persona has a clear role label and 1-line description
- [ ] Eligibility criteria stated (minimum experience, degree requirements)

### 2.5 Faculty Section
- [ ] At least 4 faculty members shown
- [ ] Each faculty card has: Name, Photo, IIMB department/title
- [ ] Faculty are real, named IIMB professors (not placeholders)

### 2.6 Social Proof / Testimonials
- [ ] At least 2–3 real testimonials from past participants
- [ ] Each testimonial includes: Name, Cohort batch or year, Role
- [ ] Outcome mentioned (e.g., promotion, role change, skill applied)

### 2.7 Learning Experience / Methodology
- [ ] Explains *how* the programme is delivered (not just *what*)
- [ ] Mentions live session cadence (e.g., "Live sessions every Saturday")
- [ ] Mentions cohort structure
- [ ] Mentions campus immersion if applicable

### 2.8 Learning Outcomes
- [ ] At least 4 clear outcome statements
- [ ] Outcomes use verb-first framing ("Lead...", "Manage...", "Apply...")
- [ ] Outcomes are specific (not generic like "become a better leader")

### 2.9 Application / CTA Section
- [ ] Programme fee (or link to fee page) present
- [ ] Instalment options mentioned (IIMBx typically offers 2-instalment plans)
- [ ] Application deadline(s) stated
- [ ] Programme start date stated
- [ ] Link to application form

### 2.10 FAQ Section
- [ ] Minimum 5 real FAQs (not placeholder text)
- [ ] Browser/platform requirement FAQ present (IIMBx uses edX/Open edX platform)
- [ ] Certificate validity / recognition FAQ present
- [ ] Eligibility FAQ present
- [ ] Refund / deferral policy FAQ present

### 2.11 Footer / Contact
- [ ] Contact email present (typically `digital.learning@iimbx.edu.in`)
- [ ] Phone or WhatsApp number for programme enquiries
- [ ] Office hours or response time mentioned
- [ ] Links to IIMBx social channels

### 2.12 SEO & Technical
- [ ] `<title>` tag matches official programme name
- [ ] `<meta name="description">` present and accurate
- [ ] One and only one `<h1>` on the page
- [ ] All images have `alt` text
- [ ] Page is mobile responsive

---

## §3 · Scroll Depth & Density Rating

After reviewing both the old site and the new HTML, score the following:

| Metric | How to Measure | Target |
| :--- | :--- | :--- |
| **Scroll Count (Old Site)** | Estimate number of full-viewport scrolls | Baseline reference |
| **Scroll Count (New HTML)** | Estimate number of full-viewport scrolls | Should be 4–6 for a course page |
| **Word Count (Old Site)** | Count visible body text words | Baseline reference |
| **Word Count (New HTML)** | Count visible body text words | 800–1,500 words optimal |
| **Section Count (Old)** | Count distinct named sections | Baseline reference |
| **Section Count (New HTML)** | Count distinct named sections | Should be 8–12 sections |
| **Density Assessment** | Too sparse / Right / Too dense | Aim for "Right" |

> **Guidance:** The old IIMBx site pages tend to be *too dense* (over-scrolling, hard to scan). The new HTML prototypes risk being *too sparse* (missing detail, under-selling). The optimal target is a **progressive disclosure** approach: short readable cards on top, expandable accordions underneath.

---

## §4 · Execution Steps (Follow in Order)

### Step A — Fetch Old Course Content
1. Search `mcp_exa_web_search_exa` with: `IIMBx [course name] site:iimbx.iimb.ac.in`
2. If needed, also search `site:iimbx.edu.in [course name]`
3. Fetch the most relevant URL using `mcp_exa_web_fetch_exa` with `maxCharacters: 8000`
4. Extract and note: programme title, duration, all module names, faculty names, testimonials, fees, FAQs, and contact details

### Step B — Read & Inventory the HTML File
1. Use `view_file` to read the target HTML prototype
2. Walk through `§2` Checklist and mark each item ✅ / ⚠️ / ❌
3. Check CSS for brand color compliance (§1.1)
4. Check Google Fonts import for typography compliance (§1.2)
5. Read all visible text and run the Voice & Tone check (§1.3)

### Step C — Side-by-Side Comparison
Build a table comparing the Old Site vs New HTML for every section in §2. Include:
- What content exists on old site
- What content exists in new HTML
- Gap verdict (Missing / Reduced / Present / Added)

### Step D — Scroll & Density Assessment
Complete the §3 table with actual estimates for old site and new HTML.

### Step E — Generate Report
Produce the full report per §6 format. **Do not abbreviate.**

---

## §5 · Severity Ratings

Apply these to every gap identified:

| Severity | Label | Meaning |
| :--- | :--- | :--- |
| 🔴 **Critical** | Conversion Blocker | Missing content that will cause a qualified lead to leave or not apply. (e.g., missing fee, missing deadline, missing module names) |
| 🟠 **High** | Trust Eroder | Missing content that reduces institutional credibility. (e.g., no faculty, no testimonials, placeholder text) |
| 🟡 **Medium** | SEO / UX Risk | Content present but incomplete, inaccurate, or poorly structured. |
| 🟢 **Low** | Polish | Minor improvements that enhance but are not blocking. |
| ⚫ **Brand Fail** | Non-Negotiable | Any violation of §1 color, typography, or tone rules. Must be fixed before go-live. |

---

## §6 · Required Report Format

The output artifact MUST follow this exact structure:

---

### Header
```
# [Programme Name] — Content & Brand Audit
Audit Date: [date] | HTML File: [filename] | Old Site URL: [url]
```

### Section 1: Executive Summary
One paragraph. State overall readiness (%) and the top 3 issues.

### Section 2: Scroll Depth & Density

| Metric | Old Site | New HTML | Notes |
| :--- | :--- | :--- | :--- |
| Estimated Scroll Count | X | X | |
| Estimated Word Count | X | X | |
| Section Count | X | X | |
| Density Assessment | | | Too sparse / Right / Too dense |

### Section 3: Content Gap Report

| Section | Old Site Content | New HTML Status | Severity | Fix Required |
| :--- | :--- | :--- | :--- | :--- |
| Hero | ... | ✅/⚠️/❌ | 🟡 | ... |
| ... | ... | ... | ... | ... |

### Section 4: Brand Compliance

| Rule | Requirement | Found in HTML | Status |
| :--- | :--- | :--- | :---: |
| Display Font | Source Serif 4 | [what was found] | ✅/❌ |
| Body Font | Inter | [what was found] | ✅/❌ |
| Mono Font | IBM Plex Mono | [what was found] | ✅/❌ |
| Canvas Color | #F4EFE3 | [what was found] | ✅/❌ |
| Accent Color | #C97138 (Marigold) | [what was found] | ✅/❌ |
| Banned Colors | None of the banned list | [what was found] | ✅/❌ |
| Brand Promise | Used once, not as headline | [what was found] | ✅/❌ |
| Banned Phrases | None of the banned list | [what was found] | ✅/❌ |

### Section 5: Voice & Tone Audit

Check 3–5 key text samples from the HTML against §1.3. Show the original text, then flag any issues.

| Text Sample | Issues | Severity |
| :--- | :--- | :--- |
| "..." | Adjective-heavy, vague verb | 🟡 |

### Section 6: UI/UX Recommendations

Prioritized, numbered list. Each recommendation must state:
- What to change
- Why it improves conversion or UX
- How hard it is to implement (Easy / Medium / Hard)

### Section 7: Missing Content to Restore

Exact list of specific content items that must be pulled from the old site and added to the new HTML. Format:
- **[Section Name]**: "Exact text or module name or FAQ question from old site"

---
*Skill Definition Version 2.0 — IIMBx Brand Team — May 2026*
