from fastapi import APIRouter, HTTPException
from app.application.services.user_service import UserService
from app.infrastructure.repositories.user_repository_impl import UserRepositoryImpl
from app.domain.models import UserModel
from app.infrastructure.database.db import db
from app.application.log.logger import logger

router = APIRouter()
user_repository = UserRepositoryImpl(db)
user_service = UserService(user_repository)


@router.get("/users/{user_id}", response_model=UserModel)
async def get_user(user_id: str):
    user = await user_service.get_user_by_id(user_id)
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return user


@router.get("/users", response_model=list[UserModel])
async def get_users():
    return await user_service.get_users()


@router.post("/users", response_model=str)
async def create_user(user: UserModel):
    return await user_service.create_user(user)


@router.put("/users/{user_id}", response_model=bool)
async def update_user(user_id: str, user: UserModel):
    return await user_service.update_user(user_id, user)


@router.delete("/users/{user_id}", response_model=bool)
async def delete_user(user_id: str):
    return await user_service.delete_user(user_id)


@router.get("/test", response_model=str)
def get_test():
    logger.info("Test")
    return "Kevin"
