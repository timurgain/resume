# from flask import Response, json, make_response

# from ..models.models import (Course, Education, HardSkill, Language, Resume,
#                              User, UsersHardSkills, UsersLanguages)

from marshmallow import Schema, fields


class UserSerializer(Schema):
    """Serializer for User model."""
    id = fields.Integer()
    name = fields.String()
    surname = fields.String()
    telegram = fields.Url()
    linkedin = fields.Url()
    github = fields.Url()
    hard_skills = fields.Method('get_hard_skills')
    educations = fields.List(fields.Nested(
        'EducationSerializer', exclude=('user_id',)))
    languages = fields.Method('get_languages')

    def get_hard_skills(self, user_obj):
        hard_skills = []
        for skill in user_obj.hard_skills:
            dct = {
                'id': skill.hard_skill.id,
                'order': skill.order,
                'title': skill.hard_skill.title
            }
            hard_skills.append(dct)
        return hard_skills

    def get_languages(self, user_obj):
        languages = []
        for language in user_obj.languages:
            dct = {
                'id': language.language.id,
                'order': language.order,
                'level': language.level,
                'title': language.language.title
            }
            languages.append(dct)
        return languages


class HardSkillSerializer(Schema):
    """Serializer for HardSkill model."""
    id = fields.Integer()
    title = fields.String()


class UsersHardSkillsSerializer(Schema):
    """Serializer for HardSkill model."""
    order = fields.Integer()
    user = fields.Nested('UserSerializer')
    hard_skill = fields.Nested('HardSkillSerializer')


class EducationSerializer(Schema):
    """Serializer for Education model."""
    id = fields.Integer()
    title = fields.String()
    user_id = fields.Integer()
    courses = fields.List(fields.Nested(
        'CourseSerializer', exclude=('education_id',)))


class CourseSerializer(Schema):
    """Serializer for Course model."""
    id = fields.Integer()
    title = fields.String()
    education_id = fields.Integer()
    graduate_date = fields.String()


class LanguageSerializer(Schema):
    """Serializer for Language model."""
    id = fields.Integer()
    title = fields.String()


class UsersLanguagesSerializer(Schema):
    """Serializer for HardSkill model."""
    order = fields.Integer()
    level = fields.String()
    user = fields.Nested('UserSerializer')
    language = fields.Nested('LanguageSerializer')


class ResumeSerializer(Schema):
    """Serializer for Resume model."""
    id = fields.Integer()
    article = fields.String()
    user = fields.Nested('UserSerializer')
