from . import bp
from .views import index, ItemAPI, GroupAPI
from ..models.models import User
from .serializers import UserSerializer

# URL generation rule: domen/blueprint_url_prefix/bp.add_url_rule('...',)


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


register_api(blueprint=bp, model=User, name="users", serializer=UserSerializer)


bp.add_url_rule(
    '/', methods=['GET'], provide_automatic_options=False,
    view_func=index
)
