from fastapi_users import schemas


class TeacherRead(schemas.BaseUser[int]):
    id: int
    username: str
    full_name: str 
    password: str
    gender: str
    passport: str
    birthday: str
    family_status: str
    education: str
    specialization: str
    adress: str

    class Config:
        orm_mode = True

class TeacherCreate(schemas.BaseUserCreate):
    id: int
    username: str
    full_name: str 
    password: str
    gender: str
    passport: str
    birthday: str
    family_status: str
    education: str
    specialization: str
    adress: str