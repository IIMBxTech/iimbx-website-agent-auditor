window.AUDIT_DATA = [
  {
    "id": "adm",
    "programmeName": "Accounting for Decision Making",
    "shortName": "ADM",
    "file": "Not provided",
    "oldSiteUrl": "https://iimbx.iimb.ac.in/catalog/accounting-for-decision-making/",
    "v1StagingUrl": "",
    "auditDate": "2026-06-03",
    "scores": {
      "brand": 100,
      "content": 100,
      "ux": 100
    },
    "summary": "Generated reference material and prototypes based on old site data. No direct comparison as staging site doesn't exist yet.",
    "contentGaps": [],
    "brandChecks": [
      {
        "rule": "70/15/15 Color Ratio",
        "expected": "70% Parchment, 15% Charcoal, 15% Marigold",
        "actual": "Compliant in Baseline",
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
        "marketingHtml": "Not Applicable for ADM",
        "v1_variant_1": "[Hero: Stitch Generated] -> [Overview] -> [Grid] -> [Curriculum]",
        "v1_variant_2": "[Hero: Stitch Interactive] -> [Overview] -> [Outcomes Grid] -> [Curriculum]",
        "v1_variant_3": "[Hero: Stitch Reimagine] -> [Overview] -> [Outcomes] -> [Curriculum]",
        "v1Staging": "",
        "proposed": "[Hero: ADM] -> [Overview + Audience + Instructor] -> [Grid: Outcomes] -> [Accordion: Modules]",
        "v1_variant_4": "[Hero: Stitch MCP v4] -> [Overview] -> [Compact UI]"
      },
      "suggestions": [
        {
          "title": "Prototype Generation",
          "description": "Created 3 prototype variants based on existing data",
          "effort": "Low",
          "impact": "High",
          "devNotes": "Agent generated reference and variants"
        }
      ]
    },
    "html": {},
    "actionItems": [
      {
        "priority": "low",
        "task": "Review generated prototypes",
        "devNotes": "Check adm_v1_variant_1, adm_v1_variant_2, adm_v1_variant_3"
      }
    ]
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
          "detail": "₹1,25,000+18% GST"
        },
        "marketingHtml": {
          "present": true,
          "detail": "₹1,25,000+18% GST | Instalments"
        },
        "v1Staging": {
          "present": true,
          "detail": "₹1,25,000+18% GST"
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
        "oldSite": "┌─── NAVBAR ──────────────────────────┐\n│ IIMBx Logo | Links | Login          │\n├─── HERO ────────────────────────────┤\n│ PCHM Title | Next Cohort | CTA      │\n├─── OVERVIEW ────────────────────────┤\n│ About the programme                 │\n├─── CURRICULUM ──────────────────────┤\n│ 9 Modules List                      │\n├─── FACULTY ─────────────────────────┤\n│ 4 Professors                        │\n├─── FEES & DATES ────────────────────┤\n│ ₹1,25,000+18% GST | Instalments     │\n├─── TESTIMONIALS ────────────────────┤\n│ Dr. Devi Shetty | 100+ Learners     │\n├─── FAQS ────────────────────────────┤\n│ Accordion list                      │\n├─── FOOTER ──────────────────────────┤\n│ Contact | Links                     │\n└─────────────────────────────────────┘",
        "marketingHtml": "┌─── NAVBAR ──────────────────────────┐\n│ IIMBx Logo | Links | Login          │\n├─── HERO ────────────────────────────┤\n│ PCHM Title | CTA                    │\n├─── OVERVIEW ────────────────────────┤\n│ About the programme                 │\n├─── CURRICULUM ──────────────────────┤\n│ 9 Modules List                      │\n├─── FACULTY ─────────────────────────┤\n│ 4 Professors                        │\n│                                     │\n│  ⚠ MISSING: Fees & Dates            │\n│  (Present on Old Site + v1 Staging) │\n│                                     │\n│  ⚠ MISSING: Testimonials            │\n│  (Present on Old Site + v1 Staging) │\n│                                     │\n├─── FAQS ────────────────────────────┤\n│ Accordion list                      │\n├─── FOOTER ──────────────────────────┤\n│ Contact | Links                     │\n└─────────────────────────────────────┘",
        "v1Staging": "┌─── NAVBAR ──────────────────────────┐\n│ IIMBx Logo | Links | Login          │\n├─── HERO ────────────────────────────┤\n│ PCHM Title | Next Cohort | CTA      │\n├─── OVERVIEW ────────────────────────┤\n│ About the programme                 │\n├─── CURRICULUM ──────────────────────┤\n│ 9 Modules List                      │\n├─── FACULTY ─────────────────────────┤\n│ 4 Professors                        │\n├─── FEES & DATES ────────────────────┤\n│ ₹1,25,000+18% GST | Instalments     │\n├─── TESTIMONIALS ────────────────────┤\n│ Dr. Devi Shetty | 100+ Learners     │\n├─── FAQS ────────────────────────────┤\n│ Accordion list                      │\n├─── FOOTER ──────────────────────────┤\n│ Contact | Links                     │\n└─────────────────────────────────────┘",
        "proposedV1": "┌─── NAVBAR ──────────────────────────┐\n│ IIMBx Logo | Links | Login          │\n├─── HERO ────────────────────────────┤\n│ PCHM Title | Next Cohort | CTA      │\n├─── OVERVIEW ────────────────────────┤\n│ About the programme                 │\n├─── CURRICULUM [TABS] ───────────────┤\n│ 9 Modules List                      │\n├─── FACULTY ─────────────────────────┤\n│ 4 Professors                        │\n├─── FEES & DATES ────────────────────┤\n│ ₹1,25,000+18% GST | Instalments     │\n├─── TESTIMONIALS [CAROUSEL] ─────────┤\n│ Dr. Devi Shetty | 100+ Learners     │\n├─── FAQS [ACCORDION] ────────────────┤\n│ Accordion list                      │\n├─── FOOTER ──────────────────────────┤\n│ Contact | Links                     │\n├─── STICKY CTA ──────────────────────┤\n│ Apply Now | Closes soon             │\n└─────────────────────────────────────┘",
        "proposedV2": "┌─── NAVBAR ──────────────────────────┐\n│ IIMBx Logo | Links | Login          │\n├─── HERO ────────────────────────────┤\n│ PCHM Title | Next Cohort | CTA      │\n├─── OVERVIEW ────────────────────────┤\n│ About the programme                 │\n├─── CURRICULUM [ACCORDION] ──────────┤\n│ 9 Modules List                      │\n├─── FACULTY [GRID] ──────────────────┤\n│ 4 Professors                        │\n├─── TESTIMONIALS [GRID] ─────────────┤\n│ Dr. Devi Shetty | 100+ Learners     │\n├─── FEES & DATES ────────────────────┤\n│ ₹1,25,000+18% GST | Instalments     │\n├─── FAQS [ACCORDION] ────────────────┤\n│ Accordion list                      │\n├─── FOOTER ──────────────────────────┤\n│ Contact | Links                     │\n└─────────────────────────────────────┘",
        "proposedV3": "┌─── NAVBAR ──────────────────────────┐\n│ IIMBx Logo | Links | Login          │\n├─── HERO (DARK MODE) ────────────────┤\n│ PCHM Title | Next Cohort | CTA      │\n├─── OVERVIEW ────────────────────────┤\n│ About the programme                 │\n├─── CURRICULUM [TABS] ───────────────┤\n│ 9 Modules List                      │\n├─── FEES & DATES ────────────────────┤\n│ ₹1,25,000+18% GST | Instalments     │\n├─── FACULTY ─────────────────────────┤\n│ 4 Professors                        │\n├─── TESTIMONIALS [CAROUSEL] ─────────┤\n│ Dr. Devi Shetty | 100+ Learners     │\n├─── FAQS [ACCORDION] ────────────────┤\n│ Accordion list                      │\n├─── FOOTER ──────────────────────────┤\n│ Contact | Links                     │\n└─────────────────────────────────────┘",
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
    "actionItems": []
  },
  {
    "id": "nam",
    "programmeName": "New-Age Managers Programme",
    "shortName": "NAM",
    "file": "NAM_Landing.html",
    "oldSiteUrl": "—",
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
        "oldSite": "┌─── NAVBAR ──────────────────────────┐\n│ IIMBx Logo | Links | Login          │\n├─── HERO ────────────────────────────┤\n│ NAM Title | CTA                     │\n├─── OVERVIEW ────────────────────────┤\n│ About                               │\n├─── THEMES ──────────────────────────┤\n│ Programme Themes                    │\n├─── FACULTY ─────────────────────────┤\n│ Faculty list                        │\n├─── FAQS ────────────────────────────┤\n│ FAQs                                │\n├─── FEES ────────────────────────────┤\n│ Fees                                │\n├─── FOOTER ──────────────────────────┤\n│ Contact | Links                     │\n└─────────────────────────────────────┘",
        "marketingHtml": "┌─── NAVBAR ──────────────────────────┐\n│ IIMBx Logo | Links | Login          │\n├─── HERO ────────────────────────────┤\n│ NAM Title | CTA                     │\n├─── OVERVIEW ────────────────────────┤\n│ About                               │\n├─── THEMES ──────────────────────────┤\n│ Programme Themes                    │\n│                                     │\n│  ⚠ MISSING: Faculty                 │\n│  (Present on Old Site + v1 Staging) │\n│                                     │\n│  ⚠ MISSING: FAQs                    │\n│  (Present on Old Site + v1 Staging) │\n│                                     │\n│  ⚠ MISSING: Fees                    │\n│  (Present on Old Site + v1 Staging) │\n│                                     │\n├─── FOOTER ──────────────────────────┤\n│ Contact | Links                     │\n└─────────────────────────────────────┘",
        "v1Staging": "┌─── NAVBAR ──────────────────────────┐\n│ IIMBx Logo | Links | Login          │\n├─── HERO ────────────────────────────┤\n│ NAM Title | CTA                     │\n├─── OVERVIEW ────────────────────────┤\n│ About                               │\n├─── THEMES ──────────────────────────┤\n│ Programme Themes                    │\n├─── FACULTY ─────────────────────────┤\n│ Faculty list                        │\n├─── FAQS ────────────────────────────┤\n│ FAQs                                │\n├─── FEES ────────────────────────────┤\n│ Fees                                │\n├─── FOOTER ──────────────────────────┤\n│ Contact | Links                     │\n└─────────────────────────────────────┘",
        "proposedV1": "┌─── NAVBAR ──────────────────────────┐\n│ IIMBx Logo | Links | Login          │\n├─── HERO ────────────────────────────┤\n│ NAM Title | CTA                     │\n├─── OVERVIEW ────────────────────────┤\n│ About                               │\n├─── THEMES ──────────────────────────┤\n│ Programme Themes                    │\n├─── FACULTY [GRID] ──────────────────┤\n│ Faculty list                        │\n├─── FAQS [ACCORDION] ────────────────┤\n│ FAQs                                │\n├─── FEES ────────────────────────────┤\n│ Fees                                │\n├─── FOOTER ──────────────────────────┤\n│ Contact | Links                     │\n└─────────────────────────────────────┘",
        "proposedV2": "┌─── NAVBAR ──────────────────────────┐\n│ IIMBx Logo | Links | Login          │\n├─── HERO ────────────────────────────┤\n│ NAM Title | CTA                     │\n├─── OVERVIEW ────────────────────────┤\n│ About                               │\n├─── THEMES [TABS] ───────────────────┤\n│ Programme Themes                    │\n├─── FACULTY [LIST] ──────────────────┤\n│ Faculty list                        │\n├─── FEES ────────────────────────────┤\n│ Fees                                │\n├─── FAQS [ACCORDION] ────────────────┤\n│ FAQs                                │\n├─── FOOTER ──────────────────────────┤\n│ Contact | Links                     │\n└─────────────────────────────────────┘",
        "proposedV3": "┌─── NAVBAR ──────────────────────────┐\n│ IIMBx Logo | Links | Login          │\n├─── HERO (DARK MODE) ────────────────┤\n│ NAM Title | CTA                     │\n├─── OVERVIEW ────────────────────────┤\n│ About                               │\n├─── THEMES [GRID] ───────────────────┤\n│ Programme Themes                    │\n├─── FACULTY [CAROUSEL] ──────────────┤\n│ Faculty list                        │\n├─── FEES ────────────────────────────┤\n│ Fees                                │\n├─── FAQS [ACCORDION] ────────────────┤\n│ FAQs                                │\n├─── FOOTER ──────────────────────────┤\n│ Contact | Links                     │\n└─────────────────────────────────────┘",
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
    ]
  },
  {
    "id": "elp",
    "programmeName": "Emerging Leaders Programme 2.0",
    "shortName": "ELP",
    "file": "ELP_Landing.html",
    "oldSiteUrl": "—",
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
        "oldSite": "┌─── NAVBAR ──────────────────────────┐\n│ IIMBx Logo | Links | Login          │\n├─── HERO ────────────────────────────┤\n│ ELP Title | CTA                     │\n├─── OVERVIEW ────────────────────────┤\n│ 7 Months                            │\n├─── THEMES ──────────────────────────┤\n│ 5 Themes                            │\n├─── FACULTY ─────────────────────────┤\n│ Faculty List                        │\n├─── TESTIMONIALS ────────────────────┤\n│ Testimonials                        │\n├─── FEES ────────────────────────────┤\n│ Fees                                │\n├─── FAQS ────────────────────────────┤\n│ FAQs                                │\n├─── FOOTER ──────────────────────────┤\n│ Contact | Links                     │\n└─────────────────────────────────────┘",
        "marketingHtml": "┌─── NAVBAR ──────────────────────────┐\n│ IIMBx Logo | Links | Login          │\n├─── HERO ────────────────────────────┤\n│ ELP Title | Next Cohort | CTA       │\n├─── OVERVIEW ────────────────────────┤\n│ About the programme (8 months)      │\n├─── THEMES (V1) ─────────────────────┤\n│ Infinite scroll list                │\n│                                     │\n│  ⚠ MISSING: Faculty                 │\n│  ⚠ MISSING: Testimonials            │\n│  ⚠ MISSING: Fees                    │\n│                                     │\n├─── FOOTER ──────────────────────────┤\n│ Contact | Links                     │\n└─────────────────────────────────────┘",
        "v1Staging": "┌─── NAVBAR ──────────────────────────┐\n│ IIMBx Logo | Links | Login          │\n├─── HERO ────────────────────────────┤\n│ ELP Title | CTA                     │\n├─── OVERVIEW ────────────────────────┤\n│ 7 Months                            │\n├─── THEMES ──────────────────────────┤\n│ 5 Themes                            │\n├─── FACULTY ─────────────────────────┤\n│ Faculty List                        │\n├─── TESTIMONIALS ────────────────────┤\n│ Testimonials                        │\n├─── FEES ────────────────────────────┤\n│ Fees                                │\n├─── FAQS ────────────────────────────┤\n│ FAQs                                │\n├─── FOOTER ──────────────────────────┤\n│ Contact | Links                     │\n└─────────────────────────────────────┘",
        "proposedV1": "┌─── NAVBAR ──────────────────────────┐\n│ IIMBx Logo | Links | Login          │\n├─── HERO ────────────────────────────┤\n│ ELP Title | CTA                     │\n├─── OVERVIEW ────────────────────────┤\n│ 7 Months                            │\n├─── THEMES [TABS] ───────────────────┤\n│ 5 Themes                            │\n├─── FACULTY [GRID] ──────────────────┤\n│ Faculty List                        │\n├─── TESTIMONIALS [CAROUSEL] ─────────┤\n│ Testimonials                        │\n├─── FEES ────────────────────────────┤\n│ Fees                                │\n├─── FAQS [ACCORDION] ────────────────┤\n│ FAQs                                │\n├─── FOOTER ──────────────────────────┤\n│ Contact | Links                     │\n└─────────────────────────────────────┘",
        "proposedV2": "┌─── NAVBAR ──────────────────────────┐\n│ IIMBx Logo | Links | Login          │\n├─── HERO ────────────────────────────┤\n│ ELP Title | CTA                     │\n├─── OVERVIEW ────────────────────────┤\n│ 7 Months                            │\n├─── THEMES [ACCORDION] ──────────────┤\n│ 5 Themes                            │\n├─── FACULTY [LIST] ──────────────────┤\n│ Faculty List                        │\n├─── TESTIMONIALS [GRID] ─────────────┤\n│ Testimonials                        │\n├─── FEES ────────────────────────────┤\n│ Fees                                │\n├─── FAQS [ACCORDION] ────────────────┤\n│ FAQs                                │\n├─── FOOTER ──────────────────────────┤\n│ Contact | Links                     │\n└─────────────────────────────────────┘",
        "proposedV3": "┌─── NAVBAR ──────────────────────────┐\n│ IIMBx Logo | Links | Login          │\n├─── HERO (DARK MODE) ────────────────┤\n│ ELP Title | CTA                     │\n├─── OVERVIEW ────────────────────────┤\n│ 7 Months                            │\n├─── THEMES [TABS] ───────────────────┤\n│ 5 Themes                            │\n├─── TESTIMONIALS [CAROUSEL] ─────────┤\n│ Testimonials                        │\n├─── FACULTY [GRID] ──────────────────┤\n│ Faculty List                        │\n├─── FEES ────────────────────────────┤\n│ Fees                                │\n├─── FAQS [ACCORDION] ────────────────┤\n│ FAQs                                │\n├─── FOOTER ──────────────────────────┤\n│ Contact | Links                     │\n└─────────────────────────────────────┘",
        "v2Staging": "┌─── NAVBAR ──────────────────────────┐\n│ IIMBx Logo | Links | Login          │\n├─── HERO (V2) ───────────────────────┤\n│ Open for Aug 2026 | 11 Modules      │\n├─── OVERVIEW ────────────────────────┤\n│ About the programme (8 months)      │\n├─── THEMES (V2 GRID) ────────────────┤\n│ 3x2 Grid with Red Hover             │\n├─── FACULTY ─────────────────────────┤\n│ Prof Shainesh + 8 Faculty Grid      │\n├─── WHO IT IS FOR ───────────────────┤\n│ Split Navy/Paper cards              │\n├─── FEES ────────────────────────────┤\n│ ₹2,80,000+ Table                    │\n├─── FINAL CTA ───────────────────────┤\n│ Eight months... | Apply | Brochure  │\n└─────────────────────────────────────┘",
        "v1_variant_1": "┌─── NAVBAR ──────────────────────────┐\n│ IIMBx Logo | Links | Login          │\n├─── HERO ────────────────────────────┤\n│ ELP Title | Next Cohort | CTA       │\n├─── OVERVIEW ────────────────────────┤\n│ About the programme (8 months)      │\n├─── THEMES (V1) ─────────────────────┤\n│ Infinite scroll list                │\n│                                     │\n│  ⚠ MISSING: Faculty                 │\n│  ⚠ MISSING: Testimonials            │\n│  ⚠ MISSING: Fees                    │\n│                                     │\n├─── FOOTER ──────────────────────────┤\n│ Contact | Links                     │\n└─────────────────────────────────────┘",
        "v1_variant_2": "┌─── NAVBAR [DARK]────────────────────┐\n│ IIMBx Logo | Links | Login          │\n├─── HERO [DARK]──────────────────────┤\n│ ELP Title | Next Cohort | CTA       │\n├─── OVERVIEW [DARK]──────────────────┤\n│ About the programme (8 months)      │\n├─── THEMES (V1) [DARK]───────────────┤\n│ Infinite scroll list                │\n│  ⚠ MISSING: Faculty                 │\n│  ⚠ MISSING: Testimonials            │\n│  ⚠ MISSING: Fees                    │\n├─── FOOTER [DARK]────────────────────┤\n│ Contact | Links                     │\n└─────────────────────────────────────┘",
        "v1_variant_3": "┌─── NAVBAR ──────────────────────────┐\n│ IIMBx Logo | Links | Login          │\n├─── HERO ────────────────────────────┤\n│ ELP Title | Next Cohort | CTA       │\n├─── OVERVIEW ────────────────────────┤\n│ About the programme (8 months)      │\n├─── THEMES (V1 COMPACT) ─────────────┤\n│ Compact Grid view                   │\n│  ⚠ MISSING: Faculty                 │\n│  ⚠ MISSING: Testimonials            │\n│  ⚠ MISSING: Fees                    │\n├─── FOOTER ──────────────────────────┤\n│ Contact | Links                     │\n└─────────────────────────────────────┘",
        "v2_variant_1": "┌─── NAVBAR ──────────────────────────┐\n│ IIMBx Logo | Links | Login          │\n├─── HERO (V2) ───────────────────────┤\n│ Open for Aug 2026 | 11 Modules      │\n├─── OVERVIEW ────────────────────────┤\n│ About the programme (8 months)      │\n├─── THEMES (V2 GRID) ────────────────┤\n│ 3x2 Grid with Red Hover             │\n├─── FACULTY ─────────────────────────┤\n│ Prof Shainesh + 8 Faculty Grid      │\n├─── WHO IT IS FOR ───────────────────┤\n│ Split Navy/Paper cards              │\n├─── FEES ────────────────────────────┤\n│ ₹2,80,000+ Table                    │\n├─── FINAL CTA ───────────────────────┤\n│ Eight months... | Apply | Brochure  │\n└─────────────────────────────────────┘",
        "v2_variant_2": "┌─── NAVBAR ──────────────────────────┐\n│ IIMBx Logo | Links | Login          │\n├─── HERO (V2 DARK) ──────────────────┤\n│ Open for Aug 2026 | 11 Modules      │\n├─── OVERVIEW ────────────────────────┤\n│ About the programme (8 months)      │\n├─── THEMES (V2 GRID DARK) ───────────┤\n│ 3x2 Grid with Red Hover             │\n├─── FACULTY ─────────────────────────┤\n│ Prof Shainesh + 8 Faculty Grid      │\n├─── WHO IT IS FOR ───────────────────┤\n│ Split Navy/Paper cards              │\n├─── FEES ────────────────────────────┤\n│ ₹2,80,000+ Table                    │\n├─── FINAL CTA ───────────────────────┤\n│ Eight months... | Apply | Brochure  │\n└─────────────────────────────────────┘\n ⚠ BEYOND BRAND COMPLIANCE \n EXCEEDS 70/15/15 COLOR RULE FOR DARK \n MODE IMPACT (NAVY DOMINATES PAPER)",
        "v2_variant_3": "┌─── NAVBAR ──────────────────────────┐\n│ IIMBx Logo | Links | Login          │\n├─── HERO (V2 COMPACT) ───────────────┤\n│ Open for Aug 2026 | 11 Modules      │\n├─── OVERVIEW ────────────────────────┤\n│ About the programme (8 months)      │\n├─── THEMES (V2 COMPACT) ─────────────┤\n│ 2x3 Compact Grid                    │\n├─── FACULTY (COMPACT) ───────────────┤\n│ Prof Shainesh + 2x4 Faculty Grid    │\n├─── WHO IT IS FOR ───────────────────┤\n│ Split Navy/Paper cards              │\n├─── FEES ────────────────────────────┤\n│ ₹2,80,000+ Table                    │\n├─── FINAL CTA ───────────────────────┤\n│ Eight months... | Apply | Brochure  │\n└─────────────────────────────────────┘",
        "v1_variant_4": "[Hero: Stitch MCP v4] -> [Overview] -> [Compact UI]"
      },
      "suggestions": [],
      "html": {}
    },
    "actionItems": [],
    "v2StagingUrl": "https://iimbx.iimb.ac.in/elp-new-v2/"
  },
  {
    "id": "pcaim",
    "programmeName": "Professional Certificate in AI for Managers",
    "shortName": "PCAIM",
    "file": "Not provided",
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
        "oldSite": "┌─── NAVBAR ──────────────────────────┐\n│ IIMBx Logo | Links | Login          │\n├─── HERO ────────────────────────────┤\n│ PCAIM Title | CTA                   │\n├─── OVERVIEW ────────────────────────┤\n│ About                               │\n├─── TARGET AUDIENCE ─────────────────┤\n│ Audience                            │\n├─── 8 MODULES ───────────────────────┤\n│ Modules                             │\n├─── TOOLS & PEDAGOGY ────────────────┤\n│ Tools                               │\n├─── FACULTY ─────────────────────────┤\n│ Faculty list                        │\n├─── TESTIMONIALS ────────────────────┤\n│ Testimonials                        │\n├─── FEES & DATES ────────────────────┤\n│ Fees                                │\n├─── FAQS ────────────────────────────┤\n│ FAQs                                │\n├─── CONTACT ─────────────────────────┤\n│ Contact                             │\n├─── FOOTER ──────────────────────────┤\n│ Footer                              │\n└─────────────────────────────────────┘",
        "marketingHtml": "\n\n\n     ⚠ NO MARKETING HTML PROVIDED\n\n\n",
        "v1Staging": "┌─── NAVBAR ──────────────────────────┐\n│ IIMBx Logo | Links | Login          │\n├─── HERO ────────────────────────────┤\n│ PCAIM Title | CTA                   │\n├─── OVERVIEW ────────────────────────┤\n│ About                               │\n├─── TARGET AUDIENCE ─────────────────┤\n│ Audience                            │\n├─── 8 MODULES ───────────────────────┤\n│ Modules                             │\n├─── TOOLS & PEDAGOGY ────────────────┤\n│ Tools                               │\n├─── FACULTY ─────────────────────────┤\n│ Faculty list                        │\n├─── TESTIMONIALS ────────────────────┤\n│ Testimonials                        │\n├─── FEES & DATES ────────────────────┤\n│ Fees                                │\n├─── FAQS ────────────────────────────┤\n│ FAQs                                │\n├─── CONTACT ─────────────────────────┤\n│ Contact                             │\n├─── FOOTER ──────────────────────────┤\n│ Footer                              │\n└─────────────────────────────────────┘",
        "proposedV1": "┌─── NAVBAR ──────────────────────────┐\n│ IIMBx Logo | Links | Login          │\n├─── HERO ────────────────────────────┤\n│ PCAIM Title | CTA                   │\n├─── OVERVIEW ────────────────────────┤\n│ About                               │\n├─── TARGET AUDIENCE ─────────────────┤\n│ Audience                            │\n├─── 8 MODULES [STACKED] ─────────────┤\n│ Modules                             │\n├─── TOOLS & PEDAGOGY ────────────────┤\n│ Tools                               │\n├─── FACULTY [GRID] ──────────────────┤\n│ Faculty list                        │\n├─── TESTIMONIALS [CAROUSEL] ─────────┤\n│ Testimonials                        │\n├─── FEES & DATES ────────────────────┤\n│ Fees                                │\n├─── FAQS [ACCORDION] ────────────────┤\n│ FAQs                                │\n├─── CONTACT ─────────────────────────┤\n│ Contact                             │\n├─── FOOTER ──────────────────────────┤\n│ Footer                              │\n└─────────────────────────────────────┘",
        "proposedV2": "┌─── NAVBAR ──────────────────────────┐\n│ IIMBx Logo | Links | Login          │\n├─── HERO ────────────────────────────┤\n│ PCAIM Title | CTA                   │\n├─── OVERVIEW ────────────────────────┤\n│ About                               │\n├─── TARGET AUDIENCE ─────────────────┤\n│ Audience                            │\n├─── 8 MODULES [ACCORDION] ───────────┤\n│ Modules                             │\n├─── TOOLS & PEDAGOGY ────────────────┤\n│ Tools                               │\n├─── FACULTY [LIST] ──────────────────┤\n│ Faculty list                        │\n├─── TESTIMONIALS [GRID] ─────────────┤\n│ Testimonials                        │\n├─── FEES & DATES ────────────────────┤\n│ Fees                                │\n├─── FAQS [ACCORDION] ────────────────┤\n│ FAQs                                │\n├─── CONTACT ─────────────────────────┤\n│ Contact                             │\n├─── FOOTER ──────────────────────────┤\n│ Footer                              │\n└─────────────────────────────────────┘",
        "proposedV3": "┌─── NAVBAR ──────────────────────────┐\n│ IIMBx Logo | Links | Login          │\n├─── HERO (DARK MODE) ────────────────┤\n│ PCAIM Title | CTA                   │\n├─── OVERVIEW ────────────────────────┤\n│ About                               │\n├─── TARGET AUDIENCE ─────────────────┤\n│ Audience                            │\n├─── 8 MODULES [TABS] ────────────────┤\n│ Modules                             │\n├─── TOOLS & PEDAGOGY ────────────────┤\n│ Tools                               │\n├─── TESTIMONIALS [CAROUSEL] ─────────┤\n│ Testimonials                        │\n├─── FACULTY [GRID] ──────────────────┤\n│ Faculty list                        │\n├─── FEES & DATES ────────────────────┤\n│ Fees                                │\n├─── FAQS [ACCORDION] ────────────────┤\n│ FAQs                                │\n├─── CONTACT ─────────────────────────┤\n│ Contact                             │\n├─── FOOTER ──────────────────────────┤\n│ Footer                              │\n└─────────────────────────────────────┘",
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
    ]
  }
];