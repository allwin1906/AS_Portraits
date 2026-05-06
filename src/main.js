import './style.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger)

// ============================================================
// DATA
// ============================================================

// Portfolio / Signature Stories — 7 categories
const stories = [
  {
    title: 'Weddings',
    tag: 'Wedding Photography',
    desc: 'Sacred rituals, unscripted laughter, and timeless vows — every detail of your wedding day captured with cinematic precision and emotional depth.',
    type: 'image',
    img: 'https://res.cloudinary.com/duvkbm8jv/image/upload/q_auto/f_auto/v1775647524/ASP01673_rbnyaq.jpg',
    albumUrl: '/AS_Portraits/albums/wedding.html'
  },
  {
    title: 'Pre-Wedding',
    tag: 'Pre-Wedding Shoot',
    desc: 'Your love story deserves a prelude. We create dreamy, cinematic pre-wedding shoots that reflect your unique bond — golden hour frames that you\'ll treasure forever.',
    type: 'image',
    img: 'https://res.cloudinary.com/duvkbm8jv/image/upload/q_auto/f_auto/v1778085908/HSP07543_addrou.jpg',
    albumUrl: '/AS_Portraits/albums/pre-wedding.html'
  },
  {
    title: 'Engagement',
    tag: 'Engagement Photography',
    desc: 'The beginning of forever. We capture the joy, nerves, and pure happiness of your engagement in a way that tells the story of your love.',
    type: 'image',
    img: 'https://res.cloudinary.com/duvkbm8jv/image/upload/q_auto/f_auto/v1778086188/ASP03772_wqd87v.jpg',
    albumUrl: '/AS_Portraits/albums/engagement.html'
  },
  {
    title: 'Outdoor Shoot',
    tag: 'Outdoor Shoots',
    desc: 'Creative conceptual shoots utilizing natural light and beautiful surroundings. We capture authentic moments in stunning outdoor locations.',
    type: 'image',
    img: 'https://res.cloudinary.com/duvkbm8jv/image/upload/q_auto/f_auto/v1778087681/ASP09463_pp8nri.jpg',
    albumUrl: '/AS_Portraits/albums/outdoor-shoot.html'
  },
  {
    title: 'Model Photo Shoot',
    tag: 'Model & Editorial',
    desc: 'High-end editorial and cinematic portfolios for models and brands. We bring professional styling and cinematic quality to your portfolio.',
    type: 'image',
    img: 'https://res.cloudinary.com/duvkbm8jv/image/upload/q_auto/f_auto/v1777309303/ASP06320_dfomwj.jpg',
    albumUrl: '/AS_Portraits/albums/model-shoots.html'
  },
  {
    title: 'Maternity',
    tag: 'Maternity Photography',
    desc: 'Honouring the profound beauty and strength of your journey into motherhood — radiant, timeless, and deeply personal portraits.',
    type: 'image',
    img: 'https://res.cloudinary.com/duvkbm8jv/image/upload/q_auto/f_auto/v1777305916/ASP03729_srzzkm.jpg',
    albumUrl: '/AS_Portraits/albums/maternity.html'
  },
  {
    title: 'Baby Shoot',
    tag: 'Baby Photography',
    desc: 'Beautifully capturing the innocence, pure joy, and fleeting milestones of your little ones.',
    type: 'image',
    img: 'https://res.cloudinary.com/duvkbm8jv/image/upload/q_auto/f_auto/v1778092547/ASP02351_kammqj.jpg',
    albumUrl: '/AS_Portraits/albums/baby-shoot.html'
  },
  {
    title: 'Cinematic Reels',
    tag: 'Reels',
    desc: 'Short, impactful video stories tailored to capture the energy and motion of your special moments.',
    type: 'video',
    img: 'https://res.cloudinary.com/duvkbm8jv/video/upload/q_auto/f_auto/v1775649280/Aadiney_Irupen_pavalamalli_VC_asportraits___Makeup_h_bridal_studio_trichyEdit_mast_lgghee.mp4',
    albumUrl: '/AS_Portraits/albums/reels.html'
  }
]

