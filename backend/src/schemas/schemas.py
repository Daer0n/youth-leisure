from pydantic import BaseModel

class TeacherRead(BaseModel):
    id: int
    full_name: str 
    gender: str
    passport: str
    birthday: str
    family_status: str
    education: str
    specialization: str
    adress: str

    class Config:
        orm_mode = True

class TeacherCreate(BaseModel):
    id: int
    full_name: str 
    gender: str
    passport: str
    birthday: str
    family_status: str
    education: str
    specialization: str
    adress: str

class ChildrenCreate(BaseModel):
    id: int
    full_name: str 
    age: int
    school_number: int
    grade: str
    birthday_certificate_information: str
    address: str
    home_phone: str
    parents_information: str
    group_id: int 


class ChildrenRead(BaseModel):
    id: int
    full_name: str 
    age: int
    school_number: int
    grade: str
    birthday_certificate_information: str
    address: str
    home_phone: str
    parents_information: str
    group_id: int

    class Config:
        orm_mode = True


class PartyCreate(BaseModel):
    id: int
    group_name: str
    group_number: str
    circle_id: int

class CircleCreate(BaseModel):
    id: int 
    circle_number: str
    circle_name: str
    specialization: str
    teacher_id: int