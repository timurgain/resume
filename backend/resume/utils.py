from flask import make_response

# These about CORS

def _build_cross_preflight_response():
    """It makes a CORS preflight response.
    If you want the additional security gained by CORS,
    you have to specify origins, headers and methods."""

    response = make_response()
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add("Access-Control-Allow-Headers", "*")
    response.headers.add("Access-Control-Allow-Methods", "*")
    return response

def _corsify_actual_response(response):
    """It adds needed hedder param to your actual response."""
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response
