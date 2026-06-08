import sys, re
sys.stdout.reconfigure(encoding='utf-8')

NAM_BOX = "┌─── NAVBAR ─────────────────────────┐\n│ IIMBx Logo | Links | Login          │\n"

def box(sections):
    """Build a clean ASCII wireframe string from a list of (label, content) tuples."""
    lines = ["┌─── NAVBAR ─────────────────────────┐", "│ IIMBx Logo | Links | Login          │"]
    for label, content in sections:
        lines.append("├─── " + label + " " + "─" * max(1, 34 - len(label)) + "┤")
        for c in content:
            lines.append("│ " + c.ljust(35) + "│")
    lines.append("└────────────────────────────────────┘")
    return "\\n".join(lines)

# ── NAM wireframes ──────────────────────────────────────────────
NAM_MARKETING = box([
    ("HERO", ["NAM Title | CTA"]),
    ("OVERVIEW", ["About"]),
    ("THEMES", ["Programme Themes", " ", "  ⚠ MISSING: Faculty", "  (Present on Old Site + v1 Staging)", " ", "  ⚠ MISSING: FAQs", "  (Present on Old Site + v1 Staging)", " ", "  ⚠ MISSING: Fees", "  (Present on Old Site + v1 Staging)", " "]),
    ("FOOTER", ["Contact | Links"]),
])
NAM_V1STAGING = box([
    ("HERO", ["NAM Title | CTA"]),
    ("OVERVIEW", ["About"]),
    ("THEMES", ["Programme Themes"]),
    ("FACULTY", ["Faculty list"]),
    ("FAQS", ["FAQs"]),
    ("FEES", ["Fees"]),
    ("FOOTER", ["Contact | Links"]),
])
NAM_V1 = box([
    ("HERO", ["NAM Title | CTA"]),
    ("OVERVIEW", ["About"]),
    ("THEMES", ["Programme Themes"]),
    ("FACULTY [GRID]", ["Faculty list"]),
    ("FAQS [ACCORDION]", ["FAQs"]),
    ("FEES", ["Fees"]),
    ("FOOTER", ["Contact | Links"]),
])
NAM_V2 = box([
    ("HERO", ["NAM Title | CTA"]),
    ("OVERVIEW", ["About"]),
    ("THEMES [TABS]", ["Programme Themes"]),
    ("FACULTY [LIST]", ["Faculty list"]),
    ("FEES", ["Fees"]),
    ("FAQS [ACCORDION]", ["FAQs"]),
    ("FOOTER", ["Contact | Links"]),
])
NAM_V3 = box([
    ("HERO (DARK MODE)", ["NAM Title | CTA"]),
    ("OVERVIEW", ["About"]),
    ("THEMES [GRID]", ["Programme Themes"]),
    ("FACULTY [CAROUSEL]", ["Faculty list"]),
    ("FEES", ["Fees"]),
    ("FAQS [ACCORDION]", ["FAQs"]),
    ("FOOTER", ["Contact | Links"]),
])

