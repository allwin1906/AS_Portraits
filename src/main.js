import './style.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger)

// --- Dummy Data ---
const stories = [
  { title: 'Akhil & Meera', desc: 'Wedding Story — A beautiful union celebrating traditions and love.', type: 'image' },
  { title: 'Karthik & Priya', desc: 'Pre-wedding Moments — Candid smiles in golden hour light.', type: 'video' },
  { title: 'Arjun & Neha', desc: 'Sangeet Night — Unscripted joy, dance, and family celebrations.', type: 'image' },
]

const captureServices = [
  { title: 'Wedding', desc: 'Authentic captures of your most important day, from rituals to reception.', icon: '✦' },
  { title: 'Newborns & Kids', desc: 'Pure and innocent moments of your little ones.', icon: '🍼' },
  { title: 'Maternity', desc: 'Beautifully capturing the journey to motherhood.', icon: '🌸' },
  { title: 'Lifestyle Photography', desc: 'Candid and aesthetic storytelling of your daily life.', icon: '✨' },
  { title: 'Model Shoots', desc: 'High-end editorial and cinematic portfolios.', icon: '📸' }
]

const testimonials = [
  { quote: "Every moment felt real and beautifully captured. The AS Portraits team made us feel so comfortable.", author: "Akhil & Meera" },
  { quote: "They didn't just take photos; they captured the exact aesthetic and feeling of our Tiruchirappalli wedding.", author: "Karthik & Priya" }
]

const featuredWeddings = [
  { title: 'Siddharth & Ananya / Chennai', bg: '#2a201c' },
  { title: 'Vikram & Swathi / Coimbatore', bg: '#1c1f2a' },
  { title: 'Arun & Divya / Madurai', bg: '#2a281c' },
  { title: 'Surya & Kavya / Kerala', bg: '#1c282a' },
]

// --- Populate DOM ---
const isDesktop = window.innerWidth > 768;

function initDesktop() {
  // Signature Stories
  const storyContainer = document.querySelector('.story-sequence');
  if (storyContainer) {
    stories.forEach((s) => {
      storyContainer.innerHTML += `
        <div class="story-card">
          <div class="media-wrapper">
            <div class="story-media dummy-${s.type}"></div>
          </div>
          <div class="story-text">
            <h3>${s.title}</h3>
            <p>${s.desc}</p>
          </div>
        </div>
      `;
    });
  }

  // What We Capture
  const captureGrid = document.querySelector('.capture-grid');
  if (captureGrid) {
    captureServices.forEach((c) => {
      captureGrid.innerHTML += `
        <div class="capture-item">
          <div class="capture-icon">${c.icon}</div>
          <h3>${c.title}</h3>
          <p>${c.desc}</p>
        </div>
      `;
    });
  }

  // Love Notes
  const notesContainer = document.querySelector('.notes-container');
  if (notesContainer) {
    testimonials.forEach((t) => {
      notesContainer.innerHTML += `
        <div class="testimonial-item">
          <div class="testimonial-quote">"${t.quote}"</div>
          <div class="testimonial-author">— ${t.author}</div>
        </div>
      `;
    });
  }

  // Featured Works
  const featuredTrack = document.querySelector('.featured-track');
  if (featuredTrack) {
    featuredWeddings.forEach((f) => {
      featuredTrack.innerHTML += `
        <div class="featured-item">
          <div class="dummy-image" style="background: linear-gradient(to bottom right, ${f.bg}, #111); width:100%; height:100%;"></div>
          <div class="featured-caption">${f.title}</div>
        </div>
      `;
    });
  }
}

