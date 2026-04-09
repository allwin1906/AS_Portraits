import './style.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger)

// ============================================================
// DATA
// ============================================================
const stories = [
  {
    title: 'Akhil & Meera',
    tag: 'Wedding Story',
    desc: 'A beautiful union celebrating Tamil traditions and unscripted joy. Every ritual, every laugh — preserved forever.',
    type: 'image',
    img: 'https://res.cloudinary.com/duvkbm8jv/image/upload/q_auto/f_auto/v1775647548/AKZ04700_d6ny6b.jpg',
    albumUrl: '/AS_Portraits/albums/akhil-meera.html'
  },
  {
    title: 'Anandh & Sainuja',
    tag: 'Sacred Vows',
    desc: 'A timeless wedding story told through golden hour light and cinematic video storytelling.',
    type: 'video',
    img: 'https://res.cloudinary.com/duvkbm8jv/video/upload/q_auto/f_auto/v1775649276/ANANDH_SAINUJA_Sacred_vows_timeless_love._WeddingPhotography_WeddingPhotographer_Weddin_rdy4fe.mp4',
    albumUrl: '/AS_Portraits/albums/anandh-sainuja.html'
  },
  {
    title: 'Arjun & Neha',
    tag: 'Sangeet Night',
    desc: 'Unscripted joy, dance, and family celebrations — captured with candid authenticity.',
    type: 'image',
    img: 'https://res.cloudinary.com/duvkbm8jv/image/upload/q_auto/f_auto/v1775644541/ASP02519_tgq8zn.jpg',
    albumUrl: '/AS_Portraits/albums/arjun-neha.html'
  }
]

const captureServices = [
  { title: 'Wedding', icon: '✦', desc: 'Authentic captures of your most important day — rituals, reception, and everything in between.', img: 'https://res.cloudinary.com/duvkbm8jv/image/upload/q_auto/f_auto/v1775647333/ASP09961_sq20uf.jpg', pageUrl: '/AS_Portraits/albums/wedding.html' },
  { title: 'Newborns & Kids', icon: '🍼', desc: 'Pure and innocent moments of your little ones, lovingly framed.', img: 'https://res.cloudinary.com/duvkbm8jv/image/upload/q_auto/f_auto/v1775644581/ASP02159_lxnbhs.jpg', pageUrl: '/AS_Portraits/albums/newborns-kids.html' },
  { title: 'Maternity', icon: '🌸', desc: 'Beautifully capturing the radiant journey to motherhood.', img: 'https://res.cloudinary.com/duvkbm8jv/image/upload/q_auto/f_auto/v1775644562/ASP09682_viqqdq.jpg', pageUrl: '/AS_Portraits/albums/maternity.html' },
  { title: 'Lifestyle', icon: '✨', desc: 'Candid and aesthetic storytelling of your everyday beauty.', img: 'https://res.cloudinary.com/duvkbm8jv/image/upload/q_auto/f_auto/v1775644542/ASP02540_zx9nqw.jpg', pageUrl: '/AS_Portraits/albums/lifestyle.html' },
  { title: 'Model Shoots', icon: '📸', desc: 'High-end editorial and cinematic portfolios for models & brands.', img: 'https://res.cloudinary.com/duvkbm8jv/image/upload/q_auto/f_auto/v1775647525/008A2958_lxuksg.jpg', pageUrl: '/AS_Portraits/albums/model-shoots.html' }
]

const cinematicReels = [
  { title: 'Floral Grace',       desc: 'Floral portraits in motion.',             src: 'https://res.cloudinary.com/duvkbm8jv/video/upload/q_auto/f_auto/v1775649280/Aadiney_Irupen_pavalamalli_VC_asportraits___Makeup_h_bridal_studio_trichyEdit_mast_lgghee.mp4' },
  { title: 'Vibrant Moves',      desc: 'A celebration of dance and joy.',          src: 'https://res.cloudinary.com/duvkbm8jv/video/upload/q_auto/f_auto/v1775649272/After_a_Long_Time_Dance_ReelVideography_asportraits___Makeup_h_bridal_studio_trichy_Ed_kwjeew.mp4' },
  { title: 'Sweet Moments',      desc: 'Pratiksha\'s delightful cake smash.',      src: 'https://res.cloudinary.com/duvkbm8jv/video/upload/q_auto/f_auto/v1775649268/Cutie_pie_on_a_sugar_high_Pratiksha_s_cake_smash_moments_For_Bookings-Contact-_91-95973685_x81blc.mp4' },
  { title: 'Bridal Elegance',    desc: 'A radiant journey to forever.',            src: 'https://res.cloudinary.com/duvkbm8jv/video/upload/q_auto/f_auto/v1775649262/Here_comes_the_queen_of_the_day_radiant_graceful_and_ready_for_forever._WeddingPhotography_wuw3sm.mp4' },
  { title: 'Sacred Vows',        desc: 'Timeless love, beautifully captured.',     src: 'https://res.cloudinary.com/duvkbm8jv/video/upload/q_auto/f_auto/v1775649276/ANANDH_SAINUJA_Sacred_vows_timeless_love._WeddingPhotography_WeddingPhotographer_Weddin_rdy4fe.mp4' },
  { title: 'Beautiful Blessing', desc: 'Grateful for this beautiful blessing.',    src: 'https://res.cloudinary.com/duvkbm8jv/video/upload/q_auto/f_auto/v1775659696/Feeling_so_grateful_for_this_beautiful_blessing._For_Bookings_-Contact_-_91-9597368543_-_8_fz3qlm.mp4' },
  { title: 'Beach Love Story',   desc: 'Written by the waves — Gokul & Sneka.',   src: 'https://res.cloudinary.com/duvkbm8jv/video/upload/q_auto/f_auto/v1775659544/A_love_story_written_by_the_waves._Gokul_Sneka_CouplePhotography_BeachCouple_LoveStory_prew_gkkfjb.mp4' },
  { title: 'Royal Radiance',     desc: 'The queen of the day, radiant and regal.', src: 'https://res.cloudinary.com/duvkbm8jv/video/upload/q_auto/f_auto/v1775659541/Here_comes_the_queen_of_the_day_radiant_graceful_and_ready_for_forever._WeddingPhotography_xejbbp.mp4' }
]

