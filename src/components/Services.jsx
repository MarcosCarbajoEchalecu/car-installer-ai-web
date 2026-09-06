const SERVICES = [
  {
    title: 'Audio & Sonido',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="2">
        <rect x="6" y="6" width="36" height="36" strokeLinejoin="miter" />
        <circle cx="24" cy="24" r="9" />
        <circle cx="24" cy="24" r="2" fill="currentColor" />
        <circle cx="13" cy="13" r="2" fill="currentColor" />
      </svg>
    ),
    items: [
      'Sistemas multimedia (pantallas)',
      'Radios y autorradios',
      'Amplificadores y etapas de potencia',
      'Sistemas de audio Bose y originales',
    ],
  },
  {
    title: 'Seguridad & Confort',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="2">
        <path d="M24 5 L41 12 V24 C41 34 33 41 24 44 C15 41 7 34 7 24 V12 Z" strokeLinejoin="miter" />
        <path d="M16 24 L21 29 L32 18" strokeLinejoin="miter" />
      </svg>
    ),
    items: ['Sensores de aparcamiento', 'Alarmas', 'Cierre centralizado'],
  },
  {
    title: 'Estética & Iluminación',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="2">
        <path d="M24 6 L27 18 L39 18 L29 25 L33 37 L24 29 L15 37 L19 25 L9 18 L21 18 Z" strokeLinejoin="miter" />
      </svg>
    ),
    items: [
      'Luces de ambiente',
      'Techo estrellado estilo Rolls Royce',
      'Montaje de faros y cambio de bombillas',
    ],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-[3px] bg-accent" />
          <span className="font-heading text-sm tracking-[0.25em] text-muted">LO QUE HACEMOS</span>
        </div>
        <h2 className="font-heading font-extrabold text-4xl md:text-5xl mb-16">Servicios</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="bg-[#1A1A1A] border border-white/10 border-l-4 border-l-transparent p-8 md:p-10 flex flex-col gap-6 transition-all duration-300 hover:bg-[#232323] hover:border-l-accent hover:-translate-y-1"
            >
              <div className="text-accent">{service.icon}</div>
              <div className="flex flex-col gap-3">
                <h3 className="font-heading font-bold text-2xl">{service.title}</h3>
                <span className="w-10 h-[2px] bg-accent" />
              </div>
              <ul className="flex flex-col gap-3">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted">
                    <span className="mt-2 w-1.5 h-1.5 bg-accent shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
