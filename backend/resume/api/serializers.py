from flask import json, make_response, Response
from ..models.models import User

class BaseSerializer:
    """Basic serializer class. Inherit from it and assign a model attribute."""

    model = ...

    def __init__(self, obj):
        self.obj = obj

    def to_dict(self) -> dict:
        fields: list = self.model.__table__.columns.keys()
        dct = {}
        for field in fields:
            dct.update({field: getattr(self.obj, field)})
        return dct

    def to_response(self) -> Response:
        response = make_response(self.to_dict())
        response.headers.add('Content-Type', 'application/json')
        return response


class UserSerializer(BaseSerializer):
    """Serializer for User model."""
    model = User
