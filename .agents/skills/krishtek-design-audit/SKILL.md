---
name: krishtek-design-audit
description: >-
  Audits and fixes typography, contrast, and layout inconsistencies across Krishitek HTML variant files, ensuring brand guidelines and Ponytail minimal-engineering principles are met.
---

# Krishitek Design Audit

## Overview
This skill audits and automatically fixes typography, text size, and contrast inconsistencies across all Krishitek `variants/*.html` files. It ensures that faint gray text is darkened for readability, dark sections have white text, and badges are standardized.

## Dependencies
- ponytail (for minimal engineering principles)

## Quick Start
When the user asks to "check for UI inconsistencies" or "audit the design":
1. Run the audit script to identify issues.
2. Run the apply script to inject the global CSS fixes.

## Utility Scripts
Use a Python script to perform the audit and apply fixes:

### 1. Apply Script
Injects the following CSS block into all `variants/*.html` files to enforce typography and contrast rules globally:

```css
/* Global Typography Scale & High-Contrast Enforcement */
.section-subtitle, .page-subtitle, .about-text {
  color: #4B5563 !important;
  font-size: 17.5px !important;
  line-height: 1.7 !important;
}

.why-card p, .benefit-card p, .service-card p, .location-item p, .t-content p {
  color: #374151 !important;
  font-size: 15px !important;
  line-height: 1.65 !important;
}

.spec-value {
  color: #1A1A1A !important;
  font-weight: 600 !important;
}

.section-tag, .tag {
  font-size: 14px !important;
  font-weight: 800 !important;
  padding: 8px 24px !important;
  border-radius: 24px !important;
  letter-spacing: 1.5px !important;
  text-transform: uppercase !important;
  display: inline-block !important;
}

.benefits-strip .section-title, .dark-section .section-title, .page-header .page-title {
  color: #FFFFFF !important;
}

.benefits-strip .section-subtitle, .dark-section .section-subtitle, .page-header .page-subtitle {
  color: #E5E7EB !important;
}
```

## Workflow
1. Use `view_file` or `grep_search` to verify if the global CSS block is missing from `variants/*.html`.
2. Apply the CSS block using a Python script to all HTML files in the `variants/` directory.
3. Generate a `walkthrough.md` report summarizing the applied changes for the user.
