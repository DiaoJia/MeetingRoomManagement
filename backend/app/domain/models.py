from pydantic import BaseModel, EmailStr
from typing import Optional


class UserModel(BaseModel):
    id: str
    username: str
    password: str
    email: EmailStr
    full_name: str
    role_id: int
    is_active: bool = True


class RoleModel(BaseModel):
    id: str
    code: int
    name: str
    description: Optional[str] = None
