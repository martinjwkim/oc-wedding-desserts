const testimonials = [
  {
    quote: '"The macarons were absolutely stunning — guests kept asking where they came from. Every single one was perfection."',
    name: 'Sophia & James',
    date: 'Married October 2024',
    initial: 'S',
    delay: '',
    offset: '',
  },
  {
    quote: '"Our custom dessert table had cookies that matched our invitations exactly. People thought they were too pretty to eat!"',
    name: 'Madison & Tyler',
    date: 'Married June 2024',
    initial: 'M',
    delay: 'reveal-d1',
    offset: '',
  },
  {
    quote: '"From our first tasting to the big day, the experience was effortless and joyful. The petit fours were a highlight of our reception."',
    name: 'Ava & Daniel',
    date: 'Married March 2024',
    initial: 'A',
    delay: 'reveal-d2',
    offset: '',
  },
]

export default function Testimonials() {
  return (
    <section
      className="py-28 md:py-36 px-6"
      style={{ background: 'linear-gradient(135deg, #F7F1EB 0%, #FAF6F0 50%, #F3E5E1 100%)' }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="reveal font-body text-champagne mb-4"
             style={{ fontSize: '0.65rem', letterSpacing: '0.38em', textTransform: 'uppercase' }}>
            Happy Couples
          </p>
          <h2 className="reveal reveal-d1 font-display font-light text-charcoal"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', letterSpacing: '-0.02em' }}>
            Words from Our Brides
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(({ quote, name, date, initial, delay, offset }) => (
            <div
              key={name}
              className={`testi-card relative bg-warmwhite rounded-2xl px-8 pt-12 pb-8 flex flex-col reveal ${delay} ${offset}`}
              style={{ boxShadow: '0 4px 24px -4px rgba(201,169,110,0.1), 0 1px 4px rgba(0,0,0,0.04)' }}
            >

              <p className="font-display text-charcoal italic font-light leading-relaxed mb-6 relative z-10 grow"
                 style={{ fontSize: '1.15rem' }}>
                {quote}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-blush flex items-center justify-center shrink-0">
                  <span className="font-display text-rose font-medium" style={{ fontSize: '0.95rem' }}>{initial}</span>
                </div>
                <div>
                  <p className="font-body text-charcoal font-medium" style={{ fontSize: '0.82rem' }}>{name}</p>
                  <p className="font-body text-fog" style={{ fontSize: '0.72rem' }}>{date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
