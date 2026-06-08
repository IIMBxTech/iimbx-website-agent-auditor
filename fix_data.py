import json, re

with open('dashboard/data/data.js', 'r', encoding='utf-8') as f:
    text = f.read()

text = text.replace('"id": "adm",\n    "programmeName": "Accounting for Decision Making",\n    "shortName": "ADM",\n    "file": "Not provided",', '"id": "adm",\n    "programmeName": "Accounting for Decision Making",\n    "shortName": "ADM",\n    "file": "adm_v1_variant_5.html",')

text = text.replace('"id": "pcaim",\n    "programmeName": "Professional Certificate in AI for Managers",\n    "shortName": "PCAIM",\n    "file": "Not provided",', '"id": "pcaim",\n    "programmeName": "Professional Certificate in AI for Managers",\n    "shortName": "PCAIM",\n    "file": "AI_For_Managers.html",')

with open('dashboard/data/data.js', 'w', encoding='utf-8') as f:
    f.write(text)
print("done")
