import './style.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger)

// --- Dummy Data ---
// --- Dummy Data ---
const stories = [
  { title: 'Akhil & Meera', desc: 'Wedding Story — A beautiful union celebrating traditions and love.', type: 'image', img: 'https://res.cloudinary.com/duvkbm8jv/image/upload/q_auto/f_auto/v1775647548/AKZ04700_d6ny6b.jpg' },
  { title: 'Sacred Vows', desc: 'Anandh & Sainuja — A timeless wedding story.', type: 'video', img: 'https://res.cloudinary.com/duvkbm8jv/video/upload/q_auto/f_auto/v1775649276/ANANDH_SAINUJA_Sacred_vows_timeless_love._WeddingPhotography_WeddingPhotographer_Weddin_rdy4fe.mp4' },
  { title: 'Arjun & Neha', desc: 'Sangeet Night — Unscripted joy, dance, and family celebrations.', type: 'image', img: 'https://res.cloudinary.com/duvkbm8jv/image/upload/q_auto/f_auto/v1775644541/ASP02519_tgq8zn.jpg' },
]

const cinematicReels = [
  { title: 'Floral Grace', desc: 'Floral portraits in motion.', type: 'video', img: 'https://res.cloudinary.com/duvkbm8jv/video/upload/q_auto/f_auto/v1775649280/Aadiney_Irupen_pavalamalli_VC_asportraits___Makeup_h_bridal_studio_trichyEdit_mast_lgghee.mp4' },
  { title: 'Vibrant Moves', desc: 'A celebration of dance and joy.', type: 'video', img: 'https://res.cloudinary.com/duvkbm8jv/video/upload/q_auto/f_auto/v1775649272/After_a_Long_Time_Dance_ReelVideography_asportraits___Makeup_h_bridal_studio_trichy_Ed_kwjeew.mp4' },
  { title: 'Sweet Moments', desc: 'Pratiksha\'s delightful cake smash.', type: 'video', img: 'https://res.cloudinary.com/duvkbm8jv/video/upload/q_auto/f_auto/v1775649268/Cutie_pie_on_a_sugar_high_Pratiksha_s_cake_smash_moments_For_Bookings-Contact-_91-95973685_x81blc.mp4' },
  { title: 'Bridal Elegance', desc: 'A radiant journey to forever.', type: 'video', img: 'https://res.cloudinary.com/duvkbm8jv/video/upload/q_auto/f_auto/v1775649262/Here_comes_the_queen_of_the_day_radiant_graceful_and_ready_for_forever._WeddingPhotography_wuw3sm.mp4' },
  { title: 'Sacred Vows', desc: 'Timeless love stories.', type: 'video', img: 'https://res.cloudinary.com/duvkbm8jv/video/upload/q_auto/f_auto/v1775649276/ANANDH_SAINUJA_Sacred_vows_timeless_love._WeddingPhotography_WeddingPhotographer_Weddin_rdy4fe.mp4' },
  { title: 'Beautiful Blessing', desc: 'Grateful for this beautiful blessing.', type: 'video', img: 'https://res.cloudinary.com/duvkbm8jv/video/upload/q_auto/f_auto/v1775659696/Feeling_so_grateful_for_this_beautiful_blessing._For_Bookings_-Contact_-_91-9597368543_-_8_fz3qlm.mp4' },
  { title: 'Beach Love Story', desc: 'Written by the waves — Gokul & Sneka.', type: 'video', img: 'https://res.cloudinary.com/duvkbm8jv/video/upload/q_auto/f_auto/v1775659544/A_love_story_written_by_the_waves._Gokul_Sneka_CouplePhotography_BeachCouple_LoveStory_prew_gkkfjb.mp4' },
  { title: 'Royal Radiance', desc: 'The queen of the day, radiant and graceful.', type: 'video', img: 'https://res.cloudinary.com/duvkbm8jv/video/upload/q_auto/f_auto/v1775659541/Here_comes_the_queen_of_the_day_radiant_graceful_and_ready_for_forever._WeddingPhotography_xejbbp.mp4' }
]

const captureServices = [
  { title: 'Wedding', desc: 'Authentic captures of your most important day, from rituals to reception.', icon: '✦', img: 'https://res.cloudinary.com/duvkbm8jv/image/upload/q_auto/f_auto/v1775647333/ASP09961_sq20uf.jpg' },
  { title: 'Newborns & Kids', desc: 'Pure and innocent moments of your little ones.', icon: '🍼', img: 'https://res.cloudinary.com/duvkbm8jv/image/upload/q_auto/f_auto/v1775644581/ASP02159_lxnbhs.jpg' },
  { title: 'Maternity', desc: 'Beautifully capturing the journey to motherhood.', icon: '🌸', img: 'https://res.cloudinary.com/duvkbm8jv/image/upload/q_auto/f_auto/v1775644562/ASP09682_viqqdq.jpg' },
  { title: 'Lifestyle Photography', desc: 'Candid and aesthetic storytelling of your daily life.', icon: '✨', img: 'https://res.cloudinary.com/duvkbm8jv/image/upload/q_auto/f_auto/v1775644542/ASP02540_zx9nqw.jpg' },
  { title: 'Model Shoots', desc: 'High-end editorial and cinematic portfolios.', icon: '📸', img: 'https://res.cloudinary.com/duvkbm8jv/image/upload/q_auto/f_auto/v1775647525/008A2958_lxuksg.jpg' }
]

