from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .api import auth, jobs
from .core.db import database, engine, metadata

metadata.create_all(engine)

app = FastAPI(title="NeuraHire Backend")

# CORS config
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Puedes restringir a ["http://localhost:5173"] si quieres
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

app.include_router(auth.router, prefix="/auth", tags=["Auth"])
app.include_router(jobs.router, prefix="/api", tags=["Jobs"])

@app.on_event("startup")
async def startup():
    await database.connect()

@app.on_event("shutdown")
async def shutdown():
    await database.disconnect()