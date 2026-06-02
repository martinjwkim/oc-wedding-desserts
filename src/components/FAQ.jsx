import { useState } from 'react'

const faqs = [
  {
    q: `How far in advance should I place my order?`,
    a: `We recommend booking at least 3–6 months before your wedding date. For peak season (April–June and September–November) or highly customized orders, 6 months or more gives us the best opportunity to bring your vision to life without compromise.`,
  },
  {
    q: `Do you offer tastings?`,
    a: `Yes — we offer complimentary tasting consultations where you'll sample our most-loved flavors and walk through design possibilities. It's a relaxed, joyful experience, and often the moment couples fall in love with a flavor combination they hadn't considered.`,
  },
  {
    q: `Can you match our wedding colors and theme?`,
    a: `Absolutely. From the precise shell color of a macaron to the hand-painted details on a royal icing cookie, our decorators work directly from your inspiration board, florals, or stationery to make every piece feel unmistakably yours.`,
  },
  {
    q: `How many pieces should we order per guest?`,
    a: `For a dedicated dessert table, we suggest 2–3 pieces per guest. If desserts will accompany a wedding cake, 1–2 pieces per guest typically works well. We'll help you plan the perfect quantities during your consultation so nothing is wasted and no one goes without.`,
  },
  {
    q: `Do you deliver and set up at the venue?`,
    a: `Yes. We handle full delivery and display setup throughout Orange County and neighboring areas including Los Angeles, Riverside, and San Diego counties. We arrive early, arrange everything beautifully, and make sure the table looks exactly as planned before guests arrive.`,
  },
  {
    q: `Are allergen-friendly options available?`,
    a: `We offer gluten-free and nut-free options on select items. Please share any dietary needs or allergies when you reach out — we'll do our best to ensure every guest at your celebration can enjoy something sweet.`,
  },
  {
    q: `What is your minimum order?`,
    a: `Our minimum is 3 dozen pieces for à la carte orders. Full dessert table packages are priced based on guest count and the mix of items you choose. We'll put together a custom quote after your consultation.`,
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section
      id="faq"
      className="py-28 md:py-36 px-6"
      style={{ background: 'linear-gradient(160deg, #FDFAF7 0%, #F7F1EB 100%)' }}
    >
      <div className="max-w-3xl mx-auto">

        <div className="text-center mb-16">
          <p
            className="reveal font-body text-champagne mb-4"
            style={{ fontSize: '0.65rem', letterSpacing: '0.38em', textTransform: 'uppercase' }}
          >
            Questions & Answers
          </p>
          <h2
            className="reveal reveal-d1 font-display font-light text-charcoal"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', letterSpacing: '-0.02em' }}
          >
            Frequently Asked Questions
          </h2>
        </div>

        <div className="flex flex-col reveal reveal-d2">
          {faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <div
                key={i}
                className="border-b"
                style={{ borderColor: 'rgba(201,169,110,0.2)' }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left flex items-start justify-between gap-6 py-6 group"
                  aria-expanded={isOpen}
                >
                  <span
                    className="font-display font-light text-charcoal leading-snug transition-colors duration-200"
                    style={{
                      fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                      color: isOpen ? '#C9A96E' : '#1C1917',
                    }}
                  >
                    {item.q}
                  </span>
                  <span
                    className="shrink-0 mt-1 flex items-center justify-center rounded-full border transition-all duration-300"
                    style={{
                      width: '28px',
                      height: '28px',
                      borderColor: isOpen ? '#C9A96E' : 'rgba(201,169,110,0.35)',
                      background: isOpen ? '#C9A96E' : 'transparent',
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    }}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path
                        d="M5 1v8M1 5h8"
                        stroke={isOpen ? '#fff' : '#C9A96E'}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </button>

                <div
                  style={{
                    maxHeight: isOpen ? '400px' : '0px',
                    overflow: 'hidden',
                    transition: 'max-height 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  }}
                >
                  <p
                    className="font-body text-muted leading-relaxed pb-6"
                    style={{ fontSize: '0.9rem', fontWeight: 300, lineHeight: 1.8 }}
                  >
                    {item.a}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