const testimonials = [
  { quote: "Every moment felt real and beautifully captured. The AS Portraits team made us feel so comfortable.", author: "Akhil & Meera" },
  { quote: "They didn't just take photos; they captured the exact aesthetic and feeling of our Tiruchirappalli wedding.", author: "Karthik & Priya" }
]

const featuredWeddings = [
  { title: 'Siddharth & Ananya / Chennai', bg: '#2a201c', type: 'image', img: 'https://res.cloudinary.com/duvkbm8jv/image/upload/q_auto/f_auto/v1775647500/AKZ04343_kpqi0e.jpg' },
  { title: 'Vikram & Swathi / Coimbatore', bg: '#1c1f2a', type: 'image', img: 'https://res.cloudinary.com/duvkbm8jv/image/upload/q_auto/f_auto/v1775647405/ASP01669_qkkznm.jpg' },
  { title: 'The Queen / Special Edition', bg: '#2a281c', type: 'video', img: 'https://res.cloudinary.com/duvkbm8jv/video/upload/q_auto/f_auto/v1775649262/Here_comes_the_queen_of_the_day_radiant_graceful_and_ready_for_forever._WeddingPhotography_wuw3sm.mp4' },
  { title: 'Surya & Kavya / Kerala', bg: '#1c282a', type: 'image', img: 'https://res.cloudinary.com/duvkbm8jv/image/upload/q_auto/f_auto/v1775647617/HSP02747_anwumk.jpg' },
]

// --- Helper: Render Media ---
function renderMedia(item, className = "") {
  if (item.type === 'video') {
    return `
      <div class="${className} dummy-video">
        <video src="${item.img}" autoplay muted loop playsinline></video>
        <div class="media-overlay"></div>
      </div>
    `;
  }
  return `
    <div class="${className} dummy-image" style="background-image: url('${item.img}'); background-size: cover; background-position: center;">
      <div class="media-overlay"></div>
    </div>
  `;
}

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
            ${renderMedia(s, "story-media")}
          </div>
          <div class="story-text">
            <h3>${s.title}</h3>
            <p>${s.desc}</p>
          </div>
        </div>
      `;
    });
  }

  // Cinematic Reels
  const reelsGrid = document.querySelector('.reels-grid');
  if (reelsGrid) {
    cinematicReels.forEach((r) => {
      reelsGrid.innerHTML += `
        <div class="reel-card">
          <video src="${r.img}" autoplay muted loop playsinline></video>
          <div class="media-overlay"></div>
          <div class="reel-info">
            <h3>${r.title}</h3>
            <p>${r.desc}</p>
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
          ${renderMedia(f, "dummy-image")}
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
        <div class="reel-media" style="background-image: url('https://res.cloudinary.com/duvkbm8jv/image/upload/q_auto/f_auto/v1775644518/ASP02532_twiccf.jpg'); background-size: cover; background-position: center;"></div>
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

    // Alternate Logic for Mobile Sections
    const mobileItems = [
      ...stories.map(s => ({ ...s, slideId: s === stories[0] ? 'id="m-stories"' : '' })),
      ...cinematicReels.map(r => ({ ...r, slideId: '' })),
      ...captureServices.map(c => ({ ...c, type: 'image', slideId: '' })),
      ...featuredWeddings.map(f => ({ ...f, slideId: '' }))
    ];

    // Mix them up for a photo-video rhythm
    const mixedReels = [];
    const videoPool = mobileItems.filter(i => i.type === 'video');
    const imagePool = mobileItems.filter(i => i.type === 'image');
    
    // We want P V P V P V...
    const maxLength = Math.max(videoPool.length, imagePool.length) * 2;
    for (let i = 0; i < maxLength; i++) {
        const pool = i % 2 === 0 ? imagePool : videoPool;
        const item = pool.shift();
        if (item) mixedReels.push(item);
    }
    // Add remaining
    mixedReels.push(...imagePool, ...videoPool);

    mixedReels.forEach((r) => {
      const isVideo = r.type === 'video';
      const playBtn = isVideo ? '<div class="play-btn"></div>' : '';
      
      mobileContainer.innerHTML += `
        <div class="reel-slide" ${r.slideId || ''}>
          <div class="reel-media">
            ${isVideo 
              ? `<video src="${r.img}" autoplay muted loop playsinline></video>` 
              : `<div class="dummy-image" style="background-image: url('${r.img}'); background-size: cover; background-position: center; width:100%; height:100%;"></div>`
            }
          </div>
          <div class="reel-overlay"></div>
          ${playBtn}
          <div class="reel-content">
            <h2 class="reel-title">${r.title}</h2>
            <p class="reel-desc">${r.desc || 'Cinematic Story'}</p>
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
        <div class="reel-media dummy-image" style="background-image: url('https://res.cloudinary.com/duvkbm8jv/image/upload/q_auto/f_auto/v1775647405/ASP01669_qkkznm.jpg'); background-size: cover; background-position: center;"></div>
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
