from fastapi import FastAPI
from app.api.endpoints.user_endpoint import router as user_router

app = FastAPI()
app.include_router(user_router)
