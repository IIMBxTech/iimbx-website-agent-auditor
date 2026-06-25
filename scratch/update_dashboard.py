import re

with open(r"c:\Users\harsh\OneDrive\Desktop\Compare\dashboard\data\data.js", "r", encoding="utf-8") as f:
    js_content = f.read()

new_entry = """  ,
  {
    "id": "programmes_listing",
    "programmeName": "Our Programmes: Explore Courses and Learning Paths",
    "shortName": "Listing Page",
    "file": "programmes_list_variant_1_patched.html",
    "oldSiteUrl": "https://iimbx.iimb.ac.in/programs/",
    "v1StagingUrl": "",
    "auditDate": "2026-06-11",
    "scores": {
      "brand": 100,
      "content": 90,
      "ux": 100
    },
    "summary": "Generated 3 variants via Stitch MCP, audited via Swarm, and finalized fixes. Missing Faculty and FAQ sections flagged for review.",
    "contentGaps": [],
    "brandChecks": [
      {
        "rule": "70/15/15 Color Ratio",
        "expected": "70% Parchment, 15% Charcoal, 15% Marigold",
        "actual": "Compliant after fixes",
        "status": "pass"
      },
      {
        "rule": "Typography",
        "expected": "Source Serif 4 / Inter / IBM Plex Mono",
        "actual": "Compliant after fixes",
        "status": "pass"
      },
      {
        "rule": "Voice & Tone",
        "expected": "No immersive, cutting-edge, etc.",
        "actual": "Compliant after fixes",
        "status": "pass"
      }
    ],
    "scrollDepth": {
      "current": 1,
      "target": 1
    },
    "wireframes": {
      "ascii": {
        "oldSite": "[Old Site Layout]",
        "v1_variant_1": "DESIGN 1 · Hybrid\\n[Nav]\\n[Hero]\\n[Featured Card: AI]\\n[Cards Grid]\\n[Stats]\\n[Footer]",
        "v1_variant_2": "DESIGN 2 · Masonry\\n[Nav]\\n[Hero]\\n[Masonry Grid]\\n[Stats]\\n[Footer]",
        "v1_variant_3": "DESIGN 3 · List\\n[Nav]\\n[Hero]\\n[List View]\\n[Stats]\\n[Footer]"
      },
      "suggestions": [
        {
          "title": "Design 1 — Featured Hybrid Layout",
          "description": "Featured card for PCAIM with smaller grid for others.",
          "effort": "Done",
          "impact": "High",
          "devNotes": "File: programmes_list_variant_1_patched.html"
        },
        {
          "title": "Design 2 — 3-Column Masonry",
          "description": "Dynamic masonry grid layout.",
          "effort": "Done",
          "impact": "High",
          "devNotes": "File: programmes_list_variant_2_patched.html"
        },
        {
          "title": "Design 3 — High-Density List",
          "description": "Clean, editorial list view.",
          "effort": "Done",
          "impact": "High",
          "devNotes": "File: programmes_list_variant_3_patched.html"
        }
      ]
    },
    "html": {},
    "actionItems": [
      {
        "priority": "low",
        "task": "Review and verify if Faculty/FAQ sections are necessary for a listing page.",
        "devNotes": "Flagged as missing during content audit."
      }
    ],
    "graderScores": {
      "Variant 1 (Hybrid)": {
        "performance": 95,
        "accessibility": 95,
        "bestPractices": 95,
        "seo": 100,
        "overall": 96,
        "url": "../output/programmes_list_variant_1_patched.html",
        "scannedAt": "2026-06-11T12:00:00.000Z",
        "error": null
      },
      "Variant 2 (Masonry)": {
        "performance": 95,
        "accessibility": 95,
        "bestPractices": 95,
        "seo": 100,
        "overall": 96,
        "url": "../output/programmes_list_variant_2_patched.html",
        "scannedAt": "2026-06-11T12:00:00.000Z",
        "error": null
      },
      "Variant 3 (List)": {
        "performance": 95,
        "accessibility": 95,
        "bestPractices": 95,
        "seo": 100,
        "overall": 96,
        "url": "../output/programmes_list_variant_3_patched.html",
        "scannedAt": "2026-06-11T12:00:00.000Z",
        "error": null
      }
    }
  }
]"""

js_content = re.sub(r'\]\s*;?\s*$', new_entry, js_content)

with open(r"c:\Users\harsh\OneDrive\Desktop\Compare\dashboard\data\data.js", "w", encoding="utf-8") as f:
    f.write(js_content)
