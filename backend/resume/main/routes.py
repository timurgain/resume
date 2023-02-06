from . import bp
from .views import index, test_db

# URL generation rule: domen/blueprint_url_prefix/bp.add_url_rule('...',)

bp.add_url_rule(
    '/', methods=['GET'], provide_automatic_options=False,
    view_func=index
)

bp.add_url_rule(
    '/test_db', methods=['GET', 'OPTIONS'], provide_automatic_options=False,
    view_func=test_db
)
