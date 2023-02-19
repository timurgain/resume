from flask import json, make_response
from ..models.models import User

class BaseSerializer:
    """Basic serializer class. Inherit from it and assign a model attribute."""

    model = ...

    def __init__(self, obj):
        self.obj = obj

    def _to_dict(self):
        fields: list = self.model.__table__.columns.keys()
        dct = {}
        for field in fields:
            dct.update({field: getattr(self.obj, field)})
        return dct

    def _to_json(self):
        data = self._to_dict()
        return json.dumps(data)

    def to_response(self):
        response = make_response(self._to_json())
        response.headers.add('Content-Type', 'application/json')
        return response


class UserSerializer(BaseSerializer):
    """Serializer for User model."""
    model = User
