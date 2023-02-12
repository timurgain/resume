from flask import jsonify, make_response, request
from resume.utils import (_build_cross_preflight_response,
                          _corsify_actual_response)

from ..database import db_session
from ..models.models import User


def index():
    """The main page."""

    response = jsonify({"text": "Main page data"})
    return response

def test_db():
    """test db"""
    # user = User(
    #     is_admin=True,
    #     email='tm_test@email.com',
    #     password='qwerty1234'
    # )
    # db_session.add(user)
    # db_session.commit()

    return str(User.query.filter(User.email == 'tm_test@email.com').first())


