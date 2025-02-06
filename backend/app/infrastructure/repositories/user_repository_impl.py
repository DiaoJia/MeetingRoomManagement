from app.interfaces.repositories.user_repository import UserRepository
from app.domain.models import User as DomainUser


class UserRepositoryImpl(UserRepository):

    def __init__(self, db):
        self.db = db

    def create_user(self, user: User) -> DomainUser:
        pass

    async def get_user(self, user_id: str) -> DomainUser:
        pass
