from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker
from sqlalchemy.ext.declarative import declarative_base


# ЕСЛИ PostgreSQL и psycopg2 DBAPI
# SQLALCHEMY_DATABASE_URI = 'postgresql+psycopg2://root:pass@localhost/mydb'

# ЕСЛИ SQLite (локально для разработки)
SQLALCHEMY_DATABASE_URI = 'sqlite:///resume.db'

engine = create_engine(
    SQLALCHEMY_DATABASE_URI,
    # connect_args={'check_same_tread': False}
)

db_session = scoped_session(
    sessionmaker(autocommit=False, autoflush=False, bind=engine)
)

Base = declarative_base()
Base.query = db_session.query_property()

def init_db():
    # import all modules here that might define models so that
    # they will be registered properly on the metadata.  Otherwise
    # you will have to import them first before calling init_db()
    from .models import models
    Base.metadata.create_all(bind=engine)
