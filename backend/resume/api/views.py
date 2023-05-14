from http import HTTPStatus

from flask import Response, jsonify, make_response
from flask.views import MethodView

from ..database import db_session


def index() -> Response:
    """Temporary main page."""
    response = jsonify({"temporary_text": "Main page data"})
    return response


class BaseAPIView(MethodView):
    """Base view class with common features."""
    init_every_request = False

    def __init__(self, model, serializer, validator=None):
        self.model = model
        self.serializer = serializer
        self.validator = validator

    def _response_error(self, error: Exception) -> Response:
        """Response if error occurs."""
        response = make_response(
            {"Error": repr(error)}, HTTPStatus.BAD_REQUEST)
        return self._corsify_actual_response(response)

    def _make_response(func):
        """The decorator makes response obj and handles errors."""

        def wrapper(self, *args, **kwargs):
            try:
                serialized_data = func(self, *args, **kwargs)

                response = make_response(serialized_data)
                response.headers.add('Content-Type', 'application/json')
                return self._corsify_actual_response(response)
            except Exception as err:
                return self._response_error(err)
        return wrapper

    @staticmethod
    def _build_cross_preflight_response() -> Response:
        """Makes a CORS preflight response."""
        response = make_response()
        response.headers.add("Access-Control-Allow-Origin", "*")
        response.headers.add("Access-Control-Allow-Headers", "*")
        response.headers.add("Access-Control-Allow-Methods", "*")
        return response

    @staticmethod
    def _corsify_actual_response(response: Response) -> Response:
        """Adds header param to the actual response. CORS needs it."""
        response.headers.add("Access-Control-Allow-Origin", "*")
        return response

    def options(self, *args, **kwargs):
        """Handles preflight OPTIONS method request, if CORS is used."""
        return self._build_cross_preflight_response()


class ItemAPI(BaseAPIView):
    """View class is used for:
        - representing a single model instance,
        - (TODO) update a single model instance,
        - (TODO) delete a single model instance."""

    def _get_item(self, id):
        try:
            return self.model.query.get(id)
        except Exception as err:
            raise err

    @BaseAPIView._make_response
    def get(self, id):
        item = self._get_item(id)
        serializer = self.serializer()
        return serializer.dump(item)
        # return self.serializer(item).to_dict()

    def delete(self, id):
        item = self._get_item(id)
        db_session.delete(item)
        db_session.commit()
        return "", 204


class GroupAPI(BaseAPIView):
    """View class is used for:
        - representing a collection of model instances,
        - (TODO) creating a single model instance."""

    @BaseAPIView._make_response
    def get(self):
        items = self.model.query.all()
        serializer = self.serializer(many=True)
        return serializer.dump(items)
