import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('dashboard/data/data.js', 'rb') as f:
    raw = f.read()

# Find NAM section
nam_search = b'"id": "nam"'
idx = raw.find(nam_search)
print('NAM id at byte:', idx)

ascii_idx = raw.find(b'"ascii"', idx)
print('ascii block at byte:', ascii_idx)

mhtml_idx = raw.find(b'marketingHtml', ascii_idx, ascii_idx + 5000)
print('marketingHtml at byte:', mhtml_idx)

chunk = raw[mhtml_idx+15:mhtml_idx+80]
print('Raw bytes:', repr(chunk))
print('Decoded:', chunk.decode('utf-8', errors='replace'))
