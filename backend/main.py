from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from langchain_openai import ChatOpenAI
from langchain_chroma import Chroma
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langchain_core.runnables import RunnablePassthrough
from dotenv import load_dotenv
import os

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Cargar documento
with open("conocimiento.txt", "r", encoding="utf-8") as f:
    texto = f.read()

# Dividir en chunks
splitter = RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=50)
chunks = splitter.create_documents([texto])

# Base de datos vectorial
embeddings = HuggingFaceEmbeddings(
    model_name="sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2"
)
db = Chroma.from_documents(chunks, embeddings)
retriever = db.as_retriever(search_kwargs={"k": 3})

# Modelo via OpenRouter
llm = ChatOpenAI(
    model="anthropic/claude-haiku-4-5",
    openai_api_key=os.getenv("OPENROUTER_API_KEY"),
    openai_api_base="https://openrouter.ai/api/v1",
    max_tokens=500
)

# Prompt
prompt = ChatPromptTemplate.from_template("""
Eres el asistente virtual de César Ramón, instalador profesional de audio 
y accesorios para coches en Madrid. Responde en español, de forma amable y concisa.
IMPORTANTE: Responde siempre en texto plano, sin usar markdown, sin asteriscos, 
sin negritas, sin emojis, sin símbolos especiales. Solo texto limpio.
Usa solo la información del contexto para responder precios.
Si no sabes algo, sugiere contactar con César al +34 608 82 35 37.
Nunca inventes precios que no estén en el contexto.

Contexto: {context}

Pregunta: {question}
""")

# Chain moderna
chain = (
    {"context": retriever, "question": RunnablePassthrough()}
    | prompt
    | llm
    | StrOutputParser()
)

class Mensaje(BaseModel):
    mensaje: str

@app.post("/chat")
async def chat(data: Mensaje):
    try:
        respuesta = chain.invoke(data.mensaje)
        return {"respuesta": respuesta}
    except Exception as e:
        return {"respuesta": "Lo siento, ha habido un error. Contacta con César al +34 608 82 35 37"}

@app.get("/")
async def root():
    return {"status": "Asistente CR funcionando"}