"""
This module runs and works separatly from the main flask app, when you need it.
"""
import os
import sys
import logging
import csv

# define carrent dir as base dir
#   to import moduls from the same dir as this script
BASE_DIR = os.path.abspath(os.path.dirname(__file__))
sys.path.append(os.path.dirname(BASE_DIR))

from resume.database import db_session, init_db
from resume.models.models import (Course, Education, File, HardSkill, Language,
                                  Resume, User, UsersHardSkills,
                                  UsersLanguages)


logger = logging.getLogger(__name__)
logger.setLevel(logging.DEBUG)
handler = logging.StreamHandler(stream=sys.stdout)
formatter = logging.Formatter(
    '%(asctime)s | %(levelname)s | %(message)s | %(module)s.%(funcName)s',
    '%d/%m/%Y %H:%M:%S'
)
handler.setFormatter(formatter)
logger.addHandler(handler)


class Table:
    """It writes entries into database from a csv-file
    where first line must be with fieldnames."""

    def __init__(self, model, csv_path: str):
        self._model = model
        self._csv_path = csv_path

    def _get_csv_data(self) -> list[dict]:
        with open(self._csv_path, 'r', encoding='utf-8-sig') as file:
            data_obj = csv.DictReader(file, delimiter=';')
            return [dct for dct in data_obj]

    def load_data(self):
        entries: list[dict] = self._get_csv_data()
        for entry in entries:
            db_session.add(self._model(**entry))
        db_session.commit()
        logger.info(f'recorded {len(entries)} entries'
                    f' in the {self._model.__tablename__} table')


if __name__ == '__main__':
    init_db()

    users = Table(
        User, 'backend/data/users.csv')
    users.load_data()

    hard_skills = Table(
        HardSkill, 'backend/data/hard_skills.csv')
    hard_skills.load_data()

    users_hard_skills = Table(
        UsersHardSkills, 'backend/data/users_hard_skills.csv')
    users_hard_skills.load_data()

    educations = Table(
        Education, 'backend/data/educations.csv')
    educations.load_data()

    courses = Table(
        Course, 'backend/data/courses.csv')
    courses.load_data()

    languages = Table(
        Language, 'backend/data/languages.csv')
    languages.load_data()

    users_languages = Table(
        UsersLanguages, 'backend/data/users_languages.csv')
    users_languages.load_data()

    resumes = Table(
        Resume, 'backend/data/resumes.csv')
    resumes.load_data()

    print(str(User.query.filter(User.name == 'Timur').first()))
    print(str(UsersHardSkills.query.all()))
