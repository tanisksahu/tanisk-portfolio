(function() {
  function applyExecutiveRefactoring() {
    // 1. Accessibility & Avatar
    var avatars = document.querySelectorAll('img[src*="T3UFO0ocLkATV6di50KXnRKPK4"], img[alt*="Mozdir"]');
    avatars.forEach(function(img) {
      img.setAttribute("alt", "Tanisk Sahu - Graphic & Document Designer");
    });

    // 2. Hero Headline & Subtitle
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
      taglineBlock.textContent = "Transforming complex data, corporate decks, and brand narratives into clean, boardroom-ready visual assets.";
    }

    // 4. Sidebar Deliverables List
    var asideP = document.querySelector("aside .framer-1vb4gx7 p, aside p strong");
    if (asideP && asideP.textContent.includes("Presentation Decks")) {
      var asideContainer = asideP.closest(".framer-1vb4gx7") || asideP.parentElement;
      if (asideContainer && !asideContainer.querySelector(".sidebar-deliverables-pills-container")) {
        asideContainer.innerHTML = `
          <div class="sidebar-deliverables-pills-container">
            <div class="deliverable-category-block">
              <span class="deliverable-category-heading">Corporate &amp; Decks</span>
              <div class="pill-badge-flex">
                <span class="deliverable-pill">Presentation Decks</span>
                <span class="deliverable-pill">Business Proposals</span>
                <span class="deliverable-pill">Corporate Reports</span>
                <span class="deliverable-pill">Executive Resumes</span>
              </div>
            </div>
            <div class="deliverable-category-block">
              <span class="deliverable-category-heading">Editorial &amp; Print</span>
              <div class="pill-badge-flex">
                <span class="deliverable-pill">Brochures &amp; Trifolds</span>
                <span class="deliverable-pill">E-Magazines</span>
                <span class="deliverable-pill">Posters</span>
              </div>
            </div>
            <div class="deliverable-category-block">
              <span class="deliverable-category-heading">Brand &amp; Marketing</span>
              <div class="pill-badge-flex">
                <span class="deliverable-pill">Brand Kits</span>
                <span class="deliverable-pill">Visual Identity</span>
                <span class="deliverable-pill">Social Media Suites</span>
                <span class="deliverable-pill">Ad Campaigns</span>
              </div>
            </div>
          </div>
        `;
      }
    }

    // 5. Card Titles & Category Attributes
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
        // Affordance pill
        var cover = card.querySelector('[data-framer-name="Canva Cover Placeholder"]');
        if (cover && !cover.querySelector(".canva-interactive-pill")) {
          var pill = document.createElement("div");
          pill.className = "canva-interactive-pill";
          pill.textContent = "View Interactive Canva Deck →";
          cover.appendChild(pill);
        }
      }
    });

    // 6. Filter Toolbar
    var workSection = document.getElementById("work") || document.querySelector(".framer-1h3qlqe");
    if (workSection && !document.querySelector(".portfolio-filter-toolbar")) {
      var toolbar = document.createElement("div");
      toolbar.className = "portfolio-filter-toolbar";
      toolbar.innerHTML = `
        <button class="filter-tab-btn active" data-filter="all">All</button>
        <button class="filter-tab-btn" data-filter="decks">PPTs &amp; Decks</button>
        <button class="filter-tab-btn" data-filter="reports">Proposals &amp; Reports</button>
        <button class="filter-tab-btn" data-filter="editorial">Brochures &amp; Editorial</button>
        <button class="filter-tab-btn" data-filter="marketing">Posters &amp; Marketing</button>
      `;
      workSection.insertAdjacentElement("beforebegin", toolbar);

      // Attach filter events
      toolbar.querySelectorAll(".filter-tab-btn").forEach(function(btn) {
        btn.addEventListener("click", function() {
          toolbar.querySelectorAll(".filter-tab-btn").forEach(function(b) { b.classList.remove("active"); });
          this.classList.add("active");
          var filter = this.getAttribute("data-filter");

          document.querySelectorAll('[data-framer-name="Canva Project Card"]').forEach(function(c) {
            var cat = c.getAttribute("data-project-category") || "";
            if (filter === "all" || cat === filter) {
              c.style.display = "";
              c.style.opacity = "1";
            } else {
              c.style.display = "none";
              c.style.opacity = "0";
            }
          });
        });
      });
    }

    // 7. Executive Conversion CTA Section
    var footer = document.querySelector("footer.framer-Js1zl") || document.querySelector("footer");
    if (footer && !document.querySelector(".executive-cta-section")) {
      var cta = document.createElement("section");
      cta.id = "contact";
      cta.className = "executive-cta-section";
      cta.innerHTML = `
        <div class="executive-cta-card">
          <div class="cta-header-block">
            <span class="cta-status-pill">AVAILABLE FOR SELECT CLIENTS</span>
            <h2 class="cta-main-title">Have a project in mind?</h2>
            <p class="cta-description">Let's build clear, compelling presentations and documents for your business.</p>
          </div>
          <div class="cta-actions-group">
            <a href="https://wa.me/919479955283" target="_blank" rel="noopener noreferrer" class="cta-primary-btn cta-whatsapp">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.086.275.072.376-.043.101-.116.433-.506.549-.679.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.072.043.419-.101.824z"/></svg>
              WhatsApp Direct
            </a>
            <a href="https://www.linkedin.com/in/tanisksahu9479955" target="_blank" rel="noopener noreferrer" class="cta-secondary-btn cta-linkedin">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.65 1.65 0 1 0 0-3.3 1.66 1.66 0 0 0 0 3.3m1.39 9.74v-8.37H5.07v8.37h2.78z"/></svg>
              LinkedIn Direct
            </a>
            <a href="./contact" class="cta-tertiary-btn">
              Detailed Inquiry Form &rarr;
            </a>
          </div>
        </div>
      `;
      footer.insertAdjacentElement("beforebegin", cta);
    }

    // 8. Navigation Links & Target Self
    document.querySelectorAll("a").forEach(function(a) {
      var href = a.getAttribute("href");
      if (!href) return;
      if (href === "./" || href === ".") {
        a.setAttribute("href", "/");
        a.setAttribute("target", "_self");
      } else if (href === "./about" || href === "/about") {
        a.setAttribute("href", "#about");
        a.setAttribute("target", "_self");
      } else if (href === "./portfolio" || href === "/portfolio") {
        a.setAttribute("href", "#work");
        a.setAttribute("target", "_self");
      } else if (href === "./contact" && a.textContent.trim().toLowerCase() === "contact") {
        a.setAttribute("href", "#contact");
        a.setAttribute("target", "_self");
      } else if (href.startsWith("/") || href.startsWith("#") || href.startsWith("./")) {
        a.setAttribute("target", "_self");
      }
    });


    // Fix About and Skills heights and labels
    document.querySelectorAll(".framer-1dctc6x, .framer-1v2oj63").forEach(function(el) {
      el.style.height = "auto";
      el.style.minHeight = "auto";
    });
    document.querySelectorAll(".framer-1pspeot, .framer-4bcbge, .framer-1stkhgm").forEach(function(el) {
      el.style.height = "auto";
      el.style.minHeight = "auto";
    });
    document.querySelectorAll(".framer-nkq68n, .framer-1ug0hqj").forEach(function(el) {
      el.style.width = "fit-content";
      var p = el.querySelector("p");
      if (p) {
        p.style.width = "fit-content";
        p.style.display = "inline-flex";
      }
    });

    // Remove empty paragraphs
    document.querySelectorAll("p").forEach(function(p) {
      if (p.innerHTML.trim() === '<br class="framer-text trailing-break">' || p.innerHTML.trim() === '<br>') {
        p.remove();
      }
    });
  }

  // Run on initial ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", applyExecutiveRefactoring);
  } else {
    applyExecutiveRefactoring();
  }
  window.addEventListener("load", applyExecutiveRefactoring);

  // Re-run after React hydration completes (Framer hydration happens asynchronously)
  setTimeout(applyExecutiveRefactoring, 100);
  setTimeout(applyExecutiveRefactoring, 300);
  setTimeout(applyExecutiveRefactoring, 700);
  setTimeout(applyExecutiveRefactoring, 1500);

  // MutationObserver to enforce changes if React re-renders nodes
  try {
    var observer = new MutationObserver(function(mutations) {
      // Debounce or selectively run
      applyExecutiveRefactoring();
    });
    var target = document.getElementById("main") || document.body;
    if (target) {
      observer.observe(target, { childList: true, subtree: true });
    }
  } catch(e) {}
})();
