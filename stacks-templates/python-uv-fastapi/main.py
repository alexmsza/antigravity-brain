from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field
from typing import Optional

app = FastAPI(
    title="ASZA Core API Service",
    description="Microserviço resiliente em FastAPI gerenciado via uv",
    version="1.0.0"
)

class HealthResponse(BaseModel):
    status: str = Field(default="healthy", description="Status da API")
    environment: str = Field(default="production")

@app.get("/health", response_model=HealthResponse)
async def health_check():
    return HealthResponse()
