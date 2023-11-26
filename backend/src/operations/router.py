from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy import select, insert, delete
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.orm import joinedload

from database.database import get_async_session
from models.models import Children, Teacher, Party, Circle
from schemas.schemas import ChildrenCreate, ChildrenRead, TeacherCreate, PartyCreate

router = APIRouter(
    prefix="/operations",
    tags=["Operation"]
)

@router.post("/children/")
async def add_children(new_children: ChildrenCreate, session: AsyncSession = Depends(get_async_session)):
    stmt = insert(Children).values(**new_children.dict())
    await session.execute(stmt)
    await session.commit()
    return {"status": "success"}

@router.delete("/children/{children_id}/")
async def delete_children(children_id: int, session: AsyncSession = Depends(get_async_session)):
    stmt = delete(Children).where(Children.id == children_id)
    result = await session.execute(stmt)
    deleted_count = result.rowcount
    if deleted_count == 0:
        raise HTTPException(status_code=404, detail="Children not found")
    await session.commit()
    return {'ok': True}

@router.get("/children/")
async def get_all_children(session: AsyncSession = Depends(get_async_session)):
    childrens = await session.execute(select(
        Children.id, 
        Children.full_name, 
        Children.age, 
        Children.school_number, 
        Children.grade, 
        Children.birthday_certificate_information, 
        Children.address, 
        Children.home_phone, 
        Children.parents_information, 
        Children.group_id
    ))
    childrens_list = []
    for (
        id, 
        full_name, 
        age, 
        school_number, 
        grade, 
        birthday_certificate_information, 
        address, 
        home_phone, 
        parents_information, 
        group_id
    ) in childrens:
        child_info = {
            "id": id,
            "full_name": full_name,
            "age": age,
            "school_number": school_number, 
            "grade": grade,
            "birthday_certificate_information": birthday_certificate_information,
            "address": address, 
            "home_phone": home_phone,
            "parents_information": parents_information, 
            "group_id": group_id
        }
        childrens_list.append(child_info)

    return childrens_list

@router.patch("/children/")
async def change_children(update_children: ChildrenCreate, session: AsyncSession = Depends(get_async_session)):
    children = await session.execute(select(Children).filter(Children.id == update_children.id))
    children = children.scalar_one_or_none()
    if children is None:
        return HTTPException(status_code=404, content={"message": "Teacher not found"})
    children.full_name = update_children.full_name
    children.age = update_children.age
    children.school_number = update_children.school_number
    children.grade = update_children.grade
    children.birthday_certificate_information = update_children.birthday_certificate_information
    children.address = update_children.address
    children.home_phone = update_children.home_phone
    children.parents_information = update_children.parents_information
    children.group_id = update_children.group_id

    await session.commit()
    return children





@router.post("/teacher/")
async def add_teacher(new_teacher: TeacherCreate, session: AsyncSession = Depends(get_async_session)):
    stmt = insert(Teacher).values(**new_teacher.dict())
    await session.execute(stmt)
    await session.commit()
    return {"status": "success"}

@router.delete("/teacher/{teacher_id}/")
async def delete_teacher(teacher_id: int, session: AsyncSession = Depends(get_async_session)):
    stmt = delete(Teacher).where(Teacher.id == teacher_id)
    result = await session.execute(stmt)
    deleted_count = result.rowcount
    if deleted_count == 0:
        raise HTTPException(status_code=404, detail="Teacher not found")
    await session.commit()
    return {'ok': True}


@router.get("/teacher/")
async def get_all_teacher(session: AsyncSession = Depends(get_async_session)):
    teachers = await session.execute(select(
        Teacher.id, 
        Teacher.full_name, 
        Teacher.gender, 
        Teacher.passport, 
        Teacher.birthday, 
        Teacher.family_status, 
        Teacher.education, 
        Teacher.specialization, 
        Teacher.adress
    ))
    teachers_list = []
    for (
        id, 
        full_name, 
        gender, 
        passport, 
        birthday, 
        family_status, 
        education, 
        specialization, 
        adress
    ) in teachers:
        child_info = {
            "id": id,
            "full_name": full_name,
            "gender": gender,
            "passport": passport, 
            "birthday": birthday,
            "family_status": family_status,
            "education": education, 
            "specialization": specialization,
            "adress": adress
        }
        teachers_list.append(child_info)

    return teachers_list

