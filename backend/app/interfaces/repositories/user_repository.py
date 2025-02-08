from abc import ABC, abstractmethod
from typing import List, Optional
from app.infrastructure.database.schemas import UserSchema


class UserRepository(ABC):
    @abstractmethod
    async def get_user_by_id(self, user_id: str) -> Optional[UserSchema]:
        pass

    @abstractmethod
    async def create_user(self, user: UserSchema) -> str:
        pass

    @abstractmethod
    async def update_user(self, user_id: str, user: UserSchema) -> bool:
        pass

    @abstractmethod
    async def delete_user(self, user_id: str) -> bool:
        pass

    @abstractmethod
    async def get_users(self) -> List[UserSchema]:
        pass