# ── ELP wireframes ──────────────────────────────────────────────
ELP_OLD = box([
    ("HERO", ["ELP Title | CTA"]),
    ("OVERVIEW", ["7 Months"]),
    ("THEMES", ["5 Themes"]),
    ("FACULTY", ["Faculty List"]),
    ("TESTIMONIALS", ["Testimonials"]),
    ("FEES", ["Fees"]),
    ("FAQS", ["FAQs"]),
    ("FOOTER", ["Contact | Links"]),
])
ELP_MARKETING = box([
    ("HERO", ["ELP Title | Next Cohort | CTA"]),
    ("OVERVIEW", ["About the programme (8 months)"]),
    ("THEMES (V1)", ["Infinite scroll list", " ", "  ⚠ MISSING: Faculty", "  ⚠ MISSING: Testimonials", "  ⚠ MISSING: Fees", " "]),
    ("FOOTER", ["Contact | Links"]),
])
ELP_V1STAGING = box([
    ("HERO", ["ELP Title | CTA"]),
    ("OVERVIEW", ["7 Months"]),
    ("THEMES", ["5 Themes"]),
    ("FACULTY", ["Faculty List"]),
    ("TESTIMONIALS", ["Testimonials"]),
    ("FEES", ["Fees"]),
    ("FAQS", ["FAQs"]),
    ("FOOTER", ["Contact | Links"]),
])
ELP_PROP_V1 = box([
    ("HERO", ["ELP Title | CTA"]),
    ("OVERVIEW", ["7 Months"]),
    ("THEMES [TABS]", ["5 Themes"]),
    ("FACULTY [GRID]", ["Faculty List"]),
    ("TESTIMONIALS [CAROUSEL]", ["Testimonials"]),
    ("FEES", ["Fees"]),
    ("FAQS [ACCORDION]", ["FAQs"]),
    ("FOOTER", ["Contact | Links"]),
])
ELP_PROP_V2 = box([
    ("HERO", ["ELP Title | CTA"]),
    ("OVERVIEW", ["7 Months"]),
    ("THEMES [ACCORDION]", ["5 Themes"]),
    ("FACULTY [LIST]", ["Faculty List"]),
    ("TESTIMONIALS [GRID]", ["Testimonials"]),
    ("FEES", ["Fees"]),
    ("FAQS [ACCORDION]", ["FAQs"]),
    ("FOOTER", ["Contact | Links"]),
])
ELP_PROP_V3 = box([
    ("HERO (DARK MODE)", ["ELP Title | CTA"]),
    ("OVERVIEW", ["7 Months"]),
    ("THEMES [TABS]", ["5 Themes"]),
    ("TESTIMONIALS [CAROUSEL]", ["Testimonials"]),
    ("FACULTY [GRID]", ["Faculty List"]),
    ("FEES", ["Fees"]),
    ("FAQS [ACCORDION]", ["FAQs"]),
    ("FOOTER", ["Contact | Links"]),
])
ELP_V2STAGING = box([
    ("HERO (V2)", ["Open for Aug 2026 | 11 Modules"]),
    ("OVERVIEW", ["About the programme (8 months)"]),
    ("THEMES (V2 GRID)", ["3x2 Grid with Red Hover"]),
    ("FACULTY", ["Prof Shainesh + 8 Faculty Grid"]),
    ("WHO IT IS FOR", ["Split Navy/Paper cards"]),
    ("FEES", ["₹2,80,000+ Table"]),
    ("FINAL CTA", ["Eight months... | Apply | Brochure"]),
])
ELP_V1_1 = box([
    ("HERO", ["ELP Title | Next Cohort | CTA"]),
    ("OVERVIEW", ["About the programme (8 months)"]),
    ("THEMES (V1)", ["Infinite scroll list", " ", "  ⚠ MISSING: Faculty", "  ⚠ MISSING: Testimonials", "  ⚠ MISSING: Fees", " "]),
    ("FOOTER", ["Contact | Links"]),
])
ELP_V1_2 = box([
    ("NAVBAR [DARK]", ["IIMBx Logo | Links | Login"]),
    ("HERO [DARK]", ["ELP Title | Next Cohort | CTA"]),
    ("OVERVIEW [DARK]", ["About the programme (8 months)"]),
    ("THEMES (V1) [DARK]", ["Infinite scroll list", "  ⚠ MISSING: Faculty", "  ⚠ MISSING: Testimonials", "  ⚠ MISSING: Fees"]),
    ("FOOTER [DARK]", ["Contact | Links"]),
])
ELP_V1_3 = box([
    ("HERO", ["ELP Title | Next Cohort | CTA"]),
    ("OVERVIEW", ["About the programme (8 months)"]),
    ("THEMES (V1 COMPACT)", ["Compact Grid view", "  ⚠ MISSING: Faculty", "  ⚠ MISSING: Testimonials", "  ⚠ MISSING: Fees"]),
    ("FOOTER", ["Contact | Links"]),
])
ELP_V2_1 = box([
    ("HERO (V2)", ["Open for Aug 2026 | 11 Modules"]),
    ("OVERVIEW", ["About the programme (8 months)"]),
    ("THEMES (V2 GRID)", ["3x2 Grid with Red Hover"]),
    ("FACULTY", ["Prof Shainesh + 8 Faculty Grid"]),
    ("WHO IT IS FOR", ["Split Navy/Paper cards"]),
    ("FEES", ["₹2,80,000+ Table"]),
    ("FINAL CTA", ["Eight months... | Apply | Brochure"]),
])
ELP_V2_2 = box([
    ("HERO (V2 DARK)", ["Open for Aug 2026 | 11 Modules"]),
    ("OVERVIEW", ["About the programme (8 months)"]),
    ("THEMES (V2 GRID DARK)", ["3x2 Grid with Red Hover"]),
    ("FACULTY", ["Prof Shainesh + 8 Faculty Grid"]),
    ("WHO IT IS FOR", ["Split Navy/Paper cards"]),
    ("FEES", ["₹2,80,000+ Table"]),
    ("FINAL CTA", ["Eight months... | Apply | Brochure"]),
])
ELP_V2_3 = box([
    ("HERO (V2 COMPACT)", ["Open for Aug 2026 | 11 Modules"]),
    ("OVERVIEW", ["About the programme (8 months)"]),
    ("THEMES (V2 COMPACT)", ["2x3 Compact Grid"]),
    ("FACULTY (COMPACT)", ["Prof Shainesh + 2x4 Faculty Grid"]),
    ("WHO IT IS FOR", ["Split Navy/Paper cards"]),
    ("FEES", ["₹2,80,000+ Table"]),
    ("FINAL CTA", ["Eight months... | Apply | Brochure"]),
])

