export default function Coverage() {
  return (
    <section className="py-24 md:py-32 border-b border-white/10"
      style={{ backgroundColor: "#0D0D0D" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-[3px] bg-accent" />
          <span className="font-heading text-sm tracking-[0.25em] text-muted">COBERTURA</span>
        </div>
        <h2 className="font-heading font-black text-4xl md:text-5xl mb-4">¿DÓNDE TRABAJAMOS?</h2>
        <p className="text-muted text-lg mb-10">
          Toda Madrid, principalmente <span className="text-white font-bold">Madrid Sur</span>. Base en el barrio de <span className="text-white font-bold">Latina</span>.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

          {/* Info */}
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4 p-6 border border-white/10"
              style={{ backgroundColor: "#1A1A1A" }}>
              <div className="w-10 h-10 flex items-center justify-center shrink-0"
                style={{ backgroundColor: "#F5163C" }}>
                <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <div>
                <p className="text-white font-bold font-heading mb-1">Base de operaciones</p>
                <p className="text-muted text-sm">Calle Poema Sinfónico, Latina, Madrid 28054</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 border border-white/10"
              style={{ backgroundColor: "#1A1A1A" }}>
              <div className="w-10 h-10 flex items-center justify-center shrink-0"
                style={{ backgroundColor: "#F5163C" }}>
                <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                </svg>
              </div>
              <div>
                <p className="text-white font-bold font-heading mb-1">Zona de cobertura</p>
                <p className="text-muted text-sm">Toda la Comunidad de Madrid. Principalmente Madrid Sur — Latina, Carabanchel, Usera, Vallecas y alrededores.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 border border-white/10"
              style={{ backgroundColor: "#1A1A1A" }}>
              <div className="w-10 h-10 flex items-center justify-center shrink-0"
                style={{ backgroundColor: "#F5163C" }}>
                <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                </svg>
              </div>
              <div>
                <p className="text-white font-bold font-heading mb-1">Servicio a domicilio</p>
                <p className="text-muted text-sm">César se desplaza hasta donde estés. Sin necesidad de llevar el coche a ningún taller.</p>
              </div>
            </div>
          </div>

          {/* Mapa */}
          <div className="w-full overflow-hidden border border-white/10" style={{ height: "400px" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1476.5510872727564!2d-3.7743366701210213!3d40.372626036021494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd41884d8dd108d7%3A0x7c835eb3ac3c7a93!2sC.%20Poema%20Sinf%C3%B3nico%2C%20Latina%2C%2028054%20Madrid!5e0!3m2!1ses!2ses!4v1788514143439!5m2!1ses!2ses"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>

        </div>
      </div>
    </section>
  )
}