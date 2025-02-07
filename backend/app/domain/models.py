from pydantic import BaseModel
from typing import Optional


class UserModel(BaseModel):
    id: str
    username: str
    password: str
    email: str
    full_name: str
    role_id: int
    is_active: bool = True


class RoleModel(BaseModel):
    id: str
    code: int
    name: str
    description: Optional[str] = None
