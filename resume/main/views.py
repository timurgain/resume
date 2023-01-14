from flask import render_template


def index():
    """The main page."""
    return render_template('index.html')

def save_as_pdf():
    """Download resume as a pdf-file."""
    pass
