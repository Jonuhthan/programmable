import json
from src import create_app
from src.models import db, Question

# Create a Flask app instance
app = create_app()

with app.app_context():
    # Load questions from JSON file
    with open('questions.json', 'r') as file:
        questions = json.load(file)  # Load JSON data
        
        for item in questions:
            # Create a new Question instance
            new_question = Question(
                subtopic=item['subtopic'],
                topic=item['topic'],
                difficulty=item['difficulty'],
                question_text=item['question_text'],
                choices=item['choices'],  # Ensure choices is already a list
                answer=item['answer']
            )
            db.session.add(new_question)  # Add the question to the session

    db.session.commit()  # Commit all additions to the database
    print("Questions imported successfully!")