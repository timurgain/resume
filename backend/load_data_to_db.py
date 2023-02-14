"""
This module runs and works separatly from the main flask app, when you need it.
"""
import csv
import logging
from sys import stdout

from resume.database import db_session, init_db
from resume.models.models import (Course, Education, File, HardSkill, Resume,
                                  User, UsersHardSkills)

logger = logging.getLogger(__name__)
logger.setLevel(logging.DEBUG)
handler = logging.StreamHandler(stream=stdout)
formatter = logging.Formatter(
    '%(asctime)s | %(levelname)s | %(message)s | %(module)s.%(funcName)s',
    '%d/%m/%Y %H:%M:%S'
)
handler.setFormatter(formatter)
logger.addHandler(handler)


class FillDataBase:
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
    users = FillDataBase(User, 'backend/data/users.csv')
    users.load_data()

    # print(str(User.query.filter(User.name == 'Timur').first()))
