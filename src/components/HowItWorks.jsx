const STEPS = [
  {
    n: '01',
    title: 'Consulta',
    text: 'Pregunta por precios a través del bot de WhatsApp.',
  },
  {
    n: '02',
    title: 'Presupuesto',
    text: 'Recibe un presupuesto estimado al instante.',
  },
  {
    n: '03',
    title: 'Coordinamos',
    text: 'Acordamos día y hora para la instalación en tu ubicación.',
  },
  {
    n: '04',
    title: 'Instalación',
    text: 'César se desplaza hasta ti y realiza la instalación completa.',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-24 md:py-32 border-b border-white/10 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-[3px] bg-accent" />
          <span className="font-heading text-sm tracking-[0.25em] text-muted">PROCESO</span>
        </div>
        <h2 className="font-heading font-extrabold text-4xl md:text-5xl mb-16">Cómo funciona</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0">
          {STEPS.map((step, i) => (
            <div key={step.n} className="relative md:px-6 first:pl-0 last:pr-0">
              {i < STEPS.length - 1 && (
                <span className="hidden md:block absolute top-6 right-0 w-6 h-px bg-accent/40 translate-x-1/2" />
              )}
              <span className="font-heading text-5xl font-black text-accent/30">{step.n}</span>
              <h3 className="font-heading font-bold text-2xl mt-3 mb-2">{step.title}</h3>
              <p className="text-muted">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
