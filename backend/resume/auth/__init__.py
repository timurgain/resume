from flask import Blueprint

bp = Blueprint('auth', __name__)

# importing routes is necessary
from . import routes
