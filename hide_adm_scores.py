import re

app_path = r'c:\Users\harsh\OneDrive\Desktop\Compare\dashboard\js\app.js'
with open(app_path, 'r', encoding='utf-8') as f:
    app_content = f.read()

old_card = """      card.innerHTML = `
        <div class="title">${prog.programmeName}</div>
        <div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 10px;">${prog.file}</div>
        <div>Brand: ${prog.scores.brand}% | Content: ${prog.scores.content}% | UX: ${prog.scores.ux}%</div>
        <div class="scores">
          <div class="score-bar"><div class="score-fill" style="width:${prog.scores.brand}%; background:var(--success)"></div></div>
          <div class="score-bar"><div class="score-fill" style="width:${prog.scores.content}%; background:var(--warning)"></div></div>
          <div class="score-bar"><div class="score-fill" style="width:${prog.scores.ux}%; background:var(--accent)"></div></div>
        </div>
      `;"""

new_card = """      card.innerHTML = `
        <div class="title">${prog.programmeName}</div>
        <div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 10px;">${prog.file}</div>
        ${prog.file === 'Not provided' ? '<div style="font-size: 0.9rem; font-style: italic; color: var(--text-muted);">No audit data (prototypes only)</div>' : `
        <div>Brand: ${prog.scores.brand}% | Content: ${prog.scores.content}% | UX: ${prog.scores.ux}%</div>
        <div class="scores">
          <div class="score-bar"><div class="score-fill" style="width:${prog.scores.brand}%; background:var(--success)"></div></div>
          <div class="score-bar"><div class="score-fill" style="width:${prog.scores.content}%; background:var(--warning)"></div></div>
          <div class="score-bar"><div class="score-fill" style="width:${prog.scores.ux}%; background:var(--accent)"></div></div>
        </div>
        `}
      `;"""

app_content = app_content.replace(old_card, new_card)

with open(app_path, 'w', encoding='utf-8') as f:
    f.write(app_content)
