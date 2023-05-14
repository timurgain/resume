from flask import Blueprint

bp = Blueprint('api', __name__)

# importing routes is necessary
from . import routes
