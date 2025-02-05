from pydantic import BaseModel


class User(BaseModel):
    id: int
    username: str
    password: str
    email: str
    full_name: str
    role_id: int
    is_active: bool = True


class Role(BaseModel):
    id: int
    code: int
    name: str
    description: str
