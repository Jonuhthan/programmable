"""Class to manage questions and recommendations using a priority queue."""

import heapq
from datetime import datetime, timedelta

class QuestionManager:
    def __init__(self):
        self.priority_queue = []
        self.question_map = {}


    """
        Add a question to the priority queue and the question map.
        
        Args:
            question (Question): The question to be added.
    """
    def add_question(self, question):
        heapq.heappush(self.priority_queue, question)
        self.question_map[question.id] = question


    def get_next_question(self):
        """
        Get the next question to review based on the priority queue.
        
        Returns:
            Question: The next question that is due for review, or None if there are no questions.
        """
        while self.priority_queue:
            question = heapq.heappop(self.priority_queue)  # Get the question with the nearest next review time
            if question.next_review <= datetime.now():  # Check if the question is due for review
                return question  # Return the due question
        return None  # No questions are due for review
    



    def update_question(self, question_id, correct):
        """
        Update the review time for a question based on whether the answer was correct or not.
        
        Args:
            question_id (int): The ID of the question.
            correct (bool): Whether the user's answer was correct.
        """
        question = self.question_map.get(question_id)
        if question:
            # Update the review time based on performance
            if correct:
                question.next_review = datetime.now() + timedelta(days=3)  # Increase interval for correct answers
            else:
                question.next_review = datetime.now() + timedelta(days=1)  # Decrease interval for wrong answers
            # Re-add the updated question back to the priority queue
            heapq.heappush(self.priority_queue, question)
    