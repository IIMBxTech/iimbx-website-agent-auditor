import json, os

BRAIN = os.path.join(os.environ['USERPROFILE'], '.gemini', 'antigravity-ide', 'brain')

# Target files we want to find the best versions of
TARGET_FILES = [
    'contact_v5_premium.html', 'contact_v4_practical.html', 'contact_v3_uiux_promax.html',
    'about_v2_uiux_promax.html', 'about_v4_practical.html', 'about_v1.html',
    'homepage_v5_special.html',
]

# Conversations with relevant content
CONVOS = [
    '5b58e2ff-3ae7-40a8-9712-1d8e013415ea',
    '31dbdb20-1b6a-4856-b74c-8e508ff482fa',
    'cacfe60e-ec62-4790-844b-f477cdaa5588',
    '5b2d34fb-6dd0-43c4-b6b9-4f6ea3c7856a',
    'f8c8d4a0-4e00-47d4-a5bd-d78e518de1ee',
    'e897079e-119b-42b2-8651-7860538420ef',
    '20939016-4102-4a29-93c3-f17ed2fe2321',
    '8b9e8802-c84e-4350-8821-1f9b6c7a1842',
    'd8807476-1e5a-4787-913c-a25f179e50fd',
    'e8c9a4fc-a05a-4c3b-ab56-9c65a910d722',
    'f1bf43ad-f1dd-47e5-a5e2-d6f078443510',
    'b858db91-4781-4915-8887-60e17d8fa572',
    '35f24ce8-720c-47f5-9249-1c1faac9148f',
    '35fdbfb9-787f-400d-bd2f-4d9bb66800a5',
    'bd9d81ac-b210-4b0e-a021-2873979a32b2',
    '8b7137a7-8500-43eb-8262-0b84f8a94b4b',
]

# Track ALL writes and replacements for each target file
file_ops = {}  # filename -> [(conv_id, line_num, op_type, content_size, tool_name)]

for cid in CONVOS:
    tf = os.path.join(BRAIN, cid, '.system_generated', 'logs', 'transcript_full.jsonl')
    if not os.path.exists(tf):
        continue
    with open(tf, 'r', encoding='utf-8', errors='replace') as fh:
        for line_num, line in enumerate(fh, 1):
            try:
                obj = json.loads(line)
            except:
                continue
            tool_calls = obj.get('tool_calls', [])
            for tc in tool_calls:
                tool_name = tc.get('name', '')
                a = tc.get('args', tc.get('arguments', {}))
                if not a:
                    continue
                target = a.get('TargetFile', a.get('target_file', ''))
                if not target:
                    continue
                basename = os.path.basename(target)
                
                for tf_name in TARGET_FILES:
                    if basename == tf_name:
                        if tool_name == 'write_to_file':
                            code = a.get('CodeContent', a.get('code_content', ''))
                            if code:
                                if tf_name not in file_ops:
                                    file_ops[tf_name] = []
                                file_ops[tf_name].append((cid[:8], line_num, 'WRITE', len(code), tool_name))
                        elif 'replace' in tool_name:
                            if tf_name not in file_ops:
                                file_ops[tf_name] = []
                            file_ops[tf_name].append((cid[:8], line_num, 'EDIT', 0, tool_name))

print("=== FILE OPERATION LOG ===\n")
for fname, ops in sorted(file_ops.items()):
    print(f"\n{fname}:")
    for cid, ln, op, size, tool in ops:
        if op == 'WRITE':
            print(f"  [{cid}] line {ln}: {op} ({size} chars) via {tool}")
        else:
            print(f"  [{cid}] line {ln}: {op} via {tool}")

# Now find the LARGEST write_to_file for each target (likely the most complete version)
print("\n\n=== BEST RECOVERABLE VERSIONS ===\n")
for fname in TARGET_FILES:
    if fname in file_ops:
        writes = [(cid, ln, size) for cid, ln, op, size, tool in file_ops[fname] if op == 'WRITE']
        if writes:
            best = max(writes, key=lambda x: x[2])
            print(f"{fname}: BEST = conv {best[0]}, line {best[1]}, {best[2]} chars")
            edits = [(cid, ln) for cid, ln, op, size, tool in file_ops[fname] if op == 'EDIT']
            if edits:
                print(f"  + {len(edits)} subsequent edits (cannot fully reconstruct)")
        else:
            print(f"{fname}: Only edits found, no full write")
    else:
        print(f"{fname}: NOT FOUND in any transcript")
