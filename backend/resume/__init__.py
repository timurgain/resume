from config import Config
from flask import Flask

from .admin import bp as admin_bp
from .auth import bp as auth_bp
from .main import bp as main_bp

from .database import db_session, init_db

# Flask will automatically detect the create_app() factory function
#  and use it to create an application instance

def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)

    # remove database session (sqlalchemy) when the application context is popped
    @app.teardown_appcontext
    def shutdown_db_session(exception=None):
        db_session.remove()

    # Register blueprints here
    app.register_blueprint(main_bp, url_prefix='/')
    app.register_blueprint(auth_bp, url_prefix='/auth')
    app.register_blueprint(admin_bp, url_prefix='/admin')

    return app

# To create the database once
init_db()