// Services — expanded to 9 with full album page URLs
const captureServices = [
  {
    title: 'Wedding Photography',
    icon: '✦',
    desc: 'Authentic coverage of your most sacred day — rituals, reception, and everything in between.',
    img: 'https://res.cloudinary.com/duvkbm8jv/image/upload/q_auto/f_auto/v1775647524/ASP01673_rbnyaq.jpg',
    pageUrl: '/AS_Portraits/albums/wedding.html'
  },
  {
    title: 'Event Photography',
    icon: '🎉',
    desc: 'Every celebration beautifully documented — from corporate events to family gatherings.',
    img: 'https://res.cloudinary.com/duvkbm8jv/image/upload/q_auto/f_auto/v1775647500/AKZ04343_kpqi0e.jpg',
    pageUrl: '/AS_Portraits/albums/event.html'
  },
  {
    title: 'Model Shoot',
    icon: '📸',
    desc: 'High-end editorial and cinematic portfolios for models and brands.',
    img: 'https://res.cloudinary.com/duvkbm8jv/image/upload/q_auto/f_auto/v1777309303/ASP06320_dfomwj.jpg',
    pageUrl: '/AS_Portraits/albums/model-shoots.html'
  },
  {
    title: 'Maternity',
    icon: '🤱',
    desc: 'Radiant and timeless portraits celebrating the beautiful journey into motherhood.',
    img: 'https://res.cloudinary.com/duvkbm8jv/image/upload/q_auto/f_auto/v1777305916/ASP03729_srzzkm.jpg',
    pageUrl: '/AS_Portraits/albums/newborns-kids.html'
  },

  {
    title: 'Lifestyle Photography',
    icon: '✨',
    desc: 'Candid and aesthetic storytelling of your everyday beauty and authentic life.',
    img: 'https://res.cloudinary.com/duvkbm8jv/image/upload/q_auto/f_auto/v1775644542/ASP02540_zx9nqw.jpg',
    pageUrl: '/AS_Portraits/albums/lifestyle.html'
  },
  {
    title: 'Cinematography',
    icon: '🎥',
    desc: 'Full cinematic films capturing every emotion and moment.',
    type: 'image',
    img: 'https://res.cloudinary.com/duvkbm8jv/image/upload/q_auto/f_auto/v1778087683/ASP09152_l7iqte.jpg',
    pageUrl: '/AS_Portraits/albums/cinematography.html'
  },
  {
    title: 'Indoor & Outdoor Shoot',
    icon: '🌿',
    desc: 'Versatile shoots in curated indoor studios or breathtaking outdoor locations.',
    img: 'https://res.cloudinary.com/duvkbm8jv/image/upload/q_auto/f_auto/v1775644562/ASP09682_viqqdq.jpg',
    pageUrl: '/AS_Portraits/albums/maternity.html'
  }
]

