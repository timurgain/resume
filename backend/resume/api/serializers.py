from flask import json, make_response
from ..models.models import User

class UserSerializer:
    model = User

    def __init__(self, obj):
        self.obj = obj

    def _to_dict(self):
        return dict(
            id=self.obj.id,
            name=self.obj.name,
            created_at=self.obj.created_at,
            educations=self.obj.educations
        )

    def _to_json(self):
        data = self._to_dict()
        return json.dumps(data)

    def to_response(self):
        response = make_response(self._to_json())
        response.headers.add('Content-Type', 'application/json')
        return response