# ── PCAIM wireframes ─────────────────────────────────────────────
PC_OLD = box([
    ("HERO", ["PCAIM Title | CTA"]),
    ("OVERVIEW", ["About"]),
    ("TARGET AUDIENCE", ["Audience"]),
    ("8 MODULES", ["Modules"]),
    ("TOOLS & PEDAGOGY", ["Tools"]),
    ("FACULTY", ["Faculty list"]),
    ("TESTIMONIALS", ["Testimonials"]),
    ("FEES & DATES", ["Fees"]),
    ("FAQS", ["FAQs"]),
    ("CONTACT", ["Contact"]),
    ("FOOTER", ["Footer"]),
])
PC_V1STAGING = box([
    ("HERO", ["PCAIM Title | CTA"]),
    ("OVERVIEW", ["About"]),
    ("TARGET AUDIENCE", ["Audience"]),
    ("8 MODULES", ["Modules"]),
    ("TOOLS & PEDAGOGY", ["Tools"]),
    ("FACULTY", ["Faculty list"]),
    ("TESTIMONIALS", ["Testimonials"]),
    ("FEES & DATES", ["Fees"]),
    ("FAQS", ["FAQs"]),
    ("CONTACT", ["Contact"]),
    ("FOOTER", ["Footer"]),
])
PC_V1 = box([
    ("HERO", ["PCAIM Title | CTA"]),
    ("OVERVIEW", ["About"]),
    ("TARGET AUDIENCE", ["Audience"]),
    ("8 MODULES [STACKED]", ["Modules"]),
    ("TOOLS & PEDAGOGY", ["Tools"]),
    ("FACULTY [GRID]", ["Faculty list"]),
    ("TESTIMONIALS [CAROUSEL]", ["Testimonials"]),
    ("FEES & DATES", ["Fees"]),
    ("FAQS [ACCORDION]", ["FAQs"]),
    ("CONTACT", ["Contact"]),
    ("FOOTER", ["Footer"]),
])
PC_V2 = box([
    ("HERO", ["PCAIM Title | CTA"]),
    ("OVERVIEW", ["About"]),
    ("TARGET AUDIENCE", ["Audience"]),
    ("8 MODULES [ACCORDION]", ["Modules"]),
    ("TOOLS & PEDAGOGY", ["Tools"]),
    ("FACULTY [LIST]", ["Faculty list"]),
    ("TESTIMONIALS [GRID]", ["Testimonials"]),
    ("FEES & DATES", ["Fees"]),
    ("FAQS [ACCORDION]", ["FAQs"]),
    ("CONTACT", ["Contact"]),
    ("FOOTER", ["Footer"]),
])
PC_V3 = box([
    ("HERO (DARK MODE)", ["PCAIM Title | CTA"]),
    ("OVERVIEW", ["About"]),
    ("TARGET AUDIENCE", ["Audience"]),
    ("8 MODULES [TABS]", ["Modules"]),
    ("TOOLS & PEDAGOGY", ["Tools"]),
    ("TESTIMONIALS [CAROUSEL]", ["Testimonials"]),
    ("FACULTY [GRID]", ["Faculty list"]),
    ("FEES & DATES", ["Fees"]),
    ("FAQS [ACCORDION]", ["FAQs"]),
    ("CONTACT", ["Contact"]),
    ("FOOTER", ["Footer"]),
])

