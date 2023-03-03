from flask import Response, json, make_response

from ..models.models import (Course, Education, HardSkill, Language, Resume,
                             User, UsersHardSkills, UsersLanguages)


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


class HardSkillSerializer(BaseSerializer):
    """Serializer for HardSkill model."""
    model = HardSkill


class EducationSerializer(BaseSerializer):
    """Serializer for Education model."""
    model = Education


class CourseSerializer(BaseSerializer):
    """Serializer for Course model."""
    model = Course


class LanguageSerializer(BaseSerializer):
    """Serializer for Language model."""
    model = Language


class ResumeSerializer(BaseSerializer):
    """Serializer for Resume model."""
    model = Resume
