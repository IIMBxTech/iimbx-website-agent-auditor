import sys

filepath = r'c:\Users\harsh\OneDrive\Desktop\Compare\prototypes\elp_v2.html'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update CSS to include new classes
new_css = """
  /* V2 Sections CSS */
  .anchor-card { display: flex; background: var(--navy-deep); border-radius: 8px; overflow: hidden; margin-bottom: 48px; }
  .anchor-card__img { width: 35%; flex-shrink: 0; }
  .anchor-card__img img { width: 100%; height: 100%; object-fit: cover; }
  .anchor-card__content { padding: 48px; color: white; display: flex; flex-direction: column; justify-content: center; position: relative; overflow: hidden; }
  .anchor-card__bgtext { position: absolute; top: -10px; right: 20px; font-size: 140px; font-family: 'Source Serif 4', serif; font-style: italic; color: rgba(255,255,255,0.03); line-height: 1; user-select: none; z-index: 1; }
  .anchor-card__content > * { position: relative; z-index: 2; }
  .anchor-card__kicker { font-family: 'IBM Plex Mono', monospace; font-size: 10px; letter-spacing: 0.15em; color: rgba(255,255,255,0.6); text-transform: uppercase; margin-bottom: 24px; font-weight: 600; }
  .anchor-card__quote { font-family: 'Source Serif 4', serif; font-style: italic; font-weight: 600; font-size: 20px; line-height: 1.45; margin-bottom: 32px; max-width: 90%; }
  .anchor-card__name { font-family: 'Inter', sans-serif; font-weight: 700; font-size: 16px; margin-bottom: 6px; }
  .anchor-card__role { font-family: 'IBM Plex Mono', monospace; font-size: 9px; letter-spacing: 0.15em; color: rgba(255,255,255,0.5); text-transform: uppercase; }

  .fac-grid-v2 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px 20px; }
  .fac-v2 { display: flex; flex-direction: column; }
  .fac-v2__img { width: 100%; aspect-ratio: 1/1; border-radius: 8px; margin-bottom: 12px; overflow: hidden; background: #EAE5D9; }
  .fac-v2__img img { width: 100%; height: 100%; object-fit: cover; }
  .fac-v2__name { font-family: 'Source Serif 4', serif; font-weight: 600; font-size: 15px; color: var(--char); margin-bottom: 4px; }
  .fac-v2__role { font-family: 'IBM Plex Mono', monospace; font-size: 8px; letter-spacing: 0.15em; color: var(--stone); text-transform: uppercase; }

  .who-split { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; margin-top: 40px; }
  .who-card-dark { background: var(--navy-deep); color: white; padding: 48px 40px; border-radius: 8px; }
  .who-card-light { background: var(--paper-2); border: 1px solid var(--line); padding: 48px 40px; border-radius: 8px; }
  .who-title { font-family: 'Source Serif 4', serif; font-size: 26px; font-weight: 500; margin-bottom: 32px; color: inherit; }
  .who-list { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 20px; }
  .who-list li { position: relative; padding-left: 20px; font-size: 14px; line-height: 1.6; }
  .who-list li::before { content: "—"; position: absolute; left: 0; color: var(--crimson); font-weight: bold; }

  .fees-split { display: grid; grid-template-columns: 1fr 1.5fr; gap: 40px; align-items: center; padding-top: 40px; padding-bottom: 60px; }
  .fees-title { font-family: 'Source Serif 4', serif; font-size: 36px; font-weight: 500; color: var(--char); }
  .fees-table { border: 1px solid var(--line); border-radius: 6px; overflow: hidden; background: var(--paper-2); }
  .fees-row { display: flex; justify-content: space-between; padding: 20px 24px; border-bottom: 1px solid var(--line); font-size: 13px; }
  .fees-row.total { background: var(--navy-deep); color: white; border-bottom: none; font-weight: 600; text-transform: uppercase; font-family: 'IBM Plex Mono', monospace; letter-spacing: 0.05em; font-size: 12px; }
  .fees-row.total .fees-val { font-family: 'Inter', sans-serif; font-size: 18px; letter-spacing: 0; }
  .fees-label { font-weight: 500; color: inherit; }
  .fees-val { font-family: 'Inter', sans-serif; font-weight: 600; color: inherit; font-size: 15px; }

  .final-v2 { background: var(--navy-deep); color: white; padding: 100px 0; text-align: center; margin-top: 60px; }
  .final-v2 h2 { font-family: 'Source Serif 4', serif; font-size: 42px; font-weight: 500; margin-bottom: 40px; line-height: 1.25; }
  .final-v2 .btn-row { display: flex; justify-content: center; gap: 16px; margin-bottom: 60px; }
  .final-v2 .btn { font-size: 14px; padding: 0 24px; height: 48px; }
  .foot-contact-row { display: flex; justify-content: space-between; max-width: 800px; margin: 0 auto; text-align: left; padding-top: 40px; border-top: 1px solid rgba(255,255,255,0.1); }
  .foot-contact-item { display: flex; flex-direction: column; gap: 6px; }
  .foot-contact-item .label { font-family: 'IBM Plex Mono', monospace; font-size: 9px; letter-spacing: 0.15em; color: rgba(255,255,255,0.5); text-transform: uppercase; }
  .foot-contact-item .val { font-family: 'Inter', sans-serif; font-weight: 600; font-size: 13px; color: white; }
</style>
"""

