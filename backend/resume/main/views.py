from flask import jsonify, make_response, request
from resume.utils import (_build_cross_preflight_response,
                          _corsify_actual_response)


def index():
    """The main page."""

    response = jsonify({"text": "Main page data"})
    return response

def save_as_pdf():
    """Download resume as a pdf-file."""
    test_json = jsonify({"text": "Here will be pdf file"})
    if request.method == 'OPTIONS':
        return _build_cross_preflight_response()
    elif request.method == 'GET':
        response = make_response(test_json)
        return _corsify_actual_response(response)

