from flask import request, jsonify, make_response


def index():
    """The main page."""

    response = jsonify({"text": "Main page data"})
    response.headers.add("Access-Control-Allow-Origin", "*")

    return response

def save_as_pdf():
    """Download resume as a pdf-file."""
    test_text = {"text": "Here will be pdf file"}

    return jsonify(test_text)
