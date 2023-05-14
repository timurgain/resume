from http import HTTPStatus

from flask import make_response


def page_not_found(error):
    return make_response(
        {"Error": 'This page does not exist'},
        HTTPStatus.NOT_FOUND
    )


def url_query_params_error(error):
    return make_response(
        {"Error": 'Wrong url query params'},
        HTTPStatus.BAD_REQUEST
    )


def db_query_error(error):
    return make_response(
        {"Error": 'Database returned an empty result'},
        HTTPStatus.NOT_FOUND
    )


def server_error(error):
    return make_response(
        {"Error": 'Something went wrong on the server'},
        HTTPStatus.INTERNAL_SERVER_ERROR
    )