// Why Choose Us — 7 points with photography images
const whyUsPoints = [
  {
    number: '01',
    title: 'Storytelling, Not Just Photography',
    desc: 'We approach every shoot as a narrative — crafting images that tell your complete emotional story.',
    img: 'https://res.cloudinary.com/duvkbm8jv/image/upload/q_auto/f_auto/v1775644581/ASP02159_lxnbhs.jpg'
  },
  {
    number: '02',
    title: 'Cinematic & Premium Quality',
    desc: 'Every frame is composed and delivered with a cinematic eye and high-end post-processing.',
    img: 'https://res.cloudinary.com/duvkbm8jv/image/upload/q_auto/f_auto/v1778087685/AS_P0902_gfegrv.jpg'
  },
  {
    number: '03',
    title: 'Emotion First Approach',
    desc: 'We chase feeling over perfection — real tears, real laughter, real love captured authentically.',
    img: 'https://res.cloudinary.com/duvkbm8jv/image/upload/q_auto/f_auto/v1777305795/ASP03688_sgbbkx.jpg'
  },
  {
    number: '04',
    title: 'Professional Yet Friendly Team',
    desc: 'We blend seamlessly into your celebration so you remain comfortable and completely yourself.',
    img: 'https://res.cloudinary.com/duvkbm8jv/image/upload/q_auto/f_auto/v1775647626/ASP09682_fuh6kp.jpg'
  },
  {
    number: '05',
    title: 'On-Time Delivery',
    desc: 'We respect your timeline — curated galleries and films delivered punctually, without delays.',
    img: 'https://res.cloudinary.com/duvkbm8jv/image/upload/q_auto/f_auto/v1775647540/HSP06520_m4lfq6.jpg'
  },
  {
    number: '06',
    title: 'Value for Every Budget',
    desc: 'Premium quality doesn\'t require a premium price — tailored packages that fit your needs.',
    img: 'https://res.cloudinary.com/duvkbm8jv/image/upload/q_auto/f_auto/v1775647539/AKZ04717_crmfcz.jpg'
  },
  {
    number: '07',
    title: 'Attention to Detail',
    desc: 'From light angles to background elements — nothing escapes our eye in pursuit of the perfect frame.',
    img: 'https://res.cloudinary.com/duvkbm8jv/image/upload/q_auto/f_auto/v1778086188/ASP03772_wqd87v.jpg'
  }
]


const testimonials = [
  {
    quote: 'Amazing team for wedding and any type of photoshoot. I got my professional headshots shot by Mukund. One of the best outputs I have ever received.',
    author: 'Saranya Ramamurthy',
    role: 'Local Guide · Google Review',
    stars: 5
  },
  {
    quote: 'They were so professional in their work ❤️ and hard working 💪 persons — delivered our photos within one day with photo frames 🤩. So keep on doing this work 👍',
    author: 'Sudharsan S.K.M',
    role: 'Google Review',
    stars: 5
  },
  {
    quote: 'Absolutely amazing experience from start to finish. The team at AS Portraits truly understands how to capture emotions and create memories that last a lifetime.',
    author: 'Nithar San',
    role: 'Google Review',
    stars: 5
  }
]

// ============================================================
// POPULATE DOM
// ============================================================

function buildStories() {
  const container = document.getElementById('story-sequence')
  if (!container) return
  stories.forEach((s, i) => {
    const isReversed = i % 2 !== 0
    const media = s.type === 'video'
      ? `<video src="${s.img}" autoplay muted loop playsinline></video>`
      : ''
    const bgStyle = s.type === 'image'
      ? `style="background-image:url('${s.img}'); background-size:cover; background-position:center;"`
      : ''

    container.innerHTML += `
      <div class="story-card ${isReversed ? 'reversed' : ''}">
        <div class="story-media-wrap">
          <div class="media-fill" ${bgStyle}>${media}</div>
        </div>
        <div class="story-body">
          <span class="story-tag">${s.tag}</span>
          <h3>${s.title}</h3>
          <p>${s.desc}</p>
          <a href="${s.albumUrl}" class="story-link">See Album <span>→</span></a>
        </div>
      </div>
    `
  })
}

function buildServices() {
  const grid = document.getElementById('services-grid')
  if (!grid) return
  captureServices.forEach((c, i) => {
    const mediaHTML = c.type === 'video'
      ? `<video src="${c.img}" autoplay muted loop playsinline class="card-bg" style="object-fit:cover;"></video>`
      : `<div class="card-bg" style="background-image:url('${c.img}');"></div>`
    
    grid.innerHTML += `
      <div class="service-card reveal" style="transition-delay:${i * 0.07}s;">
        ${mediaHTML}
        <div class="card-overlay"></div>
        <div class="card-body">
          <h3>${c.title}</h3>
        </div>
      </div>
    `
  })
}

