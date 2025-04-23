from motor.motor_asyncio import AsyncIOMotorClient
import os
from dotenv import load_dotenv

# 加载.env文件中的环境变量
load_dotenv()

# 从环境变量获取MongoDB连接信息
MONGO_URI = os.getenv("MONGO_URI", "mongodb://localhost:27017")
MONGO_DB = os.getenv("MONGO_DB", "MRMS")

client = AsyncIOMotorClient(MONGO_URI)
db = client[MONGO_DB]
