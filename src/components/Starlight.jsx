export default function Starlight() {
  return (
    <section className="relative border-b border-white/10 bg-[#0A0A0A] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-24 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[3px] bg-accent" />
            <span className="font-heading text-sm tracking-[0.25em] text-muted">ACABADO PREMIUM</span>
          </div>
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl leading-tight mb-6">
            Iluminación <span className="text-accent">—</span> Ambiente
          </h2>
          <p className="text-lg text-muted max-w-md mb-4">
            Transforma el interior de tu coche con iluminación LED de ambiente personalizada.
            Colores a medida, integrados perfectamente en el habitáculo.
          </p>
          <ul className="flex flex-col gap-2 text-muted text-sm mb-8">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              Tiras LED bajo asientos y salpicadero
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              Iluminación completa del habitáculo
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              Colores personalizados según tu gusto
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              Techo estrellado estilo Rolls Royce
            </li>
          </ul>
          <a
            href="#contact"
            className="inline-block border border-accent text-accent font-heading text-sm tracking-[0.15em] px-7 py-3.5 hover:bg-accent hover:text-white transition-colors"
          >
            Pedir información
          </a>
        </div>

        <div className="relative aspect-[4/3] border border-white/10 overflow-hidden group">
          <img
            src="/iluminacion.jpg"
            alt="Luces de ambiente LED"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500" />
          <div className="absolute top-0 left-0 w-1 h-full bg-accent scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
          <div className="absolute bottom-0 left-0 right-0 px-4 py-3 border-t border-white/10">
            <span className="font-heading text-xs tracking-[0.2em] text-muted">TRABAJO REAL · MAZDA CX-30</span>
          </div>
        </div>

      </div>
    </section>
  )
}
