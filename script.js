/**
 * Tanisk Sahu Portfolio — Interactive Logic & Animations (Tejx Style)
 */

document.addEventListener('DOMContentLoaded', () => {
  // Complete Project Database for Modal Previews (12 Selected Projects)
  const projectsData = {
    'studynex': {
      title: 'StudyNex — Academic Operating System',
      category: 'Web & UI Design',
      client: 'StudyNex EdTech',
      tools: ['React', 'UI/UX', 'Figma', 'Web Design'],
      img: 'https://framerusercontent.com/images/jtItG1XLjWOLw9b5qRfB2pBdBmY.png?width=1912&height=948',
      slides: [
        'https://framerusercontent.com/images/jtItG1XLjWOLw9b5qRfB2pBdBmY.png?width=1912&height=948'
      ],
      desc: 'StudyNex is an academic productivity and management operating system engineered to unify course schedule tracking, lecture notes, flashcards, and student performance metrics into one modern workspace with intuitive responsive UX.',
      actionText: 'Visit Live Web Application',
      link: 'https://studynex-app.web.app/'
    },
    'ecommerce-clothing': {
      title: 'Aether Archive — Luxury Streetwear E-Commerce',
      category: 'Web & UI Design',
      client: 'Aether Archive',
      tools: ['UI/UX', 'Product Design', 'Responsive Web'],
      img: 'assets/ecommerce_clothing.jpg',
      slides: [
        'assets/ecommerce_clothing.jpg'
      ],
      desc: 'High-end dark-mode luxury streetwear apparel store with intelligent size filtering, structured catalog layout, and editorial product visuals engineered for smooth navigation and high checkout conversion.',
      actionText: 'View Interactive Showcase',
      link: 'https://tanisk-design.vercel.app/'
    },
    'apple-vision': {
      title: 'Apple Vision Pro — Spatial Computing Keynote',
      category: 'Pitch Decks & Presentations',
      client: 'Spatial Computing Keynote',
      tools: ['Canva Pro', 'Presentation Architecture', 'Visual Design'],
      img: 'assets/slides/apple-vision_slide_1.png',
      slides: [
        'assets/slides/apple-vision_slide_1.png',
        'assets/slides/apple-vision_slide_2.png',
        'assets/slides/apple-vision_slide_3.png'
      ],
      desc: 'A futuristic dark-mode keynote deck breaking down Apple Vision Pro spatial computing paradigms, gesture mechanics, hardware ergonomics, and visionOS enterprise applications with clean cinematic layouts.',
      actionText: 'Open Interactive Canva Deck',
      link: 'https://canva.link/firjvu21bf5hzyk'
    },
    'product-pitch': {
      title: 'boAt Astra — AI Earbuds Product Launch Deck',
      category: 'Pitch Decks & Presentations',
      client: 'boAt Lifestyle / Astra AI',
      tools: ['Canva Pro', 'Pitch Deck Design', 'Data Visualization'],
      img: 'assets/slides/product-pitch_slide_1.png',
      slides: [
        'assets/slides/product-pitch_slide_1.png',
        'assets/slides/product-pitch_slide_2.png',
        'assets/slides/product-pitch_slide_3.png'
      ],
      desc: 'Investor-ready presentation slides developed for boAt Astra AI-powered premium earbuds. Features clear TAM/SAM breakdowns, unit economics charts, competitive differentiation matrix, and go-to-market milestones.',
      actionText: 'Open Interactive Canva Deck',
      link: 'https://canva.link/pwbwtf0tsqt650j'
    },
    'leadership-workshop': {
      title: 'Kadam SOS Foundation — Leadership Summit Deck',
      category: 'Pitch Decks & Presentations',
      client: 'Kadam SOS Foundation',
      tools: ['Canva Pro', 'Presentation Design', 'Typographic Hierarchy'],
      img: 'assets/slides/leadership-workshop_slide_1.png',
      slides: [
        'assets/slides/leadership-workshop_slide_1.png',
        'assets/slides/leadership-workshop_slide_2.png',
        'assets/slides/leadership-workshop_slide_3.png'
      ],
      desc: 'Executive leadership summit master slides created for Kadam SOS Foundation leadership workshops and quarterly alignment. Engineered with high-contrast typographic hierarchy and structured operational frameworks.',
      actionText: 'Open Interactive Canva Deck',
      link: 'https://canva.link/9mtynmjhk6yqhf3'
    },
    'csr-proposal': {
      title: 'Kadam Foundation — CSR Project Siksha Proposal',
      category: 'Reports, Proposals & Documents',
      client: 'Kadam Foundation',
      tools: ['Document Design', 'Editorial Hierarchy', 'Grant Proposal'],
      img: 'assets/slides/csr-proposal_slide_1.png',
      slides: [
        'assets/slides/csr-proposal_slide_1.png',
        'assets/slides/csr-proposal_slide_2.png',
        'assets/slides/csr-proposal_slide_3.png'
      ],
      desc: 'Comprehensive Corporate Social Responsibility (CSR) pitch document tailored for institutional grant committees and Kadam Foundation Project Siksha.',
      actionText: 'Open Interactive Canva Deck',
      link: 'https://canva.link/bkyiaq769piu87v'
    },
    'sajal-garg-report': {
      title: 'Report Preparation — Social Internship Report (Sajal Garg)',
      category: 'Reports, Proposals & Documents',
      client: 'Sajal Garg / Social Internship',
      tools: ['Document Layout', 'Fieldwork Analysis', 'SDG Framework', 'Data Reporting'],
      img: 'assets/slides/sajal-garg-report_slide_1.png',
      slides: [
        'assets/slides/sajal-garg-report_slide_1.png',
        'assets/slides/sajal-garg-report_slide_2.png',
        'assets/slides/sajal-garg-report_slide_3.png'
      ],
      desc: 'Comprehensive 60-hour social internship documentation report covering community outreach, data analysis, SDG alignment, and fieldwork execution.',
      actionText: 'View Report Document',
      link: 'https://docs.google.com/document/d/1ms5XiPvr-qHl8J7OYvPsTl4TgrThwk5R/edit?usp=sharing&ouid=109325373885900277014&rtpof=true&sd=true'
    },
    'e-magazine': {
      title: 'UrbanSetu Foundation — Editorial E-Magazine',
      category: 'Brochures & Editorial',
      client: 'UrbanSetu Foundation',
      tools: ['Editorial Layout', 'Grid Systems', 'Typography'],
      img: 'assets/slides/e-magazine_slide_1.png',
      slides: [
        'assets/slides/e-magazine_slide_1.png',
        'assets/slides/e-magazine_slide_2.png',
        'assets/slides/e-magazine_slide_3.png'
      ],
      desc: 'High-fashion editorial layout for UrbanSetu Foundation ("Reimagining Sustainable Urban Living in India") featuring modern column grids, elegant serif accents, and bespoke pull-quotes.',
      actionText: 'Open Interactive Canva Deck',
      link: 'https://canva.link/xuwmld2uq96fzwu'
    },
    'trifold-brochure': {
      title: 'UrbanSetu Foundation — Corporate Trifold Brochure',
      category: 'Brochures & Editorial',
      client: 'UrbanSetu Foundation',
      tools: ['Print Design', 'Bleed & Fold Geometry', 'Corporate Layout'],
      img: 'assets/slides/trifold-brochure_slide_1.png',
      slides: [
        'assets/slides/trifold-brochure_slide_1.png',
        'assets/slides/trifold-brochure_slide_2.png',
        'assets/slides/trifold-brochure_slide_3.png'
      ],
      desc: 'Geometric trifold brochure template for UrbanSetu Foundation built with strict print margins, bleed specifications, and balanced folding ergonomics.',
      actionText: 'Open Interactive Canva Deck',
      link: 'https://canva.link/4kp1fxknty76u99'
    },
    'brand-campaign': {
      title: 'Apex Institute — MBA Admission Campaign',
      category: 'Marketing & Social Media Creatives',
      client: 'Apex Institute of Management',
      tools: ['Ad Creatives', 'Social Media', 'Performance Marketing'],
      img: 'assets/slides/brand-campaign_slide_1.png',
      slides: [
        'assets/slides/brand-campaign_slide_1.png',
        'assets/slides/brand-campaign_slide_2.png',
        'assets/slides/brand-campaign_slide_3.png'
      ],
      desc: 'High-conversion performance ad creative suite developed for cross-platform marketing (Meta, LinkedIn, Google Display). Optimized for scroll-stopping visual hooks and immediate value proposition.',
      actionText: 'Open Interactive Canva Deck',
      link: 'https://canva.link/6tu80vzaccr2vap'
    }
  };

  // 1. Custom Cursor Tracker
  const cursorDot = document.getElementById('cursorDot');
  const cursorOutline = document.getElementById('cursorOutline');
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let outlineX = mouseX;
  let outlineY = mouseY;

  if (cursorDot && cursorOutline && window.matchMedia('(pointer: fine)').matches) {
    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    });

    const animateCursor = () => {
      outlineX += (mouseX - outlineX) * 0.18;
      outlineY += (mouseY - outlineY) * 0.18;
      cursorOutline.style.transform = `translate(${outlineX}px, ${outlineY}px) translate(-50%, -50%)`;
      requestAnimationFrame(animateCursor);
    };
    requestAnimationFrame(animateCursor);

    // Enlarge cursor on interactive targets
    const setupCursorTargets = () => {
      const interactives = document.querySelectorAll('a, button, .project-card, .filter-pill, .bento-card, .testimonial-card, .skill-pill, .archive-toggle-btn, .stack-brand-card, .matrix-card, .floating-review-card, .center-hover-pill, .card-arrow-circle-btn, .gallery-nav-btn, .modal-thumb-btn');
      interactives.forEach(el => {
        el.addEventListener('mouseenter', () => cursorOutline.classList.add('cursor-hover'));
        el.addEventListener('mouseleave', () => cursorOutline.classList.remove('cursor-hover'));
      });
    };
    setupCursorTargets();

    // Spotlight cursor tracking inside cards (Guarded for desktop fine-pointer to guarantee 60fps mobile scrolling)
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      const spotlightCards = document.querySelectorAll('.project-card, .bento-card, .stack-brand-card, .matrix-card, .kpi-bento-card, .floating-review-card');
      spotlightCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          card.style.setProperty('--mouse-x', `${x}px`);
          card.style.setProperty('--mouse-y', `${y}px`);
        });
      });
    }
  }

  // 2. Dual-Row Marquee Speed Up / Pause on Hover
  const marqueeRows = document.querySelectorAll('.marquee-row');
  marqueeRows.forEach(row => {
    const track = row.querySelector('.marquee-track');
    if (!track) return;

    row.addEventListener('mouseenter', () => {
      track.style.animationPlayState = 'paused';
    });

    row.addEventListener('mouseleave', () => {
      track.style.animationPlayState = 'running';
    });
  });

  // 3. Header Scroll Glassmorphism State & Sticky Stacking Physics
  const navbar = document.getElementById('navbar') || document.getElementById('mainNav');
  const scrollProgressBar = document.getElementById('scrollProgress');
  const stackBrandCards = document.querySelectorAll('.brands-stack-col .stack-brand-card');
  const matrixCards = document.querySelectorAll('.comparison-matrix-stack .matrix-card');

  let ticking = false;

  const updateStickyStacking = () => {
    [stackBrandCards, matrixCards].forEach(cards => {
      cards.forEach((card, idx) => {
        if (idx < cards.length - 1) {
          const nextCard = cards[idx + 1];
          const nextRect = nextCard.getBoundingClientRect();
          const curRect = card.getBoundingClientRect();
          // Trigger scale-down effect when the next sticky card approaches top threshold
          if (nextRect.top <= curRect.top + 75) {
            card.classList.add('is-stacked');
          } else {
            card.classList.remove('is-stacked');
          }
        }
      });
    });
  };

  const handleScroll = () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
    if (scrollProgressBar) {
      scrollProgressBar.style.width = `${progress}%`;
    }

    if (navbar) {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    updateStickyStacking();
    ticking = false;
  };

  // Tejx Designs Inertial Smooth Scrolling via Lenis
  let lenis = null;
  if (typeof Lenis !== 'undefined') {
    lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.05,
      touchMultiplier: 1.5,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.on('scroll', () => {
      handleScroll();
    });
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(handleScroll);
      ticking = true;
    }
  }, { passive: true });

  handleScroll();

  // Smooth Scroll Anchor Links with Header Offset
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#' && targetId.length > 1) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          if (lenis) {
            lenis.scrollTo(targetElement, { offset: -70 });
          } else {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    });
  });

  // 4. Portfolio Filter Architecture (Featured vs Full Archive)
  const filterPills = document.querySelectorAll('.filter-pill');
  const projectCards = document.querySelectorAll('.project-card');
  const archiveToggleContainer = document.getElementById('archiveToggleContainer');
  const archiveToggleBtn = document.getElementById('archiveToggleBtn');
  const archiveBtnText = document.getElementById('archiveBtnText');

  let activeCategory = 'all';
  let isArchiveExpanded = false;

  const renderProjects = () => {
    let visibleCount = 0;
    let totalMatchingCategory = 0;

    projectCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      const matchesCategory = (activeCategory === 'all' || cardCategory === activeCategory);

      if (matchesCategory) {
        totalMatchingCategory++;
        card.classList.remove('hidden');
        card.style.display = '';
        card.classList.add('is-revealed');
        visibleCount++;
      } else {
        card.classList.add('hidden');
        card.style.display = 'none';
      }
    });

    if (archiveToggleContainer) {
      archiveToggleContainer.style.display = 'none';
    }
  };

  renderProjects();

  filterPills.forEach(btn => {
    btn.addEventListener('click', () => {
      filterPills.forEach(p => {
        p.classList.remove('active');
        p.setAttribute('aria-selected', 'false');
      });

      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      activeCategory = btn.getAttribute('data-category');
      renderProjects();
    });
  });

  if (archiveToggleBtn) {
    archiveToggleBtn.addEventListener('click', () => {
      isArchiveExpanded = !isArchiveExpanded;
      renderProjects();
    });
  }

  // 5. Interactive Project Modal Lightbox with Multi-Slide Carousel & Click Separation
  const modal = document.getElementById('projectModal');
  const modalImg = document.getElementById('modalImg');
  const modalTitle = document.getElementById('modalTitle');
  const modalCategory = document.getElementById('modalCategory');
  const modalDesc = document.getElementById('modalDesc');
  const modalActionBtn = document.getElementById('modalActionBtn');
  const modalTopActionBtn = document.getElementById('modalTopActionBtn');
  const modalClose = document.getElementById('modalClose');
  const modalDismissBtn = document.getElementById('modalDismissBtn');
  const modalPrevSlide = document.getElementById('modalPrevSlide');
  const modalNextSlide = document.getElementById('modalNextSlide');
  const modalSlideCounter = document.getElementById('modalSlideCounter');
  const modalThumbnails = document.getElementById('modalThumbnails');
  const modalMetaRow = document.getElementById('modalMetaRow');

  let currentProjectSlides = [];
  let currentSlideIdx = 0;

  const setModalSlide = (idx) => {
    if (!currentProjectSlides.length) return;
    currentSlideIdx = (idx + currentProjectSlides.length) % currentProjectSlides.length;

    modalImg.style.opacity = '0.35';
    setTimeout(() => {
      modalImg.src = currentProjectSlides[currentSlideIdx];
      modalImg.style.opacity = '1';
    }, 120);

    if (modalSlideCounter) {
      modalSlideCounter.textContent = `${currentSlideIdx + 1} / ${currentProjectSlides.length}`;
    }

    // Highlight active thumbnail
    if (modalThumbnails) {
      const thumbBtns = modalThumbnails.querySelectorAll('.modal-thumb-btn');
      thumbBtns.forEach((btn, i) => {
        if (i === currentSlideIdx) {
          btn.classList.add('active');
          btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        } else {
          btn.classList.remove('active');
        }
      });
    }
  };

  const openModal = (projectId) => {
    const data = projectsData[projectId];
    if (!data) return;

    if (modalTitle) modalTitle.textContent = data.title || 'Selected Design Project';
    if (modalCategory) modalCategory.textContent = data.category || 'Portfolio Work';
    if (modalDesc) modalDesc.textContent = data.desc || 'Comprehensive visual design and layout system crafted with clean hierarchy and typography.';

    // Dynamic metadata row (Client/Context & Tools)
    if (modalMetaRow) {
      modalMetaRow.innerHTML = '';
      if (data.client) {
        const clientBadge = document.createElement('span');
        clientBadge.className = 'modal-meta-chip client-chip';
        clientBadge.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> <span>${data.client}</span>`;
        modalMetaRow.appendChild(clientBadge);
      }
      if (data.tools && Array.isArray(data.tools)) {
        data.tools.forEach(tool => {
          const toolBadge = document.createElement('span');
          toolBadge.className = 'modal-meta-chip tool-chip';
          toolBadge.textContent = tool;
          modalMetaRow.appendChild(toolBadge);
        });
      }
    }

    // Action links
    if (modalActionBtn) {
      modalActionBtn.href = data.link;
      const span = modalActionBtn.querySelector('span');
      if (span) span.textContent = data.actionText;
    }

    if (modalTopActionBtn) {
      modalTopActionBtn.href = data.link;
      const span = modalTopActionBtn.querySelector('span');
      if (span) {
        span.textContent = data.actionText.includes('Canva') ? 'View Interactive Canva Deck ↗' : 'Visit Live Project ↗';
      }
    }

    // Slides & Thumbnails
    currentProjectSlides = (data.slides && data.slides.length > 0) ? data.slides : [data.img];
    currentSlideIdx = 0;

    const hasMultipleSlides = currentProjectSlides.length > 1;
    if (modalPrevSlide) modalPrevSlide.style.display = hasMultipleSlides ? 'flex' : 'none';
    if (modalNextSlide) modalNextSlide.style.display = hasMultipleSlides ? 'flex' : 'none';
    if (modalSlideCounter) modalSlideCounter.style.display = hasMultipleSlides ? 'block' : 'none';

    // Render thumbnail strip
    if (modalThumbnails) {
      modalThumbnails.innerHTML = '';
      if (hasMultipleSlides) {
        modalThumbnails.style.display = 'flex';
        currentProjectSlides.forEach((slideSrc, i) => {
          const thumbBtn = document.createElement('button');
          thumbBtn.type = 'button';
          thumbBtn.className = `modal-thumb-btn ${i === 0 ? 'active' : ''}`;
          thumbBtn.setAttribute('aria-label', `View slide ${i + 1}`);
          thumbBtn.innerHTML = `<img src="${slideSrc}" alt="Thumbnail ${i + 1}" loading="lazy" />`;
          thumbBtn.addEventListener('click', () => setModalSlide(i));
          modalThumbnails.appendChild(thumbBtn);
        });
      } else {
        modalThumbnails.style.display = 'none';
      }
    }

    // Set initial slide
    modalImg.src = currentProjectSlides[0];
    modalImg.alt = data.title;
    modalImg.style.opacity = '1';
    if (modalSlideCounter) {
      modalSlideCounter.textContent = `1 / ${currentProjectSlides.length}`;
    }

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  if (modalPrevSlide) {
    modalPrevSlide.addEventListener('click', (e) => {
      e.stopPropagation();
      setModalSlide(currentSlideIdx - 1);
    });
  }

  if (modalNextSlide) {
    modalNextSlide.addEventListener('click', (e) => {
      e.stopPropagation();
      setModalSlide(currentSlideIdx + 1);
    });
  }

  // Expose openModal to window for programmatic calls
  window.openModal = openModal;
  window.setModalSlide = setModalSlide;
  window.closeModal = closeModal;

  // Project Card Click Separation:
  // Direct clicks on .center-hover-pill or .view-project-pill open the Canva/Live URL directly in a new tab without opening the modal.
  // Clicking anywhere else on the card (or the arrow button) opens the multi-slide lightbox preview.
  projectCards.forEach(card => {
    card.addEventListener('click', (e) => {
      const directAction = e.target.closest('.center-hover-pill, .view-project-pill');
      if (directAction) {
        e.stopPropagation();
        return;
      }

      const pId = card.getAttribute('data-project-id');
      if (pId) {
        openModal(pId);
      }
    });

    const arrowBtn = card.querySelector('.card-arrow-circle-btn');
    if (arrowBtn) {
      arrowBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const pId = card.getAttribute('data-project-id');
        if (pId) {
          openModal(pId);
        }
      });
      arrowBtn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          e.stopPropagation();
          const pId = card.getAttribute('data-project-id');
          if (pId) {
            openModal(pId);
          }
        }
      });
    }
  });

  const directLinks = document.querySelectorAll('.center-hover-pill, .view-project-pill');
  directLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  });

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalDismissBtn) modalDismissBtn.addEventListener('click', closeModal);

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  window.addEventListener('keydown', (e) => {
    if (!modal || !modal.classList.contains('active')) return;
    if (e.key === 'Escape') {
      closeModal();
    } else if (e.key === 'ArrowLeft') {
      setModalSlide(currentSlideIdx - 1);
    } else if (e.key === 'ArrowRight') {
      setModalSlide(currentSlideIdx + 1);
    }
  });

  // 6. Mobile Nav Drawer Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.toggle('open');
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
      });
    });
  }

  // 7. Back to Top Button
  const backToTopBtn = document.getElementById('backToTop');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      if (lenis) {
        lenis.scrollTo(0);
      } else {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    });
  }

  // 8. Reveal Elements on Scroll
  const revealElements = document.querySelectorAll('.project-card, .bento-card, .testimonial-card, .about-portrait-card, .about-narrative-bento, .skills-marquee-section');
  
  revealElements.forEach(el => el.classList.add('reveal-on-scroll'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
});
