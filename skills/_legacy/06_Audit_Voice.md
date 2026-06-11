# Agent 06 · Voice & Tone Auditor
**Role:** Analyzer | **Layer:** 3 | **Input:** Agent 02 (prototype text) + Agent 03 (voice rules)

---

## Purpose
Scan all visible text in the prototype for banned phrases, tone violations, and adherence to IIMBx's "plain English, one person" voice. This agent protects the brand from copywriting that sounds generic, corporate, or hyperbolic.

---

## Execution Steps

### Step 1 — Extract All Visible Text
From Agent 02's output, collect all text content: headings, paragraphs, list items, button text, chip labels, alt text, testimonial quotes, FAQ answers.

### Step 2 — Banned Phrase Scan
Search for exact or near-exact matches of:

| Banned Phrase | Why It's Banned |
|:--|:--|
| "cutting-edge" | Cliché. Says nothing. |
| "world-class" | Every institution claims this. |
| "state-of-the-art" | Vague superlative. |
| "immersive" | Overused in edtech. |
| "leveraging" | Corporate jargon. |
| "empowering yourself" | Passive, preachy. |
| "gamified" | Not part of IIMBx pedagogy. |
| "once-in-a-lifetime" | Hyperbolic. |

Also flag: "holistic", "synergy", "paradigm shift", "revolutionize", "unlock your potential" — these aren't explicitly banned but violate the plain-English principle.

### Step 3 — Voice Checklist (Sample 5 Text Blocks)
Pick 5 representative text blocks (hero lede, an objective, a FAQ answer, a testimonial framing, the CTA paragraph). For each, check:

| Rule | Pass/Fail | Evidence |
|:--|:--|:--|
| Uses "you" not "learners/participants" | — | — |
| Ends sentence on strongest word | — | — |
| Adjectives are seasoning, not the meal | — | — |
| Uses strong verbs, concrete nouns | — | — |
| Avoids passive voice | — | — |

### Step 4 — Brand Promise Check
- Is "The same faculty. Wherever you are." present? Where exactly?
- Is it used as the `<h1>`? (Not allowed)
- Is it in the hero section? (Not allowed)
- Does it appear more than once? (Not allowed)

### Step 5 — Output

```
VOICE_AUDIT:
  score: [0-100]
  banned_phrases_found: [list with phrase, location, and surrounding context]
  voice_samples:
    - text: "[sample]"
      location: "Hero lede"
      you_addressed: true/false
      strong_ending: true/false
      plain_english: true/false
      verdict: "✅ On-brand" / "⚠️ Needs polish"
  brand_promise:
    present: true/false
    location: "[section name]"
    used_as_h1: true/false
    appears_more_than_once: true/false
    compliant: true/false
```

---

## IIMBx Voice Examples

**Good (on-brand):**
- "You made the jump to manager. Now lead like one."
- "Read a balance sheet like an owner."
- "Don't write a paper. Move a number."

**Bad (off-brand):**
- "This cutting-edge programme empowers learners to leverage AI."
- "A world-class immersive experience for participants."
- "Unlock your true leadership potential with our holistic curriculum."
