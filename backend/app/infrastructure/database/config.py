from pydantic import BaseSettings

class DatabaseSettings(BaseSettings):
    MONGO_URI: str = "mongodb://localhost:27017"
    MONGO_DB: str = "MRMS"
    MIN_POOL_SIZE: int = 10
    MAX_POOL_SIZE: int = 100
    MAX_IDLE_TIME_MS: int = 10000
    
    class Config:
        env_prefix = "DB_"
        case_sensitive = False

db_settings = DatabaseSettings()