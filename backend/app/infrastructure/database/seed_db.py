from app.infrastructure.database.seed_data import SeedData
import asyncio
from motor.motor_asyncio import AsyncIOMotorClient
from app.infrastructure.database.db import db


async def async_seed():
    client = AsyncIOMotorClient(db.MONGO_URI)
    database = client[db.MONGO_DB]
    await SeedData(database).seed_data()
    client.close()


if __name__ == "__main__":
    asyncio.run(async_seed())
