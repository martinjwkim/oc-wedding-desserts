export default function Footer() {
  return (
    <footer className="py-10 px-6 bg-warmwhite" style={{ borderTop: '1px solid rgba(201,169,110,0.18)' }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-center md:items-start">
          <span className="font-display text-charcoal" style={{ fontSize: '1rem', letterSpacing: '0.02em' }}>
            OC Wedding Desserts
          </span>
          <span className="font-body text-fog mt-0.5" style={{ fontSize: '0.68rem', letterSpacing: '0.1em' }}>
            Orange County, California
          </span>
        </div>

        <div className="flex items-center gap-2 text-champagne/40">
          <div style={{ width: '16px', height: '1px', background: 'currentColor' }} />
          <span style={{ fontSize: '0.7rem' }}>✦</span>
          <div style={{ width: '16px', height: '1px', background: 'currentColor' }} />
        </div>

        <p className="font-body text-fog" style={{ fontSize: '0.68rem', letterSpacing: '0.08em' }}>
          © 2025 OC Wedding Desserts. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
