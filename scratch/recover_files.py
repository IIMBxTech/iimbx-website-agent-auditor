import json, os

BRAIN = os.path.join(os.environ['USERPROFILE'], '.gemini', 'antigravity-ide', 'brain')
PROJ = r'c:\Users\harsh\OneDrive\Desktop\IIMBx live project krishtech site agents latest'

CONVOS = [
    '5b58e2ff-3ae7-40a8-9712-1d8e013415ea',
    'f8c8d4a0-4e00-47d4-a5bd-d78e518de1ee',
    'f1bf43ad-f1dd-47e5-a5e2-d6f078443510',
    '31dbdb20-1b6a-4856-b74c-8e508ff482fa',
    '8b7137a7-8500-43eb-8262-0b84f8a94b4b',
    'b858db91-4781-4915-8887-60e17d8fa572',
    'e897079e-119b-42b2-8651-7860538420ef',
    'd8807476-1e5a-4787-913c-a25f179e50fd',
]

# Find empty html files
targets = set()
for root, dirs, files in os.walk(os.path.join(PROJ, 'variants')):
    for f in files:
        fp = os.path.join(root, f)
        if f.endswith('.html') and os.path.getsize(fp) == 0:
            targets.add(f)

dd = os.path.join(PROJ, 'design_dashboard.html')
if os.path.getsize(dd) == 0:
    targets.add('design_dashboard.html')

print(f"Need to recover {len(targets)} files")

# Map basename -> full path
target_paths = {}
for root, dirs, files in os.walk(PROJ):
    if '.git' in root or 'node_modules' in root:
        continue
    for f in files:
        if f in targets:
            target_paths[f] = os.path.join(root, f)

recovered = {}

for cid in CONVOS:
    tf = os.path.join(BRAIN, cid, '.system_generated', 'logs', 'transcript_full.jsonl')
    if not os.path.exists(tf):
        continue
    print(f"\nScanning {cid[:8]}...")
    with open(tf, 'r', encoding='utf-8', errors='replace') as fh:
        for line_num, line in enumerate(fh, 1):
            try:
                obj = json.loads(line)
            except:
                continue
            tool_calls = obj.get('tool_calls', [])
            if not tool_calls:
                continue
            for tc in tool_calls:
                # Try both 'args' and 'arguments'
                a = tc.get('args', tc.get('arguments', {}))
                if not a:
                    continue
                target = a.get('TargetFile', a.get('target_file', ''))
                code = a.get('CodeContent', a.get('code_content', ''))
                if not target or not code:
                    continue
                basename = os.path.basename(target)
                if basename in targets:
                    # Keep the LATEST version (don't skip if already found)
                    recovered[basename] = (code, cid[:8], line_num)
                    print(f"  FOUND: {basename} ({len(code)} chars) at line {line_num}")

print(f"\n=== RECOVERY RESULTS ===")
print(f"Recovered: {len(recovered)} / {len(targets)}")

for basename, (content, cid, ln) in recovered.items():
    fp = target_paths.get(basename)
    if fp and os.path.getsize(fp) == 0:
        with open(fp, 'w', encoding='utf-8') as fh:
            fh.write(content)
        sz = os.path.getsize(fp)
        print(f"RESTORED: {basename} -> {sz} bytes")

missing = targets - set(recovered.keys())
if missing:
    print(f"\nStill missing ({len(missing)}): {sorted(missing)}")
else:
    print("\nALL FILES RECOVERED!")
