# VIEWPORT_SPEC.md

## Target breakpoints
| Name       | min-width | Behaviour                          |
|------------|-----------|------------------------------------|
| desktop-xl | 1440px    | PRIMARY TARGET — audit against this |
| desktop    | 1280px    | acceptable                          |
| tablet     | 768px     | must not break                      |
| mobile     | 375px     | must not break                      |

## Layout rules (desktop-xl)
- Outer wrapper:        width: 100%, max-width: NONE on <body> or <main>
- Content container:    max-width: 1200px, margin: 0 auto, padding: 0 48px
- Hero section:         CSS Grid, 2 columns, gap: 64px minimum
- Hero left col:        ~55% width
- Hero right card:      ~40% width, no float, no absolute positioning
- Section padding:      80px top/bottom minimum
- No element may have: margin-left > 10% or margin-right > 10% at desktop-xl

## Banned patterns
- max-width on <body>, <html>, or <main> that is less than 1100px
- width: 700px (or any fixed px width) on layout containers
- float: left / float: right on hero elements
- position: absolute on the hero card

## Pre-audit computed style dump

Before any worker runs, the Orchestrator must produce a computed style snapshot. Extract and save to `/audit/computed_styles.json`:

For each of these selectors (update list per project):
  body, main, .container, .wrapper, .hero, .hero-wrapper,
  .hero-left, .hero-right, section, header, footer

Record these properties:
  max-width, width, min-width,
  padding-left, padding-right, margin-left, margin-right,
  display, grid-template-columns, flex-direction,
  position, float

Format:
```json
{
  ".hero-wrapper": {
    "max-width": "720px",
    "display": "flex",
    "padding-left": "24px",
    "margin-left": "auto"
  }
}
```

Workers audit against `computed_styles.json`, NOT the raw HTML. This is mandatory. A worker that skips this step and reads raw HTML will miss any styles applied via class inheritance or cascade.

If a selector is not found in the HTML, skip it silently.
If the HTML is not parseable, the Orchestrator must stop and report the error — do not proceed with a broken input file.
