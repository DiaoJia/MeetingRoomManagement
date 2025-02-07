from typing import List, Optional
from app.infrastructure.database.schemas import UserScheam
from app.interfaces.repositories.user_repository import UserRepository
from app.domain.models import UserModel


class UserService:
    def __init__(self, user_repository: UserRepository):
        self.user_repository = user_repository

    async def get_user_by_id(self, user_id: str) -> Optional[UserModel]:
        user = await self.user_repository.get_user_by_id(user_id)
        return UserModel(**user.model_dump()) if user else None

    async def create_user(self, user: UserModel) -> str:
        user_schema = UserScheam(**user.model_dump())
        return await self.user_repository.create_user(user_schema)

    async def update_user(self, user_id: str, user: UserModel) -> bool:
        user_schema = UserScheam(**user.model_dump())
        return await self.user_repository.update_user(user_id, user_schema)

    async def delete_user(self, user_id: str) -> bool:
        return await self.user_repository.delete_user(user_id)

    async def get_users(self) -> List[UserModel]:
        users = await self.user_repository.get_users()
        return [UserModel(**user.model_dump()) for user in users]
