from fastapi import APIRouter, HTTPException
from app.application.services.user_service import UserService
from app.infrastructure.repositories.user_repository_impl import UserRepositoryImpl
from app.domain.models import UserModel
from app.infrastructure.database import config

router = APIRouter()
user_repository = UserRepositoryImpl(config.db)
user_service = UserService(user_repository)


@router.get("/users/{user_id}", response_model=UserModel)
def get_user(user_id: str):
    user = user_service.get_user_by_id(user_id)
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return user
