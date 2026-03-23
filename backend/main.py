from fastapi import FastAPI
# SQLAlchemy imports for database handling
from sqlalchemy import create_engine, Column, Integer, Float, String
from sqlalchemy.orm import declarative_base, sessionmaker
from fastapi.middleware.cors import CORSMiddleware
# Create FastAPI app instance
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Root API endpoint to check if server is running
@app.get("/")
def home():
    return {"message": "Backend is running"}

# Deposit API Endpoint
@app.post("/deposit")
def deposit(amount : float):
    db = SessionLocal()

    transaction = Transaction(type= "deposit", amount=amount)
    db.add(transaction)
    db.commit()

    return {"message" : "Amount Deposited", "amount": amount }

# Withdraw API endpoint
@app.post("/withdraw")
def withdraw(amount:float): 
    db = SessionLocal()

    transaction = Transaction(type= "Withdraw", amount=amount)
    db.add(transaction)
    db.commit()

    return {"message" : "Amount Withdrawn", "amount": amount }

# API for Transaction History
@app.get("/transactions")
def get_transactions():
    db = SessionLocal()
    data = db.query(Transaction).all()

    return [
        {"id": t.id, "type": t.type, "amount": t.amount}
        for t in data
    ]


# Database connection URL (SQLite file database)
DATABASE_URL = "sqlite:///./wallet.db"

# Create database engine
engine = create_engine(
    DATABASE_URL,
    connect_args={"check_same_thread": False}  # Needed for SQLite
    
)

# Create session for database operations
SessionLocal = sessionmaker(bind=engine)


# Base class for models
Base = declarative_base()


# Transaction Tables >> ID--Type
class Transaction(Base):
    __tablename__ = "transaction"

    id = Column(Integer,primary_key=True, index =True)
   
# Type  of Transaction (deposit or Withdraw)
    type = Column(String)
    
# Transaction amount
    amount = Column(Float)
Base.metadata.create_all(bind=engine)
