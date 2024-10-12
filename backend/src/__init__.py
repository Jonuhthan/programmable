# Intialize Flask Application
from flask import Flask
from .models import db  # Import the database instance from models

def create_app():
    app = Flask(__name__)  # Create a new Flask app
    app.config.from_object('config.Config')  # Load configuration from config.py

    with app.app_context():
        db.init_app(app)  # Initialize the database with the app

        from . import routes  # Import routes
        return app # Return the app