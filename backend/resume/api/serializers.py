from flask import json, make_response, Response
from ..models.models import User

class BaseSerializer:
    """Basic serializer class. Inherit from it and assign a model attribute."""

    model = ...

    def __init__(self, obj):
        self.obj = obj

    def to_dict(self) -> dict:
        fields: list = self.model.__table__.columns.keys()
        instance_data = {}
        for field in fields:
            instance_data.update({field: getattr(self.obj, field)})
        return instance_data


class UserSerializer(BaseSerializer):
    """Serializer for User model."""
    model = User
