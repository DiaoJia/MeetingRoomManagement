from motor.motor_asyncio import AsyncIOMotorClient

MONGO_URI = "mongodb://localhost:27017"
MONGO_DB = "MRMS"

client = AsyncIOMotorClient(MONGO_URI)
db = client[MONGO_DB]


async def get_db():
    return db
