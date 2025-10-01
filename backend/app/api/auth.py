
from fastapi import APIRouter, HTTPException, Depends, status, Request, Header
from pydantic import BaseModel, EmailStr
from passlib.context import CryptContext
from jose import JWTError, jwt
from ..core.db import database
from ..models.user import users
from ..core.security import create_access_token
from ..core.config import settings

router = APIRouter()
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def get_current_user(token: str = Header(..., alias="Authorization")):
    if token.startswith("Bearer "):
        token = token[7:]
    try:
        payload = jwt.decode(token, settings.JWT_SECRET, algorithms=[settings.JWT_ALGORITHM])
        email = payload.get("sub")
        if email is None:
            raise HTTPException(status_code=401, detail="Invalid token")
        return email
    except JWTError:
        raise HTTPException(status_code=401, detail="Invalid token")

@router.get("/me")
async def me(authorization: str = Header(...)):
    email = get_current_user(authorization)
    query = users.select().where(users.c.email == email)
    db_user = await database.fetch_one(query)
    if not db_user:
        raise HTTPException(status_code=404, detail="User not found")
    return {"email": db_user["email"]}

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class UserRegister(BaseModel):
    email: EmailStr
    password: str


@router.post("/register")
async def register(user: UserRegister):
    if len(user.password) > 72:
        raise HTTPException(status_code=400, detail="La contraseña no puede tener más de 72 caracteres.")
    query = users.select().where(users.c.email == user.email)
    existing = await database.fetch_one(query)
    if existing:
        raise HTTPException(status_code=400, detail="User already exists")
    hashed_pw = pwd_context.hash(user.password)
    query = users.insert().values(email=user.email, password=hashed_pw)
    user_id = await database.execute(query)
    return {"id": user_id, "email": user.email}


@router.post("/login")
async def login(user: UserLogin):
    query = users.select().where(users.c.email == user.email)
    db_user = await database.fetch_one(query)
    if not db_user or not pwd_context.verify(user.password, db_user["password"]):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    token = create_access_token({"sub": user.email})
    return {"access_token": token, "token_type": "bearer"}