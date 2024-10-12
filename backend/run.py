# Entry point to run Flask app
from src import create_app

app = create_app()  # Create the Flask app

if __name__ == "__main__":
    app.run(debug=True)  # Run the app in debug mode