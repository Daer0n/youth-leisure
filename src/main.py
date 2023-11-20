from fastapi import FastAPI

from src.auth.base_config import auth_backend, fastapi_users
from src.auth.schemas import TeacherRead, TeacherCreate

from src.operations.router import router as router_operation

app = FastAPI(
    title="Trading App"
)

app.include_router(
    fastapi_users.get_auth_router(auth_backend),
    prefix="/auth",
    tags=["Auth"],
)

app.include_router(
    fastapi_users.get_register_router(TeacherRead, TeacherCreate),
    prefix="/auth",
    tags=["Auth"],
)

app.include_router(router_operation)