# ── Read and patch data.js ────────────────────────────────────────
with open('dashboard/data/data.js', 'r', encoding='utf-8') as f:
    text = f.read()

def patch(text, prog_id, field, new_val):
    """Find the ascii block for prog_id and replace the given field's string value."""
    # Find the programme object
    prog_start = text.find(f'"id": "{prog_id}"')
    if prog_start == -1:
        print(f'ERROR: programme {prog_id} not found')
        return text
    # Find ascii block after prog_start
    ascii_start = text.find('"ascii": {', prog_start)
    ascii_end = text.find('\n      },', ascii_start) + 9
    ascii_block = text[ascii_start:ascii_end]
    
    # Find the field key in the block
    field_key = f'"{field}":'
    field_start = ascii_block.find(field_key)
    if field_start == -1:
        print(f'ERROR: field {field} not found in {prog_id}')
        return text
    
    # The value starts after the key, skip whitespace and opening quote
    val_start_in_block = field_start + len(field_key)
    # Skip whitespace
    while val_start_in_block < len(ascii_block) and ascii_block[val_start_in_block] in (' ', '\t', '\r', '\n'):
        val_start_in_block += 1
    
    if ascii_block[val_start_in_block] != '"':
        print(f'ERROR: expected quote at position {val_start_in_block} for {prog_id}.{field}')
        return text
    
    # Find end of string value - scan for closing quote not preceded by backslash
    i = val_start_in_block + 1
    while i < len(ascii_block):
        if ascii_block[i] == '"' and ascii_block[i-1] != '\\':
            break
        i += 1
    
    old_val = ascii_block[val_start_in_block:i+1]
    new_quoted = '"' + new_val + '"'
    new_ascii_block = ascii_block[:val_start_in_block] + new_quoted + ascii_block[i+1:]
    new_text = text[:ascii_start] + new_ascii_block + text[ascii_end:]
    print(f'  Patched {prog_id}.{field} ({len(old_val)} chars -> {len(new_quoted)} chars)')
    return new_text

print("Patching NAM...")
text = patch(text, 'nam', 'marketingHtml', NAM_MARKETING)
text = patch(text, 'nam', 'v1Staging', NAM_V1STAGING)
text = patch(text, 'nam', 'proposedV1', NAM_V1)
text = patch(text, 'nam', 'proposedV2', NAM_V2)
text = patch(text, 'nam', 'proposedV3', NAM_V3)

print("Patching ELP...")
text = patch(text, 'elp', 'oldSite', ELP_OLD)
text = patch(text, 'elp', 'marketingHtml', ELP_MARKETING)
text = patch(text, 'elp', 'v1Staging', ELP_V1STAGING)
text = patch(text, 'elp', 'proposedV1', ELP_PROP_V1)
text = patch(text, 'elp', 'proposedV2', ELP_PROP_V2)
text = patch(text, 'elp', 'proposedV3', ELP_PROP_V3)
text = patch(text, 'elp', 'v2Staging', ELP_V2STAGING)
text = patch(text, 'elp', 'v1_variant_1', ELP_V1_1)
text = patch(text, 'elp', 'v1_variant_2', ELP_V1_2)
text = patch(text, 'elp', 'v1_variant_3', ELP_V1_3)
text = patch(text, 'elp', 'v2_variant_1', ELP_V2_1)
text = patch(text, 'elp', 'v2_variant_2', ELP_V2_2)
text = patch(text, 'elp', 'v2_variant_3', ELP_V2_3)

print("Patching PCAIM...")
text = patch(text, 'pcaim', 'oldSite', PC_OLD)
text = patch(text, 'pcaim', 'v1Staging', PC_V1STAGING)
text = patch(text, 'pcaim', 'proposedV1', PC_V1)
text = patch(text, 'pcaim', 'proposedV2', PC_V2)
text = patch(text, 'pcaim', 'proposedV3', PC_V3)

with open('dashboard/data/data.js', 'w', encoding='utf-8') as f:
    f.write(text)

# Verify
with open('dashboard/data/data.js', 'r', encoding='utf-8') as f:
    check = f.read()
print(f"\nVerification: ┌ count = {check.count(chr(0x250c))}")
print("All done.")
