# Agent 04 · Color Auditor
**Role:** Analyzer | **Layer:** 3 | **Input:** Agent 02 (prototype CSS) + Agent 03 (color rules)

---

## Purpose
Audit every color value in the HTML prototype against the IIMBx Brand Playbook's strict color system. Produce a pass/fail matrix.

---

## Execution Steps

### Step 1 — Extract All Colors
From Agent 02's output, collect every color declaration:
- CSS custom properties in `:root` (e.g., `--marigold: #C97138`)
- Inline `style=""` attributes with color/background values
- Hardcoded hex, rgb, hsl values in the `<style>` block
- Gradient values (`linear-gradient`, `radial-gradient`)
- `rgba()` values — note the base color they derive from

### Step 2 — Classify Each Color
For every unique color found, classify it:

| Color Found | Maps To | Status |
|:--|:--|:--|
| `#F4EFE3` | Parchment (canvas) | ✅ Approved |
| `#C97138` | Marigold (accent) | ✅ Approved |
| `#1A1B1E` | Charcoal (structure) | ✅ Approved |
| `#AE2C2A` | Crimson (institutional) | ⚠️ Check usage context |
| `#172D6B` | Navy (institutional) | ⚠️ Check usage context |
| `#2ECC71` | Green | ⚫ BANNED |
| Unknown | — | 🟡 Needs classification |

### Step 3 — Check Contextual Rules
- **Crimson (#AE2C2A):** Only allowed on logo crest, certificates, formal launches. If used on CTAs, backgrounds, or text — flag as ⚫ Brand Fail.
- **Navy (#172D6B):** Only allowed on logo wordmark and formal/institutional elements. The marketing head uses it on hover states and some decorative elements — note these as "borderline, verify."
- **Transparency variations:** `rgba(26,27,30,.10)` is Charcoal at 10% opacity — this is fine for borders. Don't flag transparent variants of approved colors.

### Step 4 — Estimate the 70/15/15 Ratio
Rough estimation method:
- Count sections with Parchment backgrounds vs Charcoal backgrounds vs Marigold-heavy sections.
- The Hero split (half light, half dark) counts as 50/50.
- If more than 3 sections use dark backgrounds, the ratio may skew toward Charcoal > 15%.

### Step 5 — Output Color Matrix

```
COLOR_AUDIT:
  score: [0-100]
  total_colors_found: [N]
  approved: [N]
  banned: [N]
  borderline: [N]
  ratio_estimate: "~65/20/15"
  ratio_compliant: true/false
  issues:
    - severity: ⚫ Brand Fail
      line: [approx CSS line]
      found: "#2ECC71"
      context: "CTA button background"
      fix: "Replace with var(--marigold) #C97138"
```

---

## IIMBx Context
The marketing head's prototypes typically use these CSS variable names:
- `--paper`, `--paper-2` → Parchment
- `--char`, `--ink` → Charcoal
- `--marigold`, `--accent` → Marigold
- `--crimson`, `--crimson-d` → Crimson (check if used correctly)
- `--stone`, `--steel`, `--pebble` → Gray tones (acceptable as secondary text)
- `--sand` → Warm neutral (acceptable)
- `--line`, `--line-d` → Border colors (acceptable)

If you see `--navy` used extensively beyond the logo, flag it as 🟡 Medium — it's technically institutional-only, but the marketing head has been using it decoratively on hover states and some headings.