content = content.replace('</style>', new_css)

# 2. Extract sections from <section class="wrap" id="faculty"> downwards
start_idx = content.find('<section class="wrap" id="faculty">')
if start_idx == -1:
    print('Could not find start index')
    sys.exit(1)

# we will just replace the rest of the file up to the footer
end_idx = content.find('<footer class="foot">')
if end_idx == -1:
    print('Could not find end index')
    sys.exit(1)

new_html = """
<section class="wrap" id="faculty" style="padding-bottom: 40px;">
  <div class="sec-head" style="margin-bottom: 40px;">
    <h2 style="font-size: 36px; font-weight: 500;">Faculty. <em style="color: var(--crimson);">IIM Bangalore.</em></h2>
  </div>

  <div class="anchor-card">
    <div class="anchor-card__img">
      <img src="./images/faculty/shainesh.jpg" alt="Prof. Shainesh G" onerror="this.src='https://iimbx.iimb.ac.in/wp-content/uploads/2023/06/prof-4.jpg'" />
    </div>
    <div class="anchor-card__content">
      <div class="anchor-card__bgtext">ELP</div>
      <div class="anchor-card__kicker">PROGRAMME AND CAPSTONE ANCHOR</div>
      <p class="anchor-card__quote">"Emerging leaders don't need more theory. They need permission to apply what they already half-know, under faculty mentorship, with peers who'll tell them the truth, on a problem that actually matters to their organisation. That's what ELP is engineered to do."</p>
      <div class="anchor-card__name">Prof. Shainesh G</div>
      <div class="anchor-card__role">MARKETING - CAPSTONE ORIENTATION - IIM BANGALORE</div>
    </div>
  </div>

  <div class="fac-grid-v2">
    <div class="fac-v2"><div class="fac-v2__img"><img src="./images/faculty/vasanthi.jpg" onerror="this.src='https://iimbx.iimb.ac.in/wp-content/uploads/2023/06/prof.jpg'"/></div><div class="fac-v2__name">Vasanthi Srinivasan</div><div class="fac-v2__role">ORGANIZATIONAL BEHAVIOR & HR</div></div>
    <div class="fac-v2"><div class="fac-v2__img"><img src="./images/faculty/malavika.jpg" onerror="this.src='https://iimbx.iimb.ac.in/wp-content/uploads/2023/06/prof-1.jpg'"/></div><div class="fac-v2__name">Malavika R Haritha</div><div class="fac-v2__role">MANAGEMENT COMMUNICATION</div></div>
    <div class="fac-v2"><div class="fac-v2__img"><img src="./images/faculty/padmini.jpg" onerror="this.src='https://iimbx.iimb.ac.in/wp-content/uploads/2023/06/prof-2.jpg'"/></div><div class="fac-v2__name">Padmini Srinivasan</div><div class="fac-v2__role">FINANCE & ACCOUNTING</div></div>
    <div class="fac-v2"><div class="fac-v2__img"><img src="./images/faculty/thampy.jpg" onerror="this.src='https://iimbx.iimb.ac.in/wp-content/uploads/2023/06/prof-3.jpg'"/></div><div class="fac-v2__name">Ashok Thampy</div><div class="fac-v2__role">FINANCE & ACCOUNTING</div></div>
    
    <div class="fac-v2"><div class="fac-v2__img"><img src="./images/faculty/pavan.jpg" onerror="this.src='https://iimbx.iimb.ac.in/wp-content/uploads/2023/06/prof-4.jpg'"/></div><div class="fac-v2__name">Pavan Soni</div><div class="fac-v2__role">INNOVATION & DESIGN THINKING</div></div>
    <div class="fac-v2"><div class="fac-v2__img"><img src="./images/faculty/rsrinivasan.jpg" onerror="this.src='https://iimbx.iimb.ac.in/wp-content/uploads/2023/06/prof.jpg'"/></div><div class=\"fac-v2__name\">R Srinivasan</div><div class="fac-v2__role">STRATEGY</div></div>
    <div class="fac-v2"><div class="fac-v2__img"><img src="./images/faculty/soudeep.jpg" onerror="this.src='https://iimbx.iimb.ac.in/wp-content/uploads/2023/06/prof-1.jpg'"/></div><div class="fac-v2__name">Soudeep Deb</div><div class="fac-v2__role">DECISION SCIENCES</div></div>
    <div class="fac-v2"><div class="fac-v2__img"><img src="./images/faculty/naveen.webp" onerror="this.src='https://iimbx.iimb.ac.in/wp-content/uploads/2023/06/prof-2.jpg'"/></div><div class="fac-v2__name">Naveen Bhansali</div><div class="fac-v2__role">AI & DIGITAL STRATEGY</div></div>
  </div>
</section>

<section class="wrap" style="padding-top:0; padding-bottom: 40px;">
  <div class="sec-head">
    <h2 style="font-size: 32px; font-weight: 500;">Built for managers <em style="color: var(--crimson);">about to step up.</em></h2>
    <p style="font-size: 14px; max-width: 500px; margin-top: 12px; color: var(--stone);">If you were promoted in the last two years, or are about to be, ELP closes the gap between the work that got you here and the leadership the next chair demands.</p>
  </div>

  <div class="who-split">
    <div class="who-card-dark">
      <h3 class="who-title">Ideal <em style="color: rgba(255,255,255,0.7);">for:</em></h3>
      <ul class="who-list">
        <li><strong>First-time managers</strong> who've inherited a team and are learning leadership on the job, often without scaffolding.</li>
        <li><strong>Emerging leaders (3 to 8 yrs)</strong> in product, operations, technology, marketing or finance being groomed for cross-functional ownership.</li>
        <li><strong>Founders and senior ICs</strong> moving into general-management roles who need rigorous breadth across leadership, finance, customers, strategy and AI.</li>
      </ul>
    </div>
    <div class="who-card-light">
      <h3 class="who-title">You should apply <em style="color: var(--crimson);">if</em> you have:</h3>
      <ul class="who-list">
        <li>3 to 8 years of professional experience, with at least one year managing people or owning a cross-functional outcome.</li>
        <li>A graduate degree in any discipline, including engineering, management, science, design, or relevant fields.</li>
        <li>A real problem at your current organisation that you'd like to make the focus of your Action Learning Project.</li>
      </ul>
    </div>
  </div>
</section>

<section class="wrap" style="padding-top: 0; padding-bottom: 0;">
  <div class="fees-split">
    <h2 class="fees-title">Programme <em style="color: var(--crimson);">Fees</em></h2>
    <div class="fees-table">
      <div class="fees-row">
        <div class="fees-label">Programme fee</div>
        <div class="fees-val">₹ 2,45,000</div>
      </div>
      <div class="fees-row">
        <div class="fees-label">GST (18%)</div>
        <div class="fees-val">As applicable</div>
      </div>
      <div class="fees-row total">
        <div class="fees-label">TOTAL (INCL. GST)</div>
        <div class="fees-val">₹ 2,80,000+</div>
      </div>
    </div>
  </div>
</section>

<section class="final-v2">
  <div class="wrap">
    <h2>Eight months between the manager you are <em style="color: var(--crimson);">and<br/>the leader you'll be.</em></h2>
    
    <div class="btn-row">
      <a href="#" class="btn btn-primary" style="background: var(--crimson); border-color: var(--crimson);">Apply now</a>
      <a href="#" class="btn btn-outline" style="border-color: rgba(255,255,255,0.2); color: white;">Download brochure</a>
      <a href="#" class="btn btn-outline" style="border-color: rgba(255,255,255,0.2); color: white;">FAQs</a>
    </div>

    <div class="foot-contact-row">
      <div class="foot-contact-item">
        <div class="label">CONTACT US</div>
        <div class="val">ELP Admissions Desk</div>
      </div>
      <div class="foot-contact-item">
        <div class="label">EMAIL</div>
        <div class="val">elpadmissions@iimb.ac.in</div>
      </div>
      <div class="foot-contact-item">
        <div class="label">WORKING HOURS</div>
        <div class="val">Mon - Fri, 9 am - 6 pm IST</div>
      </div>
      <div class="foot-contact-item">
        <div class="label">PHONE</div>
        <div class="val">+91 80 2699 3017</div>
      </div>
    </div>
  </div>
</section>

"""

new_content = content[:start_idx] + new_html + content[end_idx:]

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("SUCCESS")
