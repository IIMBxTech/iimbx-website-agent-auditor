# Agent 19 · UX Optimizer
**Role:** Executor | **Layer:** 5 | **Input:** Agent 10 (layout), Agent 14 (wireframes)

---

## Purpose
Directly modify the HTML/CSS prototype to implement UX optimizations (tabbed interfaces, accordions, sticky CTAs, progressive disclosure) to reduce vertical bloat and improve conversion.

---

## 1. Implementation: Tabs (for Curriculum/Themes)

If a curriculum list is massive and causes endless scrolling, wrap it in a tabbed interface.

**1. Inject the HTML structure:**
```html
<div class="tabs-container" style="margin-top: 2rem;">
  <div class="tab-nav" style="display: flex; gap: 1rem; border-bottom: 2px solid var(--line); margin-bottom: 2rem; overflow-x: auto; scrollbar-width: none;">
    <!-- Add 'active' class to the first button -->
    <button class="tab-btn active" data-target="tab-1" style="background: none; border: none; padding: 1rem 0; font-family: 'Inter'; font-weight: 600; color: var(--char); cursor: pointer; border-bottom: 2px solid transparent; margin-bottom: -2px; white-space: nowrap;">Theme 1</button>
    <button class="tab-btn" data-target="tab-2" style="background: none; border: none; padding: 1rem 0; font-family: 'Inter'; font-weight: 600; color: var(--stone); cursor: pointer; border-bottom: 2px solid transparent; margin-bottom: -2px; white-space: nowrap;">Theme 2</button>
  </div>
  
  <div class="tab-content">
    <div id="tab-1" class="tab-panel" style="display: block;">
      <!-- Content for Theme 1 -->
    </div>
    <div id="tab-2" class="tab-panel" style="display: none;">
      <!-- Content for Theme 2 -->
    </div>
  </div>
</div>
```

**2. Inject the Vanilla JS (at the end of `<body>`):**
```html
<script>
  document.addEventListener('DOMContentLoaded', () => {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');
    
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Reset all
        tabBtns.forEach(b => {
          b.classList.remove('active');
          b.style.color = 'var(--stone)';
          b.style.borderBottomColor = 'transparent';
        });
        tabPanels.forEach(p => p.style.display = 'none');
        
        // Set active
        btn.classList.add('active');
        btn.style.color = 'var(--marigold)';
        btn.style.borderBottomColor = 'var(--marigold)';
        document.getElementById(btn.dataset.target).style.display = 'block';
      });
    });
    
    // Trigger first tab style
    const firstTab = document.querySelector('.tab-btn.active');
    if (firstTab) {
      firstTab.style.color = 'var(--marigold)';
      firstTab.style.borderBottomColor = 'var(--marigold)';
    }
  });
</script>
```

---

## 2. Implementation: Sticky CTA Bar

If a page has high scroll depth, a sticky CTA increases conversions.

**Inject this right after `<body>`:**
```html
<div class="sticky-cta-bar" style="position: fixed; bottom: 0; left: 0; width: 100%; background: var(--char); color: var(--paper); padding: 1rem; z-index: 999; box-shadow: 0 -4px 12px rgba(0,0,0,0.15); transform: translateY(100%); transition: transform 0.3s ease;">
  <div class="container" style="max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; gap: 1rem;">
    <div class="cta-info" style="display: none;">
      <!-- Shown on tablet+ only via CSS -->
      <h4 style="margin: 0; font-family: 'Source Serif 4';">Professional Certificate in Hospital Management</h4>
      <p style="margin: 0; font-family: 'IBM Plex Mono'; font-size: 0.875rem; color: var(--marigold);">Next batch: Oct 2026</p>
    </div>
    <div style="flex: 1; display: flex; justify-content: flex-end;">
      <a href="#apply" style="background: var(--marigold); color: var(--paper); padding: 0.75rem 2rem; text-decoration: none; font-family: 'Inter'; font-weight: 600; border-radius: 4px; display: inline-block; text-align: center; width: 100%; max-width: 250px;">Apply Now</a>
    </div>
  </div>
</div>
```

**Inject the JS to show it after scrolling past the hero:**
```html
<script>
  document.addEventListener('DOMContentLoaded', () => {
    const stickyBar = document.querySelector('.sticky-cta-bar');
    const ctaInfo = document.querySelector('.cta-info');
    
    window.addEventListener('scroll', () => {
      if (window.scrollY > 600) {
        stickyBar.style.transform = 'translateY(0)';
      } else {
        stickyBar.style.transform = 'translateY(100%)';
      }
    });
    
    // Simple responsive check for the text
    const handleResize = () => {
      if (window.innerWidth > 768) {
        ctaInfo.style.display = 'block';
      } else {
        ctaInfo.style.display = 'none';
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize(); // init
  });
</script>
```

---

## 3. Implementation: Progressive Disclosure (Show More)

If the faculty list has 12 members, hide everything after the 4th item.

1. Add `style="display: none;"` to items 5 onwards. Give them a class like `.hidden-faculty`.
2. Add a button below the grid: `<button id="show-more-faculty" class="btn-outline">Show all 12 faculty</button>`
3. Add JS to toggle `display: block` on `.hidden-faculty` when clicked.

---

## 4. Mobile Considerations
- Tabs must overflow horizontally on mobile (`overflow-x: auto; white-space: nowrap`), never wrap to multiple lines.
- Sticky CTAs must not exceed 60-70px height on mobile to prevent blocking screen real estate. Use full-width buttons on mobile.
