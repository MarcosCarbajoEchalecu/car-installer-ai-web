export default function Gallery() {
  const trabajos = [
    { id: 1, src: "/trabajo1.jpg", titulo: "Instalación de radio en Porsche Macan", desc: "Sistema multimedia premium" },
    { id: 2, src: "/trabajo2.jpg", titulo: "Toyota radio Bluetooth", desc: "Sistema multimedia" },
    { id: 3, src: "/trabajo3.jpg", titulo: "Mercedes con cámara trasera", desc: "Pantalla + cámara 360°" },
    { id: 4, src: "/trabajo4.jpg", titulo: "Fiat 500 con pantalla", desc: "Android Auto instalado" },
    { id: 5, src: "/trabajo5.jpg", titulo: "Altavoces Hertz", desc: "Audio de alta fidelidad" },
    { id: 7, src: "/trabajo7.jpg", titulo: "Sensores de aparcamiento", desc: "Instalación en parachoques trasero" },
  ]

  return (
    <section id="gallery" className="py-24 md:py-32 border-b border-white/10"
      style={{ backgroundColor: "#0D0D0D" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-[3px] bg-accent" />
          <span className="font-heading text-sm tracking-[0.25em] text-muted">NUESTRO TRABAJO</span>
        </div>
        <h2 className="font-heading font-black text-4xl md:text-5xl mb-12">GALERÍA</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {trabajos.map((t) => (
            <div key={t.id}
              className="relative overflow-hidden group cursor-pointer"
              style={{ aspectRatio: "4/3" }}>
              <img
                src={t.src}
                alt={t.titulo}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100">
                <p className="text-white font-heading font-bold text-lg">{t.titulo}</p>
                <p className="text-white/70 text-sm">{t.desc}</p>
              </div>
              <div className="absolute top-0 left-0 w-1 h-full bg-accent scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}