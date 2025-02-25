from fastapi import FastAPI
from app.api.endpoints.user_endpoint import router as user_router
from app.infrastructure.database.db import db

app = FastAPI()
app.include_router(user_router, prefix="/api")
