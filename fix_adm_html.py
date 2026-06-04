import json
import re

path = r'C:\Users\harsh\OneDrive\Desktop\Compare\dashboard\data\data.js'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# We need to add "html": {} to the wireframes object of ADM
# ADM wireframes block looks like this:
#     wireframes: {
#       ascii: {
#         ...
#       },
#       suggestions: [
#         ...
#       ]
#     },

def insert_html_block(match):
    return match.group(0) + ",\n      html: {}"

new_content = re.sub(
    r'(id:\s*[\'"]adm[\'"][\s\S]+?wireframes:\s*\{[\s\S]+?suggestions:\s*\[[\s\S]+?\]\n\s*\})',
    insert_html_block,
    content,
    count=1
)

with open(path, 'w', encoding='utf-8') as f:
    f.write(new_content)
print("Updated data.js with html block for ADM")