@router.patch("/teacher/")
async def change_teacher(update_teacher: TeacherCreate, session: AsyncSession = Depends(get_async_session)):
    teacher = await session.execute(select(Teacher).filter(Teacher.id == update_teacher.id))
    teacher = teacher.scalar_one_or_none()
    if teacher is None:
        return HTTPException(status_code=404, content={"message": "Teacher not found"})
    teacher.gender = update_teacher.gender
    teacher.full_name = update_teacher.full_name
    teacher.passport = update_teacher.passport
    teacher.birthday = update_teacher.birthday
    teacher.family_status = update_teacher.family_status 
    teacher.education = update_teacher.education 
    teacher.specialization = update_teacher.specialization 
    teacher.adress = update_teacher.adress 
    await session.commit()
    return teacher





@router.post("/party/")
async def add_party(new_party: PartyCreate, session: AsyncSession = Depends(get_async_session)):
    stmt = insert(Party).values(**new_party.dict())
    await session.execute(stmt)
    await session.commit()
    return {"status": "success"}

@router.delete("/party/{party_id}/")
async def delete_party(party_id: int, session: AsyncSession = Depends(get_async_session)):
    stmt = delete(Party).where(Party.id == party_id)
    result = await session.execute(stmt)
    deleted_count = result.rowcount
    if deleted_count == 0:
        raise HTTPException(status_code=404, detail="Party not found")
    await session.commit()
    return {'ok': True}

@router.get("/party/")
async def get_all_party(session: AsyncSession = Depends(get_async_session)):
    party = await session.execute(select(
        Party.id, 
        Party.group_name, 
        Party.group_number, 
        Party.circle_id
    ))
    party_list = []
    for (
        id, 
        group_name, 
        group_number, 
        circle_id
    ) in party:
        child_info = {
            "id": id,
            "group_name": group_name,
            "group_number": group_number,
            "circle_id": circle_id, 
        }
        party_list.append(child_info)

    return party_list

@router.patch("/party/")
async def change_party(update_party: PartyCreate, session: AsyncSession = Depends(get_async_session)):
    party = await session.execute(select(Party).filter(Party.id == update_party.id))
    party = party.scalar_one_or_none()
    if party is None:
        return HTTPException(status_code=404, content={"message": "Teacher not found"})
    party.group_name = update_party.group_name
    party.group_number = update_party.group_number
    party.circle_id = update_party.circle_id

    await session.commit()
    return party


@router.get("/group/{group_id}/children")
async def get_group_children(group_id: int, session: AsyncSession = Depends(get_async_session)):
    query = (
        select(Circle.circle_name, Party.group_name, Children.full_name, Children.age)
        .join(Party, Circle.id == Party.circle_id)
        .join(Children, Children.group_id == Party.id)
        .where(Party.id == group_id)
    )

    results = await session.execute(query)
    children = results.fetchall()

    children_list = []
    for circle_name, group_name, child_name, age in children:
        child_info = {
            "circle_name": circle_name,
            "group_name": group_name,
            "child_name": child_name,
            "child_age": age
        }
        children_list.append(child_info)

    return children_list

@router.get("/circles")
async def get_circles(session: AsyncSession = Depends(get_async_session)):
    query = (
        select(Circle.circle_name, Teacher.full_name)
        .join(Teacher, Teacher.id == Circle.teacher_id)
    )
    results = await session.execute(query)
    circles = results.fetchall()
    circles_list = []
    for circle_name, full_name in circles:
        circle_info = {
            "circle_name": circle_name,
            "teacher_name": full_name
        }
        circles_list.append(circle_info)

    return circles_list

@router.get("/child/{child_id}")
async def get_child_data(child_id: int, session: AsyncSession = Depends(get_async_session)):
    query = (
        select(Children.full_name, Children.age, Circle.circle_name, Party.group_name)
        .join(Party, Children.group_id == Party.id)
        .join(Circle, Party.circle_id == Circle.id)
        .where(Children.id == child_id)
    )
    result = await session.execute(query)
    child_data = result.first()
    if not child_data:
        raise HTTPException(status_code=404, detail="Child not found")
    child_info = {
        "full_name": child_data[0],
        "age": child_data[1],
        "circle_name": child_data[2],
        "group_name": child_data[3]
    }

    return child_info