const featuredWeddings = [
  { title: 'Siddharth & Ananya — Chennai',     type: 'image', src: 'https://res.cloudinary.com/duvkbm8jv/image/upload/q_auto/f_auto/v1775647500/AKZ04343_kpqi0e.jpg' },
  { title: 'Vikram & Swathi — Coimbatore',      type: 'image', src: 'https://res.cloudinary.com/duvkbm8jv/image/upload/q_auto/f_auto/v1775647405/ASP01669_qkkznm.jpg' },
  { title: 'Queen of the Day — Special Edition',type: 'video', src: 'https://res.cloudinary.com/duvkbm8jv/video/upload/q_auto/f_auto/v1775649262/Here_comes_the_queen_of_the_day_radiant_graceful_and_ready_for_forever._WeddingPhotography_wuw3sm.mp4' },
  { title: 'Surya & Kavya — Kerala',            type: 'image', src: 'https://res.cloudinary.com/duvkbm8jv/image/upload/q_auto/f_auto/v1775647617/HSP02747_anwumk.jpg' },
  { title: 'Akhil & Meera — Trichy',            type: 'image', src: 'https://res.cloudinary.com/duvkbm8jv/image/upload/q_auto/f_auto/v1775647548/AKZ04700_d6ny6b.jpg' }
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
    const tag = c.pageUrl ? 'a' : 'div'
    const hrefAttr = c.pageUrl ? `href="${c.pageUrl}"` : ''
    grid.innerHTML += `
      <${tag} ${hrefAttr} class="service-card reveal" style="transition-delay:${i * 0.08}s; cursor:${c.pageUrl ? 'pointer' : 'default'}; text-decoration:none;">
        <div class="card-bg" style="background-image:url('${c.img}');"></div>
        <div class="card-overlay"></div>
        <div class="card-body">
          <div class="card-icon">${c.icon}</div>
          <h3>${c.title}</h3>
          <p class="card-desc">${c.desc}</p>
          ${c.pageUrl ? '<span class="card-link-hint">View Gallery →</span>' : ''}
        </div>
      </${tag}>
    `
  })
}

function buildReels() {
  const grid = document.getElementById('reels-grid')
  if (!grid) return
  cinematicReels.forEach((r, i) => {
    grid.innerHTML += `
      <div class="reel-card reveal" style="transition-delay:${(i % 4) * 0.08}s">
        <video src="${r.src}" autoplay muted loop playsinline></video>
        <div class="reel-overlay"></div>
        <div class="reel-info">
          <h3>${r.title}</h3>
          <p>${r.desc}</p>
        </div>
      </div>
    `
  })
}

function buildFeatured() {
  const track = document.getElementById('featured-track')
  if (!track) return
  featuredWeddings.forEach(f => {
    const mediaHTML = f.type === 'video'
      ? `<video src="${f.src}" autoplay muted loop playsinline></video>`
      : `<div class="media-fill" style="background-image:url('${f.src}');"></div>`

    track.innerHTML += `
      <div class="featured-item">
        ${mediaHTML}
        <div class="featured-caption">${f.title}</div>
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
          <a href="https://share.google/evY1kSfNTr4hER01z" target="_blank" rel="noopener" class="google-badge" title="See our Google Reviews">\n            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>\n            Google\n          </a>
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

  // Story card stagger reveal — use fromTo so GSAP explicitly sets the end state
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

  // Horizontal scroll for featured on desktop only
  if (window.innerWidth > 768) {
    const track = document.getElementById('featured-track')
    const wrap  = document.getElementById('featured-scroll')
    if (track && wrap) {
      const totalScroll = track.scrollWidth - window.innerWidth
      gsap.to(track, {
        x: -totalScroll,
        ease: 'none',
        scrollTrigger: {
          trigger: '#featured',
          start: 'top top',
          end: () => `+=${totalScroll}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true
        }
      })
    }
  }
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
  buildReels()
  buildFeatured()
  buildTestimonials()

  // Interactions
  initNav()
  initHamburger()
  initDragScroll()
  initContactForm()
  initReveal()
  initFAB()

  // Animations
  initGSAP()
  initLenis()
}

document.addEventListener('DOMContentLoaded', init)
