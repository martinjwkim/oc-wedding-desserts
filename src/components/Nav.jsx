import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#about', label: 'About' },
    { href: '#specialties', label: 'Specialties' },
    { href: '#gallery', label: 'Gallery' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5 transition-all duration-[450ms] ease-in-out ${scrolled ? 'navbar-scrolled' : ''}`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <a href="#" className="flex flex-col leading-none select-none">
          <span
            className="font-display transition-colors duration-[450ms]"
            style={{ fontSize: '1.05rem', letterSpacing: '0.04em', fontWeight: 400, color: scrolled ? '#1C1917' : 'rgba(255,255,255,0.95)' }}
          >
            OC Wedding
          </span>
          <span
            className="font-body transition-colors duration-[450ms]"
            style={{ fontSize: '0.62rem', letterSpacing: '0.28em', textTransform: 'uppercase', fontWeight: 400, color: scrolled ? '#C9A96E' : 'rgba(255,255,255,0.7)' }}
          >
            Desserts
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="font-body transition-colors duration-[450ms]"
              style={{ fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: scrolled ? '#7C6B65' : 'rgba(255,255,255,0.8)' }}
              onMouseEnter={e => { e.currentTarget.style.color = scrolled ? '#1C1917' : 'rgba(255,255,255,1)' }}
              onMouseLeave={e => { e.currentTarget.style.color = scrolled ? '#7C6B65' : 'rgba(255,255,255,0.8)' }}
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-cta text-white font-body rounded-full px-7 py-2.5"
            style={{ fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}
          >
            Get in Touch
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(v => !v)}
          className="md:hidden p-2 rounded-full transition-colors"
          style={{ background: scrolled ? 'transparent' : 'rgba(255,255,255,0.1)' }}
          aria-label="Toggle menu"
        >
          <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
            <path d="M1 1h18M1 7h18M1 13h18" stroke={scrolled ? '#1C1917' : 'white'} strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-3 pb-3 border-t border-champagne/20 pt-4 px-2">
          <div className="flex flex-col gap-5">
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="font-body text-muted"
                style={{ fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="font-body text-muted"
              style={{ fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
