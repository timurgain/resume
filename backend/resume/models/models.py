from datetime import datetime

from sqlalchemy import (Column, Enum, ForeignKey, Integer, LargeBinary, String,
                        Text)
from sqlalchemy.orm import relationship

from ..database import Base

# The diagram
# https://drawsql.app/teams/tm-19/diagrams/resume-v3


class BaseModel(Base):
    """An abstract class for the project models."""
    __abstract__ = True
    id = Column(Integer, primary_key=True, autoincrement=True, unique=True)
    created_at = Column(String(30), default=datetime.utcnow().isoformat())
    updated_at = Column(String(30), onupdate=datetime.utcnow().isoformat())

    def __repr__(self):
        return f"<{type(self).__name__} (id={self.id})>"


class UsersHardSkills(Base):
    """An association table to provide M2M for User and HardSkill models."""
    __tablename__ = 'users_hard_skills'

    hard_skill_id = Column(ForeignKey("hard_skills.id"), primary_key=True)
    user_id = Column(ForeignKey("users.id"), primary_key=True)
    order = Column(Integer, unique=False)

    user = relationship("User", back_populates="hard_skills")
    hard_skill = relationship("HardSkill", back_populates="users")

    def __repr__(self):
        return (f"<{type(self).__name__} "
                f"(user_id={self.user_id}, "
                f"hard_skill_id={self.hard_skill_id})>")


class UsersLanguages(Base):
    """An association table to provide M2M for User and Language models."""
    __tablename__ = 'users_languages'

    language_id = Column(ForeignKey("languages.id"), primary_key=True)
    user_id = Column(ForeignKey("users.id"), primary_key=True)
    level = Column(String(50))
    order = Column(Integer, unique=False)

    user = relationship("User", back_populates="languages")
    language = relationship("Language", back_populates="users")

    def __repr__(self):
        return (f"<{type(self).__name__} "
                f"(user_id={self.user_id}, "
                f"language_id={self.language_id})>")


class User(BaseModel):
    """A table for users."""
    __tablename__ = 'users'

    # настроить авторизацию

    # is_admin = Column(Boolean, nullable=False, default=False)
    # email = Column(String(50), unique=True, nullable=False)
    # password = Column(String(50), nullable=False)

    name = Column(String(50), nullable=False)
    surname = Column(String(50))
    telegram = Column(String(100))
    linkedin = Column(String(100))
    github = Column(String(100))

    files = relationship('File', back_populates='user',
                         cascade="all, delete", passive_deletes=True,
                         lazy='dynamic')
    hard_skills = relationship('UsersHardSkills', back_populates='user')
    languages = relationship('UsersLanguages', back_populates='user')
    educations = relationship('Education', back_populates='user',
                              cascade="all, delete", passive_deletes=True)
    resumes = relationship('Resume', back_populates='user',
                           cascade="all, delete", passive_deletes=True)


class File(BaseModel):
    """A table for avatars, sertificates etc."""
    __tablename__ = 'files'
    FILETYPES = 'avatar', 'certificate'

    large_binary = Column(LargeBinary, nullable=False)
    filetype = Column(Enum(*FILETYPES, name='filetype'), nullable=False)
    filename = Column(String(50), nullable=False)
    user_id = Column(Integer, ForeignKey('users.id', ondelete='CASCADE'),
                     nullable=False)
    user = relationship('User', back_populates='files')


class HardSkill(BaseModel):
    """A table for hard skills. Connects with Resume as M2M."""
    __tablename__ = 'hard_skills'

    title = Column(String(50), nullable=False)
    users = relationship('UsersHardSkills', back_populates='hard_skill')


class Language(BaseModel):
    """A table for languages. Connects with Resume as M2M."""
    __tablename__ = 'languages'

    title = Column(String(50), nullable=False)
    users = relationship('UsersLanguages', back_populates='language')


class Education(BaseModel):
    """A table for educations which consist of courses."""
    __tablename__ = 'educations'

    title = Column(String(100), nullable=False)
    user_id = Column(Integer, ForeignKey('users.id', ondelete='CASCADE'),
                     nullable=False)
    user = relationship('User', back_populates='educations')
    courses = relationship('Course', back_populates='education',
                           cascade="all, delete", passive_deletes=True)


class Course(BaseModel):
    """A table for courses as parts of educations."""
    __tablename__ = 'courses'

    title = Column(String(100), nullable=False)
    education_id = Column(Integer,
                          ForeignKey('educations.id', ondelete='CASCADE'),
                          nullable=False)
    graduate_date = Column(String(30), nullable=False)
    education = relationship('Education', back_populates='courses')


class Resume(BaseModel):
    """A table for resumes."""
    __tablename__ = 'resumes'

    article = Column(Text())
    user_id = Column(Integer, ForeignKey('users.id', ondelete='CASCADE'),
                     nullable=False)
    user = relationship('User', back_populates='resumes')
