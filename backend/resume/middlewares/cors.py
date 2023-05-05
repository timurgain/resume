from flask import request
from ..config import Config


def add_cors_headers(response):
    """Handles CORS and CORS preflight (OPTION method) types of request."""

    origin = request.headers.get('origin')
    if origin in Config.CORS.get('allow_origins'):
        response.headers.add("Access-Control-Allow-Origin", origin)

    if request.method == 'OPTIONS':
        response.headers.add("Access-Control-Allow-Headers", "*")
        response.headers.add("Access-Control-Allow-Methods",
                             ','.join(Config.CORS.get('allow_methods')))
    return response
