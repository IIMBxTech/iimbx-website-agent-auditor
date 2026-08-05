import os

file_path = "variants/about_v2_uiux_promax.html"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Add CSS for new sections
css_to_add = """
    /* --- RESTORED SECTIONS CSS --- */
    .founder-section {
      padding: 80px 5%;
      background: #FFFFFF; /* Pro Max White Background */
      border-bottom: 1px solid var(--gray-border);
    }
    .founder-grid {
      display: grid;
      grid-template-columns: 300px 1fr;
      gap: 60px;
      max-width: 1200px;
      margin: 0 auto;
      align-items: start;
    }
    .founder-card {
      background: var(--white);
      border-left: 4px solid var(--logo-red);
      padding: 30px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.04);
      border-radius: 12px;
      position: sticky;
      top: 100px;
    }
    .founder-quote {
      font-size: 20px;
      color: var(--logo-red);
      font-weight: 700;
      margin: 15px 0;
      line-height: 1.4;
      font-family: 'Barlow', sans-serif;
    }
    .founder-body .sec-tag { margin-bottom: 15px; display: inline-block; }
    .founder-body p {
      font-size: 16px;
      line-height: 1.8;
      color: #4B5563;
      margin-bottom: 20px;
    }

    .vm-section {
      padding: 80px 5%;
      background: #FAFAFA;
      border-bottom: 1px solid var(--gray-border);
    }
    .vm-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 40px;
      max-width: 1100px;
      margin: 50px auto 0;
    }
    .vm-card {
      background: var(--white);
      padding: 50px;
      border-radius: 16px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.04);
      position: relative;
      overflow: hidden;
      border: 1px solid var(--gray-border);
      transition: transform 0.3s ease;
    }
    .vm-card:hover {
      transform: translateY(-5px);
    }
    .vm-card.vision { border-top: 4px solid var(--ink); }
    .vm-card.mission { border-top: 4px solid var(--logo-red); }
    .vm-icon { font-size: 40px; margin-bottom: 20px; }
    .vm-card h3 {
      font-size: 24px;
      font-weight: 800;
      color: var(--ink);
      margin-bottom: 16px;
      font-family: 'Barlow', sans-serif;
    }
    .vm-card p {
      font-size: 16px;
      color: #4B5563;
      line-height: 1.7;
    }

    .awards-section {
      padding: 80px 5%;
      background: #FFFFFF;
      text-align: center;
      border-top: 1px solid var(--gray-border);
    }
    .awards-grid {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 50px;
      margin-top: 50px;
    }
    .award-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
    }
    .award-img-wrap {
      width: 160px;
      height: 160px;
      border-radius: 50%;
      border: 2px solid #EAEAEA;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #FAFAFA;
      padding: 20px;
      transition: border-color 0.3s;
    }
    .award-img-wrap:hover {
      border-color: var(--brand-yellow);
    }
    .award-img-wrap img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    .award-label {
      font-size: 14px;
      font-weight: 700;
      color: var(--ink);
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    @media (max-width: 900px) {
      .founder-grid { grid-template-columns: 1fr; }
      .founder-card { position: relative; top: 0; }
      .vm-grid { grid-template-columns: 1fr; }
    }
"""

if "/* --- RESTORED SECTIONS CSS --- */" not in content:
    content = content.replace("</style>", css_to_add + "\n  </style>")

# Sections to inject
sections_html = """
  <!-- Founder's Message -->
  <section class="founder-section">
    <div class="founder-grid">
      <div class="founder-card">
        <div style="font-size: 32px; color: var(--brand-yellow);"><i class="fas fa-seedling"></i></div>
        <div class="founder-quote">"Our Commitment to Innovation and Excellence"</div>
        <h3 style="font-family: 'Barlow', sans-serif; font-weight:800; font-size:22px; color:var(--ink); margin-bottom: 5px;">Message from the Founder's Desk</h3>
        <p style="font-size:13px; font-weight:700; color:#888; text-transform:uppercase;">Krishitek Industries Pvt. Ltd.</p>
      </div>
      <div class="founder-body">
        <span class="sec-tag">WHO WE ARE</span>
        <h2 class="sec-h2" style="text-align:left; margin-bottom:20px;">A Manufacturer Driven by <span style="color:var(--logo-red);">Passion & Purpose</span></h2>
        <div style="width:50px; height:4px; background:var(--brand-yellow); border-radius:2px; margin-bottom:30px;"></div>
        <p>Krishitek Industries Pvt. Ltd. is a pioneering manufacturer of farm machinery and equipment that blends the art of agriculture with cutting-edge technology, thereby helping in sustainable farming. We're a company that's driven by a passion for innovation and a deep-rooted respect for the farming community. Our name, Krishitek, embodies our ethos of blending the best of agriculture and technology to empower farmers to achieve better yields, higher productivity, and economic stability.</p>
        <p>Since our inception in 2012, we have been at the forefront of the farm mechanisation revolution, introducing innovative products that address the needs of farmers. We manufacture all our products in India with a focus on quality, durability, and reliability, adhering to stringent quality standards.</p>
        <p>We don't just manufacture and sell; we offer a complete solution that includes strong after-sales support and technical training. When you choose Krishitek, you're not only getting the latest technology; you're getting a partner committed to your success.</p>
      </div>
    </div>
  </section>

  <!-- Vision & Mission -->
  <section class="vm-section">
    <div class="sec-header">
      <span class="sec-tag">OUR DIRECTION</span>
      <h2 class="sec-h2">Vision &amp; <span>Mission</span></h2>
    </div>
    <div class="vm-grid">
      <div class="vm-card vision">
        <div class="vm-icon">🎯</div>
        <h3>OUR VISION</h3>
        <p>To empower modern farmers with innovative, reliable, and sustainable agricultural solutions that enhance productivity and ease farming challenges.</p>
      </div>
      <div class="vm-card mission">
        <div class="vm-icon">🚀</div>
        <h3>OUR MISSION</h3>
        <p>Deliver advanced, user-friendly agricultural machinery tailored to diverse farming needs, backed by exceptional customer support and continuous innovation.</p>
      </div>
    </div>
  </section>
"""

awards_html = """
  <!-- Awards -->
  <section class="awards-section">
    <div class="sec-header">
      <span class="sec-tag">RECOGNITION</span>
      <h2 class="sec-h2">Our <span>Awards</span> &amp; Certifications</h2>
    </div>
    <div class="awards-grid">
      <div class="award-item">
        <div class="award-img-wrap">
          <img src="../assets/make_in_india.webp" alt="Make in India"/>
        </div>
        <div class="award-label">Make In India</div>
      </div>
      <div class="award-item">
        <div class="award-img-wrap">
          <img src="../assets/iso.webp" alt="ISO Certified"/>
        </div>
        <div class="award-label">ISO 9001:2015</div>
      </div>
      <div class="award-item">
        <div class="award-img-wrap">
          <img src="../assets/startup.webp" alt="Startup India"/>
        </div>
        <div class="award-label">Startup India</div>
      </div>
    </div>
  </section>
"""

if "<!-- Founder's Message -->" not in content:
    # Inject founder and VM before values
    content = content.replace("<!-- Values -->", sections_html + "\n  <!-- Values -->")

if "<!-- Awards -->" not in content:
    # Inject awards after timeline and before footer
    content = content.replace("<footer>", awards_html + "\n  <footer>")

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Restored content successfully!")
