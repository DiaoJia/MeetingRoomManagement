from motor.motor_asyncio import AsyncIOMotorClient
from .config import db_settings

client = AsyncIOMotorClient(
    db_settings.MONGO_URI,
    minPoolSize=db_settings.MIN_POOL_SIZE,
    maxPoolSize=db_settings.MAX_POOL_SIZE,
    maxIdleTimeMS=db_settings.MAX_IDLE_TIME_MS
)
db = client[db_settings.MONGO_DB]
