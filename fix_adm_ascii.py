import re

path = r'c:\Users\harsh\OneDrive\Desktop\Compare\dashboard\data\data.js'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

v1_p1_ascii = '[Hero: Stitch Generated] -> [Overview] -> [Grid] -> [Curriculum]'
v1_p2_ascii = '[Hero: Stitch Interactive] -> [Overview] -> [Outcomes Grid] -> [Curriculum]'
v1_p3_ascii = '[Hero: Stitch Reimagine] -> [Overview] -> [Outcomes] -> [Curriculum]'

content = content.replace(
    'v1_variant_1: "[Hero: ADM] -> [Overview + Audience + Instructor] -> [Grid: Outcomes] -> [List: Modules]",',
    f'v1_variant_1: "{v1_p1_ascii}",'
)
content = content.replace(
    'v1_variant_2: "[Hero: ADM Navy] -> [Overview + Audience + Instructor] -> [Grid: Outcomes] -> [List: Modules]",',
    f'v1_variant_2: "{v1_p2_ascii}",'
)
content = content.replace(
    'v1_variant_3: "[Hero: ADM] -> [Overview + Audience + Instructor] -> [Grid: Outcomes] -> [Accordion: Modules]",',
    f'v1_variant_3: "{v1_p3_ascii}",'
)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)
