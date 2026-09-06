import { useState } from 'react'
import { WHATSAPP_LINK } from '../constants'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const texto = `Hola César, te escribo desde tu web.%0ANombre: ${form.name}%0ATeléfono: ${form.phone}%0AMensaje: ${form.message}`
    window.open(`https://wa.me/34608823537?text=${texto}`, '_blank')
    setSent(true)
  }

  return (
    <section id="contact" className="py-24 md:py-32 border-b border-white/10 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading font-extrabold text-4xl md:text-6xl mb-6">
            ¿Listo para mejorar tu coche?
          </h2>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-accent text-white font-heading text-base tracking-[0.15em] px-8 py-4 hover:bg-white hover:text-bg transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.13-2.9-7C17.17 3.03 14.69 2 12.04 2Zm0 18.06h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.14.82.84-3.06-.2-.31a8.17 8.17 0 0 1-1.26-4.37c0-4.52 3.68-8.2 8.27-8.2 2.21 0 4.28.86 5.84 2.42a8.18 8.18 0 0 1 2.42 5.79c0 4.52-3.69 8.24-8.27 8.24Zm4.53-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.17.24-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.03-.38-1.97-1.21-.73-.65-1.22-1.45-1.36-1.7-.14-.24-.02-.37.11-.5.11-.11.25-.29.37-.43.12-.14.16-.24.24-.4.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.42-.14 0-.31-.01-.48-.01-.17 0-.43.06-.66.31-.23.24-.86.85-.86 2.06 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.53.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.68-1.19.21-.58.21-1.08.14-1.19-.06-.11-.23-.17-.48-.29Z" />
            </svg>
            Escríbenos por WhatsApp
          </a>
        </div>

        <div className="max-w-xl mx-auto">
          {sent ? (
            <div className="border border-accent/40 bg-bg p-8 text-center">
              <p className="font-heading text-xl tracking-[0.1em] text-accent mb-2">¡Mensaje enviado!</p>
              <p className="text-muted">Te responderemos lo antes posible.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label className="block font-heading text-sm tracking-[0.15em] text-muted mb-2" htmlFor="name">
                  Nombre
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full bg-bg border border-white/15 px-4 py-3 text-white placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block font-heading text-sm tracking-[0.15em] text-muted mb-2" htmlFor="phone">
                  Teléfono
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full bg-bg border border-white/15 px-4 py-3 text-white placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
                  placeholder="600 000 000"
                />
              </div>
              <div>
                <label className="block font-heading text-sm tracking-[0.15em] text-muted mb-2" htmlFor="message">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={handleChange}
                  className="w-full bg-bg border border-white/15 px-4 py-3 text-white placeholder:text-muted focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Cuéntanos qué necesitas..."
                />
              </div>
              <button
                type="submit"
                className="bg-accent text-white font-heading text-base tracking-[0.15em] px-8 py-4 hover:bg-white hover:text-bg transition-colors"
              >
                Enviar
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
