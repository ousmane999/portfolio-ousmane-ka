/* ═══════════════════════════════════════════════════════
   main.js — Portfolio Ousmane Ka
   Handles: theme toggle, nav scroll state, mobile menu,
            scroll reveal animations, active nav links,
            skill bar animations, contact form.
   ═══════════════════════════════════════════════════ */

'use strict';

/* ── 1. THEME TOGGLE ────────────────────────────────── */
const html = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');

/** Persist theme across sessions */
function applyTheme(theme) {
  html.setAttribute('data-theme', theme);
  localStorage.setItem('portfolio-theme', theme);
}

// Initialize from localStorage or system preference
const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme) {
  applyTheme(savedTheme);
} else {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(prefersDark ? 'dark' : 'light');
}

themeToggle?.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  applyTheme(current === 'dark' ? 'light' : 'dark');
});


/* ── 2. NAVIGATION — scroll state & active link ─────── */
const navHeader = document.getElementById('nav-header');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

function onScroll() {
  // Scrolled class for nav shadow
  if (window.scrollY > 20) {
    navHeader?.classList.add('scrolled');
  } else {
    navHeader?.classList.remove('scrolled');
  }

  // Active nav link based on scroll position
  let currentSection = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', onScroll, { passive: true });
onScroll(); // Initial call


/* ── 3. MOBILE MENU ─────────────────────────────────── */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

function openMobileMenu() {
  hamburger?.classList.add('active');
  mobileMenu?.classList.add('open');
  mobileMenu?.setAttribute('aria-hidden', 'false');
  hamburger?.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
  hamburger?.classList.remove('active');
  mobileMenu?.classList.remove('open');
  mobileMenu?.setAttribute('aria-hidden', 'true');
  hamburger?.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

hamburger?.addEventListener('click', () => {
  const isOpen = mobileMenu?.classList.contains('open');
  isOpen ? closeMobileMenu() : openMobileMenu();
});

mobileLinks.forEach(link => {
  link.addEventListener('click', closeMobileMenu);
});

// Close on overlay click
mobileMenu?.addEventListener('click', (e) => {
  if (e.target === mobileMenu) closeMobileMenu();
});

// Close on Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMobileMenu();
});


/* ── 4. SMOOTH SCROLL for anchor links ──────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const href = anchor.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});


/* ── 5. SCROLL REVEAL ANIMATIONS ───────────────────── */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger delay based on element's position among siblings
        const siblings = entry.target.parentElement?.querySelectorAll('.reveal-up, .reveal-right') ?? [];
        const index = Array.from(siblings).indexOf(entry.target);
        const delay = Math.min(index * 80, 320); // max 320ms stagger
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay);
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.reveal-up, .reveal-right').forEach(el => {
  revealObserver.observe(el);
});


/* ── 6. SKILL BAR ANIMATIONS ───────────────────────── */
const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.skill-fill').forEach((bar, i) => {
          setTimeout(() => bar.classList.add('animated'), i * 100);
        });
        skillObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 }
);

document.querySelectorAll('.skill-category').forEach(cat => {
  skillObserver.observe(cat);
});


/* ── 7. CONTACT FORM ────────────────────────────────── */
const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('form-submit-btn');
const submitText = document.getElementById('submit-text');
const formSuccess = document.getElementById('form-success');

contactForm?.addEventListener('submit', async (e) => {
  e.preventDefault();

  // Basic validation
  const name = document.getElementById('contact-name')?.value.trim();
  const email = document.getElementById('contact-email-field')?.value.trim();
  const message = document.getElementById('contact-message')?.value.trim();

  if (!name || !email || !message) {
    shakeForm();
    return;
  }

  if (!isValidEmail(email)) {
    document.getElementById('contact-email-field')?.focus();
    return;
  }

  // Simulate sending (replace with real API call / EmailJS / Formspree)
  setSubmitting(true);

  await new Promise(resolve => setTimeout(resolve, 1400));

  setSubmitting(false);
  formSuccess?.classList.add('show');
  contactForm.reset();

  // Hide success message after 5s
  setTimeout(() => {
    formSuccess?.classList.remove('show');
  }, 5000);
});

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function setSubmitting(loading) {
  if (!submitBtn || !submitText) return;
  submitBtn.disabled = loading;
  submitText.textContent = loading ? 'Envoi en cours...' : 'Envoyer le message';
  submitBtn.style.opacity = loading ? '0.75' : '1';
}

function shakeForm() {
  contactForm?.animate(
    [
      { transform: 'translateX(0)' },
      { transform: 'translateX(-6px)' },
      { transform: 'translateX(6px)' },
      { transform: 'translateX(-4px)' },
      { transform: 'translateX(4px)' },
      { transform: 'translateX(0)' },
    ],
    { duration: 400, easing: 'ease-out' }
  );
}


/* ── 8. LAZY LOADING for images ─────────────────────── */
if ('loading' in HTMLImageElement.prototype) {
  // Native lazy loading supported, nothing to do
} else {
  // Fallback: IntersectionObserver polyfill
  const imgObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src ?? img.src;
        imgObserver.unobserve(img);
      }
    });
  });
  document.querySelectorAll('img[loading="lazy"]').forEach(img => {
    imgObserver.observe(img);
  });
}


/* ── 9. FLOATING CARDS parallax on mousemove ────────── */
const heroSection = document.getElementById('hero');
const card1 = document.querySelector('.card-1');
const card2 = document.querySelector('.card-2');

heroSection?.addEventListener('mousemove', (e) => {
  const rect = heroSection.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
  const y = (e.clientY - rect.top) / rect.height - 0.5;

  if (card1) {
    card1.style.transform = `translate(${x * 12}px, ${y * 8}px)`;
  }
  if (card2) {
    card2.style.transform = `translate(${x * -12}px, ${y * -8}px)`;
  }
});

heroSection?.addEventListener('mouseleave', () => {
  if (card1) card1.style.transform = '';
  if (card2) card2.style.transform = '';
});


/* ── 10. TYPING EFFECT for hero name ────────────────── */
const heroName = document.querySelector('.hero-name');
if (heroName) {
  const text = heroName.textContent ?? '';
  heroName.textContent = '';
  heroName.style.borderRight = '2px solid var(--accent)';

  let i = 0;
  const type = () => {
    if (i < text.length) {
      heroName.textContent += text[i++];
      setTimeout(type, 80);
    } else {
      // Remove cursor after typing
      setTimeout(() => {
        heroName.style.borderRight = 'none';
      }, 800);
    }
  };

  // Start typing after a brief delay
  setTimeout(type, 600);
}
