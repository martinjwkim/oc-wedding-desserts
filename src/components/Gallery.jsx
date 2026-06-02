import { useState, useEffect, useRef } from 'react'

const images = [
  { url: 'https://images.unsplash.com/photo-1698599620219-bdcdb0a1863f?w=1200&h=800&fit=crop&q=80&auto=format', alt: 'Pink macarons' },
  { url: 'https://images.unsplash.com/photo-1561940329-7382e6704231?w=1200&h=800&fit=crop&q=80&auto=format', alt: 'Assorted pastries' },
  { url: 'https://images.unsplash.com/photo-1769812343484-df7391e843d6?w=1200&h=800&fit=crop&q=80&auto=format', alt: 'Tiered desserts' },
  { url: 'https://images.unsplash.com/photo-1778341406119-c8d2b3aad980?w=1200&h=800&fit=crop&q=80&auto=format', alt: 'White chocolate bites' },
  { url: 'https://images.unsplash.com/photo-1613067532415-90df85362423?w=1200&h=800&fit=crop&q=80&auto=format', alt: 'Cupcakes on tray' },
  { url: 'https://images.unsplash.com/photo-1734180206659-ad037b2024fe?w=1200&h=800&fit=crop&q=80&auto=format', alt: 'Decorated cookies' },
]

export default function Gallery() {
  const [current, setCurrent] = useState(0)
  const intervalRef = useRef(null)
  const touchStartX = useRef(null)

  const startAutoPlay = () => {
    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setCurrent(i => (i + 1) % images.length)
    }, 5000)
  }

  useEffect(() => {
    startAutoPlay()
    return () => clearInterval(intervalRef.current)
  }, [])

  const go = (index) => {
    setCurrent((index + images.length) % images.length)
    startAutoPlay()
  }

  const prev = () => go(current - 1)
  const next = () => go(current + 1)

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX }
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(dx) > 40) dx < 0 ? next() : prev()
    touchStartX.current = null
  }

  return (
    <section id="gallery" className="py-28 md:py-36 px-6" style={{ background: '#FDFAF7' }}>
      <div className="max-w-2xl mx-auto">

        <div className="text-center mb-14">
          <p className="reveal font-body text-champagne mb-4"
             style={{ fontSize: '0.65rem', letterSpacing: '0.38em', textTransform: 'uppercase' }}>
            Our Work
          </p>
          <h2 className="reveal reveal-d1 font-display font-light text-charcoal"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', letterSpacing: '-0.02em' }}>
            A Taste of What's Possible
          </h2>
        </div>

        {/* Carousel */}
        <div className="reveal reveal-d2">
          {/* Main slide */}
          <div
            className="relative overflow-hidden rounded-2xl"
            style={{ aspectRatio: '3/2', boxShadow: '0 24px 60px -12px rgba(180,112,106,0.2), 0 8px 24px -6px rgba(201,169,110,0.12)' }}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {/* Slide track */}
            <div
              className="flex h-full"
              style={{
                transform: `translateX(-${current * 100}%)`,
                transition: 'transform 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              }}
            >
              {images.map((img) => (
                <div key={img.url} className="shrink-0 w-full h-full">
                  <img src={img.url} alt={img.alt} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>

            {/* Gradient vignette */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'linear-gradient(to bottom, transparent 55%, rgba(28,25,23,0.35))' }}
            />

            {/* Prev button */}
            <button
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full transition-all duration-200"
              style={{
                width: '44px', height: '44px',
                background: 'rgba(253,250,247,0.82)',
                backdropFilter: 'blur(8px)',
                boxShadow: '0 2px 12px rgba(0,0,0,0.12)',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(253,250,247,0.98)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(253,250,247,0.82)'}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 13L5 8l5-5" stroke="#1C1917" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Next button */}
            <button
              onClick={next}
              aria-label="Next image"
              className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full transition-all duration-200"
              style={{
                width: '44px', height: '44px',
                background: 'rgba(253,250,247,0.82)',
                backdropFilter: 'blur(8px)',
                boxShadow: '0 2px 12px rgba(0,0,0,0.12)',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(253,250,247,0.98)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(253,250,247,0.82)'}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3l5 5-5 5" stroke="#1C1917" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Dot indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  aria-label={`Go to image ${i + 1}`}
                  style={{
                    height: '6px',
                    width: i === current ? '22px' : '6px',
                    borderRadius: '3px',
                    background: i === current ? '#C9A96E' : 'rgba(255,255,255,0.55)',
                    transition: 'width 0.35s cubic-bezier(0.25,0.46,0.45,0.94), background 0.35s ease',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Thumbnail strip */}
          <div className="flex gap-3 mt-4 justify-center">
            {images.map((img, i) => (
              <button
                key={img.url}
                onClick={() => go(i)}
                aria-label={img.alt}
                className="shrink-0 overflow-hidden rounded-lg"
                style={{
                  width: '72px', height: '52px',
                  outline: i === current ? '2px solid #C9A96E' : '2px solid transparent',
                  outlineOffset: '2px',
                  opacity: i === current ? 1 : 0.55,
                  transition: 'opacity 0.3s ease, outline-color 0.3s ease',
                }}
                onMouseEnter={e => { if (i !== current) e.currentTarget.style.opacity = '0.8' }}
                onMouseLeave={e => { if (i !== current) e.currentTarget.style.opacity = '0.55' }}
              >
                <img src={img.url} alt={img.alt} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
