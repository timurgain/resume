from ..models.models import (Course, Education, HardSkill, Language, Resume,
                             User, UsersHardSkills, UsersLanguages)
from . import bp
from .serializers import (CourseSerializer, EducationSerializer,
                          HardSkillSerializer, LanguageSerializer,
                          ResumeSerializer, UserSerializer)
from .views import GroupAPI, ItemAPI, index

# URL generation rule: domen/blueprint_url_prefix/bp.add_url_rule('...',)

bp.add_url_rule(
    '/', methods=['GET'], provide_automatic_options=False,
    view_func=index
)


def register_api(blueprint, model, name, serializer):
    """It produces a usual REST API routes for specific models.
    https://flask.palletsprojects.com/en/2.2.x/views/?highlight=methodview#method-dispatching-and-apis"""

    blueprint.add_url_rule(
        rule=f"/{name}/<int:id>",
        view_func=ItemAPI.as_view(f"{name}-item", model, serializer)
    )
    blueprint.add_url_rule(
        rule=f"/{name}/",
        view_func=GroupAPI.as_view(f"{name}-group", model, serializer)
    )


register_api(
    blueprint=bp, model=User, name="users",
    serializer=UserSerializer
)
register_api(
    blueprint=bp, model=HardSkill, name="hard-skills",
    serializer=HardSkillSerializer
)
register_api(
    blueprint=bp, model=Education, name="educations",
    serializer=EducationSerializer
)
register_api(
    blueprint=bp, model=Course, name="courses",
    serializer=CourseSerializer
)
register_api(
    blueprint=bp, model=Language, name="languages",
    serializer=LanguageSerializer
)
register_api(
    blueprint=bp, model=Resume, name="resumes",
    serializer=ResumeSerializer
)
