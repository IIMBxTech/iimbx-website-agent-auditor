import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('dashboard/data/data.js', 'r', encoding='utf-8') as f:
    text = f.read()

# These are the ACTUAL corrupted UTF-8 sequences stored in the file.
# Each corrupt sequence is 3 UTF-8 bytes that were misinterpreted.
# Correct box-drawing characters:
corrupt_map = [
    ('\u00e2\u0094\u008c', '\u250c'),  # ┌
    ('\u00e2\u0094\u0080', '\u2500'),  # ─
    ('\u00e2\u0094\u0082', '\u2502'),  # │
    ('\u00e2\u0094\u009c', '\u251c'),  # ├
    ('\u00e2\u0094\u00a4', '\u2524'),  # ┤
    ('\u00e2\u0094\u0094', '\u2514'),  # └
    ('\u00e2\u0094\u0098', '\u2518'),  # ┘
    ('\u00e2\u0082\u00b9', '\u20b9'),  # ₹
    ('\u00e2\u009a\u00a0', '\u26a0'),  # ⚠
]

total = 0
for wrong, correct in corrupt_map:
    count = text.count(wrong)
    total += count
    if count > 0:
        print('Found', count, 'of', repr(wrong[:3]), '-> replacing with', correct)
    text = text.replace(wrong, correct)

with open('dashboard/data/data.js', 'w', encoding='utf-8') as f:
    f.write(text)

print('Done. Total replacements:', total)
