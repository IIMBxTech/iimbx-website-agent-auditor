# Agent 17 · Brand Fixer
**Role:** Executor | **Layer:** 5 | **Input:** Agent 04 (color), Agent 05 (typography), Agent 06 (voice)

---

## Purpose
Directly modify the HTML prototype file to fix any ⚫ Brand Fails or typography/color issues identified by the Layer 3 analyzers. You apply the IIMBx CSS variables and ensure text follows the playbook.

---

## 1. CSS Variable Reference (IIMBx May 2026)

When replacing hardcoded hex values, always use these CSS variables. Do not define new variables unless strictly necessary.

| Token Role | Brand Variable | Hex Value |
| :--- | :--- | :--- |
| **Canvas (70%)** | `var(--paper)` | `#F4EFE3` |
| **Canvas Alt** | `var(--paper-2)` | `#FBF8F1` |
| **Structure/Text (15%)** | `var(--char)` or `var(--ink)` | `#1A1B1E` |
| **Accent (15%)** | `var(--marigold)` | `#C97138` |
| **Institutional** | `var(--crimson)` | `#AE2C2A` |
| **Borders** | `var(--line)` | `rgba(26,27,30,.10)` |

❌ **Banned Colors to Search For & Replace:**
- `green`, `teal`, `#2ECC71`, `#1ABC9C`, `#27AE60` → Replace with `var(--marigold)` or `var(--paper)` depending on context.
- `purple`, `#9B59B6`, `#8E44AD` → Replace with `var(--char)` or `var(--paper)`.
- **Ambiguous:** If a color is brownish (like `#A0522D`), change it strictly to `var(--marigold)`.

---

## 2. Execution Steps: Typography

### Step A: Update Google Fonts
Search for the `<link>` tag loading Google Fonts. Replace it entirely with this canonical block:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Inter:wght@300;400;500;600;700&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,500;0,8..60,600;0,8..60,700;1,8..60,400;1,8..60,500;1,8..60,600&display=swap" rel="stylesheet">
```

### Step B: Fix CSS Font Families
Ensure these rules exist in the `<style>` block and override any bans (`Playfair Display`, `Cormorant Garamond`, `Raleway`):
```css
body { font-family: 'Inter', sans-serif; }
h1, h2, .display, .sec-head h2 { font-family: 'Source Serif 4', Georgia, serif; }
.eyebrow, .chip, .mono { font-family: 'IBM Plex Mono', monospace; }
```

---

## 3. Execution Steps: Voice & Tone

Search the HTML for banned phrases and rewrite them in plain English, addressing "you", and using strong verbs.

**Rewrite Examples:**
- ❌ *"Our cutting-edge curriculum empowers learners to leverage AI."*
  ✅ *"Master the tools you need to lead AI initiatives."*
- ❌ *"Experience a world-class, immersive learning journey."*
  ✅ *"Learn directly from IIM Bangalore faculty."*
- ❌ *"A gamified approach to state-of-the-art management."*
  ✅ *"Test your strategy in real-world simulations."*
- ❌ *"Empower yourself with holistic synergies."*
  ✅ *"Read a balance sheet like an owner."*

---

## 4. Execution Steps: Brand Promise

The Brand Promise must appear exactly **once** per page.

**Rule:** `"The same faculty. Wherever you are."`

- If missing, inject this HTML chunk just above the footer or within the final CTA section:
```html
<section class="brand-band" style="background-color: var(--char); color: var(--paper); padding: 4rem 1rem; text-align: center;">
  <div class="container">
    <p class="display" style="font-family: 'Source Serif 4', serif; font-size: clamp(2rem, 4vw, 3rem); margin: 0;">The same faculty. Wherever you are.</p>
  </div>
</section>
```
- If it exists but is an `<h1>`, change the tag to a `<p class="display">`.

---

## 5. Verification
After applying using `replace_file_content`:
- Re-scan for `#2ECC71` or `green`.
- Ensure exactly one instance of the Brand Promise exists.
- Ensure `Playfair Display` does not appear anywhere in the source code.
