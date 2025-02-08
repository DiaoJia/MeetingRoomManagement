from app.interfaces.repositories.user_repository import UserRepository
from app.infrastructure.database.schemas import UserSchema
from typing import Optional
from bson import ObjectId


class UserRepositoryImpl(UserRepository):

    def __init__(self, db):
        self.db = db
        self.user_collection = db["users"]

    async def get_user_by_id(self, user_id: str) -> Optional[UserSchema]:
        user = await self.user_collection.find_one({"_id": ObjectId(user_id)})
        return UserSchema(**user) if user else None

    async def create_user(self, user: UserSchema) -> str:
        user_dict = user.model_dump(by_alias=True, exclude={"id"})
        result = await self.user_collection.insert_one(user_dict)
        return str(result.inserted_id)

    async def update_user(self, user_id: str, user: UserSchema) -> bool:
        user_dict = user.model_dump(by_alias=True, exclude={"id"})
        result = await self.user_collection.update_one(
            {"_id": ObjectId(user_id)}, {"$set": user_dict}
        )
        return result.modified_count > 0

    async def delete_user(self, user_id: str) -> bool:
        result = await self.user_collection.delete_one({"_id": ObjectId(user_id)})
        return result.deleted_count > 0

    async def get_users(self) -> list[UserSchema]:
        users = await self.user_collection.find().to_list(100)
        return [UserSchema(**user) for user in users]
