window.AUDIT_DATA = [
  {
    "id": "adm",
    "programmeName": "Accounting for Decision Making",
    "shortName": "ADM",
    "file": "adm_v1_variant_5.html",
    "oldSiteUrl": "https://iimbx.iimb.ac.in/catalog/accounting-for-decision-making/",
    "v1StagingUrl": "",
    "auditDate": "2026-06-08",
    "scores": {
      "brand": 100,
      "content": 100,
      "ux": 100
    },
    "summary": "5 brand-compliant prototypes generated using 2 different AI models: Gemini 3.1 Pro (3 designs) and Gemini 3.5 Flash (2 designs). Each model produced Stitch MCP screens and rules-based HTML files.",
    "contentGaps": [],
    "brandChecks": [
      {
        "rule": "70/15/15 Color Ratio",
        "expected": "70% Parchment, 15% Charcoal, 15% Marigold",
        "actual": "Compliant in all 5 designs",
        "status": "pass"
      },
      {
        "rule": "Typography",
        "expected": "Source Serif 4 / Inter / IBM Plex Mono",
        "actual": "Compliant in all 5 designs",
        "status": "pass"
      },
      {
        "rule": "Brand Promise",
        "expected": "Present exactly once per page",
        "actual": "Present once in all 5 designs",
        "status": "pass"
      },
      {
        "rule": "Banned Colors",
        "expected": "No green, teal, apricot, purple",
        "actual": "None found",
        "status": "pass"
      },
      {
        "rule": "Banned Phrases",
        "expected": "No cutting-edge, world-class, immersive etc.",
        "actual": "None found",
        "status": "pass"
      }
    ],
    "scrollDepth": {
      "current": 4000,
      "target": 2000
    },
    "wireframes": {
      "ascii": {
        "oldSite": "[Hero] -> [Overview] -> [Modules]",
        "marketingHtml": "Not Applicable — no staging site for ADM",
        "v1_variant_1": "DESIGN 1 · Gemini 3.1 Pro · Stitch MCP\n[Sticky Nav: IIMBx | Apply Now]\n[Hero: Title + Brand Promise + 3 Metrics + CTA | Dark Charcoal Quote Panel]\n[Syllabus: 9-Week Card Grid with Marigold left-border]\n[Faculty: Dark Charcoal Band — Prof. M S Narasimhan]\n[Footer]",
        "v1_variant_2": "DESIGN 2 · Gemini 3.1 Pro · Rules-Based HTML\n[Nav: IIMBx | Apply Now]\n[Hero: Split — Title/Metrics/CTA left | Dark Abstract Panel right]\n[Syllabus: 3-col card grid, hover lift effect]\n[Faculty: Charcoal band with centered content]\n[Footer]",
        "v1_variant_3": "DESIGN 3 · Gemini 3.5 Flash · Stitch MCP\n[Sticky Nav: IIMBx | Apply Now]\n[Hero: Title + Italic Brand Promise + Mono Meta | Charcoal Stat Panel]\n[Overview: Tinted block with programme summary]\n[Syllabus: Clean white cards with hover shadow]\n[Faculty: 2-column split on dark charcoal]\n[Audience: Card grid with hover Marigold border]\n[Footer]",
        "v1Staging": "",
        "proposed": "DESIGN 4 · Gemini 3.5 Flash · Rules-Based HTML\n[Nav: IIMBx | Apply Now]\n[Hero: Title + Italic Brand Promise + Compact Mono Meta | Dark Quote Block]\n[Overview Section: Light tint band]\n[Syllabus: Minimalist white cards, hover shadow]\n[Faculty: Dark charcoal 2-column split]\n[Footer]",
        "v1_variant_4": "DESIGN 4 · Gemini 3.5 Flash · Rules-Based HTML\n[Nav: IIMBx | Apply Now]\n[Hero: Title + Italic Brand Promise + Compact Mono Meta | Dark Quote Block]\n[Overview Section: Light tint band]\n[Syllabus: Minimalist white cards, hover shadow]\n[Faculty: Dark charcoal 2-column split]\n[Footer]",
        "v1_variant_5": "DESIGN 5 · Gemini 3.1 Pro (Refined) · Rules-Based HTML\n[Sticky Nav: IIMBx | Apply Now — follows on scroll]\n[Hero: Large Serif Title + Italicised Brand Promise + 3 Mono Metrics | Charcoal Pull-Quote Panel + CTA]\n[Accordion Syllabus: 9 weeks, one open at a time, aria-expanded]\n[Faculty: Full-width dark charcoal 2-col split]\n[Who This Is For: 3-card audience grid, Marigold hover border]\n[Footer: Charcoal + Brand Promise]"
      },
      "suggestions": [
        {
          "title": "Design 1 — Gemini 3.1 Pro (Stitch MCP)",
          "description": "Card-grid syllabus layout with charcoal quote hero panel. Generated via Stitch MCP using GEMINI_3_1_PRO model.",
          "effort": "Done",
          "impact": "High",
          "devNotes": "Stitch Project ID: 17423467441698499097"
        },
        {
          "title": "Design 2 — Gemini 3.1 Pro (Rules-Based HTML)",
          "description": "Split hero with abstract data panel. 3-col syllabus card grid. Manually authored by agent under 3.1 Pro.",
          "effort": "Done",
          "impact": "High",
          "devNotes": "File: accounting_for_decision_making_pro.html"
        },
        {
          "title": "Design 3 — Gemini 3.5 Flash (Stitch MCP)",
          "description": "Clean editorial layout with overview tint band and audience section. Generated via Stitch MCP using GEMINI_3_FLASH model.",
          "effort": "Done",
          "impact": "High",
          "devNotes": "Exceptional case approved by user — one-time override."
        },
        {
          "title": "Design 4 — Gemini 3.5 Flash (Rules-Based HTML)",
          "description": "Minimalist white card syllabus, 2-col faculty split on dark charcoal. Authored under 3.5 Flash.",
          "effort": "Done",
          "impact": "High",
          "devNotes": "File: accounting_for_decision_making_flash.html"
        },
        {
          "title": "Design 5 — Gemini 3.1 Pro (Refined HTML)",
          "description": "Editorial direction: journal meets BI dashboard. Sticky nav, accordion syllabus with aria-expanded, pull-quote hero, audience card grid with hover Marigold border. Hand-refined by Gemini 3.1 Pro.",
          "effort": "Done",
          "impact": "High",
          "devNotes": "File: adm_v1_variant_5.html"
        }
      ]
    },
    "html": {},
    "actionItems": [
      {
        "priority": "low",
        "task": "Review all 5 generated prototypes and select preferred layout for final production",
        "devNotes": "Designs: Pro (Stitch), Pro (HTML), Flash (Stitch), Flash (HTML), Pro Refined (HTML)"
      }
    ],
    "graderScores": {
      "Design 1 (Pro Stitch)": {
        "performance": 57,
        "accessibility": 87,
        "bestPractices": 96,
        "seo": 90,
        "overall": 83,
        "url": "http://localhost:8765/prototypes/adm_v1_variant_1.html",
        "scannedAt": "2026-06-08T12:33:59.133Z",
        "error": null
      },
      "Design 2 (Pro HTML)": {
        "performance": 100,
        "accessibility": 85,
        "bestPractices": 96,
        "seo": 90,
        "overall": 93,
        "url": "http://localhost:8765/prototypes/adm_gemini31pro.html",
        "scannedAt": "2026-06-08T12:34:12.180Z",
        "error": null
      },
      "Design 3 (Flash Stitch)": {
        "performance": 57,
        "accessibility": 96,
        "bestPractices": 96,
        "seo": 90,
        "overall": 85,
        "url": "http://localhost:8765/prototypes/adm_v1_variant_3.html",
        "scannedAt": "2026-06-08T12:34:25.152Z",
        "error": null
      },
      "Design 4 (Flash HTML)": {
        "performance": 88,
        "accessibility": 85,
        "bestPractices": 96,
        "seo": 90,
        "overall": 90,
        "url": "http://localhost:8765/prototypes/adm_gemini35flash.html",
        "scannedAt": "2026-06-08T12:34:37.765Z",
        "error": null
      },
      "Design 5 (Pro Refined)": {
        "performance": 99,
        "accessibility": 92,
        "bestPractices": 96,
        "seo": 100,
        "overall": 97,
        "url": "http://localhost:8765/prototypes/adm_v1_variant_5.html",
        "scannedAt": "2026-06-08T12:34:50.634Z",
        "error": null
      },
      "Stitch v4": {
        "performance": 78,
        "accessibility": 86,
        "bestPractices": 88,
        "seo": 90,
        "overall": 86,
        "url": "http://localhost:8765/prototypes/adm_stitch_v4.html",
        "scannedAt": "2026-06-08T12:35:03.018Z",
        "error": null
      },
      "Old Website": {
        "performance": 52,
        "accessibility": 74,
        "bestPractices": 54,
        "seo": 100,
        "overall": 70,
        "url": "https://iimbx.iimb.ac.in/catalog/accounting-for-decision-making/",
        "scannedAt": "2026-06-08T12:35:24.004Z",
        "error": null
      }
    }
  },
  {
    "id": "pchm",
    "programmeName": "Professional Certificate in Hospital Management",
    "shortName": "PCHM",
    "file": "hospital-management (1).html",
    "oldSiteUrl": "https://iimbx.iimb.ac.in/hospital-management-program/",
    "v1StagingUrl": "https://iimbx.iimb.ac.in/hospital-management-new-v1/",
    "auditDate": "2026-05-27",
    "scores": {
      "brand": 100,
      "content": 100,
      "ux": 100
    },
    "summary": "PCHM Marketing HTML has been fully updated. The missing Fees & Dates and Testimonials/Valedictory sections have been restored to match the staging site.",
    "contentGaps": [
      {
        "section": "Navbar",
        "oldSite": {
          "present": true,
          "detail": "Present"
        },
        "marketingHtml": {
          "present": true,
          "detail": "Present"
        },
        "v1Staging": {
          "present": true,
          "detail": "Present"
        },
        "verdict": "present",
        "severity": "ok"
      },
      {
        "section": "Hero",
        "oldSite": {
          "present": true,
          "detail": "Present"
        },
        "marketingHtml": {
          "present": true,
          "detail": "Present"
        },
        "v1Staging": {
          "present": true,
          "detail": "Present"
        },
        "verdict": "present",
        "severity": "ok"
      },
      {
        "section": "Overview",
        "oldSite": {
          "present": true,
          "detail": "Present"
        },
        "marketingHtml": {
          "present": true,
          "detail": "Present"
        },
        "v1Staging": {
          "present": true,
          "detail": "Present"
        },
        "verdict": "present",
        "severity": "ok"
      },
      {
        "section": "Curriculum",
        "oldSite": {
          "present": true,
          "detail": "9 courses"
        },
        "marketingHtml": {
          "present": true,
          "detail": "9 courses"
        },
        "v1Staging": {
          "present": true,
          "detail": "9 courses"
        },
        "verdict": "present",
        "severity": "ok"
      },
      {
        "section": "Faculty",
        "oldSite": {
          "present": true,
          "detail": "4 profs"
        },
        "marketingHtml": {
          "present": true,
          "detail": "4 profs"
        },
        "v1Staging": {
          "present": true,
          "detail": "4 profs"
        },
        "verdict": "present",
        "severity": "ok"
      },
      {
        "section": "Fees & Dates",
        "oldSite": {
          "present": true,
          "detail": "â‚¹1,25,000+18% GST"
        },
        "marketingHtml": {
          "present": true,
          "detail": "â‚¹1,25,000+18% GST | Instalments"
        },
        "v1Staging": {
          "present": true,
          "detail": "â‚¹1,25,000+18% GST"
        },
        "verdict": "present",
        "severity": "ok"
      },
      {
        "section": "Testimonials",
        "oldSite": {
          "present": true,
          "detail": "Dr. Devi Shetty quote"
        },
        "marketingHtml": {
          "present": true,
          "detail": "Dr. Devi Shetty | 100+ Learners"
        },
        "v1Staging": {
          "present": true,
          "detail": "100+ learners"
        },
        "verdict": "present",
        "severity": "ok"
      },
      {
        "section": "FAQs",
        "oldSite": {
          "present": true,
          "detail": "Present"
        },
        "marketingHtml": {
          "present": true,
          "detail": "Present"
        },
        "v1Staging": {
          "present": true,
          "detail": "Present"
        },
        "verdict": "present",
        "severity": "ok"
      },
      {
        "section": "Contact/Footer",
        "oldSite": {
          "present": true,
          "detail": "Present"
        },
        "marketingHtml": {
          "present": true,
          "detail": "Present"
        },
        "v1Staging": {
          "present": true,
          "detail": "Present"
        },
        "verdict": "present",
        "severity": "ok"
      }
    ],
    "brandChecks": [
      {
        "rule": "Color Palette",
        "expected": "70/15/15",
        "actual": "Pass",
        "status": "pass"
      },
      {
        "rule": "Typography",
        "expected": "Source Serif/Inter/Plex",
        "actual": "Pass",
        "status": "pass"
      },
      {
        "rule": "Banned Colors",
        "expected": "None",
        "actual": "Pass",
        "status": "pass"
      },
      {
        "rule": "Brand Promise",
        "expected": "Present once",
        "actual": "Pass",
        "status": "pass"
      },
      {
        "rule": "Voice & Tone",
        "expected": "Direct, active",
        "actual": "Pass",
        "status": "pass"
      }
    ],
    "scrollDepth": {
      "current": 4.5,
      "target": 4.5
    },
    "wireframes": {
      "ascii": {
        "oldSite": "â”Œâ”€â”€â”€ NAVBAR â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”\nâ”‚ IIMBx Logo | Links | Login          â”‚\nâ”œâ”€â”€â”€ HERO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ PCHM Title | Next Cohort | CTA      â”‚\nâ”œâ”€â”€â”€ OVERVIEW â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ About the programme                 â”‚\nâ”œâ”€â”€â”€ CURRICULUM â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ 9 Modules List                      â”‚\nâ”œâ”€â”€â”€ FACULTY â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ 4 Professors                        â”‚\nâ”œâ”€â”€â”€ FEES & DATES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ â‚¹1,25,000+18% GST | Instalments     â”‚\nâ”œâ”€â”€â”€ TESTIMONIALS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Dr. Devi Shetty | 100+ Learners     â”‚\nâ”œâ”€â”€â”€ FAQS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Accordion list                      â”‚\nâ”œâ”€â”€â”€ FOOTER â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Contact | Links                     â”‚\nâ””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜",
        "marketingHtml": "â”Œâ”€â”€â”€ NAVBAR â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”\nâ”‚ IIMBx Logo | Links | Login          â”‚\nâ”œâ”€â”€â”€ HERO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ PCHM Title | CTA                    â”‚\nâ”œâ”€â”€â”€ OVERVIEW â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ About the programme                 â”‚\nâ”œâ”€â”€â”€ CURRICULUM â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ 9 Modules List                      â”‚\nâ”œâ”€â”€â”€ FACULTY â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ 4 Professors                        â”‚\nâ”‚                                     â”‚\nâ”‚  âš  MISSING: Fees & Dates            â”‚\nâ”‚  (Present on Old Site + v1 Staging) â”‚\nâ”‚                                     â”‚\nâ”‚  âš  MISSING: Testimonials            â”‚\nâ”‚  (Present on Old Site + v1 Staging) â”‚\nâ”‚                                     â”‚\nâ”œâ”€â”€â”€ FAQS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Accordion list                      â”‚\nâ”œâ”€â”€â”€ FOOTER â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Contact | Links                     â”‚\nâ””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜",
        "v1Staging": "â”Œâ”€â”€â”€ NAVBAR â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”\nâ”‚ IIMBx Logo | Links | Login          â”‚\nâ”œâ”€â”€â”€ HERO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ PCHM Title | Next Cohort | CTA      â”‚\nâ”œâ”€â”€â”€ OVERVIEW â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ About the programme                 â”‚\nâ”œâ”€â”€â”€ CURRICULUM â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ 9 Modules List                      â”‚\nâ”œâ”€â”€â”€ FACULTY â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ 4 Professors                        â”‚\nâ”œâ”€â”€â”€ FEES & DATES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ â‚¹1,25,000+18% GST | Instalments     â”‚\nâ”œâ”€â”€â”€ TESTIMONIALS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Dr. Devi Shetty | 100+ Learners     â”‚\nâ”œâ”€â”€â”€ FAQS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Accordion list                      â”‚\nâ”œâ”€â”€â”€ FOOTER â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Contact | Links                     â”‚\nâ””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜",
        "proposedV1": "â”Œâ”€â”€â”€ NAVBAR â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”\nâ”‚ IIMBx Logo | Links | Login          â”‚\nâ”œâ”€â”€â”€ HERO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ PCHM Title | Next Cohort | CTA      â”‚\nâ”œâ”€â”€â”€ OVERVIEW â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ About the programme                 â”‚\nâ”œâ”€â”€â”€ CURRICULUM [TABS] â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ 9 Modules List                      â”‚\nâ”œâ”€â”€â”€ FACULTY â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ 4 Professors                        â”‚\nâ”œâ”€â”€â”€ FEES & DATES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ â‚¹1,25,000+18% GST | Instalments     â”‚\nâ”œâ”€â”€â”€ TESTIMONIALS [CAROUSEL] â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Dr. Devi Shetty | 100+ Learners     â”‚\nâ”œâ”€â”€â”€ FAQS [ACCORDION] â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Accordion list                      â”‚\nâ”œâ”€â”€â”€ FOOTER â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Contact | Links                     â”‚\nâ”œâ”€â”€â”€ STICKY CTA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Apply Now | Closes soon             â”‚\nâ””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜",
        "proposedV2": "â”Œâ”€â”€â”€ NAVBAR â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”\nâ”‚ IIMBx Logo | Links | Login          â”‚\nâ”œâ”€â”€â”€ HERO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ PCHM Title | Next Cohort | CTA      â”‚\nâ”œâ”€â”€â”€ OVERVIEW â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ About the programme                 â”‚\nâ”œâ”€â”€â”€ CURRICULUM [ACCORDION] â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ 9 Modules List                      â”‚\nâ”œâ”€â”€â”€ FACULTY [GRID] â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ 4 Professors                        â”‚\nâ”œâ”€â”€â”€ TESTIMONIALS [GRID] â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Dr. Devi Shetty | 100+ Learners     â”‚\nâ”œâ”€â”€â”€ FEES & DATES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ â‚¹1,25,000+18% GST | Instalments     â”‚\nâ”œâ”€â”€â”€ FAQS [ACCORDION] â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Accordion list                      â”‚\nâ”œâ”€â”€â”€ FOOTER â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Contact | Links                     â”‚\nâ””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜",
        "proposedV3": "â”Œâ”€â”€â”€ NAVBAR â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”\nâ”‚ IIMBx Logo | Links | Login          â”‚\nâ”œâ”€â”€â”€ HERO (DARK MODE) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ PCHM Title | Next Cohort | CTA      â”‚\nâ”œâ”€â”€â”€ OVERVIEW â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ About the programme                 â”‚\nâ”œâ”€â”€â”€ CURRICULUM [TABS] â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ 9 Modules List                      â”‚\nâ”œâ”€â”€â”€ FEES & DATES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ â‚¹1,25,000+18% GST | Instalments     â”‚\nâ”œâ”€â”€â”€ FACULTY â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ 4 Professors                        â”‚\nâ”œâ”€â”€â”€ TESTIMONIALS [CAROUSEL] â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Dr. Devi Shetty | 100+ Learners     â”‚\nâ”œâ”€â”€â”€ FAQS [ACCORDION] â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Accordion list                      â”‚\nâ”œâ”€â”€â”€ FOOTER â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Contact | Links                     â”‚\nâ””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜",
        "v1_variant_4": "[Hero: Stitch MCP v4] -> [Overview] -> [Compact UI]"
      },
      "suggestions": [
        {
          "title": "Restore Fees",
          "description": "Add missing fees section.",
          "effort": "Low",
          "impact": "High",
          "devNotes": "Use standard pricing block."
        },
        {
          "title": "Add Testimonials",
          "description": "Add missing trust signals.",
          "effort": "Medium",
          "impact": "High",
          "devNotes": "Use carousel."
        },
        {
          "title": "Add sticky CTA",
          "description": "Keep apply button visible.",
          "effort": "Low",
          "impact": "Medium",
          "devNotes": "Fixed bottom."
        }
      ],
      "html": {}
    },
    "actionItems": [],
    "graderScores": {
      "Proposed v1": {
        "performance": 68,
        "accessibility": 92,
        "bestPractices": 96,
        "seo": 100,
        "overall": 89,
        "url": "http://localhost:8765/prototypes/pchm_v1.html",
        "scannedAt": "2026-06-08T12:35:38.005Z",
        "error": null
      },
      "Proposed v2": {
        "performance": 67,
        "accessibility": 94,
        "bestPractices": 96,
        "seo": 100,
        "overall": 89,
        "url": "http://localhost:8765/prototypes/pchm_v2.html",
        "scannedAt": "2026-06-08T12:35:51.375Z",
        "error": null
      },
      "Proposed v3": {
        "performance": 67,
        "accessibility": 92,
        "bestPractices": 96,
        "seo": 100,
        "overall": 89,
        "url": "http://localhost:8765/prototypes/pchm_v3.html",
        "scannedAt": "2026-06-08T12:36:09.833Z",
        "error": null
      },
      "Stitch v4": {
        "performance": 73,
        "accessibility": 86,
        "bestPractices": 88,
        "seo": 90,
        "overall": 84,
        "url": "http://localhost:8765/prototypes/pchm_stitch_v4.html",
        "scannedAt": "2026-06-08T12:36:25.952Z",
        "error": null
      },
      "Old Website": {
        "performance": 47,
        "accessibility": 80,
        "bestPractices": 54,
        "seo": 100,
        "overall": 70,
        "url": "https://iimbx.iimb.ac.in/hospital-management-program/",
        "scannedAt": "2026-06-08T12:37:05.902Z",
        "error": null
      },
      "V1 Staging": {
        "performance": 0,
        "accessibility": 0,
        "bestPractices": 0,
        "seo": 0,
        "overall": 0,
        "url": "https://iimbx.iimb.ac.in/hospital-management-new-v1/",
        "scannedAt": "2026-06-08T12:37:27.796Z",
        "error": null
      }
    }
  },
  {
    "id": "nam",
    "programmeName": "New-Age Managers Programme",
    "shortName": "NAM",
    "file": "NAM_Landing.html",
    "oldSiteUrl": "â€”",
    "v1StagingUrl": "https://iimbx.iimb.ac.in/nam-v1/",
    "auditDate": "2026-05-27",
    "scores": {
      "brand": 90,
      "content": 65,
      "ux": 80
    },
    "summary": "Marketing HTML is missing crucial conversion sections (FAQs, Fees, Faculty details) that exist on the new staging URL.",
    "contentGaps": [
      {
        "section": "Navbar",
        "oldSite": {
          "present": true,
          "detail": "Present"
        },
        "marketingHtml": {
          "present": true,
          "detail": "Present"
        },
        "v1Staging": {
          "present": true,
          "detail": "Present"
        },
        "verdict": "present",
        "severity": "ok"
      },
      {
        "section": "Hero",
        "oldSite": {
          "present": true,
          "detail": "Present"
        },
        "marketingHtml": {
          "present": true,
          "detail": "Present"
        },
        "v1Staging": {
          "present": true,
          "detail": "Present"
        },
        "verdict": "present",
        "severity": "ok"
      },
      {
        "section": "Overview",
        "oldSite": {
          "present": true,
          "detail": "Present"
        },
        "marketingHtml": {
          "present": true,
          "detail": "Present"
        },
        "v1Staging": {
          "present": true,
          "detail": "Present"
        },
        "verdict": "present",
        "severity": "ok"
      },
      {
        "section": "Themes",
        "oldSite": {
          "present": true,
          "detail": "Present"
        },
        "marketingHtml": {
          "present": true,
          "detail": "Present"
        },
        "v1Staging": {
          "present": true,
          "detail": "Present"
        },
        "verdict": "present",
        "severity": "ok"
      },
      {
        "section": "Faculty",
        "oldSite": {
          "present": true,
          "detail": "Present"
        },
        "marketingHtml": {
          "present": false,
          "detail": "Missing"
        },
        "v1Staging": {
          "present": true,
          "detail": "Present"
        },
        "verdict": "missing",
        "severity": "critical",
        "explanation": "Missing faculty info."
      },
      {
        "section": "FAQs",
        "oldSite": {
          "present": true,
          "detail": "Present"
        },
        "marketingHtml": {
          "present": false,
          "detail": "Missing"
        },
        "v1Staging": {
          "present": true,
          "detail": "Present"
        },
        "verdict": "missing",
        "severity": "critical",
        "explanation": "Missing FAQs."
      },
      {
        "section": "Fees",
        "oldSite": {
          "present": true,
          "detail": "Present"
        },
        "marketingHtml": {
          "present": false,
          "detail": "Missing"
        },
        "v1Staging": {
          "present": true,
          "detail": "Present"
        },
        "verdict": "missing",
        "severity": "critical",
        "explanation": "Missing fees."
      },
      {
        "section": "Contact/Footer",
        "oldSite": {
          "present": true,
          "detail": "Present"
        },
        "marketingHtml": {
          "present": true,
          "detail": "Present"
        },
        "v1Staging": {
          "present": true,
          "detail": "Present"
        },
        "verdict": "present",
        "severity": "ok"
      }
    ],
    "brandChecks": [
      {
        "rule": "Color Palette",
        "expected": "70/15/15",
        "actual": "Pass",
        "status": "pass"
      },
      {
        "rule": "Typography",
        "expected": "Source Serif/Inter/Plex",
        "actual": "Pass",
        "status": "pass"
      },
      {
        "rule": "Banned Colors",
        "expected": "None",
        "actual": "Possible eucalyptus tint",
        "status": "warn"
      },
      {
        "rule": "Brand Promise",
        "expected": "Present once",
        "actual": "Pass",
        "status": "pass"
      },
      {
        "rule": "Voice & Tone",
        "expected": "Direct, active",
        "actual": "Pass",
        "status": "pass"
      }
    ],
    "scrollDepth": {
      "current": 5.2,
      "target": 4
    },
    "wireframes": {
      "ascii": {
        "oldSite": "â”Œâ”€â”€â”€ NAVBAR â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”\nâ”‚ IIMBx Logo | Links | Login          â”‚\nâ”œâ”€â”€â”€ HERO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ NAM Title | CTA                     â”‚\nâ”œâ”€â”€â”€ OVERVIEW â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ About                               â”‚\nâ”œâ”€â”€â”€ THEMES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Programme Themes                    â”‚\nâ”œâ”€â”€â”€ FACULTY â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Faculty list                        â”‚\nâ”œâ”€â”€â”€ FAQS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ FAQs                                â”‚\nâ”œâ”€â”€â”€ FEES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Fees                                â”‚\nâ”œâ”€â”€â”€ FOOTER â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Contact | Links                     â”‚\nâ””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜",
        "marketingHtml": "â”Œâ”€â”€â”€ NAVBAR â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”\nâ”‚ IIMBx Logo | Links | Login          â”‚\nâ”œâ”€â”€â”€ HERO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ NAM Title | CTA                     â”‚\nâ”œâ”€â”€â”€ OVERVIEW â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ About                               â”‚\nâ”œâ”€â”€â”€ THEMES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Programme Themes                    â”‚\nâ”‚                                     â”‚\nâ”‚  âš  MISSING: Faculty                 â”‚\nâ”‚  (Present on Old Site + v1 Staging) â”‚\nâ”‚                                     â”‚\nâ”‚  âš  MISSING: FAQs                    â”‚\nâ”‚  (Present on Old Site + v1 Staging) â”‚\nâ”‚                                     â”‚\nâ”‚  âš  MISSING: Fees                    â”‚\nâ”‚  (Present on Old Site + v1 Staging) â”‚\nâ”‚                                     â”‚\nâ”œâ”€â”€â”€ FOOTER â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Contact | Links                     â”‚\nâ””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜",
        "v1Staging": "â”Œâ”€â”€â”€ NAVBAR â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”\nâ”‚ IIMBx Logo | Links | Login          â”‚\nâ”œâ”€â”€â”€ HERO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ NAM Title | CTA                     â”‚\nâ”œâ”€â”€â”€ OVERVIEW â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ About                               â”‚\nâ”œâ”€â”€â”€ THEMES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Programme Themes                    â”‚\nâ”œâ”€â”€â”€ FACULTY â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Faculty list                        â”‚\nâ”œâ”€â”€â”€ FAQS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ FAQs                                â”‚\nâ”œâ”€â”€â”€ FEES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Fees                                â”‚\nâ”œâ”€â”€â”€ FOOTER â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Contact | Links                     â”‚\nâ””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜",
        "proposedV1": "â”Œâ”€â”€â”€ NAVBAR â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”\nâ”‚ IIMBx Logo | Links | Login          â”‚\nâ”œâ”€â”€â”€ HERO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ NAM Title | CTA                     â”‚\nâ”œâ”€â”€â”€ OVERVIEW â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ About                               â”‚\nâ”œâ”€â”€â”€ THEMES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Programme Themes                    â”‚\nâ”œâ”€â”€â”€ FACULTY [GRID] â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Faculty list                        â”‚\nâ”œâ”€â”€â”€ FAQS [ACCORDION] â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ FAQs                                â”‚\nâ”œâ”€â”€â”€ FEES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Fees                                â”‚\nâ”œâ”€â”€â”€ FOOTER â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Contact | Links                     â”‚\nâ””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜",
        "proposedV2": "â”Œâ”€â”€â”€ NAVBAR â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”\nâ”‚ IIMBx Logo | Links | Login          â”‚\nâ”œâ”€â”€â”€ HERO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ NAM Title | CTA                     â”‚\nâ”œâ”€â”€â”€ OVERVIEW â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ About                               â”‚\nâ”œâ”€â”€â”€ THEMES [TABS] â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Programme Themes                    â”‚\nâ”œâ”€â”€â”€ FACULTY [LIST] â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Faculty list                        â”‚\nâ”œâ”€â”€â”€ FEES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Fees                                â”‚\nâ”œâ”€â”€â”€ FAQS [ACCORDION] â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ FAQs                                â”‚\nâ”œâ”€â”€â”€ FOOTER â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Contact | Links                     â”‚\nâ””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜",
        "proposedV3": "â”Œâ”€â”€â”€ NAVBAR â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”\nâ”‚ IIMBx Logo | Links | Login          â”‚\nâ”œâ”€â”€â”€ HERO (DARK MODE) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ NAM Title | CTA                     â”‚\nâ”œâ”€â”€â”€ OVERVIEW â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ About                               â”‚\nâ”œâ”€â”€â”€ THEMES [GRID] â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Programme Themes                    â”‚\nâ”œâ”€â”€â”€ FACULTY [CAROUSEL] â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Faculty list                        â”‚\nâ”œâ”€â”€â”€ FEES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Fees                                â”‚\nâ”œâ”€â”€â”€ FAQS [ACCORDION] â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ FAQs                                â”‚\nâ”œâ”€â”€â”€ FOOTER â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Contact | Links                     â”‚\nâ””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜",
        "v1_variant_4": "[Hero: Stitch MCP v4] -> [Overview] -> [Compact UI]"
      },
      "suggestions": [
        {
          "title": "Add FAQ accordion",
          "description": "Restore FAQs",
          "effort": "Low",
          "impact": "High",
          "devNotes": "Use accordion."
        },
        {
          "title": "Restore Fees table",
          "description": "Add fees",
          "effort": "Low",
          "impact": "High",
          "devNotes": "Simple table."
        },
        {
          "title": "Add Faculty grid",
          "description": "Add faculty profiles",
          "effort": "Medium",
          "impact": "High",
          "devNotes": "Card grid."
        },
        {
          "title": "Consider tabbed curriculum",
          "description": "Tabs for themes",
          "effort": "Medium",
          "impact": "Medium",
          "devNotes": "Horizontal tabs."
        }
      ],
      "html": {}
    },
    "actionItems": [
      {
        "priority": "critical",
        "task": "restore FAQs",
        "devNotes": ""
      },
      {
        "priority": "critical",
        "task": "add Fees",
        "devNotes": ""
      }
    ],
    "graderScores": {
      "Proposed v1": {
        "performance": 65,
        "accessibility": 86,
        "bestPractices": 96,
        "seo": 91,
        "overall": 85,
        "url": "http://localhost:8765/prototypes/nam_v1.html",
        "scannedAt": "2026-06-08T12:37:45.020Z",
        "error": null
      },
      "Proposed v2": {
        "performance": 65,
        "accessibility": 86,
        "bestPractices": 96,
        "seo": 91,
        "overall": 85,
        "url": "http://localhost:8765/prototypes/nam_v2.html",
        "scannedAt": "2026-06-08T12:38:02.596Z",
        "error": null
      },
      "Proposed v3": {
        "performance": 65,
        "accessibility": 86,
        "bestPractices": 96,
        "seo": 91,
        "overall": 85,
        "url": "http://localhost:8765/prototypes/nam_v3.html",
        "scannedAt": "2026-06-08T12:38:20.024Z",
        "error": null
      },
      "Stitch v4": {
        "performance": 69,
        "accessibility": 88,
        "bestPractices": 88,
        "seo": 90,
        "overall": 84,
        "url": "http://localhost:8765/prototypes/nam_stitch_v4.html",
        "scannedAt": "2026-06-08T12:38:35.828Z",
        "error": null
      },
      "V1 Staging": {
        "performance": 62,
        "accessibility": 71,
        "bestPractices": 54,
        "seo": 92,
        "overall": 70,
        "url": "https://iimbx.iimb.ac.in/nam-v1/",
        "scannedAt": "2026-06-08T12:39:04.717Z",
        "error": null
      }
    }
  },
  {
    "id": "elp",
    "programmeName": "Emerging Leaders Programme 2.0",
    "shortName": "ELP",
    "file": "ELP_Landing.html",
    "oldSiteUrl": "â€”",
    "v1StagingUrl": "https://iimbx.iimb.ac.in/elp-new-v2/",
    "auditDate": "2026-05-27",
    "scores": {
      "brand": 100,
      "content": 70,
      "ux": 60
    },
    "summary": "Marketing HTML (V1) is present but missing Faculty and Testimonials. V2 Staging URL introduces new layout, 8-month duration, and full Faculty/Fees sections. The wireframes and prototypes below reflect both V1 and V2 states.",
    "contentGaps": [
      {
        "section": "Navbar",
        "oldSite": {
          "present": true,
          "detail": "Present"
        },
        "marketingHtml": {
          "present": true,
          "detail": "Present in V1"
        },
        "v1Staging": {
          "present": true,
          "detail": "Present"
        },
        "verdict": "present",
        "severity": "ok"
      },
      {
        "section": "Hero",
        "oldSite": {
          "present": true,
          "detail": "Present"
        },
        "marketingHtml": {
          "present": true,
          "detail": "Present in V1"
        },
        "v1Staging": {
          "present": true,
          "detail": "Divi Design"
        },
        "verdict": "present",
        "severity": "ok"
      },
      {
        "section": "Overview",
        "oldSite": {
          "present": true,
          "detail": "8 months"
        },
        "marketingHtml": {
          "present": true,
          "detail": "8 months (V1 discrepancy)"
        },
        "v1Staging": {
          "present": true,
          "detail": "8 months"
        },
        "verdict": "discrepancy",
        "severity": "warning"
      },
      {
        "section": "Themes",
        "oldSite": {
          "present": true,
          "detail": "Present"
        },
        "marketingHtml": {
          "present": true,
          "detail": "Present in V1"
        },
        "v1Staging": {
          "present": true,
          "detail": "Grid layout"
        },
        "verdict": "present",
        "severity": "ok"
      },
      {
        "section": "Faculty",
        "oldSite": {
          "present": true,
          "detail": "Present"
        },
        "marketingHtml": {
          "present": false,
          "detail": "Missing in V1"
        },
        "v1Staging": {
          "present": true,
          "detail": "Present"
        },
        "verdict": "missing",
        "severity": "critical"
      },
      {
        "section": "Testimonials",
        "oldSite": {
          "present": true,
          "detail": "Present"
        },
        "marketingHtml": {
          "present": false,
          "detail": "Missing in V1"
        },
        "v1Staging": {
          "present": false,
          "detail": "Missing in V2"
        },
        "verdict": "missing",
        "severity": "critical"
      },
      {
        "section": "Fees",
        "oldSite": {
          "present": true,
          "detail": "Present"
        },
        "marketingHtml": {
          "present": false,
          "detail": "Missing in V1"
        },
        "v1Staging": {
          "present": true,
          "detail": "Present"
        },
        "verdict": "missing",
        "severity": "critical"
      },
      {
        "section": "FAQs",
        "oldSite": {
          "present": true,
          "detail": "Present"
        },
        "marketingHtml": {
          "present": false,
          "detail": "Missing in V1"
        },
        "v1Staging": {
          "present": false,
          "detail": "Missing in V2"
        },
        "verdict": "missing",
        "severity": "high"
      },
      {
        "section": "Footer",
        "oldSite": {
          "present": true,
          "detail": "Present"
        },
        "marketingHtml": {
          "present": true,
          "detail": "Present in V1"
        },
        "v1Staging": {
          "present": true,
          "detail": "Present"
        },
        "verdict": "present",
        "severity": "ok"
      }
    ],
    "brandChecks": [
      {
        "rule": "Color Palette",
        "expected": "70/15/15",
        "actual": "Pass",
        "status": "pass"
      },
      {
        "rule": "Typography",
        "expected": "Source Serif/Inter/Plex",
        "actual": "Pass",
        "status": "pass"
      },
      {
        "rule": "Banned Colors",
        "expected": "None",
        "actual": "Pass",
        "status": "pass"
      },
      {
        "rule": "Brand Promise",
        "expected": "Present once",
        "actual": "Pass",
        "status": "pass"
      },
      {
        "rule": "Voice & Tone",
        "expected": "Direct, active",
        "actual": "Pass",
        "status": "pass"
      }
    ],
    "scrollDepth": {
      "current": 6.5,
      "target": 4.5
    },
    "wireframes": {
      "ascii": {
        "oldSite": "â”Œâ”€â”€â”€ NAVBAR â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”\nâ”‚ IIMBx Logo | Links | Login          â”‚\nâ”œâ”€â”€â”€ HERO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ ELP Title | CTA                     â”‚\nâ”œâ”€â”€â”€ OVERVIEW â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ 7 Months                            â”‚\nâ”œâ”€â”€â”€ THEMES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ 5 Themes                            â”‚\nâ”œâ”€â”€â”€ FACULTY â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Faculty List                        â”‚\nâ”œâ”€â”€â”€ TESTIMONIALS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Testimonials                        â”‚\nâ”œâ”€â”€â”€ FEES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Fees                                â”‚\nâ”œâ”€â”€â”€ FAQS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ FAQs                                â”‚\nâ”œâ”€â”€â”€ FOOTER â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Contact | Links                     â”‚\nâ””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜",
        "marketingHtml": "â”Œâ”€â”€â”€ NAVBAR â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”\nâ”‚ IIMBx Logo | Links | Login          â”‚\nâ”œâ”€â”€â”€ HERO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ ELP Title | Next Cohort | CTA       â”‚\nâ”œâ”€â”€â”€ OVERVIEW â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ About the programme (8 months)      â”‚\nâ”œâ”€â”€â”€ THEMES (V1) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Infinite scroll list                â”‚\nâ”‚                                     â”‚\nâ”‚  âš  MISSING: Faculty                 â”‚\nâ”‚  âš  MISSING: Testimonials            â”‚\nâ”‚  âš  MISSING: Fees                    â”‚\nâ”‚                                     â”‚\nâ”œâ”€â”€â”€ FOOTER â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Contact | Links                     â”‚\nâ””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜",
        "v1Staging": "â”Œâ”€â”€â”€ NAVBAR â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”\nâ”‚ IIMBx Logo | Links | Login          â”‚\nâ”œâ”€â”€â”€ HERO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ ELP Title | CTA                     â”‚\nâ”œâ”€â”€â”€ OVERVIEW â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ 7 Months                            â”‚\nâ”œâ”€â”€â”€ THEMES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ 5 Themes                            â”‚\nâ”œâ”€â”€â”€ FACULTY â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Faculty List                        â”‚\nâ”œâ”€â”€â”€ TESTIMONIALS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Testimonials                        â”‚\nâ”œâ”€â”€â”€ FEES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Fees                                â”‚\nâ”œâ”€â”€â”€ FAQS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ FAQs                                â”‚\nâ”œâ”€â”€â”€ FOOTER â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Contact | Links                     â”‚\nâ””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜",
        "proposedV1": "â”Œâ”€â”€â”€ NAVBAR â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”\nâ”‚ IIMBx Logo | Links | Login          â”‚\nâ”œâ”€â”€â”€ HERO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ ELP Title | CTA                     â”‚\nâ”œâ”€â”€â”€ OVERVIEW â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ 7 Months                            â”‚\nâ”œâ”€â”€â”€ THEMES [TABS] â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ 5 Themes                            â”‚\nâ”œâ”€â”€â”€ FACULTY [GRID] â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Faculty List                        â”‚\nâ”œâ”€â”€â”€ TESTIMONIALS [CAROUSEL] â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Testimonials                        â”‚\nâ”œâ”€â”€â”€ FEES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Fees                                â”‚\nâ”œâ”€â”€â”€ FAQS [ACCORDION] â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ FAQs                                â”‚\nâ”œâ”€â”€â”€ FOOTER â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Contact | Links                     â”‚\nâ””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜",
        "proposedV2": "â”Œâ”€â”€â”€ NAVBAR â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”\nâ”‚ IIMBx Logo | Links | Login          â”‚\nâ”œâ”€â”€â”€ HERO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ ELP Title | CTA                     â”‚\nâ”œâ”€â”€â”€ OVERVIEW â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ 7 Months                            â”‚\nâ”œâ”€â”€â”€ THEMES [ACCORDION] â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ 5 Themes                            â”‚\nâ”œâ”€â”€â”€ FACULTY [LIST] â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Faculty List                        â”‚\nâ”œâ”€â”€â”€ TESTIMONIALS [GRID] â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Testimonials                        â”‚\nâ”œâ”€â”€â”€ FEES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Fees                                â”‚\nâ”œâ”€â”€â”€ FAQS [ACCORDION] â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ FAQs                                â”‚\nâ”œâ”€â”€â”€ FOOTER â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Contact | Links                     â”‚\nâ””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜",
        "proposedV3": "â”Œâ”€â”€â”€ NAVBAR â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”\nâ”‚ IIMBx Logo | Links | Login          â”‚\nâ”œâ”€â”€â”€ HERO (DARK MODE) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ ELP Title | CTA                     â”‚\nâ”œâ”€â”€â”€ OVERVIEW â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ 7 Months                            â”‚\nâ”œâ”€â”€â”€ THEMES [TABS] â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ 5 Themes                            â”‚\nâ”œâ”€â”€â”€ TESTIMONIALS [CAROUSEL] â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Testimonials                        â”‚\nâ”œâ”€â”€â”€ FACULTY [GRID] â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Faculty List                        â”‚\nâ”œâ”€â”€â”€ FEES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Fees                                â”‚\nâ”œâ”€â”€â”€ FAQS [ACCORDION] â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ FAQs                                â”‚\nâ”œâ”€â”€â”€ FOOTER â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Contact | Links                     â”‚\nâ””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜",
        "v2Staging": "â”Œâ”€â”€â”€ NAVBAR â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”\nâ”‚ IIMBx Logo | Links | Login          â”‚\nâ”œâ”€â”€â”€ HERO (V2) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Open for Aug 2026 | 11 Modules      â”‚\nâ”œâ”€â”€â”€ OVERVIEW â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ About the programme (8 months)      â”‚\nâ”œâ”€â”€â”€ THEMES (V2 GRID) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ 3x2 Grid with Red Hover             â”‚\nâ”œâ”€â”€â”€ FACULTY â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Prof Shainesh + 8 Faculty Grid      â”‚\nâ”œâ”€â”€â”€ WHO IT IS FOR â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Split Navy/Paper cards              â”‚\nâ”œâ”€â”€â”€ FEES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ â‚¹2,80,000+ Table                    â”‚\nâ”œâ”€â”€â”€ FINAL CTA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Eight months... | Apply | Brochure  â”‚\nâ””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜",
        "v1_variant_1": "â”Œâ”€â”€â”€ NAVBAR â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”\nâ”‚ IIMBx Logo | Links | Login          â”‚\nâ”œâ”€â”€â”€ HERO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ ELP Title | Next Cohort | CTA       â”‚\nâ”œâ”€â”€â”€ OVERVIEW â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ About the programme (8 months)      â”‚\nâ”œâ”€â”€â”€ THEMES (V1) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Infinite scroll list                â”‚\nâ”‚                                     â”‚\nâ”‚  âš  MISSING: Faculty                 â”‚\nâ”‚  âš  MISSING: Testimonials            â”‚\nâ”‚  âš  MISSING: Fees                    â”‚\nâ”‚                                     â”‚\nâ”œâ”€â”€â”€ FOOTER â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Contact | Links                     â”‚\nâ””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜",
        "v1_variant_2": "â”Œâ”€â”€â”€ NAVBAR [DARK]â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”\nâ”‚ IIMBx Logo | Links | Login          â”‚\nâ”œâ”€â”€â”€ HERO [DARK]â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ ELP Title | Next Cohort | CTA       â”‚\nâ”œâ”€â”€â”€ OVERVIEW [DARK]â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ About the programme (8 months)      â”‚\nâ”œâ”€â”€â”€ THEMES (V1) [DARK]â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Infinite scroll list                â”‚\nâ”‚  âš  MISSING: Faculty                 â”‚\nâ”‚  âš  MISSING: Testimonials            â”‚\nâ”‚  âš  MISSING: Fees                    â”‚\nâ”œâ”€â”€â”€ FOOTER [DARK]â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Contact | Links                     â”‚\nâ””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜",
        "v1_variant_3": "â”Œâ”€â”€â”€ NAVBAR â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”\nâ”‚ IIMBx Logo | Links | Login          â”‚\nâ”œâ”€â”€â”€ HERO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ ELP Title | Next Cohort | CTA       â”‚\nâ”œâ”€â”€â”€ OVERVIEW â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ About the programme (8 months)      â”‚\nâ”œâ”€â”€â”€ THEMES (V1 COMPACT) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Compact Grid view                   â”‚\nâ”‚  âš  MISSING: Faculty                 â”‚\nâ”‚  âš  MISSING: Testimonials            â”‚\nâ”‚  âš  MISSING: Fees                    â”‚\nâ”œâ”€â”€â”€ FOOTER â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Contact | Links                     â”‚\nâ””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜",
        "v2_variant_1": "â”Œâ”€â”€â”€ NAVBAR â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”\nâ”‚ IIMBx Logo | Links | Login          â”‚\nâ”œâ”€â”€â”€ HERO (V2) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Open for Aug 2026 | 11 Modules      â”‚\nâ”œâ”€â”€â”€ OVERVIEW â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ About the programme (8 months)      â”‚\nâ”œâ”€â”€â”€ THEMES (V2 GRID) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ 3x2 Grid with Red Hover             â”‚\nâ”œâ”€â”€â”€ FACULTY â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Prof Shainesh + 8 Faculty Grid      â”‚\nâ”œâ”€â”€â”€ WHO IT IS FOR â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Split Navy/Paper cards              â”‚\nâ”œâ”€â”€â”€ FEES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ â‚¹2,80,000+ Table                    â”‚\nâ”œâ”€â”€â”€ FINAL CTA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Eight months... | Apply | Brochure  â”‚\nâ””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜",
        "v2_variant_2": "â”Œâ”€â”€â”€ NAVBAR â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”\nâ”‚ IIMBx Logo | Links | Login          â”‚\nâ”œâ”€â”€â”€ HERO (V2 DARK) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Open for Aug 2026 | 11 Modules      â”‚\nâ”œâ”€â”€â”€ OVERVIEW â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ About the programme (8 months)      â”‚\nâ”œâ”€â”€â”€ THEMES (V2 GRID DARK) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ 3x2 Grid with Red Hover             â”‚\nâ”œâ”€â”€â”€ FACULTY â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Prof Shainesh + 8 Faculty Grid      â”‚\nâ”œâ”€â”€â”€ WHO IT IS FOR â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Split Navy/Paper cards              â”‚\nâ”œâ”€â”€â”€ FEES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ â‚¹2,80,000+ Table                    â”‚\nâ”œâ”€â”€â”€ FINAL CTA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Eight months... | Apply | Brochure  â”‚\nâ””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜\n âš  BEYOND BRAND COMPLIANCE \n EXCEEDS 70/15/15 COLOR RULE FOR DARK \n MODE IMPACT (NAVY DOMINATES PAPER)",
        "v2_variant_3": "â”Œâ”€â”€â”€ NAVBAR â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”\nâ”‚ IIMBx Logo | Links | Login          â”‚\nâ”œâ”€â”€â”€ HERO (V2 COMPACT) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Open for Aug 2026 | 11 Modules      â”‚\nâ”œâ”€â”€â”€ OVERVIEW â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ About the programme (8 months)      â”‚\nâ”œâ”€â”€â”€ THEMES (V2 COMPACT) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ 2x3 Compact Grid                    â”‚\nâ”œâ”€â”€â”€ FACULTY (COMPACT) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Prof Shainesh + 2x4 Faculty Grid    â”‚\nâ”œâ”€â”€â”€ WHO IT IS FOR â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Split Navy/Paper cards              â”‚\nâ”œâ”€â”€â”€ FEES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ â‚¹2,80,000+ Table                    â”‚\nâ”œâ”€â”€â”€ FINAL CTA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Eight months... | Apply | Brochure  â”‚\nâ””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜",
        "v1_variant_4": "[Hero: Stitch MCP v4] -> [Overview] -> [Compact UI]"
      },
      "suggestions": [],
      "html": {}
    },
    "actionItems": [],
    "v2StagingUrl": "https://iimbx.iimb.ac.in/elp-new-v2/",
    "graderScores": {
      "V1 Proposed v1": {
        "performance": 64,
        "accessibility": 86,
        "bestPractices": 96,
        "seo": 91,
        "overall": 84,
        "error": null
      },
      "V1 Proposed v2": {
        "performance": 65,
        "accessibility": 75,
        "bestPractices": 96,
        "seo": 82,
        "overall": 80,
        "error": null
      },
      "V1 Proposed v3": {
        "performance": 67,
        "accessibility": 86,
        "bestPractices": 96,
        "seo": 91,
        "overall": 85,
        "error": null
      },
      "V1 Stitch v4": {
        "performance": 68,
        "accessibility": 85,
        "bestPractices": 88,
        "seo": 90,
        "overall": 83,
        "error": null
      },
      "V1 Variant 1": {
        "performance": 65,
        "accessibility": 86,
        "bestPractices": 96,
        "seo": 91,
        "overall": 85,
        "error": null
      },
      "V1 Variant 2": {
        "performance": 64,
        "accessibility": 86,
        "bestPractices": 96,
        "seo": 91,
        "overall": 84,
        "error": null
      },
      "V1 Variant 3": {
        "performance": 65,
        "accessibility": 86,
        "bestPractices": 96,
        "seo": 91,
        "overall": 85,
        "error": null
      },
      "V2 Variant 1": {
        "performance": 80,
        "accessibility": 75,
        "bestPractices": 96,
        "seo": 82,
        "overall": 83,
        "error": null
      },
      "V2 Variant 2": {
        "performance": 65,
        "accessibility": 75,
        "bestPractices": 96,
        "seo": 82,
        "overall": 80,
        "error": null
      },
      "V2 Variant 3": {
        "performance": 65,
        "accessibility": 75,
        "bestPractices": 96,
        "seo": 82,
        "overall": 80,
        "error": null
      },
      "V2 Stitch v4": {
        "performance": 68,
        "accessibility": 85,
        "bestPractices": 88,
        "seo": 90,
        "overall": 83,
        "error": null
      },
      "V2 Staging": {
        "performance": 0,
        "accessibility": 0,
        "bestPractices": 0,
        "seo": 0,
        "overall": 0,
        "error": "Login required"
      }
    }
  },
  {
    "id": "pcaim",
    "programmeName": "Professional Certificate in AI for Managers",
    "shortName": "PCAIM",
    "file": "AI_For_Managers.html",
    "oldSiteUrl": "https://iimbx.iimb.ac.in/ai-for-managers/",
    "v1StagingUrl": "https://iimbx.iimb.ac.in/ai-for-managers/",
    "auditDate": "2026-05-27",
    "scores": {
      "brand": 0,
      "content": 0,
      "ux": 0
    },
    "summary": "Marketing HTML was not provided. All prototypes (v1, v2, v3) were built directly by referencing the v1 staging site and the old website to ensure all required sections (Audience, Pedagogy, Faculty, Fees) are perfectly restored.",
    "contentGaps": [
      {
        "section": "Marketing HTML",
        "oldSite": {
          "present": true,
          "detail": "Present"
        },
        "marketingHtml": {
          "present": false,
          "detail": "Missing"
        },
        "v1Staging": {
          "present": true,
          "detail": "Present"
        },
        "verdict": "missing",
        "severity": "critical",
        "explanation": "No HTML provided. Prototypes built from scratch."
      }
    ],
    "brandChecks": [
      {
        "rule": "Color Palette",
        "expected": "70/15/15",
        "actual": "Pass (Prototypes)",
        "status": "pass"
      },
      {
        "rule": "Typography",
        "expected": "Source Serif/Inter/Plex",
        "actual": "Pass (Prototypes)",
        "status": "pass"
      },
      {
        "rule": "Banned Colors",
        "expected": "None",
        "actual": "Pass (Prototypes)",
        "status": "pass"
      },
      {
        "rule": "Brand Promise",
        "expected": "Present once",
        "actual": "Pass (Prototypes)",
        "status": "pass"
      },
      {
        "rule": "Voice & Tone",
        "expected": "Direct, active",
        "actual": "Pass (Prototypes)",
        "status": "pass"
      }
    ],
    "scrollDepth": {
      "current": 0,
      "target": 5
    },
    "wireframes": {
      "ascii": {
        "oldSite": "â”Œâ”€â”€â”€ NAVBAR â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”\nâ”‚ IIMBx Logo | Links | Login          â”‚\nâ”œâ”€â”€â”€ HERO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ PCAIM Title | CTA                   â”‚\nâ”œâ”€â”€â”€ OVERVIEW â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ About                               â”‚\nâ”œâ”€â”€â”€ TARGET AUDIENCE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Audience                            â”‚\nâ”œâ”€â”€â”€ 8 MODULES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Modules                             â”‚\nâ”œâ”€â”€â”€ TOOLS & PEDAGOGY â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Tools                               â”‚\nâ”œâ”€â”€â”€ FACULTY â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Faculty list                        â”‚\nâ”œâ”€â”€â”€ TESTIMONIALS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Testimonials                        â”‚\nâ”œâ”€â”€â”€ FEES & DATES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Fees                                â”‚\nâ”œâ”€â”€â”€ FAQS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ FAQs                                â”‚\nâ”œâ”€â”€â”€ CONTACT â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Contact                             â”‚\nâ”œâ”€â”€â”€ FOOTER â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Footer                              â”‚\nâ””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜",
        "marketingHtml": "\n\n\n     ⚠ NO MARKETING HTML PROVIDED\n\n\n",
        "v1Staging": "â”Œâ”€â”€â”€ NAVBAR â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”\nâ”‚ IIMBx Logo | Links | Login          â”‚\nâ”œâ”€â”€â”€ HERO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ PCAIM Title | CTA                   â”‚\nâ”œâ”€â”€â”€ OVERVIEW â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ About                               â”‚\nâ”œâ”€â”€â”€ TARGET AUDIENCE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Audience                            â”‚\nâ”œâ”€â”€â”€ 8 MODULES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Modules                             â”‚\nâ”œâ”€â”€â”€ TOOLS & PEDAGOGY â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Tools                               â”‚\nâ”œâ”€â”€â”€ FACULTY â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Faculty list                        â”‚\nâ”œâ”€â”€â”€ TESTIMONIALS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Testimonials                        â”‚\nâ”œâ”€â”€â”€ FEES & DATES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Fees                                â”‚\nâ”œâ”€â”€â”€ FAQS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ FAQs                                â”‚\nâ”œâ”€â”€â”€ CONTACT â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Contact                             â”‚\nâ”œâ”€â”€â”€ FOOTER â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Footer                              â”‚\nâ””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜",
        "proposedV1": "â”Œâ”€â”€â”€ NAVBAR â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”\nâ”‚ IIMBx Logo | Links | Login          â”‚\nâ”œâ”€â”€â”€ HERO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ PCAIM Title | CTA                   â”‚\nâ”œâ”€â”€â”€ OVERVIEW â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ About                               â”‚\nâ”œâ”€â”€â”€ TARGET AUDIENCE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Audience                            â”‚\nâ”œâ”€â”€â”€ 8 MODULES [STACKED] â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Modules                             â”‚\nâ”œâ”€â”€â”€ TOOLS & PEDAGOGY â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Tools                               â”‚\nâ”œâ”€â”€â”€ FACULTY [GRID] â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Faculty list                        â”‚\nâ”œâ”€â”€â”€ TESTIMONIALS [CAROUSEL] â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Testimonials                        â”‚\nâ”œâ”€â”€â”€ FEES & DATES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Fees                                â”‚\nâ”œâ”€â”€â”€ FAQS [ACCORDION] â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ FAQs                                â”‚\nâ”œâ”€â”€â”€ CONTACT â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Contact                             â”‚\nâ”œâ”€â”€â”€ FOOTER â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Footer                              â”‚\nâ””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜",
        "proposedV2": "â”Œâ”€â”€â”€ NAVBAR â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”\nâ”‚ IIMBx Logo | Links | Login          â”‚\nâ”œâ”€â”€â”€ HERO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ PCAIM Title | CTA                   â”‚\nâ”œâ”€â”€â”€ OVERVIEW â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ About                               â”‚\nâ”œâ”€â”€â”€ TARGET AUDIENCE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Audience                            â”‚\nâ”œâ”€â”€â”€ 8 MODULES [ACCORDION] â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Modules                             â”‚\nâ”œâ”€â”€â”€ TOOLS & PEDAGOGY â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Tools                               â”‚\nâ”œâ”€â”€â”€ FACULTY [LIST] â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Faculty list                        â”‚\nâ”œâ”€â”€â”€ TESTIMONIALS [GRID] â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Testimonials                        â”‚\nâ”œâ”€â”€â”€ FEES & DATES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Fees                                â”‚\nâ”œâ”€â”€â”€ FAQS [ACCORDION] â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ FAQs                                â”‚\nâ”œâ”€â”€â”€ CONTACT â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Contact                             â”‚\nâ”œâ”€â”€â”€ FOOTER â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Footer                              â”‚\nâ””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜",
        "proposedV3": "â”Œâ”€â”€â”€ NAVBAR â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”\nâ”‚ IIMBx Logo | Links | Login          â”‚\nâ”œâ”€â”€â”€ HERO (DARK MODE) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ PCAIM Title | CTA                   â”‚\nâ”œâ”€â”€â”€ OVERVIEW â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ About                               â”‚\nâ”œâ”€â”€â”€ TARGET AUDIENCE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Audience                            â”‚\nâ”œâ”€â”€â”€ 8 MODULES [TABS] â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Modules                             â”‚\nâ”œâ”€â”€â”€ TOOLS & PEDAGOGY â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Tools                               â”‚\nâ”œâ”€â”€â”€ TESTIMONIALS [CAROUSEL] â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Testimonials                        â”‚\nâ”œâ”€â”€â”€ FACULTY [GRID] â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Faculty list                        â”‚\nâ”œâ”€â”€â”€ FEES & DATES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Fees                                â”‚\nâ”œâ”€â”€â”€ FAQS [ACCORDION] â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ FAQs                                â”‚\nâ”œâ”€â”€â”€ CONTACT â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Contact                             â”‚\nâ”œâ”€â”€â”€ FOOTER â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Footer                              â”‚\nâ””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜",
        "v1_variant_4": "[Hero: Stitch MCP v4] -> [Overview] -> [Compact UI]"
      },
      "suggestions": [
        {
          "title": "Review Prototypes",
          "description": "Review v1 (Stacked), v2 (Accordion), and v3 (Dark Mode) variations.",
          "effort": "Low",
          "impact": "High",
          "devNotes": ""
        }
      ],
      "html": {}
    },
    "actionItems": [
      {
        "priority": "medium",
        "task": "Review new PCAIM prototypes",
        "devNotes": "Reference from v1 staging"
      }
    ],
    "graderScores": {
      "Proposed v1": {
        "performance": null,
        "accessibility": null,
        "bestPractices": null,
        "seo": null,
        "overall": null,
        "url": "http://localhost:8765/prototypes/pcaim_v1.html",
        "error": ""
      },
      "Proposed v2": {
        "performance": null,
        "accessibility": null,
        "bestPractices": null,
        "seo": null,
        "overall": null,
        "url": "http://localhost:8765/prototypes/pcaim_v2.html",
        "error": ""
      },
      "Proposed v3": {
        "performance": null,
        "accessibility": null,
        "bestPractices": null,
        "seo": null,
        "overall": null,
        "url": "http://localhost:8765/prototypes/pcaim_v3.html",
        "error": ""
      },
      "Stitch v4": {
        "performance": 57,
        "accessibility": 87,
        "bestPractices": 88,
        "seo": 90,
        "overall": 81,
        "url": "http://localhost:8765/prototypes/pcaim_stitch_v4.html",
        "scannedAt": "2026-06-08T12:50:50.872Z",
        "error": null
      },
      "Old Website": {
        "performance": 20,
        "accessibility": 68,
        "bestPractices": 50,
        "seo": 100,
        "overall": 60,
        "url": "https://iimbx.iimb.ac.in/ai-for-managers/",
        "scannedAt": "2026-06-08T15:59:38.532Z",
        "error": null
      }
    }
  },
  {
    "id": "contact",
    "programmeName": "Contact Us",
    "shortName": "Contact",
    "file": "Contact.html",
    "oldSiteUrl": "https://iimbx.iimb.ac.in/contact/",
    "v1StagingUrl": "â€”",
    "auditDate": "2026-06-04",
    "scores": {
      "brand": 0,
      "content": 0,
      "ux": 0
    },
    "summary": "Pending audit. Only the old website URL was provided; waiting on new HTML prototype to evaluate brand compliance and content gaps.",
    "contentGaps": [],
    "brandChecks": [
      {
        "rule": "Color Palette",
        "expected": "70/15/15",
        "actual": "Pass",
        "status": "pass"
      },
      {
        "rule": "Typography",
        "expected": "Source Serif/Inter/Plex",
        "actual": "Pass",
        "status": "pass"
      }
    ],
    "scrollDepth": {
      "current": 1,
      "target": 1
    },
    "wireframes": {
      "ascii": {
        "oldSite": "â”Œâ”€â”€â”€ NAVBAR â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”\nâ”‚ IIMBx Logo | Links | Login          â”‚\nâ”œâ”€â”€â”€ HERO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Contact Us                          â”‚\nâ”œâ”€â”€â”€ CONTACT INFO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Email: info@iimbx.iimb.ac.in        â”‚\nâ”‚ Phone: +91 8105228066               â”‚\nâ”‚ Address: IIMBx, Bannerghatta Rd     â”‚\nâ”œâ”€â”€â”€ MAP â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ VISIT US / Map                      â”‚\nâ”œâ”€â”€â”€ FOOTER â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Contact | Links                     â”‚\nâ””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜",
        "marketingHtml": "none",
        "v1Staging": "none",
        "proposedV1": "â”Œâ”€â”€â”€ NAVBAR â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”\nâ”‚ IIMBx Logo | Links | Login          â”‚\nâ”œâ”€â”€â”€ HERO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Get in Touch                        â”‚\nâ”œâ”€â”€â”€ CONTENT â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Address | Phone | Email             â”‚\nâ”œâ”€â”€â”€ MAP â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Google Maps Embed                   â”‚\nâ”œâ”€â”€â”€ FOOTER â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Links | Copyright                   â”‚\nâ””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜",
        "proposedV2": "â”Œâ”€â”€â”€ NAVBAR â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”\nâ”‚ IIMBx Logo | Links | Login          â”‚\nâ”œâ”€â”€â”€ HERO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Get in Touch                        â”‚\nâ”œâ”€â”€â”€ SPLIT SECTION â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ CONTENT (LEFT)  |  MAP (RIGHT)      â”‚\nâ”‚ Address, Phone  |  Google Maps      â”‚\nâ”‚ Email           |                   â”‚\nâ”œâ”€â”€â”€ FOOTER â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Links | Copyright                   â”‚\nâ””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜",
        "proposedV3": "â”Œâ”€â”€â”€ NAVBAR â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”\nâ”‚ IIMBx Logo | Links | Login          â”‚\nâ”œâ”€â”€â”€ HERO (DARK MODE) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Get in Touch                        â”‚\nâ”œâ”€â”€â”€ CONTENT â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Address | Phone | Email             â”‚\nâ”œâ”€â”€â”€ MAP â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Google Maps Embed                   â”‚\nâ”œâ”€â”€â”€ FOOTER â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Links | Copyright                   â”‚\nâ””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜",
        "v2_variant_4": "â”Œâ”€â”€â”€ NAVBAR â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”\nâ”‚ Academia Logo | Links | Apply       â”‚\nâ”œâ”€â”€â”€ SPLIT SECTION (STITCH) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ GET IN TOUCH    |                   â”‚\nâ”‚ (Icon) Email    |  MAP (RIGHT)      â”‚\nâ”‚ (Icon) Phone    |  IIMB Campus      â”‚\nâ”‚ (Icon) Campus   |                   â”‚\nâ”œâ”€â”€â”€ FOOTER â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤\nâ”‚ Academia | Resources | Legal        â”‚\nâ””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜"
      },
      "suggestions": [],
      "html": {}
    },
    "actionItems": [],
    "graderScores": {
      "Proposed v1": {
        "performance": 44,
        "accessibility": 83,
        "bestPractices": 96,
        "seo": 91,
        "overall": 79,
        "url": "http://localhost:8765/prototypes/contact_v1.html",
        "scannedAt": "2026-06-08T12:53:41.896Z",
        "error": null
      },
      "Proposed v2": {
        "performance": 44,
        "accessibility": 83,
        "bestPractices": 96,
        "seo": 91,
        "overall": 79,
        "url": "http://localhost:8765/prototypes/contact_v2.html",
        "scannedAt": "2026-06-08T16:00:50.338Z",
        "error": null
      },
      "Proposed v3": {
        "performance": 43,
        "accessibility": 83,
        "bestPractices": 96,
        "seo": 91,
        "overall": 78,
        "url": "http://localhost:8765/prototypes/contact_v3.html",
        "scannedAt": "2026-06-08T15:50:44.976Z",
        "error": null
      },
      "Stitch v2": {
        "performance": 56,
        "accessibility": 80,
        "bestPractices": 96,
        "seo": 82,
        "overall": 79,
        "url": "http://localhost:8765/prototypes/contact_v2_stitch.html",
        "scannedAt": "2026-06-08T15:50:57.838Z",
        "error": null
      }
    }
  }
];
