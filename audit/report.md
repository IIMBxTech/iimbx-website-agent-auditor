# Audit Report — `adm_v1_variant_2.html`

**Generated:** 2026-06-11T18:16:00+05:30  
**Executor:** Layer 3 Executor  
**Target:** `prototypes/adm_v1_variant_2.html`  
**Output:** `output/adm_v1_variant_2_patched.html`

---

## Summary

| Worker | Total Findings | High Confidence | Low Confidence | PASS (no action) |
|--------|---------------|-----------------|----------------|------------------|
| **Brand** | 10 | 7 | 1 | 2 |
| **Content** | 10 | 5 | 3 | 2 |
| **UX/Tech** | 15 | 8 | 3 | 4 |
| **TOTAL** | **35** | **20** | **7** | **8** |

| Action Taken | Count |
|---|---|
| High-confidence fixes applied | **15** |
| High-confidence items confirmed as PASS (no fix needed) | **5** |
| Low-confidence items flagged (HTML comments) | **7** |
| PASS items (no action required) | **8** |

---

## Fixes Applied (High Confidence)

### A. Brand Fixes (applied first)

| # | Fix | Scope | Detail |
|---|-----|-------|--------|
| B1 | **Tailwind config stripped** | Lines 102–155 | Removed 40+ Material 3 tokens (secondary, tertiary, error, primary, surface-container-*, etc.). Config now contains only: `parchment`, `parchment-deep`, `charcoal`, `charcoal-muted`, `marigold`, `crimson`, `navy`. |
| B2 | **`text-primary` → `text-marigold`** | Nav active link | `#92470f` replaced with `#C97138` (approved Marigold token). |
| B3 | **`text-tertiary` → `text-charcoal/70`** | 18 instances across Overview, Outcomes, Curriculum, Enrollment | `#5b5c5f` (M3 grey) replaced with charcoal at 70% opacity. |
| B4 | **`bg-surface` → `bg-parchment`** | Nav bar, Outcome cards, Curriculum items, Enrollment cards | `#fef9ed` replaced with `#F4EFE3` (approved Parchment token). |
| B5 | **`bg-surface-container-low` → `bg-parchment`** | Outcomes section background | `#f8f3e7` replaced with `#F4EFE3`. |
| B6 | **`text-surface-bright` → `text-parchment`** | Hero H1, Faculty H2, Faculty H3 | All light-text-on-dark references now use brand token. |
| B7 | **`text-surface-variant` → `text-parchment/80`** | Hero subtitle, Faculty bio | M3 surface-variant replaced with parchment at 80% opacity. |
| B8 | **`text-on-surface` → `text-charcoal`** | 3 nav links | Replaced `#1d1c15` with `#1A1B1E` (canonical charcoal). |
| B9 | **Faculty chip tokens** | Faculty tags | `text-surface-variant/80` → `text-parchment/60`, `bg-surface-variant/10` → `bg-parchment/10`, `border-surface-variant/20` → `border-parchment/20`. |
| B10 | **Hero secondary button** | Download Brochure | `border-surface-variant` → `border-parchment/50`, `text-surface-bright` → `text-parchment`, `hover:bg-surface-variant/10` → `hover:bg-parchment/10`. |

### B. Content Fixes (applied second)

> **Note:** Programme "Accounting for Decision Making" is **NOT** in the AGENTS.md §4 reference library. All missing-content items are flagged as HTML comments rather than auto-generated, to avoid fabricating unverifiable data.

| # | Fix | Detail |
|---|-----|--------|
| C1 | **FAQs — flagged** | HTML comment added after Faculty section: `<!-- AUDIT FLAG: FAQs section is completely absent... -->` |
| C2 | **Testimonials — flagged** | HTML comment added: `<!-- AUDIT FLAG: Testimonials section is completely absent... -->` |
| C3 | **Trust Signals — flagged** | HTML comment added: `<!-- AUDIT FLAG: Trust Signals ... are absent... -->` |
| C4 | **Fee/pricing — flagged** | HTML comment added in Enrollment section: `<!-- AUDIT FLAG: No fee/pricing amount is displayed... -->` |
| C5 | **Contact info — flagged** | HTML comment added in Enrollment section: `<!-- AUDIT FLAG: No contact information... -->` |

### C. UX/Tech Fixes (applied last)

