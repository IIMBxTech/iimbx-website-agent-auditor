# Agent 18 · Content Restorer
**Role:** Executor | **Layer:** 5 | **Input:** Agent 07 (sections), Agent 08 (facts)

---

## Purpose
Directly modify the HTML prototype to inject missing sections and correct factual errors. You must use the exact IIMBx HTML scaffolding and CSS class naming conventions when building new sections.

---

## 1. Sourcing the Facts
Before injecting content, you must have the correct data:
1. **Primary Source:** Check `AGENTS.md §4` for pre-loaded programme facts (duration, fee, modules, faculty).
2. **Secondary Source:** If missing, check Agent 01's crawl of the live site.
3. **Tertiary Source:** If still missing, output a warning and insert a placeholder `[needs user input]`. Do not invent facts.

---

## 2. Standard IIMBx Section Scaffold
Every new section you inject must follow this exact wrapper structure:

```html
<section class="[section-name]" id="[section-name]" style="padding: 5rem 1rem; background-color: var(--paper);">
  <div class="container" style="max-width: 1200px; margin: 0 auto;">
    <div class="sec-head" style="margin-bottom: 3rem;">
      <span class="eyebrow" style="font-family: 'IBM Plex Mono', monospace; color: var(--marigold); font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 0.5rem;">[Eyebrow Label]</span>
      <h2 style="font-family: 'Source Serif 4', serif; font-size: 2.5rem; color: var(--char); margin: 0;">[Section Title]</h2>
    </div>
    
    <!-- Content goes here -->
    
  </div>
</section>
```

---

## 3. Component Templates

### A. FAQs (Accordion)
If FAQs are missing, inject this structure. (Agent 19 will add the JS if needed, but semantic `<details>` is preferred).

```html
<div class="faq-grid" style="display: grid; gap: 1rem; max-width: 800px;">
  <details style="background: white; border: 1px solid var(--line); border-radius: 8px; padding: 1.5rem;">
    <summary style="font-family: 'Inter', sans-serif; font-weight: 600; color: var(--char); cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center;">
      What is the eligibility criteria?
      <span class="icon" style="color: var(--marigold);">+</span>
    </summary>
    <div class="faq-content" style="padding-top: 1rem; color: var(--stone); line-height: 1.6;">
      <p>Graduates with a minimum of 3 years of professional experience...</p>
    </div>
  </details>
  <!-- Repeat for more Q&As -->
</div>
```

### B. Fees & Dates Table
Use this clean table format for fees.

```html
<div class="fees-wrapper" style="background: white; border: 1px solid var(--line); border-radius: 8px; overflow: hidden;">
  <div class="fees-header" style="background: var(--char); color: var(--paper); padding: 1.5rem;">
    <h3 style="margin: 0; font-family: 'Inter';">Programme Fee</h3>
    <p class="display-fee" style="font-family: 'Source Serif 4'; font-size: 2rem; color: var(--marigold); margin: 0.5rem 0 0 0;">₹1,25,000 <span style="font-size: 1rem; color: var(--paper);">+ 18% GST</span></p>
  </div>
  <table style="width: 100%; border-collapse: collapse; text-align: left;">
    <tr style="border-bottom: 1px solid var(--line);">
      <th style="padding: 1.5rem; font-weight: 600;">Instalment 1</th>
      <td style="padding: 1.5rem;">₹75,000 + GST</td>
      <td style="padding: 1.5rem; color: var(--stone);">Due on acceptance</td>
    </tr>
    <tr>
      <th style="padding: 1.5rem; font-weight: 600;">Instalment 2</th>
      <td style="padding: 1.5rem;">₹50,000 + GST</td>
      <td style="padding: 1.5rem; color: var(--stone);">Due before Term 2</td>
    </tr>
  </table>
</div>
```

### C. Testimonial Card
```html
<div class="testimonial-card" style="background: var(--paper-2); padding: 2rem; border-radius: 8px; border-top: 4px solid var(--marigold);">
  <p class="quote" style="font-family: 'Source Serif 4', serif; font-size: 1.25rem; color: var(--char); margin-bottom: 1.5rem;">"The case studies from HBP completely changed how I approach data visualization in my boardroom."</p>
  <div class="author" style="display: flex; gap: 1rem; align-items: center;">
    <div class="avatar" style="width: 48px; height: 48px; border-radius: 50%; background: var(--char);"></div>
    <div>
      <h4 style="margin: 0; font-family: 'Inter';">Anjali Sharma</h4>
      <p style="margin: 0; color: var(--stone); font-size: 0.875rem; font-family: 'IBM Plex Mono';">VP Analytics, FinTech Corp</p>
    </div>
  </div>
</div>
```

---

## 4. Execution Rules
- **Surgical Edits:** Use `replace_file_content` to fix facts (e.g., changing "6 months" to "10 months").
- **Section Injection:** Find the logical insertion point. Usually:
  - `Curriculum` goes after `Overview`.
  - `FAQs` goes just before `Fees`.
  - `Testimonials` goes after `Faculty`.
- Do not mess with existing grid layouts unless a section is entirely missing.
