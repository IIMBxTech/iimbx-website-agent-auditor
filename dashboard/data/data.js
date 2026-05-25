window.AUDIT_DATA = [
  {
    "programmeName": "Emerging Leaders Programme 2.0",
    "file": "ELP_Landing.html",
    "auditDate": new Date().toISOString(),
    "scores": {
      "brand": 100,
      "content": 85,
      "ux": 60
    },
    "summary": "Brand compliance is perfect. Minor content discrepancies compared to the old site. Major UX bloat in curriculum needs tabs.",
    "contentGaps": [
      {
        "section": "Duration",
        "oldContent": "7 months",
        "newContent": "8 months",
        "verdict": "⚠️ Discrepancy",
        "explanation": "Canonical playbook (AGENTS.md) strictly states 7 months. Marketing prototype contains a factual error."
      },
      {
        "section": "Themes",
        "oldContent": "6 themes",
        "newContent": "5 themes",
        "verdict": "⚠️ Discrepancy",
        "explanation": "Old site was outdated (6 themes). Prototype correctly has 5, but content needs validation against canonical list."
      },
      {
        "section": "Sticky CTA",
        "oldContent": "None",
        "newContent": "None",
        "verdict": "🔴 Missing",
        "explanation": "Flagged by Agent 10 (Layout Analyzer) as required to drive conversion on long pages."
      }
    ],
    "brandChecks": [
      {
        "rule": "Canvas Color",
        "expected": "#F4EFE3",
        "actual": "#F4EFE3",
        "status": "✅ Passed"
      },
      {
        "rule": "Banned Colors",
        "expected": "None",
        "actual": "None found",
        "status": "✅ Passed"
      }
    ],
    "scrollDepth": {
      "current": 6.5,
      "target": 4.5
    },
    "wireframes": [
      {
        "oldLive": "┌──────────────────────┐\n│ Text-Heavy Overview  │\n├──────────────────────┤\n│ Generic Themes List  │\n│                      │\n│                      │\n└──────────────────────┘\n(Dated UI, hard to read)",
        "current": "┌──────────────────────┐\n│ Theme Grid (2 rows)  │\n├──────────────────────┤\n│ Course 01            │\n│ Course 02            │\n│ Course 03            │\n│ ...                  │\n└──────────────────────┘\n(Massive vertical scroll)",
        "proposed": "┌──────────────────────┐\n│ [Themes] [Courses]   │\n├──────────────────────┤\n│ Theme Grid (2 rows)  │\n│                      │\n│                      │\n└──────────────────────┘\n(Tabbed - Saves 1.5 scrolls)"
      }
    ],
    "actionItems": [
      {
        "priority": "🔴 Critical",
        "task": "Add a sticky bottom CTA bar to improve conversion."
      },
      {
        "priority": "🟠 High",
        "task": "Convert the Themes and Courses sections into a tabbed interface to save vertical scroll."
      }
    ]
  },
  {
    "programmeName": "New-Age Managers Programme",
    "file": "NAM_Landing.html",
    "auditDate": new Date().toISOString(),
    "scores": {
      "brand": 90,
      "content": 70,
      "ux": 80
    },
    "summary": "Strong brand adherence, but missing critical content sections (FAQs and Fees & Dates) that are required to drive conversion.",
    "contentGaps": [
      {
        "section": "FAQs",
        "oldContent": "Present on old site",
        "newContent": "Missing from prototype",
        "verdict": "🔴 Missing",
        "explanation": "Critical for building trust. Agent 18 will inject canonical FAQs from AGENTS.md."
      },
      {
        "section": "Fees & Dates",
        "oldContent": "Present on old site",
        "newContent": "Missing from prototype",
        "verdict": "🔴 Missing",
        "explanation": "Required for conversion. Agent 18 will build a pricing table based on canonical data."
      },
      {
        "section": "Brand Promise",
        "oldContent": "-",
        "newContent": "\"The same faculty. Wherever you are.\"",
        "verdict": "✅ Perfect Match",
        "explanation": "Correctly injected exactly once as per the May 2026 Brand Playbook."
      }
    ],
    "brandChecks": [
      {
        "rule": "Banned Phrases",
        "expected": "None",
        "actual": "None found",
        "status": "✅ Passed"
      },
      {
        "rule": "Banned Colors (Green)",
        "expected": "None",
        "actual": "Found --eucalyptus mapped to Navy (Acceptable workaround)",
        "status": "🟡 Warning"
      },
      {
        "rule": "Fonts",
        "expected": "Source Serif 4, Inter",
        "actual": "Source Serif 4, Inter",
        "status": "✅ Passed"
      }
    ],
    "scrollDepth": {
      "current": 5.2,
      "target": 4.0
    },
    "wireframes": [
      {
        "oldLive": "┌──────────────────────┐\n│ Basic Info Block     │\n├──────────────────────┤\n│ FAQ Section (Messy)  │\n├──────────────────────┤\n│ Fees & Dates Table   │\n└──────────────────────┘\n(Good content, bad UX)",
        "current": "┌──────────────────────┐\n│ Who You'll Nominate  │\n├──────────────────────┤\n│ Final CTA            │\n│                      │\n│ Footer               │\n└──────────────────────┘\n(Abrupt end to page)",
        "proposed": "┌──────────────────────┐\n│ Who You'll Nominate  │\n├──────────────────────┤\n│ FAQs (Accordion)     │\n├──────────────────────┤\n│ Fees & Dates Table   │\n├──────────────────────┤\n│ Final CTA            │\n└──────────────────────┘\n(Adds missing trust signals)"
      }
    ],
    "actionItems": [
      {
        "priority": "🔴 Critical",
        "task": "Inject the missing FAQs and Fees & Dates sections using Agent 18."
      },
      {
        "priority": "🟡 Medium",
        "task": "Clean up the --eucalyptus variable in CSS to avoid confusion."
      }
    ]
  }
];
