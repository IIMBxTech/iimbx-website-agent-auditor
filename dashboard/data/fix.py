import re

with open('dashboard/data/data.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Fix ADM oldSite
text = text.replace(
    '"oldSite": "Not Applicable — no old site for NAM",\n        "marketingHtml": "Not Applicable — no staging site for ADM",',
    '"oldSite": "┌─── NAVBAR ─────────────────────────┐\\n│ IIMBx Logo | Links | Login          │\\n├─── HERO ───────────────────────────┤\\n│ ADM Title                           │\\n├─── OVERVIEW ───────────────────────┤\\n│ About the programme                 │\\n├─── FACULTY ────────────────────────┤\\n│ Prof. M S Narasimhan                │\\n├─── COURSE DETAILS ─────────────────┤\\n│ 9 weeks | 3-4 hrs per week          │\\n├─── SYLLABUS ───────────────────────┤\\n│ 9 Weeks List                        │\\n├─── OUTCOMES & AUDIENCE ────────────┤\\n│ Learning Outcomes | Target Audience │\\n├─── FOOTER ─────────────────────────┤\\n│ Contact | Links                     │\\n└────────────────────────────────────┘",\n        "marketingHtml": "Not Applicable — no staging site for ADM",'
)

# Fix NAM oldSite
# We know NAM's block comes after ELP or PCHM. Let's find the NAM block by looking for "nam"
nam_index = text.find('"id": "nam"')
if nam_index != -1:
    # Find the next ascii block
    ascii_index = text.find('"ascii": {', nam_index)
    if ascii_index != -1:
        # Find the oldSite within this ascii block
        oldsite_start = text.find('"oldSite":', ascii_index)
        if oldsite_start != -1:
            oldsite_end = text.find('",\n        "marketingHtml"', oldsite_start)
            if oldsite_end != -1:
                # Replace that specific oldSite
                old_val = text[oldsite_start:oldsite_end+1]
                text = text[:oldsite_start] + '"oldSite": "Not Applicable — no old site for NAM"' + text[oldsite_end+1:]

with open('dashboard/data/data.js', 'w', encoding='utf-8') as f:
    f.write(text)
print("Fixed data.js")
