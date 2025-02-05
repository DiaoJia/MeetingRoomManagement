from app.interfaces.repositories.user_repository import UserRepository
from app.domain.models import User


class UserRepositoryImpl(UserRepository):
    def __init__(self, db):
        self.db = db

    def create_user(self, user: User) -> User:
        pass

    def get_user(self, user_id: int) -> User:
        return User(
            id=user_id,
            username="test",
            password="test",
            email="test",
            full_name="test",
            role_id=1,
            is_active=True,
        )
