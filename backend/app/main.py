from fastapi import FastAPI
from .api import auth, jobs
from .core.db import database, engine, metadata

metadata.create_all(engine)

app = FastAPI(title="NeuraHire Backend")

app.include_router(auth.router, prefix="/auth", tags=["Auth"])
app.include_router(jobs.router, prefix="/api", tags=["Jobs"])

@app.on_event("startup")
async def startup():
    await database.connect()

@app.on_event("shutdown")
async def shutdown():
    await database.disconnect()