# 🚗 Car Installer AI Web

Web profesional para **César Ramón**, instalador de audio y accesorios para coche a domicilio en Madrid. El proyecto incluye un chatbot con inteligencia artificial capaz de responder consultas de precios en lenguaje natural, integrado directamente en la web.

---

## ¿Qué problema resuelve?

César recibía consultas de precios por WhatsApp a todas horas. Este proyecto automatiza esa primera atención al cliente con un asistente virtual que conoce todos sus servicios y precios orientativos, disponible 24/7 sin que César tenga que estar pendiente del móvil.

---

## Demo

> Web: [En proceso de despliegue en VPS propio con Dokploy]  
> Backend API: `http://127.0.0.1:8000/docs` (local)

---

## Stack técnico

| Capa | Tecnología |
|------|-----------|
| Frontend | React 18 + Tailwind CSS + Vite |
| Backend | Python 3.13 + FastAPI + Uvicorn |
| IA / Agente | LangChain |
| Base de datos vectorial | ChromaDB |
| Técnica IA | RAG (Retrieval Augmented Generation) |
| Embeddings | HuggingFace — paraphrase-multilingual-MiniLM-L12-v2 |
| Modelo LLM | Claude Haiku vía OpenRouter API |
| Hosting frontend | Dokploy (VPS propio) |
| Hosting backend | Dokploy (VPS propio) |
| Control de versiones | Git + GitHub |

---

## Arquitectura del proyecto

Usuario escribe en el chat (React)
↓
Fetch POST a /chat (FastAPI)
↓
LangChain procesa el mensaje
↓
ChromaDB busca contexto relevante en la base de conocimiento
↓
Claude Haiku genera respuesta natural
↓
Respuesta aparece en el chat de la web


---

## Funcionalidades

- Landing page completa con 10 secciones (hero, servicios, galería, sobre el instalador, cómo funciona, zona de cobertura, contacto...)
- Galería de trabajos reales con efecto hover
- Mapa de Google Maps integrado con la ubicación real
- Formulario de contacto que abre WhatsApp con el mensaje pre-rellenado
- Dos botones flotantes: WhatsApp directo con César + chatbot de IA
- Chatbot con soporte de emojis, mensajes animados y diseño tipo WhatsApp
- Contador de estadísticas animado al hacer scroll
- Diseño dark mode con paleta rojo/negro coherente con el logo

---

## Cómo funciona el chatbot

El bot usa **RAG (Retrieval Augmented Generation)**: en vez de que el modelo de IA invente respuestas, busca primero en un documento con los servicios y precios reales de César, y solo entonces genera la respuesta. Esto elimina las alucinaciones y garantiza que los precios que da son los correctos.

Cuando el usuario hace una pregunta como *"¿cuánto cuesta instalar sensores de aparcamiento?"*, el sistema:

1. Convierte la pregunta en un vector matemático (embedding)
2. Busca en ChromaDB qué fragmentos del documento de conocimiento son más relevantes
3. Le pasa esa información a Claude Haiku con el contexto
4. El modelo genera una respuesta natural en español

---

## Instalación local

### Frontend

```bash
git clone https://github.com/MarcosCarbajoEchalecu/car-installer-ai-web.git
cd car-installer-ai-web
npm install
npm run dev
```

### Backend

```bash
cd backend
python -m venv venv
venv\Scripts\activate  # Windows
pip install -r requirements.txt
uvicorn main:app --reload
```

Crea un archivo `.env` en la carpeta `backend` con:
OPENROUTER_API_KEY=tu_api_key_aqui


---

## Estructura del proyecto

car-installer-ai-web/
├── src/
│ ├── components/ # Componentes React (Header, Hero, Gallery, ChatBot...)
│ ├── App.jsx
│ └── constants.js
├── public/ # Imágenes y assets estáticos
├── backend/
│ ├── main.py # API FastAPI + LangChain
│ └── conocimiento.txt # Base de conocimiento del chatbot
├── package.json
└── vite.config.js


---

## Lo que aprendí con este proyecto

Este proyecto me obligó a conectar piezas que normalmente se ven por separado: un frontend en React, una API en Python, un agente de IA con LangChain y una base de datos vectorial. El mayor reto fue hacer que todo funcionara junto — especialmente la parte de RAG, donde tuve que entender cómo los embeddings permiten buscar por significado en vez de por palabras exactas.

También fue interesante diseñar el flujo completo del usuario: desde que alguien entra a la web, ve los servicios, consulta un precio por el chatbot y termina contactando con César por WhatsApp. Cada decisión de diseño tenía un objetivo real detrás.

---

## Autor

**Marcos Carbajo Echalecu**  
[LinkedIn](https://www.linkedin.com/in/marcos-carbajo/) · [GitHub](https://github.com/MarcosCarbajoEchalecu)
