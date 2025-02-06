from abc import ABC, abstractmethod
from typing import List
from app.domain.models import User


class UserRepository(ABC):
    @abstractmethod
    def get_user(self, user_id: str) -> User:
        pass

    @abstractmethod
    def create_user(self, user: User) -> User:
        pass
