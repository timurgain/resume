from http import HTTPStatus

from flask import Flask
from werkzeug.exceptions import BadRequestKeyError

from .admin import bp as admin_bp
from .api import bp as api_bp
from .auth import bp as auth_bp
from .config import Config
from .database import db_session, init_db
from .error_handlers import (db_query_error, page_not_found, server_error,
                             url_query_params_error)
from .exceptions import DatabaseNoResultError
from .middlewares.cors import add_cors_headers


# Flask will automatically detect the create_app() factory function
#  and use it to create an application instance
def create_app(config_class=Config):

    # Create app
    app = Flask(__name__)
    app.config.from_object(config_class)

    # Register cors middleware
    app.after_request(add_cors_headers)

    # Configure the JSON settings
    app.json.ensure_ascii = False

    # Register teardown function that closes database session (sqlalchemy)
    #  when the app context is popped
    @app.teardown_appcontext
    def shutdown_db_session(exception=None):
        db_session.remove()

    # Register blueprints
    app.register_blueprint(api_bp, url_prefix='/api')
    app.register_blueprint(auth_bp, url_prefix='/auth')
    app.register_blueprint(admin_bp, url_prefix='/admin')

    # Register error handlers
    app.register_error_handler(HTTPStatus.NOT_FOUND, page_not_found)
    app.register_error_handler(BadRequestKeyError, url_query_params_error)
    app.register_error_handler(DatabaseNoResultError, db_query_error)
    app.register_error_handler(Exception, server_error)

    return app

# 0. To create the database once, then use alembic
# init_db()  # uncomment to run

# 1. Make migration terminal command
# alembic revision --autogenerate -m 'here is comment'

# 2. Migrate terminal command
# alembic upgrade heads
