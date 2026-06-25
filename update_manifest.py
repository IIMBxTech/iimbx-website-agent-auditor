import json

path = r'c:\Users\harsh\OneDrive\Desktop\website audit experimenet with new brand comp\audit\manifest.json'
with open(path, 'r', encoding='utf-8') as f:
    data = json.load(f)

findings = [
    {
      "reasoning": "VIEWPORT_SPEC.md states 'Content container: max-width: 1200px'. The layout containers in nav, header, and sections use the Tailwind class max-w-7xl, which maps to 1280px.",
      "type": "layout",
      "element": ".max-w-7xl",
      "issue": "Content container max-width exceeds 1200px limit",
      "fix": "max-width: 1200px",
      "confidence": "high"
    },
    {
      "reasoning": "VIEWPORT_SPEC.md states 'Content container: padding: 0 48px'. The containers use px-6 md:px-8 which translates to 32px horizontal padding on desktop.",
      "type": "layout",
      "element": ".max-w-7xl",
      "issue": "Content container horizontal padding is 32px instead of 48px",
      "fix": "padding: 0 48px",
      "confidence": "high"
    },
    {
      "reasoning": "VIEWPORT_SPEC.md states 'Hero section: CSS Grid, 2 columns, gap: 64px minimum'. The hero wrapper uses Flexbox (flex-col md:flex-row) with gap-12 (48px).",
      "type": "layout",
      "element": "header > div",
      "issue": "Hero uses flex instead of grid and gap is less than 64px",
      "fix": "display: grid; gap: 64px",
      "confidence": "high"
    },
    {
      "reasoning": "VIEWPORT_SPEC.md states 'Hero left col: ~55% width'. The HTML uses w-full md:w-1/2 (50%).",
      "type": "layout",
      "element": "header > div > div:first-child",
      "issue": "Hero left column is 50% instead of 55%",
      "fix": "width: 55%",
      "confidence": "high"
    },
    {
      "reasoning": "VIEWPORT_SPEC.md states 'Hero right card: ~40% width'. The HTML uses w-full md:w-1/2 (50%).",
      "type": "layout",
      "element": "header > div > div:last-child",
      "issue": "Hero right column is 50% instead of 40%",
      "fix": "width: 40%",
      "confidence": "high"
    },
    {
      "reasoning": "The HTML document is missing a <meta name=\"description\"> tag, which is essential for SEO.",
      "type": "seo",
      "element": "head",
      "issue": "Missing meta description",
      "fix": "add meta description",
      "confidence": "high"
    },
    {
      "reasoning": "Decorative SVGs should have aria-hidden=\"true\" to prevent screen readers from announcing them unnecessarily.",
      "type": "a11y",
      "element": "svg",
      "issue": "Missing aria-hidden on decorative SVG",
      "fix": "add aria-hidden=\"true\"",
      "confidence": "high"
    }
]

if "pcaim" not in data:
    data["pcaim"] = {}
if "ux_tech" not in data["pcaim"]:
    data["pcaim"]["ux_tech"] = {}

data['pcaim']['ux_tech']['status'] = 'done'
data['pcaim']['ux_tech']['findings'] = findings

with open(path, 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2)

print("Updated manifest.json successfully.")
