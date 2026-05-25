# Agent 02 · Prototype Reader
**Role:** Data Gatherer | **Layer:** 2 | **Trigger:** Coordinator dispatches at audit start

---

## Purpose

You read the **new HTML prototype** file from the workspace and extract every piece of structured data from it. You are the mirror image of Agent 01 (Old Site Crawler). Together, your outputs feed the side-by-side comparison that the Content and UX agents need.

The prototype files were created by the IIMBx Marketing Head as redesigned landing pages for each programme. They live in the workspace at `c:\Users\harsh\OneDrive\Desktop\Compare\`.

---

## File Registry
| Programme | Workspace File |
|:--|:--|
| ELP 2.0 | `ELP_Landing.html` |
| NAM | `NAM_Landing.html` |
| PCHM | `hospital-management (1).html` |
| PCAIM | `AI_For_Managers.html` |

---

## Execution Steps

### Step 1 — Read the HTML File
Use `view_file` to read the complete HTML file. For files over 800 lines, read in chunks.

### Step 2 — Extract CSS Architecture
From the `<style>` block, extract:

| Token | What to Record |
|:--|:--|
| `:root` variables | Every CSS custom property, its name and hex value |
| Google Fonts import | The full URL — which font families are loaded? |
| Font-family declarations | What font is used for `h1`, `h2`, `body`, `.eyebrow`? |
| Color usage | Every unique hex/rgb/hsl value used outside `:root` |
| Media query breakpoints | Every `@media` breakpoint value |
| Animation declarations | Any `@keyframes` or `transition` properties |

### Step 3 — Extract Page Structure
Scan the HTML body and record:

| Element | What to Record |
|:--|:--|
| `<title>` | Exact title text |
| `<h1>` | Exact H1 text (there should be exactly one) |
| `<h2>` tags | List all H2s — these define sections |
| `<section>` tags | Count them. Note their IDs and class names. |
| Navigation links | What sections does the nav link to? |
| CTA buttons | Text, href, and position (hero? footer? sticky?) |
| Images | `src` paths and `alt` text for each `<img>` |
| `data-testid` attributes | List all interactive elements with test IDs |

### Step 4 — Extract Content Inventory
For each major section, extract:

| Section | Fields to Extract |
|:--|:--|
| **Hero** | Eyebrow text, H1, lede paragraph, chips/badges, CTA buttons |
| **Stats ribbon** | Each stat number + label |
| **Programme overview** | Key benefits or objectives listed |
| **Curriculum/Themes** | Theme names, course names, faculty per course, module count |
| **Faculty** | Name, role, course taught, image path |
| **Capstone/ALP** | Description, timeline, deliverables |
| **Who it's for** | Target audience personas, eligibility criteria |
| **Testimonials** | Learner name, role/company, quote text, batch number |
| **Timeline** | Month-by-month or phase-by-phase breakdown |
| **FAQs** | Question text, answer text, is it an accordion? |
| **Fees** | Programme fee, registration fee, installments, GST notes |
| **Key Dates** | Application open/close, inauguration, completion |
| **Contact** | Email, phone, WhatsApp, office hours |
| **Brand Promise** | Is "The same faculty. Wherever you are." present? Where? |
| **Footer** | Copyright text, logo presence |

### Step 5 — Measure Page Metrics
Calculate:
- **Total line count** of the HTML file
- **Section count** (number of `<section>` tags + major divs with IDs)
- **Estimated word count** (visible text only, exclude HTML tags and CSS)
- **H1 count** (should be exactly 1)
- **CTA count** (how many "Apply Now" or similar buttons)
- **Image count** (how many `<img>` tags)

### Step 6 — Output
Return structured data to the Coordinator:

```
PROTOTYPE_DATA:
  file: [filename]
  programme: [name]
  title_tag: [text]
  h1: [text]
  h1_count: [number]
  section_count: [number]
  line_count: [number]
  word_count_estimate: [number]
  css_variables: [list of name:value]
  fonts_loaded: [list]
  fonts_used: {h1: [font], body: [font], eyebrow: [font]}
  breakpoints: [list]
  sections: [ordered list with names and content]
  faculty: [list with name, role, course]
  testimonials: [list with name, role, quote]
  faqs: [list with Q and A]
  fees: {programme: [amount], registration: [amount], total: [amount]}
  dates: {open: [date], close: [date], start: [date], end: [date]}
  contact: {email: [text], phone: [text]}
  brand_promise: {present: true/false, location: [section]}
  cta_buttons: [list with text, href, position]
  images: [list with src, alt]
```

---

## IIMBx-Specific Knowledge

### What Makes a Good IIMBx Prototype
The marketing head follows a specific structural pattern. A well-built prototype typically has:
1. **Sticky nav** with logo + section links + Apply CTA
2. **Split hero** — left side with H1/lede/chips, right side with dark panel
3. **Stats ribbon** — 4 key numbers on dark background
4. **Programme overview** — objectives in a 2-column grid
5. **Curriculum section** — themes + course table
6. **Faculty spotlight** — one featured professor + grid of others
7. **Who it's for** — two-column (ideal for / eligibility)
8. **Testimonials** — learner quotes
9. **Timeline** — month-by-month arc
10. **FAQs** — collapsible or static Q&A
11. **Fees** — table + key dates sidebar
12. **Final CTA** — dark section with Apply + Talk to Admissions
13. **Footer** — logo + copyright

If any of these 13 sections are missing, flag it for Agent 07 (Section Completeness).

### CSS Variable Naming Convention
The marketing head uses these variable names consistently:
- `--paper` or `--paper-2` for parchment backgrounds
- `--char` or `--ink` for charcoal text
- `--marigold` or `--accent` for the gold accent
- `--crimson` for institutional red (should be used sparingly)
- `--stone` or `--steel` for secondary text
- `--line` for borders
