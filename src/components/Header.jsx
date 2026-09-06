import { useEffect, useState } from 'react'
import { WHATSAPP_LINK } from '../constants'

const NAV_LINKS = [
  { label: 'Servicios', href: '#services' },
  { label: 'Galería', href: '#gallery' },
  { label: 'Sobre mí', href: '#about' },
  { label: 'Contacto', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-200 ${
        scrolled ? 'bg-bg/95 backdrop-blur border-white/10' : 'bg-bg border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16 md:h-20">
        <a href="#">
  <img 
    src="/logo-cr.png" 
    alt="César Ramón" 
    className="h-10 md:h-12 w-auto object-contain"
  />
</a>

        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-heading text-sm tracking-[0.15em] text-muted hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block bg-accent text-white font-heading text-sm tracking-[0.15em] px-5 py-2.5 hover:bg-white hover:text-bg transition-colors"
        >
          Consulta precios
        </a>

        <button
          className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8"
          aria-label="Abrir menú"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className={`h-0.5 w-full bg-white transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`h-0.5 w-full bg-white transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-full bg-white transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-surface border-t border-white/10 px-6 py-6 flex flex-col gap-5">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-heading text-lg tracking-[0.1em] text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-white font-heading text-sm tracking-[0.15em] px-5 py-3 text-center"
          >
            Consulta precios
          </a>
        </div>
      )}
    </header>
  )
}