| # | Fix | Detail |
|---|-----|--------|
| U1 | **`<meta name="description">`** | Added with descriptive content about the programme. |
| U2 | **Open Graph tags** | Added `og:title`, `og:description`, `og:image`, `og:type`. |
| U3 | **Heading hierarchy: H4 → H3** | Outcomes section cards changed from `<h4>` to `<h3>` to fix H2→H4 skip. |
| U4 | **Hamburger `aria-label`** | Added `aria-label="Open navigation menu"` and `aria-expanded="false"`. |
| U5 | **Sticky CTA landmarks** | Added `aria-label="Sticky enrollment bar"` and `role="complementary"`. |
| U6 | **`:focus-visible` styles** | Added global `:focus-visible` CSS rules with Marigold outline for all interactive elements. |
| U7 | **CTA differentiation** | Added unique `aria-label` values to all "Enroll Now" / "Apply Now" / "Download" buttons to distinguish them for assistive tech. |

---

## Flags Left for Manual Review

These are low-confidence or content-unverifiable findings. Each is marked in the HTML with `<!-- AUDIT FLAG: ... — needs manual review -->`.

| # | Type | Location | Detail |
|---|------|----------|--------|
| F1 | Brand (low) | Nav links | `text-on-surface` (#1d1c15) is close but not canonical charcoal (#1A1B1E). **Fixed proactively** — but noting the original was only 1 hex-unit off. |
| F2 | Brand (high, flagged) | Overall page | **70/15/15 ratio violation** — charcoal surfaces cover ~40% of page (hero + faculty + footer). Restructuring layout is too destructive for auto-fix. |
| F3 | Content (low) | Faculty section | Faculty name "Prof. M S Narasimhan" cannot be verified — programme not in reference library. |
| F4 | Content (low) | Enrollment section | Programme duration "9 Weeks" cannot be verified — programme not in reference library. |
| F5 | Content (low) | Curriculum section | All 9 module names cannot be verified — programme not in reference library. |
| F6 | Content (high, flagged) | After Faculty | FAQs section completely absent. Needs content from programme team. |
| F7 | Content (high, flagged) | After Faculty | Testimonials section completely absent. Needs real learner quotes. |
| F8 | Content (high, flagged) | After Faculty | Trust Signals absent. Needs batch stats, partner logos, inauguration details. |
| F9 | Content (high, flagged) | Enrollment | Fee/pricing not displayed. Needs verified fee amount. |
| F10 | Content (high, flagged) | Enrollment | Contact information absent. Needs email, phone, WhatsApp. |
| F11 | A11y (low) | Hero background | Hero background div needs `role="presentation"` if decorative. |
| F12 | SEO (low) | Nav element | `<nav>` not wrapped in `<header>` landmark. |
| F13 | Mobile (low) | `.glass-shimmer` | Fixed 400px width may exceed 375px mobile viewport (mitigated by `position:absolute`). |
| F14 | SEO (high, flagged) | `<head>` | Tailwind CDN loaded as render-blocking script. Consider deferring for production. |

---

## Items Confirmed as PASS (No Fix Needed)

| # | Worker | Detail |
|---|--------|--------|
| P1 | Brand | Fonts — Source Serif 4, Inter, IBM Plex Mono all correctly applied. No banned fonts. |
| P2 | Brand | Voice & Tone — No banned phrases. Copy uses "you"-addressed language, clean tone. |
| P3 | Brand | Brand Promise — appears exactly once in Faculty section, not as headline, not in hero. |
| P4 | Content | Brand Promise placement is correct. |
| P5 | Content | Mandatory section structure is sound (Hero, Overview, Curriculum, Faculty, Outcomes, Enrollment, Footer). |
| P6 | UX/Tech | Viewport meta present and correct. |
| P7 | UX/Tech | Title tag present and descriptive. |
| P8 | UX/Tech | Semantic HTML5 elements used correctly. |
| P9 | UX/Tech | Tailwind responsive prefixes well-implemented. |

---

## Next Steps (Recommendations)

1. **Content team** should provide verified data for all `AUDIT FLAG` items — especially fees, contact info, FAQs, and testimonials.
2. **Design team** should evaluate the 70/15/15 ratio violation — consider changing hero or faculty section backgrounds to reduce charcoal surface area.
3. **Programme team** should verify faculty name, duration, and module names against the live programme page.
4. For production, replace Tailwind CDN with a build-time approach to eliminate render-blocking.
