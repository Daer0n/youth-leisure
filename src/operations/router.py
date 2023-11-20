from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy import select, insert, delete
from sqlalchemy.ext.asyncio import AsyncSession

from src.database import get_async_session
from src.operations.models import Children
from src.operations.schemas import ChildrenCreate


router = APIRouter(
    prefix="/operations",
    tags=["Operation"]
)

@router.post("/")
async def add_children(new_children: ChildrenCreate, session: AsyncSession = Depends(get_async_session)):
    stmt = insert(Children).values(**new_children.dict())
    await session.execute(stmt)
    await session.commit()
    return {"status": "success"}

@router.delete("/")
async def delete_children(children_id: int, session: AsyncSession = Depends(get_async_session)):
    children = session.get(Children, children_id)
    if not children:
        raise HTTPException(status_code=404, detail="Children not found")
    session.delete(children)
    session.commit()
    return {'ok': True}