from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    PROJECT_NAME: str = "NeuraHire"
    JWT_SECRET: str = "supersecret"
    JWT_ALGORITHM: str = "HS256"

settings = Settings()