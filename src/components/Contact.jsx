import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', date: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
    setForm({ name: '', email: '', date: '', message: '' })
    setTimeout(() => setSubmitted(false), 5500)
  }

  return (
    <section
      id="contact"
      className="py-28 md:py-36 px-6"
      style={{
        background: `
          radial-gradient(ellipse 80% 60% at 10% 80%, rgba(234,197,192,0.28) 0%, transparent 60%),
          radial-gradient(ellipse 60% 40% at 90% 20%, rgba(201,169,110,0.13) 0%, transparent 50%),
          #FDFAF7
        `,
      }}
    >
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-12">
          <p className="reveal font-body text-champagne mb-4"
             style={{ fontSize: '0.65rem', letterSpacing: '0.38em', textTransform: 'uppercase' }}>
            Let's Connect
          </p>
          <h2 className="reveal reveal-d1 font-display font-light text-charcoal mb-3"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', letterSpacing: '-0.02em' }}>
            Begin Your Sweet Journey
          </h2>
          <p className="reveal reveal-d2 font-body text-muted"
             style={{ fontSize: '0.9rem', fontWeight: 300, lineHeight: 1.75 }}>
            Tell us about your vision and we'll be in touch within 24 hours.
          </p>
          <a
            href="mailto:ocweddingdesserts@gmail.com"
            className="reveal reveal-d2 inline-block font-body text-champagne hover:text-rose transition-colors duration-200 mt-2"
            style={{ fontSize: '0.82rem', letterSpacing: '0.04em' }}
          >
            ocweddingdesserts@gmail.com
          </a>
        </div>

        <form onSubmit={handleSubmit} className="reveal reveal-d2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
            <div>
              <label className="font-body text-muted block mb-2" style={{ fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Emily & Michael"
                className="f-input w-full rounded-xl px-4 py-3.5 font-body text-charcoal"
                style={{ fontSize: '0.88rem' }}
                required
              />
            </div>
            <div>
              <label className="font-body text-muted block mb-2" style={{ fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@email.com"
                className="f-input w-full rounded-xl px-4 py-3.5 font-body text-charcoal"
                style={{ fontSize: '0.88rem' }}
                required
              />
            </div>
          </div>

          <div className="mb-5">
            <label className="font-body text-muted block mb-2" style={{ fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
              Wedding Date
            </label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="f-input w-full rounded-xl px-4 py-3.5 font-body text-charcoal"
              style={{ fontSize: '0.88rem' }}
            />
          </div>

          <div className="mb-8">
            <label className="font-body text-muted block mb-2" style={{ fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
              Tell Us About Your Vision
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              placeholder="Guest count, flavor preferences, dessert types, aesthetic — any details are helpful..."
              className="f-input w-full rounded-xl px-4 py-3.5 font-body text-charcoal resize-none"
              style={{ fontSize: '0.88rem' }}
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="btn-cta text-white font-body rounded-full px-12 py-4"
              style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}
            >
              Send Inquiry
            </button>
          </div>

          {submitted && (
            <div className="text-center mt-7">
              <p className="font-display text-champagne italic" style={{ fontSize: '1.25rem' }}>
                Thank you — we'll be in touch soon! ✦
              </p>
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
