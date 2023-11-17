from fastapi_users_db_sqlalchemy import SQLAlchemyBaseUserTable
from sqlalchemy import Table, Column, Integer, String, MetaData, Boolean

from database import Base


class Teacher(SQLAlchemyBaseUserTable[int], Base):
    id = Column(Integer, primary_key=True)
    username = Column(String, nullable=False)
    full_name = Column(String, nullable=False)
    password = Column(String, nullable=False)
    gender = Column(String, nullable=False)
    passport = Column(String, nullable=False)
    birthday = Column(String, nullable=False)
    family_status = Column(String, nullable=False)
    education = Column(String, nullable=False)
    specialization = Column(String, nullable=False)
    adress = Column(String, nullable=False)
    #is_active: bool = Column(Boolean, default=True, nullable=False)
    #is_superuser: bool = Column(Boolean, default=False, nullable=False)
    #is_verified: bool = Column(Boolean, default=False, nullable=False)
