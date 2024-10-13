# Intialize Flask Application
from flask import Flask
from .models import db  # Import the database instance from models
from .config import Config

def create_app():
    app = Flask(__name__)  # Create a new Flask app
    app.config.from_object('src.config.Config')  # Load configuration from config.py

    db.init_app(app)  # Initialize the database with the app

    with app.app_context():
        db.create_all()

    app.register_blueprint(routes_bp)  # Register the routes blueprint

    return app
