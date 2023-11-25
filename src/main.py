from fastapi import FastAPI

from operations.router import router

app = FastAPI(
    title="Youth leisure"
)

app.include_router(router)