from fastapi import APIRouter
from ..core.db import database
from ..models.job import jobs

router = APIRouter()

@router.get("/jobs")
async def list_jobs():
    return await database.fetch_all(jobs.select())

@router.post("/jobs")
async def create_job(title: str, description: str, location: str = ""):
    query = jobs.insert().values(title=title, description=description, location=location)
    job_id = await database.execute(query)
    return {"id": job_id, "title": title, "description": description, "location": location}