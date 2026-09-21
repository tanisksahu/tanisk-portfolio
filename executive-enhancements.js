(function() {
  var aboutHTML = "<section class=\"about-layered-section\" id=\"about\">\n  <div class=\"about-layered-container\">\n    <div class=\"about-layered-grid\">\n      <!-- Profile Card (Sleek Typographic Card - Photo-Free) -->\n      <div class=\"about-portrait-card\">\n        <div class=\"about-image-frame\" style=\"display:flex;align-items:center;justify-content:center;min-height:220px;background:radial-gradient(circle at 50% 50%, rgba(99,102,241,0.18) 0%, rgba(18,18,22,0.95) 100%);\">\n          <div class=\"about-gradient-badge\" style=\"position:static;transform:none;\">\n            <span class=\"badge-sparkle\">✦</span>\n            <span>Designing visual systems &amp; executive presentations</span>\n          </div>\n        </div>\n        \n        <div class=\"about-portrait-content\">\n          <div class=\"about-portrait-titles\">\n            <h2 class=\"about-name\">Tanisk Sahu</h2>\n            <p class=\"about-role\">Graphic &amp; Document Designer</p>\n          </div>\n          \n          <div class=\"about-metric-badges\">\n            <span class=\"metric-pill\">\n              <span class=\"metric-dot\"></span>\n              <strong>10+</strong> Projects Built\n            </span>\n            <span class=\"metric-pill\">\n              <span class=\"metric-dot\"></span>\n              <strong>Fast</strong> Turnaround\n            </span>\n            <span class=\"metric-pill\">\n              <span class=\"metric-dot\"></span>\n              <strong>Global</strong> Remote\n            </span>\n          </div>\n        </div>\n      </div>\n\n      <!-- Right Column: Bio & Interactive Feature Grid -->\n      <div class=\"about-content-card\">\n        <div class=\"about-bio-box\">\n          <span class=\"about-eyebrow\">About the Designer</span>\n          <p class=\"about-bio-lead\">\n            I transform complex data, presentation decks, and brand materials into clean, persuasive visual designs.\n          </p>\n          <p class=\"about-bio-secondary\">\n            Partnering with founders, organizations, and creative teams, I deliver clear visual materials that combine structured clarity with compelling storytelling.\n          </p>\n        </div>\n\n        <div class=\"about-chips-section\">\n          <span class=\"about-chips-heading\">Capabilities &amp; Methodology</span>\n          <div class=\"about-chips-grid\">\n            <!-- Chip 1: Core Focus -->\n            <div class=\"feature-chip feature-chip-focus\">\n              <div class=\"chip-icon-wrap\">🎯</div>\n              <div class=\"chip-content\">\n                <span class=\"chip-label\">Core Focus</span>\n                <p class=\"chip-desc\">Data-driven Decks, Reports, and Brand Storytelling</p>\n              </div>\n            </div>\n\n            <!-- Chip 2: Toolkit -->\n            <div class=\"feature-chip feature-chip-toolkit\">\n              <div class=\"chip-icon-wrap\">🛠️</div>\n              <div class=\"chip-content\">\n                <span class=\"chip-label\">Toolkit</span>\n                <p class=\"chip-desc\">Canva Pro · Figma · React · Document Design</p>\n              </div>\n            </div>\n\n            <!-- Chip 3: Approach -->\n            <div class=\"feature-chip feature-chip-approach\">\n              <div class=\"chip-icon-wrap\">⚡</div>\n              <div class=\"chip-content\">\n                <span class=\"chip-label\">Approach</span>\n                <p class=\"chip-desc\">Structured, clear layouts designed for real impact</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>";

  function applyExecutiveRefactoring() {
    // 1. Accessibility & Avatar
    var avatars = document.querySelectorAll('img[src*="T3UFO0ocLkATV6di50KXnRKPK4"], img[alt*="Mozdir"]');
    avatars.forEach(function(img) {
      img.setAttribute("alt", "Tanisk Sahu - Graphic & Document Designer");
    });

    // 2. Hero Headline & Subtitle (Prompt #1)
    var h1 = document.querySelector(".framer-15t37vz h1, h1.framer-text, .framer-1j7loxx h1");
    if (h1 && (h1.textContent.includes("Graphic") || h1.textContent.includes("-Graphic") || h1.innerHTML.includes("<br"))) {
      h1.innerHTML = "Tanisk Sahu";
      h1.style.marginBottom = "6px";
      h1.style.textAlign = "center";
      
      var parent = h1.parentElement;
      if (parent && !parent.querySelector(".hero-role-subtitle")) {
        var sub = document.createElement("p");
        sub.className = "hero-role-subtitle";
        sub.textContent = "Graphic & Document Designer";
        h1.insertAdjacentElement("afterend", sub);
      }
    }

    // 3. Hero Tagline
    var taglineBlock = document.querySelector(".framer-yclbi7 p");
    if (taglineBlock && !taglineBlock.textContent.includes("Transforming complex data")) {
      taglineBlock.textContent = "Transforming complex data, presentation decks, and brand narratives into clean, persuasive visual assets.";
    }

    // 4. Header elements visibility & un-hide name
    document.querySelectorAll('.framer-1a3jy5p, .framer-1d1r184, .framer-1d1r184 p, .framer-kaueld, .framer-v-1lv8og7 .framer-1a3jy5p, .framer-v-1lv8og7 .framer-1d1r184, .framer-v-1lv8og7 .framer-1d1r184 p, .framer-v-1lv8og7 .framer-1rmqkq8-container, .framer-v-1lv8og7 .framer-nwjd5, .framer-v-1lv8og7 .framer-1uqrkxv, .framer-v-1lv8og7 .framer-a5cnfa, .framer-v-1lv8og7 .framer-1djcy07, .framer-v-1lv8og7 .framer-tw9bvt').forEach(function(el) {
      el.style.setProperty('opacity', '1', 'important');
      el.style.setProperty('visibility', 'visible', 'important');
      el.style.setProperty('transform', 'none', 'important');
    });

    document.querySelectorAll('.framer-v-1lv8og7 .framer-kaueld, .framer-v-1lv8og7 .framer-1a3jy5p, .framer-v-1lv8og7 .framer-1d1r184').forEach(function(el) {
      el.style.setProperty('width', 'auto', 'important');
      el.style.setProperty('min-width', 'max-content', 'important');
      el.style.setProperty('flex', '0 0 auto', 'important');
      el.style.setProperty('opacity', '1', 'important');
      el.style.setProperty('visibility', 'visible', 'important');
      el.style.setProperty('display', 'inline-flex', 'important');
    });

    document.querySelectorAll('.framer-v-1lv8og7 .framer-1d1r184 p').forEach(function(el) {
      el.style.setProperty('display', 'inline-block', 'important');
      el.style.setProperty('opacity', '1', 'important');
      el.style.setProperty('visibility', 'visible', 'important');
      el.style.setProperty('color', '#121212', 'important');
      el.style.setProperty('font-size', '15px', 'important');
      el.style.setProperty('font-weight', '700', 'important');
      el.style.setProperty('white-space', 'nowrap', 'important');
    });

    // 5. Remove Mobile Footer Highlight/Blue Tap Glitch (Prompt #2)
    document.querySelectorAll('footer, footer *, nav, nav *, .framer-hd7hn4, .framer-3lrowh, .framer-KMgvH, [data-highlight="true"]').forEach(function(el) {
      el.style.setProperty('-webkit-tap-highlight-color', 'transparent', 'important');
      el.style.setProperty('tap-highlight-color', 'transparent', 'important');
      if (el.hasAttribute('tabindex') && el.tagName !== 'A' && el.tagName !== 'BUTTON') {
        el.removeAttribute('tabindex');
      }
      if (el.hasAttribute('data-highlight') && el.tagName !== 'A') {
        el.removeAttribute('data-highlight');
      }
    });

    // 6. Redesign About Section: Layered Card UI (Prompt #3)
    document.querySelectorAll('.framer-1kp3ivk, .framer-3xy145, .framer-lvsyod').forEach(function(el) {
      el.style.setProperty('display', 'none', 'important');
    });

    var isAboutPage = window.location.pathname.includes('/about') || document.querySelector('.framer-bi2bbh') || document.querySelector('.framer-11ybr73');
    if (isAboutPage) {
      var aboutContainer = document.querySelector('.framer-bi2bbh') || document.querySelector('.framer-xgmf58') || document.querySelector('.framer-11ybr73');
      if (aboutContainer && !aboutContainer.querySelector('.about-layered-section') && !aboutContainer.querySelector('.about-bento-grid')) {
        var oldBento = aboutContainer.querySelector('.about-bento-section, .about-modern-section');
        if (oldBento) oldBento.remove();
        
        var wrapper = document.createElement('div');
        wrapper.innerHTML = aboutHTML;
        aboutContainer.appendChild(wrapper.firstElementChild);
      }
    }

    var homeAbout = document.getElementById('about');
    if (homeAbout && !homeAbout.classList.contains('about-layered-section') && !homeAbout.querySelector('.about-bento-grid')) {
      // Retain modern photo-free About section
    }

    // 7. Card Titles & Category Attributes
    var cardMappings = [
      { href: "firjvu21bf5hzyk", title: "Brand Campaign & Ad Creatives", cat: "marketing" },
      { href: "6tu80vzaccr2vap", title: "Product Promotion & Social Suite", cat: "marketing" },
      { href: "kpqxa14tcb5fj3n", title: "Event & Workshop Visual Collateral", cat: "marketing" },
      { href: "bkyiaq769piu87v", cat: "reports" },
      { href: "xuwmld2uq96fzwu", cat: "editorial" },
      { href: "ozmdaru18fpooaa", cat: "editorial" },
      { href: "4kp1fxknty76u99", cat: "editorial" },
      { href: "pwbwtf0tsqt650j", cat: "decks" },
      { href: "9mtynmjhk6yqhf3", cat: "decks" },
      { href: "5cl3o0dc7moqa5k", cat: "decks" },
      { href: "4wpwigagrvqbmyf", cat: "reports" }
    ];

    cardMappings.forEach(function(item) {
      var card = document.querySelector('a[href*="' + item.href + '"]');
      if (card) {
        card.setAttribute("data-project-category", item.cat);
        if (item.title) {
          var h3 = card.querySelector("h3");
          if (h3 && h3.textContent !== item.title) {
            h3.textContent = item.title;
          }
        }
        var cover = card.querySelector('[data-framer-name="Canva Cover Placeholder"]');
        if (cover && !cover.querySelector(".canva-interactive-pill")) {
          var pill = document.createElement("div");
          pill.className = "canva-interactive-pill";
          pill.textContent = "View Interactive Canva Deck →";
          cover.appendChild(pill);
        }
      }
    });

    // 8. Purge Filter Toolbar from home/portfolio as requested by user
    document.querySelectorAll(".portfolio-filter-toolbar, .portfolio-category-pills-row").forEach(function(tb) {
      tb.remove();
    });
    // Ensure all project cards are visible
    document.querySelectorAll('[data-framer-name="Canva Project Card"]').forEach(function(c) {
      c.style.display = "";
      c.style.opacity = "1";
    });

    // 9. Executive Conversion CTA Section
    var footer = document.querySelector("footer.framer-Js1zl") || document.querySelector("footer");
    var existingCtas = document.querySelectorAll(".executive-cta-section");
    if (existingCtas.length > 1) {
      for (var i = 1; i < existingCtas.length; i++) {
        existingCtas[i].remove();
      }
    }
    if (footer && !document.querySelector(".executive-cta-section")) {
      var cta = document.createElement("section");
      cta.id = "contact";
      cta.className = "executive-cta-section";
      cta.innerHTML = `
        <div class="executive-cta-card">
          <div class="cta-eyebrow-badge">
            <span class="cta-pulse-dot"></span>
            <span>Available for Freelance &amp; Projects</span>
          </div>
          <h2 class="cta-compact-title">Got an idea or deck to build?</h2>
          <p class="cta-compact-subtext">Let's turn your raw data and ideas into high-impact visuals.</p>
          <div class="cta-actions-group">
            <a href="https://wa.me/919479955283" target="_blank" rel="noopener noreferrer" class="cta-btn-pill">
              Start a conversation &rarr;
            </a>
          </div>
        </div>
      `;
      footer.insertAdjacentElement("beforebegin", cta);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", applyExecutiveRefactoring);
  } else {
    applyExecutiveRefactoring();
  }
  window.addEventListener("load", applyExecutiveRefactoring);
  window.addEventListener("visibilitychange", applyExecutiveRefactoring);
  window.addEventListener("focus", applyExecutiveRefactoring);

  setTimeout(applyExecutiveRefactoring, 50);
  setTimeout(applyExecutiveRefactoring, 150);
  setTimeout(applyExecutiveRefactoring, 400);
  setTimeout(applyExecutiveRefactoring, 1000);
  setTimeout(applyExecutiveRefactoring, 2000);

  try {
    var observer = new MutationObserver(applyExecutiveRefactoring);
    var target = document.getElementById("main") || document.body;
    if (target) {
      observer.observe(target, { childList: true, subtree: true });
    }
  } catch(e) {}
})();
