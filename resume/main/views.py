import json
from flask import render_template


def index():
    """The main page."""
    return render_template('index.html')

def save_as_pdf():
    """Download resume as a pdf-file."""
    test_text = {"text": "Here will be pdf file"}

    return json.dumps(test_text)
