from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.endpoints.user_endpoint import router as user_router
from app.infrastructure.database.db import db
from app.api.middleware.rate_limiter import RateLimiterMiddleware

app = FastAPI()

# 添加CORS中间件
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 添加速率限制中间件
app.add_middleware(RateLimiterMiddleware)

# 注册路由
app.include_router(user_router, prefix="/api")
