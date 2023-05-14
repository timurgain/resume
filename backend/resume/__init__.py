from flask import Flask

from .admin import bp as admin_bp
from .api import bp as api_bp
from .auth import bp as auth_bp
from .config import Config
from .database import db_session, init_db


# Flask will automatically detect the create_app() factory function
#  and use it to create an application instance
def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)

    # json setings
    app.json.ensure_ascii = False

    # remove database session (sqlalchemy) when the app context is popped
    @app.teardown_appcontext
    def shutdown_db_session(exception=None):
        db_session.remove()

    # Register blueprints here
    app.register_blueprint(api_bp, url_prefix='/')
    app.register_blueprint(auth_bp, url_prefix='/auth')
    app.register_blueprint(admin_bp, url_prefix='/admin')

    return app

# 0. To create the database once, then use alembic
# init_db()  # uncomment to run

# 1. Make migration terminal command
# alembic revision --autogenerate -m 'here is comment'

# 2. Migrate terminal command
# alembic upgrade heads
