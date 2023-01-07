from flask import Blueprint

bp = Blueprint('main', __name__)

from resume.main import routes
