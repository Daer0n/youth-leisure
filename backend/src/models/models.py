
from sqlalchemy import Column, Integer, String, ForeignKey

from database.database import Base


class Teacher(Base):
    __tablename__ = 'Teacher'

    id = Column(Integer, primary_key=True)
    full_name = Column(String, nullable=False)
    gender = Column(String, nullable=False)
    passport = Column(String, nullable=False)
    birthday = Column(String, nullable=False)
    family_status = Column(String, nullable=False)
    education = Column(String, nullable=False)
    specialization = Column(String, nullable=False)
    adress = Column(String, nullable=False)


class Circle(Base):
    __tablename__ = 'Circle'

    id = Column(Integer, primary_key=True)
    circle_number = Column(String, nullable=False)
    circle_name = Column(String, nullable=False)
    specialization = Column(String, nullable=False)
    teacher_id = Column(Integer, ForeignKey(Teacher.id))

class Party(Base):
    __tablename__ = 'Party'
    
    id = Column(Integer, primary_key=True)
    group_name = Column(String, nullable=False)
    group_number = Column(String, nullable=False)
    circle_id = Column(Integer, ForeignKey(Circle.id))

class Children(Base):
    __tablename__ = 'Children'

    id = Column(Integer, primary_key=True)
    full_name = Column(String, nullable=False)
    age = Column(Integer, nullable=False)
    school_number = Column(Integer, nullable=False)
    grade = Column(String, nullable=False)
    birthday_certificate_information = Column(String, nullable=False)
    address = Column(String, nullable=False)
    home_phone = Column(String, nullable=False)
    parents_information = Column(String, nullable=False)
    group_id = Column(Integer, ForeignKey(Party.id))

class Transition(Base):
    __tablename__ = 'Transition'

    id = Column(Integer, primary_key=True)
    transition_date = Column(String, nullable=False)
    group_id_from = Column(Integer, ForeignKey(Party.id))
    group_id_to = Column(Integer, ForeignKey(Party.id))
    date_start = Column(String, nullable=False)
    date_finish = Column(String, nullable=False)