function initMobile() {
  const mobileContainer = document.querySelector('.mobile-swipe-container');
  if (mobileContainer) {
    // Hero Slide
    mobileContainer.innerHTML += `
      <div class="reel-slide info-slide" id="m-home">
        <div class="reel-media dummy-video"></div>
        <div class="reel-overlay" style="background: linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.2))"></div>
        <div class="reel-content" style="text-align:center;">
          <div class="trust-badge" style="margin-bottom: 2rem;">
            <span class="star">★</span><span class="star">★</span><span class="star">★</span><span class="star">★</span><span class="star">★</span>
          </div>
          <h2 class="reel-title" style="font-size:2.5rem; margin-bottom:1rem;">Capturing timeless <br>wedding stories</h2>
          <p class="reel-desc" style="opacity:1; font-style:italic; font-family:var(--font-serif); font-size: 1.2rem;">From Tiruchirappalli to everywhere your love takes you.</p>
        </div>
      </div>
    `;

    // Inject Stories
    stories.forEach((r, i) => {
      const isVideo = r.type === 'video';
      const mediaClass = isVideo ? 'dummy-video' : 'dummy-image';
      const playBtn = isVideo ? '<div class="play-btn"></div>' : '';
      const slideId = i === 0 ? 'id="m-stories"' : '';
      
      mobileContainer.innerHTML += `
        <div class="reel-slide" ${slideId}>
          <div class="reel-media ${mediaClass}" style="${r.bg ? `background: ${r.bg}` : ''}"></div>
          <div class="reel-overlay"></div>
          ${playBtn}
          <div class="reel-content">
            <h2 class="reel-title">${r.title}</h2>
            <p class="reel-desc">${r.desc}</p>
          </div>
        </div>
      `;
    });

    // Inject Capture Services as info slides
    captureServices.forEach((c) => {
      mobileContainer.innerHTML += `
        <div class="reel-slide info-slide">
          <div class="reel-media"></div>
          <div class="reel-overlay" style="background: linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.4))"></div>
          <div class="reel-content" style="text-align:center;">
            <div style="font-size:4rem; color:var(--color-gold); margin-bottom:1rem;">${c.icon}</div>
            <h2 class="reel-title">${c.title}</h2>
            <p class="reel-desc" style="opacity:1">${c.desc}</p>
          </div>
        </div>
      `;
    });

    // Inject Featured
    featuredWeddings.forEach((f) => {
        mobileContainer.innerHTML += `
          <div class="reel-slide">
            <div class="reel-media dummy-image" style="background: ${f.bg};"></div>
            <div class="reel-overlay"></div>
            <div class="reel-content">
              <h2 class="reel-title">${f.title}</h2>
              <p class="reel-desc">Signature Frame</p>
            </div>
          </div>
        `;
    });

    // Inject Testimonials
    testimonials.forEach((t) => {
      mobileContainer.innerHTML += `
        <div class="reel-slide info-slide" style="align-items:center; justify-content:center; text-align:center;">
          <div class="reel-media" style="background:var(--color-ivory);"></div>
          <div class="reel-content" style="color:var(--color-black);">
            <div class="info-quote">"${t.quote}"</div>
            <div class="testimonial-author">— ${t.author}</div>
          </div>
        </div>
      `;
    });

    // About Slide
    mobileContainer.innerHTML += `
      <div class="reel-slide info-slide">
        <div class="reel-media dummy-image"></div>
        <div class="reel-overlay" style="background: linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.5))"></div>
        <div class="reel-content" style="text-align:center;">
          <h2 class="reel-title" style="font-size:3rem; margin-bottom:1rem; color:var(--color-gold);">Our Vision</h2>
          <p class="reel-desc" style="opacity:1; font-size:1.1rem; line-height:1.6;">Capture your special moments with us 📸. At AS Portraits, we don't just take photos — we capture emotions, traditions, and timeless memories. Proudly based in Tiruchirappalli.</p>
        </div>
      </div>
    `;

    // Contact Slide
    mobileContainer.innerHTML += `
      <div class="reel-slide info-slide" id="m-contact">
        <div class="reel-media" style="background:var(--color-black);"></div>
        <div class="reel-content" style="text-align:center; padding-bottom: 2rem;">
          <h2 class="reel-title" style="font-size:2rem; color:var(--color-gold); margin-bottom:2rem;">Begin Your Journey</h2>
          <p style="font-family:var(--font-serif); font-size:2rem; margin-bottom:1rem;">8754137640 <br> 9597368543</p>
          <a href="tel:+918754137640" style="display:inline-block; font-size:2.5rem; text-decoration:underline; font-family:var(--font-serif); margin-bottom: 2rem;">Call Us Now</a>
          <br>
          <a href="https://wa.me/918754137640" target="_blank" class="btn-primary" style="display:inline-block; font-family:var(--font-sans); border: 1px solid var(--color-gold); padding:1rem 2rem; border-radius:30px; font-size:1rem; margin-bottom: 2rem;">Chat on WhatsApp</a>
          <br>
          <a href="https://instagram.com/asportraits___" target="_blank" style="opacity:0.7; font-size: 0.9rem; text-decoration:underline;">@asportraits___</a>
        </div>
      </div>
    `;

    // Intersection Observer for Bottom Nav
    const observerOptions = {
      root: mobileContainer,
      threshold: 0.6
    };
    
    // Create mapping of slides to nav items
    const navMapping = [
      { id: 'm-home', selector: 'a[href="#m-home"]' },
      { id: 'm-stories', selector: 'a[href="#m-stories"]' },
      { id: 'm-contact', selector: 'a[href="#m-contact"]' }
    ];

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const matchedNav = navMapping.find(item => item.id === entry.target.id);
          if (matchedNav) {
            document.querySelectorAll('.mobile-bottom-nav a').forEach(a => a.classList.remove('active'));
            document.querySelector(`.mobile-bottom-nav ${matchedNav.selector}`)?.classList.add('active');
          }
        }
      });
    }, observerOptions);

    navMapping.forEach(item => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
  }
}

// --- Initialize App ---
function initApp() {
  // Hide loader
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader) {
      loader.style.opacity = '0';
      setTimeout(() => loader.remove(), 1000);
    }
  }, 1500);

  if (isDesktop) {
    initDesktop();
    initGSAP();
    initLenis();
  } else {
    initMobile();
  }
}

// --- GSAP Animations (Desktop only) ---
function initGSAP() {
  // Hero Paralax
  gsap.to('.hero-media', {
    yPercent: 30,
    ease: 'none',
    scrollTrigger: {
      trigger: '.desktop-hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true
    }
  });

  // Story Cards Fade In
  gsap.utils.toArray('.story-card').forEach((card) => {
    gsap.from(card, {
      opacity: 0,
      y: 80,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    });

    // Parallax on image wrapper
    const media = card.querySelector('.media-wrapper .dummy-image, .media-wrapper .dummy-video');
    if(media) {
      gsap.to(media, {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: card,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    }
  });

  // Capture Items Stagger
  gsap.from('.capture-item', {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: '.capture-grid',
      start: 'top 80%',
    }
  });

  // Testimonials Stagger
  gsap.from('.testimonial-item', {
    y: 40,
    opacity: 0,
    duration: 1.2,
    stagger: 0.3,
    scrollTrigger: {
      trigger: '.notes-container',
      start: 'top 80%',
    }
  });

  // Horizontal Scroll for Featured Works
  const track = document.querySelector('.featured-track');
  if (track) {
    gsap.to(track, {
      x: () => -(track.scrollWidth - window.innerWidth),
      ease: 'none',
      scrollTrigger: {
        trigger: '.featured-works-wrapper',
        start: 'top top',
        end: () => `+=${track.scrollWidth - window.innerWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1
      }
    });
  }
}

// --- Lenis Smooth Scrolling ---
function initLenis() {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}

document.addEventListener('DOMContentLoaded', initApp);
