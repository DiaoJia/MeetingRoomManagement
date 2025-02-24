class InitSeedData:
    def __init__(self, db):
        self.db = db
        self.user_collection = db["users"]
        self.role_collection = db["roles"]

    async def init_seed_data(self):
        print("Seeding user data...")
        roles = [
            {
                "code": 1,
                "name": "admin",
                "description": "Admin role",
            },
            {
                "code": 2,
                "name": "user",
                "description": "User role",
            },
        ]
        await self.role_collection.insert_many(roles)
        users = [
            {
                "username": "admin",
                "password": "123456",
                "email": "admin@gmail.com",
                "first_name": "admin",
                "last_name": "",
                "role_code": 1,
            },
            {
                "username": "kevin",
                "password": "123456",
                "email": "kevin@gmail.com",
                "first_name": "Kevin",
                "last_name": "Diao",
                "role_code": 2,
            },
        ]
        await self.user_collection.insert_many(users)
