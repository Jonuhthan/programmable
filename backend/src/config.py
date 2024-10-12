import os

class Config:
    """Configuration settings for Flask application."""
    SQLALCHEMY_DATABASE_URI = 'sqlite:///site.db'  # SQLite database path
    SQLALCHEMY_TRACK_MODIFICATIONS = False  # Disable modification tracking