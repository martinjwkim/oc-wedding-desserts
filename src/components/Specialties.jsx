const items = [
  {
    name: 'Macarons',
    description: 'Delicate Parisian shells in seasonal flavors — rose lychee, lavender honey, champagne, and beyond.',
    img: 'https://images.unsplash.com/photo-1558326567-98ae2405596b?w=600&h=800&fit=crop&q=80&auto=format',
    offset: '',
  },
  {
    name: 'Petit Fours',
    description: 'Jewel-like miniature cakes glazed in fondant — each one a tiny, exquisite work of edible art.',
    img: 'https://images.unsplash.com/photo-1548741448-9f4e87b7f7ab?w=600&h=800&fit=crop&q=80&auto=format',
    offset: 'lg:mt-8',
  },
  {
    name: 'Cupcakes',
    description: 'Moist, golden-crumbed cupcakes crowned with sculptural buttercream in your wedding palette.',
    img: 'https://images.unsplash.com/photo-1543287920-26349b5b1376?w=600&h=800&fit=crop&q=80&auto=format',
    offset: '',
  },
  {
    name: 'Custom Cookies',
    description: 'Hand-decorated royal icing cookies shaped and painted to match your motif — perfect as favors.',
    img: 'https://images.unsplash.com/photo-1734180206659-ad037b2024fe?w=600&h=800&fit=crop&q=80&auto=format',
    offset: 'lg:mt-8',
  },
]

export default function Specialties() {
  return (
    <section id="specialties" className="py-28 md:py-36 px-6" style={{ background: '#F7F1EB' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="reveal font-body text-champagne mb-4"
             style={{ fontSize: '0.65rem', letterSpacing: '0.38em', textTransform: 'uppercase' }}>
            What We Create
          </p>
          <h2 className="reveal reveal-d1 font-display font-light text-charcoal"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', letterSpacing: '-0.02em' }}>
            Our Specialties
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ name, description, img, offset }, i) => (
            <div
              key={name}
              className={`spec-card bg-warmwhite rounded-2xl overflow-hidden reveal ${offset} reveal-d${i}`}
              style={{ boxShadow: '0 4px 28px -6px rgba(201,169,110,0.14), 0 1px 6px -2px rgba(0,0,0,0.05)' }}
            >
              <div className="relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
                <img src={img} alt={name} className="w-full h-full object-cover" />
                <div className="card-overlay absolute inset-0 bg-gradient-to-t from-charcoal/65 via-transparent to-transparent" style={{ opacity: 0.72 }} />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-display text-white italic font-light" style={{ fontSize: '1.5rem' }}>{name}</h3>
                </div>
              </div>
              <div className="p-5">
                <p className="font-body text-muted leading-relaxed" style={{ fontSize: '0.83rem', fontWeight: 300 }}>
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
