import { useState } from "react"

export default function ChatBot() {
  const [abierto, setAbierto] = useState(false)
  const [mensajes, setMensajes] = useState([
    { texto: "Hola, soy el asistente de César Ramón. Cuéntame qué necesitas para tu coche y te doy un precio orientativo.", tipo: "bot" }
  ])
  const [input, setInput] = useState("")
  const [cargando, setCargando] = useState(false)
  const [showEmojis, setShowEmojis] = useState(false)

  const enviar = async () => {
    if (!input.trim()) return
    const pregunta = input
    setInput("")
    setShowEmojis(false)
    setMensajes(prev => [...prev, { texto: pregunta, tipo: "user" }])
    setCargando(true)
    try {
      const res = await fetch("http://147.79.117.24/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mensaje: pregunta })
      })
      const data = await res.json()
      setMensajes(prev => [...prev, { texto: data.respuesta, tipo: "bot" }])
    } catch {
      setMensajes(prev => [...prev, { texto: "Error al conectar. Contacta con César al +34 608 82 35 37", tipo: "bot" }])
    }
    setCargando(false)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      {abierto && (
        <div className="w-[420px] rounded-2xl overflow-hidden shadow-2xl flex flex-col"
          style={{ height: "650px", backgroundColor: "#f0f0f0" }}>

          {/* Cabecera */}
          <div className="flex items-center gap-3 px-4 py-3"
            style={{ backgroundColor: "#F5163C" }}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center font-black text-white text-lg"
              style={{ backgroundColor: "#C0001F" }}>
              CR
            </div>
            <div className="flex-1">
              <p className="text-white font-bold text-sm">César Ramón</p>
              <p className="text-white/80 text-xs">Asistente virtual · Precios orientativos</p>
            </div>
            <button onClick={() => setAbierto(false)}
              className="text-white/70 hover:text-white text-xl font-light">✕</button>
          </div>

          {/* Mensajes */}
          <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3"
            style={{ backgroundColor: "#f0f0f0" }}>
            {mensajes.map((m, i) => (
              <div key={i} className={`flex ${m.tipo === "user" ? "justify-end" : "justify-start"}`}>
                {m.tipo === "bot" && (
                  <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-black mr-2 mt-1 shrink-0"
                    style={{ backgroundColor: "#F5163C" }}>
                    CR
                  </div>
                )}
                <div className={`max-w-[75%] px-4 py-2 text-sm leading-relaxed ${
                  m.tipo === "user"
                    ? "text-white rounded-2xl rounded-tr-sm"
                    : "text-gray-800 rounded-2xl rounded-tl-sm"
                }`}
                  style={{
                    backgroundColor: m.tipo === "user" ? "#F5163C" : "#ffffff",
                    boxShadow: "0 1px 2px rgba(0,0,0,0.1)"
                  }}>
                  {m.texto}
                </div>
              </div>
            ))}
            {cargando && (
              <div className="flex justify-start">
                <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-black mr-2 shrink-0"
                  style={{ backgroundColor: "#F5163C" }}>CR</div>
                <div className="px-4 py-2 rounded-2xl rounded-tl-sm text-sm text-gray-500"
                  style={{ backgroundColor: "#ffffff" }}>
                  Escribiendo...
                </div>
              </div>
            )}
          </div>

          {/* Panel de emojis */}
          {showEmojis && (
            <div className="border-t bg-white p-3 grid grid-cols-8 gap-1"
              style={{ borderColor: "#e0e0e0" }}>
              {["😊","😂","❤️","👍","🙏","😍","🤔","😎","🚗","🔊","💡","⚡","🔧","💰","✅","❓",
                "😀","😁","😅","😆","😉","😋","😘","🥰","😜","🤩","🥳","😏","😒","😔","😢","😤",
                "👋","👏","🙌","💪","🤝","👀","💬","📱","📞","📍","🏠","⭐","🎵","🔴","⚫","🟢"
              ].map((emoji, i) => (
                <button key={i}
                  onClick={() => { setInput(prev => prev + emoji); setShowEmojis(false) }}
                  className="text-xl hover:bg-gray-100 rounded p-1 transition-colors">
                  {emoji}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="flex items-center gap-2 px-3 py-3 border-t"
            style={{ backgroundColor: "#ffffff", borderColor: "#e0e0e0" }}>
            <button
              onClick={() => setShowEmojis(!showEmojis)}
              className="text-gray-400 hover:text-gray-600 text-xl transition-colors">
              😊
            </button>
            <input
              className="flex-1 text-sm text-gray-800 outline-none px-3 py-2 rounded-full border focus:border-red-500 transition-colors"
              style={{ borderColor: "#e0e0e0", backgroundColor: "#f8f8f8" }}
              placeholder="Escribe tu mensaje..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && enviar()}
            />
            <button onClick={enviar}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
              style={{ backgroundColor: "#F5163C" }}>
              <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Botón WhatsApp */}
      <a href="https://wa.me/34608823537" target="_blank" rel="noopener noreferrer"
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
        style={{ backgroundColor: "#25D366" }}
        title="Habla con César">
        <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      {/* Botón IA */}
      <button
        onClick={() => setAbierto(!abierto)}
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
        style={{ backgroundColor: "#F5163C" }}
        title="Consulta precios con IA">
        {abierto ? (
          <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8">
  <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h3a3 3 0 0 1 3 3v1h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1v1a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-1H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h1v-1a3 3 0 0 1 3-3h3V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2M9 10a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H9m0 1h2v2H9v-2m4 0h2v2h-2v-2z"/>
</svg>
        )}
      </button>
    </div>
  )
}