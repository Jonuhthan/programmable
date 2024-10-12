# Intialize Flask Application here
from flask import Flask
from .models import db  # Import the database instance from models
from .routes import bp as routes_bp  # Import routes

def create_app():
    app = Flask(__name__)  # Create a new Flask app
    app.config.from_object('config.Config')  # Load configuration from config.py

    db.init_app(app)  # Initialize the database with the app
    app.register_blueprint(routes_bp)  # Register the routes

    return app  # Return the initialized app