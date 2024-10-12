# Define Question Model Here
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()  # Initialize SQLAlchemy

class User(db.Model):
    """Model to represent a user in the system."""
    id = db.Column(db.Integer, primary_key=True)  # Primary key for the user
    username = db.Column(db.String(80), unique=True, nullable=False)  # Unique username
    learning_history = db.relationship('LearningHistory', backref='user', lazy=True)  # Relationship to learning history
    streak = db.Column(db.Integer, default=0)  # Track user's streak of correct answers
