from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from operations.router import router


app = FastAPI(
    title="Youth leisure"
)

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins, 
    allow_credentials=True,
    allow_methods=["GET", "POST", "DELETE", "PATCH"],
    allow_headers=["*"],
)

app.include_router(router)