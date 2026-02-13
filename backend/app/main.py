from fastapi import FastAPI

app = FastAPI(
    title="NeuraHire API",
    version="0.1.0"
)

@app.get("/")
def root():
    return {"message": "NeuraHire backend is running"}

@app.get("/health")
def health_check():
    return {"status": "ok"}