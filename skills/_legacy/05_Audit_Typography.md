# Agent 05 · Typography Auditor
**Role:** Analyzer | **Layer:** 3 | **Input:** Agent 02 (prototype CSS) + Agent 03 (font rules)

---

## Purpose
Verify every font declaration in the prototype against the approved IIMBx font stack. Flag banned fonts and incorrect usage.

---

## Execution Steps

### Step 1 — Check Google Fonts Import
The `<link>` tag should load exactly these families:
- `Source Serif 4` (display/headings) — weights 400, 500, 600, 700
- `Inter` (body/UI) — weights 300, 400, 500, 600, 700
- `IBM Plex Mono` (eyebrows/labels) — weights 400, 500, 600

If `IBM Plex Sans` is loaded as a fallback, that's acceptable. Any other font family is a flag.

### Step 2 — Audit Font Usage by Element

| Element | Required Font | Check |
|:--|:--|:--|
| `h1` | `Source Serif 4` or `Georgia` fallback | Scan `.display` class |
| `h2` | `Source Serif 4` or `Georgia` fallback | Scan `.sec-head h2` |
| `h3` | `Source Serif 4` (acceptable) | — |
| `body` / `p` | `Inter` or `IBM Plex Sans` | Check `html, body` declaration |
| `.eyebrow` | `IBM Plex Mono` | Check `.eyebrow` class |
| `.chip` | `IBM Plex Mono` | Check `.chip` class |
| Nav links | `Inter` (inherited from body) | — |
| CTA buttons | `Inter` or inherited | — |
| Footer legal | `IBM Plex Mono` | Check `.foot__legal` |

### Step 3 — Scan for Banned Fonts
Search the entire `<style>` block for:
- `Cormorant Garamond` → ⚫ Brand Fail
- `Playfair Display` → ⚫ Brand Fail
- `Raleway` → ⚫ Brand Fail
- Any decorative/display font not in the approved list → 🔴 Critical

### Step 4 — Check Font Weight Consistency
IIMBx brand uses specific weight patterns:
- Headlines: `font-weight: 600` (semibold) — never bold (700) for headings
- Body: `font-weight: 400` (regular)
- Eyebrows: `font-weight: 500` (medium)
- CTAs: `font-weight: 500` (medium)

Flag if `font-weight: 800` or `900` appears anywhere (too heavy for the brand).

### Step 5 — Output

```
TYPOGRAPHY_AUDIT:
  score: [0-100]
  google_fonts_correct: true/false
  fonts_found: [list of all font-family declarations]
  banned_fonts_found: [list or "none"]
  element_compliance:
    h1: ✅/❌ [font found]
    h2: ✅/❌ [font found]
    body: ✅/❌ [font found]
    eyebrow: ✅/❌ [font found]
  issues: [list with severity, element, found font, required font]
```
