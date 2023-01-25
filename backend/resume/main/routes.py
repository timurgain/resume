from . import bp
from .views import index, save_as_pdf

# URL generation rule: domen/blueprint_url_prefix/bp.add_url_rule('...',)

bp.add_url_rule(
    '/', methods=['GET'], provide_automatic_options=False,
    view_func=index
)

bp.add_url_rule(
    '/save_as_pdf', methods=['GET'], provide_automatic_options=False,
    view_func=save_as_pdf
)
