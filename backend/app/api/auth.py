from fastapi import APIRouter, HTTPException
from passlib.context import CryptContext
from ..core.db import database
from ..models.user import users
from ..core.security import create_access_token

router = APIRouter()
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

@router.post("/register")
async def register(email: str, password: str):
    query = users.select().where(users.c.email == email)
    existing = await database.fetch_one(query)
    if existing:
        raise HTTPException(status_code=400, detail="User already exists")
    hashed_pw = pwd_context.hash(password)
    query = users.insert().values(email=email, password=hashed_pw)
    user_id = await database.execute(query)
    return {"id": user_id, "email": email}

@router.post("/login")
async def login(email: str, password: str):
    query = users.select().where(users.c.email == email)
    db_user = await database.fetch_one(query)
    if not db_user or not pwd_context.verify(password, db_user["password"]):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    token = create_access_token({"sub": email})
    return {"access_token": token, "token_type": "bearer"}