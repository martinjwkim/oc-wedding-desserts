export default function About() {
  return (
    <section
      id="about"
      className="py-28 md:py-36 px-6"
      style={{ background: 'radial-gradient(ellipse 90% 60% at 50% 0%, rgba(234,197,192,0.22) 0%, transparent 60%), #FDFAF7' }}
    >
      <div className="max-w-2xl mx-auto text-center">
        <p className="reveal font-body text-champagne mb-4"
           style={{ fontSize: '0.65rem', letterSpacing: '0.38em', textTransform: 'uppercase' }}>
          Our Story
        </p>

        <h2 className="reveal reveal-d1 font-display font-light text-charcoal leading-tight mb-5"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', letterSpacing: '-0.02em' }}>
          Made with Love,<br />
          <em className="italic">Savored for a Lifetime</em>
        </h2>

        <div className="reveal reveal-d2 flex items-center justify-center gap-4 mb-8">
          <div className="fl-line" style={{ maxWidth: '36px' }} />
          <div className="w-1.5 h-1.5 rounded-full bg-champagne" />
          <div className="fl-line" style={{ maxWidth: '36px' }} />
        </div>

        <p className="reveal reveal-d2 font-body text-muted leading-[1.85] mb-5"
           style={{ fontSize: '1rem', fontWeight: 300 }}>
          We believe every wedding deserves a sweet ending as beautiful as the vows exchanged.
          Based in Orange County, we craft each macaron, petit four, cupcake, and cookie by hand —
          using time-honored recipes, seasonal ingredients, and an obsessive eye for detail.
        </p>

        <p className="reveal reveal-d3 font-body text-muted leading-[1.85]"
           style={{ fontSize: '1rem', fontWeight: 300 }}>
          From intimate garden ceremonies to grand ballroom celebrations, we work closely with every couple
          to design a dessert experience that reflects their unique story and delights every single guest.
        </p>
      </div>
    </section>
  )
}
