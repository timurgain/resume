from datetime import datetime

from sqlalchemy import Boolean, Column, DateTime, ForeignKey, Integer, String
from sqlalchemy.orm import backref, relationship

from ..database import Base


class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True)
    is_admin = Column(Boolean, nullable=False, default=False)
    email = Column(String(50), unique=True, nullable=False)
    password = Column(String(100), nullable=False)
    name = Column(String(50))
    surname = Column(String(50))
    telegram = Column(String(100))
    linkedin = Column(String(100))
    github = Column(String(100))

    created_at = Column(DateTime, default=datetime.utcnow)
    resumes = relationship('Resume', backref='resumes')

    def __repr__(self):
        return f"User: {self.name}, email: {self.email}"


class Resume(Base):
    __tablename__ = 'resumes'
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer,
                        ForeignKey('users.id', ondelete='cascade'),
                        nullable=False)

