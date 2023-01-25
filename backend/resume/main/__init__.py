from flask import Blueprint

bp = Blueprint('main', __name__)

# importing routes is necessary
from . import routes

