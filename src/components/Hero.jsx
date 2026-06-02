import { useEffect } from 'react'

export default function Hero() {
  useEffect(() => {
    const heroImg = document.getElementById('hero-img')
    const onScroll = () => {
      if (heroImg) heroImg.style.transform = `scale(1.08) translateY(${window.scrollY * 0.22}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="relative h-screen min-h-[620px] overflow-hidden flex items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          id="hero-img"
          src="https://images.unsplash.com/photo-1757283582859-8e194707da16?w=1920&h=1080&fit=crop&q=80&auto=format"
          alt="Elegant wedding dessert spread"
          className="w-full h-full object-cover"
          style={{ transform: 'scale(1.08) translateY(0px)', transformOrigin: 'center center' }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(28,25,23,0.25) 0%, rgba(28,25,23,0.1) 40%, rgba(28,25,23,0.52) 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 100% 70% at 50% 110%, rgba(28,25,23,0.55) 0%, transparent 65%)' }} />
        <div className="absolute inset-0 bg-rose/10" style={{ mixBlendMode: 'multiply' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <p className="hero-eyebrow font-body text-champagne/90 mb-5"
           style={{ fontSize: '0.68rem', letterSpacing: '0.38em', textTransform: 'uppercase' }}>
          Orange County, California
        </p>

        <h1 className="hero-heading font-display font-light text-white leading-none mb-6"
            style={{ fontSize: 'clamp(2.6rem, 7vw, 5.5rem)', letterSpacing: '-0.02em' }}>
          <em className="italic" style={{ fontWeight: 300 }}>Orange County</em><br />
          <p style={{ fontWeight: 300 }}>Wedding Desserts</p>
        </h1>

        <div className="hero-flourish flex items-center justify-center gap-4 mb-7">
          <div className="fl-line" />
          <span className="text-champagne" style={{ fontSize: '0.85rem' }}>✦</span>
          <div className="fl-line" />
        </div>

        <p className="hero-tagline font-body text-white/80 leading-[1.8] mb-10"
           style={{ fontSize: '1rem', fontWeight: 300 }}>
          Handcrafted sweetness for your most cherished celebration.<br className="hidden md:block" />
          Every bite, a memory made to last forever.
        </p>

        <div className="hero-cta">
          <a href="#contact" className="btn-cta inline-block text-white font-body rounded-full px-11 py-4"
             style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/45 font-body" style={{ fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase' }}>Scroll</span>
        <div className="scroll-line" style={{ width: '1px', height: '36px', background: 'linear-gradient(to bottom, rgba(255,255,255,0.45), transparent)' }} />
      </div>
    </section>
  )
}
