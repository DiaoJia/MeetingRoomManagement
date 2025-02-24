from pydantic import BaseModel
from typing import Optional
from datetime import datetime


class UserModel(BaseModel):
    id: str
    username: str
    password: str
    email: str
    first_name: str
    last_name: str
    role_code: int
    active: bool = True
    created_at: datetime
    updated_at: Optional[datetime] = None


class RoleModel(BaseModel):
    id: str
    code: int
    name: str
    active: bool = True
    description: Optional[str] = None
