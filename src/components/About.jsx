export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <div className="relative aspect-[3/4] max-w-md mx-auto md:mx-0 w-full overflow-hidden group">
  <img
    src="/cesar.jpg"
    alt="César Ramón trabajando"
    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
  />
  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100">
    <p className="text-white font-heading font-bold text-xl">César Ramón</p>
    <p className="text-white/70 text-sm">Instalador profesional · Desde 2018</p>
  </div>
  <div className="absolute top-0 left-0 w-1 h-full bg-accent scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
</div>

        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[3px] bg-accent" />
            <span className="font-heading text-sm tracking-[0.25em] text-muted">QUIÉN SOY</span>
          </div>
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl mb-6">Sobre César Ramón</h2>
          <div className="flex flex-col gap-4 text-muted text-lg">
            <p>
              Instalador profesional de accesorios para coche desde <span className="text-white">2018</span>.
              Trabajo con todas las marcas y modelos, aportando la misma atención al detalle en cada
              instalación.
            </p>
            <p>
              Ofrezco un <span className="text-white">servicio a domicilio</span>: me desplazo hasta donde
              estés para que no pierdas tiempo. Tengo mi base en el barrio de{' '}
              <span className="text-white">Latina, Madrid Sur</span>, y cubro toda la Comunidad de Madrid.
            </p>
            <p>
              Cada trabajo se hace con seriedad y cercanía, para que confíes tu coche igual que confiarías
              en un amigo del oficio.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}