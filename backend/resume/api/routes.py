from ..models.models import (Course, Education, HardSkill, Language, Resume,
                             User, File, UsersHardSkills, UsersLanguages)
from . import bp
from .serializers import (CourseSerializer, EducationSerializer,
                          HardSkillSerializer, LanguageSerializer,
                          ResumeSerializer, UserSerializer, FileSerializer)
from .views import CommonGroupAPI, CommonItemAPI, index, FileAPI

# URL generation rule: domen/blueprint_url_prefix/bp.add_url_rule('...',)

bp.add_url_rule(
    rule='/', methods=['GET'], provide_automatic_options=False,
    view_func=index
)

bp.add_url_rule(
    rule='/files',
    view_func=FileAPI.as_view('files-item', File, FileSerializer)
)

common_api_models = (
    ('users', User, UserSerializer),
    ('hard-skills', HardSkill, HardSkillSerializer),
    ('educations', Education, EducationSerializer),
    ('courses', Course, CourseSerializer),
    ('languages', Language, LanguageSerializer),
    ('resumes', Resume, ResumeSerializer),
)


def register_common_api(blueprint, name, model, serializer):
    """It produces standard REST API for specific models.
    https://flask.palletsprojects.com/en/2.2.x/views/?highlight=methodview#method-dispatching-and-apis"""

    blueprint.add_url_rule(
        rule=f"/{name}/<int:id>",
        view_func=CommonItemAPI.as_view(f"{name}-item", model, serializer)
    )
    blueprint.add_url_rule(
        rule=f"/{name}/",
        view_func=CommonGroupAPI.as_view(f"{name}-group", model, serializer)
    )


for model in common_api_models:
    register_common_api(bp, *model)
