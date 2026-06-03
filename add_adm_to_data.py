import re

path = r'c:\Users\harsh\OneDrive\Desktop\Compare\dashboard\data\data.js'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

new_entry = """  {
    id: "adm",
    programmeName: "Accounting for Decision Making",
    shortName: "ADM",
    file: "adm_old_site_reference_agent_gen.html",
    oldSiteUrl: "https://iimbx.iimb.ac.in/catalog/accounting-for-decision-making/",
    v1StagingUrl: "",
    auditDate: "2026-06-03",
    scores: {
      brand: 100,
      content: 100,
      ux: 100
    },
    summary: "Generated reference material and prototypes based on old site data. No direct comparison as staging site doesn't exist yet.",
    contentGaps: [],
    brandChecks: [
      {
        rule: "70/15/15 Color Ratio",
        expected: "70% Parchment, 15% Charcoal, 15% Marigold",
        actual: "Compliant in Baseline",
        status: "pass"
      }
    ],
    scrollDepth: {
      current: 4000,
      target: 2000
    },
    wireframes: {
      ascii: {
        oldSite: "[Hero] -> [Overview] -> [Modules]",
        marketingHtml: "",
        v1Staging: "",
        proposed: "[Hero: ADM] -> [Overview + Audience + Instructor] -> [Grid: Outcomes] -> [Accordion: Modules]"
      },
      suggestions: [
        {
          title: "Prototype Generation",
          description: "Created 3 prototype variants based on existing data",
          effort: "Low",
          impact: "High",
          devNotes: "Agent generated reference and variants"
        }
      ]
    },
    actionItems: [
      {
        priority: "low",
        task: "Review generated prototypes",
        devNotes: "Check adm_v1_variant_1, adm_v1_variant_2, adm_v1_variant_3"
      }
    ]
  },
"""

content = content.replace('window.AUDIT_DATA = [', 'window.AUDIT_DATA = [\n' + new_entry)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)
