from fastapi import FastAPI
from app.api.endpoints.user_endpoint import router as user_router
from motor.motor_asyncio import AsyncIOMotorClient
from app.infrastructure.database import config

app = FastAPI()
app.include_router(user_router, prefix="/api")

client: AsyncIOMotorClient = None
db = None


@app.on_event("startup")
async def startup_event():
    print("Starting up...")
    client = AsyncIOMotorClient(config.MONGO_URI)
    db = client[config.MONGO_DB]
    # await init_seed_data()


@app.on_event("shutdown")
async def shutdown_event():
    print("Shutting down...")
    client.close()