function buildWhyUs() {
  const grid = document.getElementById('why-us-grid')
  if (!grid) return
  whyUsPoints.forEach((item, i) => {
    grid.innerHTML += `
      <div class="why-us-card reveal" style="transition-delay:${i * 0.08}s">
        <div class="why-us-card-img" style="background-image:url('${item.img}');"></div>
        <div class="why-us-card-overlay"></div>
        <div class="why-us-card-body">
          <span class="why-us-card-number">${item.number}</span>
          <h3 class="why-us-card-title">${item.title}</h3>
          <p class="why-us-card-desc">${item.desc}</p>
        </div>
      </div>
    `
  })
}



function buildTestimonials() {
  const wrap = document.getElementById('testimonials-wrap')
  if (!wrap) return
  testimonials.forEach((t, i) => {
    const stars = '★'.repeat(t.stars)
    wrap.innerHTML += `
      <div class="testimonial-card reveal" style="transition-delay:${i * 0.12}s">
        <div class="testimonial-card-top">
          <p class="stars-row">${stars}</p>
          <a href="https://share.google/evY1kSfNTr4hER01z" target="_blank" rel="noopener" class="google-badge" title="See our Google Reviews">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
            Google
          </a>
        </div>
        <span class="quote-mark">"</span>
        <p class="testimonial-text">${t.quote}</p>
        <div class="testimonial-meta">
          <p class="testimonial-author">— ${t.author}</p>
          ${t.role ? `<p class="testimonial-role">${t.role}</p>` : ''}
        </div>
      </div>
    `
  })
}

// ============================================================
// INTERACTIONS
// ============================================================

// Nav scroll state
function initNav() {
  const nav = document.getElementById('site-nav')
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 60)
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
}

// Hamburger menu
function initHamburger() {
  const btn     = document.getElementById('hamburger')
  const drawer  = document.getElementById('mobile-drawer')
  const overlay = document.getElementById('nav-overlay')

  const close = () => {
    btn.classList.remove('open')
    drawer.classList.remove('open')
    overlay.classList.remove('open')
    btn.setAttribute('aria-expanded', 'false')
    document.body.style.overflow = ''
  }

  btn.addEventListener('click', () => {
    const isOpen = drawer.classList.toggle('open')
    btn.classList.toggle('open', isOpen)
    overlay.classList.toggle('open', isOpen)
    btn.setAttribute('aria-expanded', isOpen)
    document.body.style.overflow = isOpen ? 'hidden' : ''
  })

  overlay.addEventListener('click', close)

  // Close drawer when any link is clicked
  drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', close))
}

// Featured gallery drag-to-scroll
function initDragScroll() {
  const el = document.getElementById('featured-scroll')
  if (!el) return
  let isDown = false, startX = 0, scrollLeft = 0

  el.addEventListener('mousedown', e => {
    isDown = true
    el.style.cursor = 'grabbing'
    startX = e.pageX - el.offsetLeft
    scrollLeft = el.scrollLeft
  })
  el.addEventListener('mouseleave', () => { isDown = false; el.style.cursor = 'grab' })
  el.addEventListener('mouseup',    () => { isDown = false; el.style.cursor = 'grab' })
  el.addEventListener('mousemove',  e => {
    if (!isDown) return
    e.preventDefault()
    const x = e.pageX - el.offsetLeft
    el.scrollLeft = scrollLeft - (x - startX) * 1.5
  })
}

// Contact form
function initContactForm() {
  const form = document.getElementById('contact-form')
  const btn  = document.getElementById('form-submit')
  if (!form) return

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const name  = form.querySelector('#name').value.trim()
    const phone = form.querySelector('#phone').value.trim()
    if (!name) { alert('Please enter your name.'); return }

    const message = encodeURIComponent(
      `Hi AS Portraits! I'm ${name}${phone ? ` (${phone})` : ''}. I'd like to enquire about your photography services.`
    )
    btn.textContent = 'Sending…'
    setTimeout(() => {
      window.open(`https://wa.me/918754137640?text=${message}`, '_blank')
      btn.textContent = 'Send Message →'
      form.reset()
    }, 600)
  })
}

// Scroll reveal
function initReveal() {
  const els = document.querySelectorAll('.reveal')
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible')
        io.unobserve(e.target)
      }
    })
  }, { threshold: 0.12 })
  els.forEach(el => io.observe(el))
}

