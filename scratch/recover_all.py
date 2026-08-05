import json, os

BRAIN = os.path.join(os.environ['USERPROFILE'], '.gemini', 'antigravity-ide', 'brain')
PROJ = r'c:\Users\harsh\OneDrive\Desktop\IIMBx live project krishtech site agents latest'

# ALL conversations
ALL_CONVOS = []
for d in os.listdir(BRAIN):
    dp = os.path.join(BRAIN, d)
    if os.path.isdir(dp) and d != 'tempmediaStorage':
        tf = os.path.join(dp, '.system_generated', 'logs', 'transcript_full.jsonl')
        if os.path.exists(tf):
            ALL_CONVOS.append(d)

print(f"Scanning {len(ALL_CONVOS)} conversations...")

# Find empty html files
targets = set()
target_paths = {}
for root, dirs, files in os.walk(os.path.join(PROJ, 'variants')):
    if '.git' in root or 'node_modules' in root:
        continue
    for f in files:
        fp = os.path.join(root, f)
        if f.endswith('.html') and os.path.getsize(fp) == 0:
            targets.add(f)
            target_paths[f] = fp

dd = os.path.join(PROJ, 'design_dashboard.html')
if os.path.getsize(dd) == 0:
    targets.add('design_dashboard.html')
    target_paths['design_dashboard.html'] = dd

print(f"Still need: {len(targets)} files")
if not targets:
    print("Nothing to recover!")
    exit()

recovered = {}

for cid in ALL_CONVOS:
    tf = os.path.join(BRAIN, cid, '.system_generated', 'logs', 'transcript_full.jsonl')
    found_any = False
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
                a = tc.get('args', tc.get('arguments', {}))
                if not a:
                    continue
                target = a.get('TargetFile', a.get('target_file', ''))
                code = a.get('CodeContent', a.get('code_content', ''))
                if not target or not code:
                    continue
                basename = os.path.basename(target)
                if basename in targets:
                    recovered[basename] = code
                    if not found_any:
                        print(f"\n  {cid[:8]}:")
                        found_any = True
                    print(f"    {basename} ({len(code)} chars) line {line_num}")

print(f"\n=== RESULTS ===")
print(f"Recovered: {len(recovered)} / {len(targets)}")

for basename, content in recovered.items():
    fp = target_paths.get(basename)
    if fp:
        with open(fp, 'w', encoding='utf-8') as fh:
            fh.write(content)
        print(f"RESTORED: {basename} -> {os.path.getsize(fp)} bytes")

missing = sorted(targets - set(recovered.keys()))
if missing:
    print(f"\nMissing ({len(missing)}): {missing}")
else:
    print("\nALL FILES RECOVERED!")
