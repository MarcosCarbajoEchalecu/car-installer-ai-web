import { WHATSAPP_LINK } from '../constants'

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden border-b border-white/10"
      style={{
        backgroundColor: '#0D0D0D',
        backgroundImage:
          'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
        backgroundSize: '48px 48px',
      }}
    >
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/10 to-transparent pointer-events-none" />
      <div className="absolute -right-24 -top-24 w-[420px] h-[420px] border border-accent/20 rotate-45 pointer-events-none" />

      <div
  aria-hidden="true"
  className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-[10%] pointer-events-none select-none opacity-[0.15]"
  style={{ width: 'clamp(14rem, 30vw, 34rem)' }}
>
  <img src="/logo-cr.png" alt="" className="w-full h-auto" />
</div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="flex items-center gap-3 mb-6 animate-fade-in-up" style={{ animationDelay: '0ms' }}>
          <span className="w-8 h-[3px] bg-accent" />
          <span className="font-heading text-sm tracking-[0.25em] text-muted">MADRID · MULTIMARCA · DESDE 2018</span>
        </div>

        <h1
          className="font-heading font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] max-w-4xl animate-fade-in-up"
          style={{ animationDelay: '150ms' }}
        >
          Instalación de radios, pantallas y sensores{' '}
          <span className="text-accent">a domicilio</span> en Madrid
        </h1>

        <p
          className="mt-6 text-lg md:text-xl text-muted max-w-2xl font-body animate-fade-in-up"
          style={{ animationDelay: '350ms' }}
        >
          Audio, seguridad y estética para tu coche. Multimarca, desde 2018.
        </p>

        <div
          className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-up"
          style={{ animationDelay: '500ms' }}
        >
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-white font-heading text-base tracking-[0.15em] px-8 py-4 text-center transition-all duration-200 hover:bg-white hover:text-bg hover:scale-[1.02]"
          >
            Consulta precios
          </a>
          <a
            href="#services"
            className="border border-white text-white font-heading text-base tracking-[0.15em] px-8 py-4 text-center transition-all duration-200 hover:bg-white hover:text-bg hover:scale-[1.02]"
          >
            Ver servicios
          </a>
        </div>
      </div>
    </section>
  )
}
