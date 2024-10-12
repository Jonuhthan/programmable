# Defines the user and question models for the database

from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()  # Initialize SQLAlchemy

class User(db.Model):
    """Model to represent a user in the system."""
    id = db.Column(db.Integer, primary_key=True)  # Primary key for the user
    username = db.Column(db.String(80), unique=True, nullable=False)  # Unique username
    learning_history = db.relationship('LearningHistory', backref='user', lazy=True)  # Relationship to learning history
    streak = db.Column(db.Integer, default=0)  # Track user's streak of correct answers

class Question(db.Model):
    """Model to represent a question."""
    id = db.Column(db.Integer, primary_key=True)
    topic = db.Column(db.String(100), nullable=False)  # Main topic of the question
    subtopic = db.Column(db.String(100), nullable=False)  # Subtopic of the question
    difficulty = db.Column(db.Integer, nullable=False)  # Difficulty: 1 (Easy), 2 (Medium), 3 (Hard)
    question_text = db.Column(db.String(200), nullable=False)  # Question content
    choices = db.Column(db.JSON, nullable=False)  # Multiple choices
    answer = db.Column(db.String(100), nullable=False)  # Correct answer

class LearningHistory(db.Model):
    """Model to track user's learning history with questions."""
    id = db.Column(db.Integer, primary_key=True)  # Primary key for the learning history entry
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)  # Foreign key to User
    question_id = db.Column(db.Integer, db.ForeignKey('question.id'), nullable=False)  # Foreign key to Question
    correct = db.Column(db.Boolean, nullable=False)  # Track if the answer was correct
    attempt_date = db.Column(db.DateTime)  # Date and time of the attempt
