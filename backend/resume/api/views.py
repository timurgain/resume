from flask import jsonify
from flask.views import MethodView
from resume.utils import (_build_cross_preflight_response,
                          _corsify_actual_response)

from ..database import db_session
from ..models.models import User


def index():
    """The main page."""

    response = jsonify({"text": "Main page data"})
    return response


class ItemAPI(MethodView):
    init_every_request = False

    def __init__(self, model, serializer, validator=None):
        self.model = model
        self.serializer = serializer
        self.validator = validator

    def _get_item(self, id):
        return self.model.query.get(id)

    def get(self, id):
        item = self._get_item(id)
        return self.serializer(item).to_response()

    # def patch(self, id):
    #     item = self._get_item(id)

    #     if self.validator is not None:
    #         errors = self.validator.validate(item, request.json)
    #         if errors:
    #             return jsonify(errors), 400

    #     item.update_from_json(request.json)
    #     db_session.commit()
    #     return jsonify(item)

    def delete(self, id):
        item = self._get_item(id)
        db_session.delete(item)
        db_session.commit()
        return "", 204

class GroupAPI(MethodView):
    init_every_request = False

    def __init__(self, model, serializer=None, validator=None):
        self.model = model
        self.serializer = serializer
        self.validator = validator

    def get(self):
        items = self.model.query.all()
        return jsonify([item.to_json() for item in items])

    # def post(self):

        # errors = self.validator.validate(request.json)

        # if errors:
        #     return jsonify(errors), 400

        # db_session.add(self.model.from_json(request.json))
        # db_session.commit()
        # return jsonify(item.to_json())



