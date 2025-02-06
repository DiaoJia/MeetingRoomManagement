from pydantic import BaseModel, Field, EmailStr
from typing import Optional
from bson import ObjectId


class PyObjectId(ObjectId):
    @classmethod
    def __get_validators__(cls):
        yield cls.validate

    @classmethod
    def validate(cls, v):
        if not ObjectId.is_valid(v):
            raise ValueError("Invalid objectid")
        return ObjectId(v)

    @classmethod
    def __modify_schema__(cls, field_schema):
        field_schema.update(type="string")


class UserScheam(BaseModel):
    id: Optional[PyObjectId] = Field(alias="_id", default=None)
    username: str = Field(..., min_length=2, max_length=100)
    password: str = Field(...)
    email: EmailStr = Field(...)
    full_name: str = Field(...)
    role_id: int = Field(...)
    is_active: bool = Field(default=True)

    class Config:
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        orm_mode = True


class RoleSchema(BaseModel):
    id: Optional[PyObjectId] = Field(alias="_id", default=None)
    code: int = Field(...)
    name: str = Field(...)
    description: Optional[str] = Field(...)

    class Config:
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        orm_mode = True
