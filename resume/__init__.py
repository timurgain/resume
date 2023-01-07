from flask import Flask

from config import Config

# Flask will automatically detect the create_app() factory function
#  and use it to create an application instance
def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)

    # Initialize Flask extensions here

    # Register blueprints here
    from resume.main import bp as main_bp
    app.register_blueprint(main_bp)

    return app
