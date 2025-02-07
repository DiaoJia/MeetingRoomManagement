from abc import ABC, abstractmethod
from typing import List, Optional
from app.infrastructure.database.schemas import UserSchema


class UserRepository(ABC):
    @abstractmethod
    def get_user_by_id(self, user_id: str) -> Optional[UserSchema]:
        pass

    @abstractmethod
    def create_user(self, user: UserSchema) -> str:
        pass

    @abstractmethod
    def update_user(self, user_id: str, user: UserSchema) -> bool:
        pass

    @abstractmethod
    def delete_user(self, user_id: str) -> bool:
        pass

    @abstractmethod
    def get_users(self) -> List[UserSchema]:
        pass
