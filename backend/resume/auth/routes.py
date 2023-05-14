from . import bp
from .views import login, logout, signup

# URL generation rule: domen/blueprint_url_prefix/bp.add_url_rule('...',)

bp.add_url_rule(
    '/login', methods=['GET'], provide_automatic_options=False,
    view_func=login
)
bp.add_url_rule(
    '/signup', methods=['GET'], provide_automatic_options=False,
    view_func=signup
)
bp.add_url_rule(
    '/logout', methods=['GET'], provide_automatic_options=False,
    view_func=logout
)