// ============================================================
// GSAP ANIMATIONS
// ============================================================
function initGSAP() {
  // Hero parallax
  gsap.to('#hero-bg', {
    yPercent: 25,
    ease: 'none',
    scrollTrigger: {
      trigger: '#home',
      start: 'top top',
      end: 'bottom top',
      scrub: true
    }
  })

  // Story card stagger reveal
  gsap.utils.toArray('.story-card').forEach((card, i) => {
    gsap.fromTo(card,
      { opacity: 0, y: 70 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay: i * 0.1,
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    )
  })

  // Why Us cards stagger
  gsap.utils.toArray('.why-us-card').forEach((card, i) => {
    gsap.fromTo(card,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        delay: i * 0.07,
        scrollTrigger: {
          trigger: card,
          start: 'top 88%',
          toggleActions: 'play none none none'
        }
      }
    )
  })


}

// ============================================================
// LENIS SMOOTH SCROLL
// ============================================================
function initLenis() {
  const lenis = new Lenis({
    duration: 1.2,
    easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
    smoothTouch: false
  })

  lenis.on('scroll', ScrollTrigger.update)

  gsap.ticker.add(time => lenis.raf(time * 1000))
  gsap.ticker.lagSmoothing(0)
}

// ============================================================
// FAB SPEED DIAL (Mobile)
// ============================================================
function initFAB() {
  const trigger = document.getElementById('fab-trigger')
  const ctas    = document.getElementById('floating-ctas')
  if (!trigger || !ctas) return

  trigger.addEventListener('click', (e) => {
    e.stopPropagation()
    const isOpen = ctas.classList.toggle('fab-open')
    trigger.setAttribute('aria-expanded', isOpen)
  })

  // Close when any child link is tapped
  ctas.querySelectorAll('.fab-child').forEach(btn => {
    btn.addEventListener('click', () => {
      ctas.classList.remove('fab-open')
      trigger.setAttribute('aria-expanded', 'false')
    })
  })

  // Close when tapping outside
  document.addEventListener('click', (e) => {
    if (!ctas.contains(e.target)) {
      ctas.classList.remove('fab-open')
      trigger.setAttribute('aria-expanded', 'false')
    }
  })
}

/**
 * Page Transitions
 */
function initPageTransitions() {
  // Fix blank page on back/forward navigation (bfcache restore).
  // When the browser restores a page from cache, the body may still
  // have the page-exit class (opacity: 0) from when the user left.
  window.addEventListener('pageshow', (e) => {
    if (e.persisted || performance.getEntriesByType('navigation')[0]?.type === 'back_forward') {
      document.body.classList.remove('page-exit')
      document.body.style.opacity = ''
    }
  })

  document.addEventListener('click', (e) => {
    const link = e.target.closest('a')
    if (!link) return

    const href = link.getAttribute('href')
    const target = link.getAttribute('target')

    // Handle internal links only
    if (
      href && 
      !href.startsWith('http') && 
      !href.startsWith('mailto') && 
      !href.startsWith('tel') && 
      !href.startsWith('#') &&
      target !== '_blank'
    ) {
      e.preventDefault()
      document.body.classList.add('page-exit')
      
      setTimeout(() => {
        window.location.href = href
      }, 400)
    }
  })
}


// ============================================================
// INIT
// ============================================================
function init() {
  // Hide loader
  const loader = document.getElementById('loader')
  setTimeout(() => {
    if (loader) {
      loader.classList.add('hidden')
      setTimeout(() => loader.remove(), 900)
    }
  }, 1400)

  // Build sections
  buildStories()
  buildServices()
  buildWhyUs()
  buildTestimonials()

  // Interactions
  initNav()
  initHamburger()
  initDragScroll()
  initContactForm()
  initReveal()
  initFAB()
  initPageTransitions()

  // Animations
  initGSAP()
  initLenis()
}

document.addEventListener('DOMContentLoaded', init)
