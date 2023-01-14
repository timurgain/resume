from flask import Blueprint

bp = Blueprint('admin', __name__)

# importing routes is necessary
from . import routes
