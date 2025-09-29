from sqlalchemy import Table, Column, Integer, String
from ..core.db import metadata

jobs = Table(
    "jobs",
    metadata,
    Column("id", Integer, primary_key=True),
    Column("title", String, nullable=False),
    Column("description", String, nullable=False),
    Column("location", String),
)