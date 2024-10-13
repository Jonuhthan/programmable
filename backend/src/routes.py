# Handle API Routes to fetch recommendations and update performance

from flask import Blueprint, jsonify, request
from .models import db, User, Question, LearningHistory
from .recommendations import RecommendationSystem

bp = Blueprint('api', __name__)

@bp.route('/questions/recommend', methods=['GET'])
def get_question_recommendation():
    """Get a recommended question for the user."""
    user_id = request.args.get('user_id')  # Get user ID from request
    selected_topic = request.args.get('topic')  # Get the selected topic
    recommender = RecommendationSystem(user_id, selected_topic)  # Initialize recommender with topic
    question = recommender.recommend_question()  # Fetch recommended question
    return jsonify({
        'id': question.id,
        'question': question.question_text,
        'choices': question.choices,
        'difficulty': question.difficulty
    })

@bp.route('/user/streak', methods=['GET'])
def get_user_streak():
    """Get the user's daily streak and progress towards it."""
    user_id = request.args.get('user_id')  # Get user ID from request
    user = User.query.get(user_id)  # Fetch user details
    
    if not user:
        return jsonify({"message": "User not found."}), 404

    return jsonify({
        'streak': user.streak,
        'daily_progress': user.daily_progress  # Return progress as an integer
    })


@bp.route('/performance', methods=['POST'])
def update_performance():
    """Update the user's performance based on their answer."""
    data = request.json
    recommender = RecommendationSystem(data['user_id'])
    recommender.update_learning_history(data['question_id'], data['correct'])  # Update history
    return jsonify({"message": "Performance updated!"})