from io import BytesIO

from flask import Response, jsonify, request, send_file
from flask.views import MethodView
from werkzeug.exceptions import BadRequestKeyError

from ..database import db_session
from ..exceptions import DatabaseNoResultError
from ..models.models import File, Resume


def index() -> Response:
    """Temporary main page."""
    return jsonify({"temporary_text": "Main page data"})


class BaseAPIView(MethodView):
    """Base view class with common features."""
    init_every_request = False

    def __init__(self, model, serializer=None, validator=None):
        self.model = model
        self.serializer = serializer
        self.validator = validator


class FileAPI(BaseAPIView):
    """View class is used to send large_binary as a file."""
    def _get_item(self):
        resume_id = request.args.get('resume')
        filetype = request.args.get('type')
        if any((not resume_id, not filetype)):
            raise BadRequestKeyError()

        resume = Resume.query.get(resume_id)
        if resume is None:
            raise DatabaseNoResultError()

        file = File.query.filter(
            File.user == resume.user, File.filetype == filetype
        ).first()
        if file is None:
            raise DatabaseNoResultError()

        return file

    def get(self):
        file = self._get_item()
        serializer = self.serializer()
        serialized_data = serializer.dump(file)
        data = BytesIO(serialized_data['large_binary'])
        return send_file(data, mimetype='image/jpeg')


class CommonItemAPI(BaseAPIView):
    """Common view class is used for:
        - representing a single model instance,
        - (TODO) update a single model instance,
        - (TODO) delete a single model instance."""

    def _get_item(self, id):
        item = self.model.query.get(id)
        if item is None:
            raise DatabaseNoResultError()
        return item

    def get(self, id):
        item = self._get_item(id)
        serializer = self.serializer()
        return serializer.dump(item)

    def delete(self, id):
        item = self._get_item(id)
        db_session.delete(item)
        db_session.commit()
        return "", 204


class CommonGroupAPI(BaseAPIView):
    """Common view class is used for:
        - representing a collection of model instances,
        - (TODO) creating a single model instance."""

    def get(self):
        items = self.model.query.all()
        if not items:
            raise DatabaseNoResultError()
        serializer = self.serializer(many=True)
        return serializer.dump(items)
