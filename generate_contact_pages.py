import os

base_dir = r"C:\Users\harsh\OneDrive\Desktop\Compare\prototypes"

content_data = {
    "email": "info@iimbx.iimb.ac.in",
    "phone": "+91 8105228066",
    "address": "IIMBx, Indian Institute of Management, Bannerghatta Main Rd, Bilekahalli, Bengaluru, Karnataka – 560076",
    "title": "Contact Us: Get in Touch Today"
}

# --- Shared Base Template ---
def get_base(head_styles, body_classes, content, v4_mode=False):
    banner_mark = "✨ Stitch MCP used to create this prototype ✨" if not v4_mode else "✨ Stitch MCP used to create this prototype (V4 Optimized) ✨"
    
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8"/>
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
    <title>{content_data['title']} | IIMBx</title>
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Inter:wght@400;500;600&family=Source+Serif+4:wght@400;500;600;700&display=swap" rel="stylesheet"/>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = {{
        darkMode: "class",
        theme: {{
          extend: {{
            "colors": {{
                "parchment": "#F4EFE3",
                "parchment-deep": "#E8E2D2",
                "charcoal": "#1A1B1E",
                "charcoal-muted": "#36383D",
                "marigold": "#C97138",
                "navy": "#0B1535",
                "navy-deep": "#070E22",
                "crimson": "#AE2C2A"
            }},
            "fontFamily": {{
                "serif": ["Source Serif 4", "serif"],
                "sans": ["Inter", "sans-serif"],
                "mono": ["IBM Plex Mono", "monospace"]
            }}
          }}
        }}
      }}
    </script>
    <style>
    body {{ font-family: 'Inter', sans-serif; background-color: #F4EFE3; color: #1A1B1E; }}
    h1, h2, h3, h4, h5, h6 {{ font-family: 'Source Serif 4', serif; }}
    .eyebrow {{ font-family: 'IBM Plex Mono', monospace; text-transform: uppercase; letter-spacing: 0.1em; font-size: 12px; font-weight: 600; }}
    {head_styles}
    </style>
</head>
<body class="antialiased overflow-x-hidden {body_classes}">
<div style="text-align:center; padding: 12px; font-weight:bold; color: #F4EFE3; background: #1A1B1E; border-bottom: 3px solid #C97138; font-size: 14px; position: sticky; top: 0; z-index: 9999; letter-spacing: 1px; text-transform: uppercase; font-family: Inter, sans-serif;">
    {banner_mark}
</div>

<!-- Nav -->
<nav class="w-full top-0 sticky z-40 bg-parchment/90 backdrop-blur-md border-b border-charcoal/10 shadow-sm">
    <div class="flex justify-between items-center max-w-7xl mx-auto px-6 md:px-8 h-20 w-full">
        <div class="text-xl font-bold tracking-tight text-charcoal flex flex-col md:flex-row md:items-baseline md:gap-2 font-serif">
            <span>IIMBx</span>
            <span class="hidden md:inline-block text-charcoal/30">|</span>
            <span class="text-base font-normal">Contact Us</span>
        </div>
        <div class="hidden md:flex gap-8 items-center">
            <a class="text-charcoal-muted text-sm hover:text-marigold transition-colors font-medium" href="#">Home</a>
            <a class="text-charcoal-muted text-sm hover:text-marigold transition-colors font-medium" href="#">Programmes</a>
            <a class="text-charcoal-muted text-sm hover:text-marigold transition-colors font-medium" href="#">About Us</a>
        </div>
    </div>
</nav>

{content}

<footer class="w-full bg-charcoal text-parchment py-10">
    <div class="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div class="text-xl font-bold font-serif text-parchment">IIMBx</div>
        <div class="text-sm text-parchment/60 font-mono tracking-widest uppercase text-[10px]">
            © 2026 · IIMBx Digital Learning Foundation
        </div>
    </div>
</footer>
</body>
</html>"""

# V1: Simple Left-Right split
v1_content = """
<header class="w-full bg-parchment py-20 relative">
    <div class="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
            <div class="eyebrow text-marigold mb-4">REACH OUT</div>
            <h1 class="text-5xl md:text-6xl font-bold mb-6 font-serif">Get in Touch Today</h1>
            <p class="text-lg text-charcoal-muted max-w-lg mb-8">Have questions or need support? We’re here to help with inquiries, services, or feedback.</p>
        </div>
        <div class="bg-white p-10 rounded-xl shadow-lg border border-charcoal/5 space-y-8">
            <div class="flex gap-4">
                <span class="material-symbols-outlined text-marigold text-3xl">mail</span>
                <div>
                    <h3 class="font-serif font-bold text-xl mb-1">Email</h3>
                    <a href="mailto:info@iimbx.iimb.ac.in" class="text-charcoal hover:text-marigold transition-colors">info@iimbx.iimb.ac.in</a>
                </div>
            </div>
            <div class="flex gap-4">
                <span class="material-symbols-outlined text-marigold text-3xl">call</span>
                <div>
                    <h3 class="font-serif font-bold text-xl mb-1">Call Us</h3>
                    <a href="tel:+918105228066" class="text-charcoal hover:text-marigold transition-colors">+91 8105228066</a>
                </div>
            </div>
            <div class="flex gap-4">
                <span class="material-symbols-outlined text-marigold text-3xl">location_on</span>
                <div>
                    <h3 class="font-serif font-bold text-xl mb-1">Visit Us</h3>
                    <p class="text-charcoal text-sm leading-relaxed">IIMBx, Indian Institute of Management,<br>Bannerghatta Main Rd, Bilekahalli,<br>Bengaluru, Karnataka – 560076</p>
                </div>
            </div>
        </div>
    </div>
</header>
"""

# V2: Centered Hero with Card Grid
v2_content = """
<header class="w-full bg-navy-deep text-white py-28 text-center border-b-[8px] border-marigold">
    <div class="max-w-3xl mx-auto px-6">
        <h1 class="text-5xl md:text-7xl font-bold mb-6 font-serif">Get in <span class="italic text-marigold">Touch</span></h1>
        <p class="text-lg text-white/70">Have questions or need support? We’re here to help with inquiries, services, or feedback.</p>
    </div>
</header>
<section class="py-24 bg-parchment">
    <div class="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-white p-10 rounded-lg text-center border border-charcoal/10 hover:shadow-xl transition-shadow group">
            <div class="w-16 h-16 rounded-full bg-marigold/10 text-marigold flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span class="material-symbols-outlined text-3xl">mail</span>
            </div>
            <h3 class="font-serif font-bold text-2xl mb-4">Email</h3>
            <a href="mailto:info@iimbx.iimb.ac.in" class="text-charcoal-muted font-medium hover:text-marigold">info@iimbx.iimb.ac.in</a>
        </div>
        <div class="bg-white p-10 rounded-lg text-center border border-charcoal/10 hover:shadow-xl transition-shadow group">
            <div class="w-16 h-16 rounded-full bg-marigold/10 text-marigold flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span class="material-symbols-outlined text-3xl">call</span>
            </div>
            <h3 class="font-serif font-bold text-2xl mb-4">Phone</h3>
            <a href="tel:+918105228066" class="text-charcoal-muted font-medium hover:text-marigold">+91 8105228066</a>
        </div>
        <div class="bg-white p-10 rounded-lg text-center border border-charcoal/10 hover:shadow-xl transition-shadow group">
            <div class="w-16 h-16 rounded-full bg-marigold/10 text-marigold flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span class="material-symbols-outlined text-3xl">location_on</span>
            </div>
            <h3 class="font-serif font-bold text-2xl mb-4">Address</h3>
            <p class="text-charcoal-muted text-sm leading-relaxed">IIMBx, Indian Institute of Management,<br>Bannerghatta Main Rd, Bilekahalli,<br>Bengaluru, Karnataka – 560076</p>
        </div>
    </div>
</section>
"""

# V3: Formal sidebar + form (dummy form visually)
v3_content = """
<header class="w-full bg-charcoal text-parchment py-16 border-b-4 border-marigold">
    <div class="max-w-7xl mx-auto px-6 md:px-8">
        <h1 class="text-5xl font-bold font-serif">Contact Us</h1>
    </div>
</header>
<section class="py-20 bg-parchment-deep">
    <div class="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div class="md:col-span-4 space-y-10">
            <div>
                <div class="eyebrow text-charcoal/50 mb-2">Email</div>
                <div class="font-serif font-bold text-2xl text-charcoal mb-1">info@iimbx.iimb.ac.in</div>
            </div>
            <div>
                <div class="eyebrow text-charcoal/50 mb-2">Phone</div>
                <div class="font-serif font-bold text-2xl text-charcoal mb-1">+91 8105228066</div>
            </div>
            <div>
                <div class="eyebrow text-charcoal/50 mb-2">Address</div>
                <p class="font-serif font-bold text-xl text-charcoal leading-relaxed">IIMBx, Indian Institute of Management,<br>Bannerghatta Main Rd,<br>Bilekahalli, Bengaluru,<br>Karnataka – 560076</p>
            </div>
        </div>
        <div class="md:col-span-8 bg-white p-10 rounded border border-charcoal/10">
            <h2 class="text-3xl font-serif font-bold mb-6 text-charcoal">Send a Message</h2>
            <form class="space-y-6">
                <div class="grid grid-cols-2 gap-6">
                    <div>
                        <label class="block text-sm font-medium text-charcoal mb-2">First Name</label>
                        <input type="text" class="w-full border border-charcoal/20 rounded p-3 bg-parchment/30 focus:outline-none focus:border-marigold" placeholder="Jane">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-charcoal mb-2">Last Name</label>
                        <input type="text" class="w-full border border-charcoal/20 rounded p-3 bg-parchment/30 focus:outline-none focus:border-marigold" placeholder="Doe">
                    </div>
                </div>
                <div>
                    <label class="block text-sm font-medium text-charcoal mb-2">Email Address</label>
                    <input type="email" class="w-full border border-charcoal/20 rounded p-3 bg-parchment/30 focus:outline-none focus:border-marigold" placeholder="jane@example.com">
                </div>
                <div>
                    <label class="block text-sm font-medium text-charcoal mb-2">Message</label>
                    <textarea class="w-full border border-charcoal/20 rounded p-3 bg-parchment/30 focus:outline-none focus:border-marigold h-32" placeholder="How can we help?"></textarea>
                </div>
                <button type="button" class="bg-charcoal text-white font-medium px-8 py-3 rounded hover:bg-marigold transition-colors">Submit Inquiry</button>
            </form>
        </div>
    </div>
</section>
"""

# V4: Stitch V4 (Optimized, Premium Shainesh G approved style, SVG graphics, 70/15/15 rules)
v4_content = """
<header class="w-full bg-parchment pt-20 pb-16 relative overflow-hidden">
    <!-- Abstract SVG Background Element -->
    <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-marigold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
    <div class="max-w-7xl mx-auto px-6 md:px-8 text-center relative z-10">
        <div class="eyebrow text-marigold mb-6 bg-marigold/10 inline-block px-4 py-2 rounded-full">Support & Inquiries</div>
        <h1 class="text-6xl md:text-8xl font-bold font-serif text-charcoal leading-none mb-6">
            Get in <span class="italic text-navy font-medium">Touch.</span>
        </h1>
        <p class="text-xl text-charcoal-muted max-w-2xl mx-auto font-sans leading-relaxed">
            Have questions or need support? We’re here to help with inquiries, services, or feedback. Connect with the IIMBx team today.
        </p>
    </div>
</header>

<section class="py-16 bg-parchment">
    <div class="max-w-7xl mx-auto px-6 md:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- Email -->
            <div class="bg-charcoal text-white p-10 flex flex-col justify-between min-h-[300px] rounded-xl relative overflow-hidden group">
                <div class="absolute inset-0 bg-marigold/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <div class="relative z-10">
                    <div class="font-mono text-[10px] uppercase tracking-widest text-marigold mb-2">01</div>
                    <h3 class="text-4xl font-serif font-bold mb-4">Email.</h3>
                    <p class="text-white/70 text-sm mb-8">For general inquiries, program details, and support.</p>
                </div>
                <div class="relative z-10 font-sans font-medium text-lg border-b border-white/20 pb-2 inline-block">
                    <a href="mailto:info@iimbx.iimb.ac.in" class="hover:text-marigold transition-colors">info@iimbx.iimb.ac.in</a>
                </div>
            </div>
            
            <!-- Phone -->
            <div class="bg-navy-deep text-white p-10 flex flex-col justify-between min-h-[300px] rounded-xl relative overflow-hidden group">
                <div class="absolute inset-0 bg-marigold/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <div class="relative z-10">
                    <div class="font-mono text-[10px] uppercase tracking-widest text-marigold mb-2">02</div>
                    <h3 class="text-4xl font-serif font-bold mb-4">Call.</h3>
                    <p class="text-white/70 text-sm mb-8">Speak directly with our admissions and support desk.</p>
                </div>
                <div class="relative z-10 font-sans font-medium text-lg border-b border-white/20 pb-2 inline-block">
                    <a href="tel:+918105228066" class="hover:text-marigold transition-colors">+91 8105228066</a>
                </div>
            </div>
            
            <!-- Address -->
            <div class="bg-parchment-deep border border-charcoal/10 text-charcoal p-10 flex flex-col justify-between min-h-[300px] rounded-xl relative overflow-hidden group">
                <div class="absolute inset-0 bg-marigold/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <div class="relative z-10">
                    <div class="font-mono text-[10px] uppercase tracking-widest text-marigold mb-2">03</div>
                    <h3 class="text-4xl font-serif font-bold mb-4">Visit.</h3>
                    <p class="text-charcoal-muted text-sm mb-8">IIM Bangalore Campus.</p>
                </div>
                <div class="relative z-10 font-sans font-medium text-sm leading-relaxed border-t border-charcoal/10 pt-4">
                    IIMBx, Indian Institute of Management,<br/>
                    Bannerghatta Main Rd, Bilekahalli,<br/>
                    Bengaluru, Karnataka – 560076
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Brand Footer Decor -->
<div class="w-full bg-charcoal border-b border-white/10 text-center py-12">
    <div class="font-serif text-2xl italic font-medium text-white/50">"The same faculty. Wherever you are."</div>
</div>
"""


with open(os.path.join(base_dir, "contact_v1.html"), "w", encoding="utf-8") as f:
    f.write(get_base("", "", v1_content))
    
with open(os.path.join(base_dir, "contact_v2.html"), "w", encoding="utf-8") as f:
    f.write(get_base("", "", v2_content))

with open(os.path.join(base_dir, "contact_v3.html"), "w", encoding="utf-8") as f:
    f.write(get_base("", "", v3_content))

with open(os.path.join(base_dir, "contact_stitch_v4.html"), "w", encoding="utf-8") as f:
    f.write(get_base("", "", v4_content, v4_mode=True))

print("Successfully generated all 4 contact prototypes.")
