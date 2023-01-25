from . import bp
from .views import admin

# URL generation rule: domen/blueprint_url_prefix/bp.add_url_rule('...',)

bp.add_url_rule('/', methods=['GET', 'POST'], provide_automatic_options=False,
                view_func=admin)
