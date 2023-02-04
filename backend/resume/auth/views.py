from flask import jsonify, make_response, request
from resume.utils import (_build_cross_preflight_response,
                          _corsify_actual_response)


def login():
    return 'login'

def signup():
    return 'signup'

def logout():
    return 'logout'
