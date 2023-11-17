from pydantic import BaseModel

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