# Define Question Model Here
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()  # Initialize SQLAlchemy

class User(db.Model):
    """Model to represent a user in the system."""
    id = db.Column(db.Integer, primary_key=True)  # Primary key for the user
    username = db.Column(db.String(80), unique=True, nullable=False)  # Unique username
    learning_history = db.relationship('LearningHistory', backref='user', lazy=True)  # Relationship to learning history
    streak = db.Column(db.Integer, default=0)  # Track user's streak of correct answers

class Question(db.Model):
    """Model to represent a question with difficulty levels."""
    id = db.Column(db.Integer, primary_key=True)  # Primary key for the question
    subtopic = db.Column(db.String(100), nullable=False)  # Topic of the question
    DIFFICULTY_CHOICES = [
        (1, 'Easy'),       # 1: Easy difficulty
        (2, 'Medium'),     # 2: Medium difficulty
        (3, 'Hard')        # 3: Hard difficulty
    ]
    difficulty = db.Column(db.Integer, nullable=False)  # Store difficulty level as an integer
    question_text = db.Column(db.String(200), nullable=False)  # Text of the question
    choices = db.Column(db.JSON, nullable=False)  # Multiple choices stored as JSON
    answer = db.Column(db.String(100), nullable=False)  # Correct answer