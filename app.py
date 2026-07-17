from flask import Flask, render_template, request
import pickle

# Load the popularity-based model data
popular_df = pickle.load(open('popular.pkl', 'rb'))

app = Flask(__name__)


@app.route('/')
def index():
    """Home page — displays the Top 50 most popular books."""
    return render_template(
        "index.html",
        book_name=list(popular_df['Book-Title'].values),
        author=list(popular_df['Book-Author'].values),
        image=list(popular_df['Image-URL-M'].values),
        votes=list(popular_df['Num-rate'].values),
        rating=list(popular_df['Avg-rate'].values)
    )


@app.route('/recommend')
def recommend_ui():
    """Recommendation page — displays the search form."""
    return render_template("recommend.html")


@app.route('/recommend_books', methods=['POST'])
def recommend():
    """
    Handle recommendation request.

    TODO: Connect your recommendation model here.
    -----------------------------------------------
    Expected workflow:
      1. Get user input:  user_input = request.form.get('user_input')
      2. Call your recommendation model/function with user_input
      3. Format results as a list of lists: [[title, author, image_url], ...]
      4. Pass to template:  return render_template('recommend.html', data=results)

    Example:
      from your_model import get_recommendations
      results = get_recommendations(user_input)
      return render_template('recommend.html', data=results)
    """
    user_input = request.form.get('user_input')

    # --- PLACEHOLDER: Replace with your recommendation model call ---
    data = []  # Your model should return: [[title, author, image_url], ...]
    # ----------------------------------------------------------------

    return render_template("recommend.html", data=data)


@app.route('/about')
def about():
    """About page — project information and contact details."""
    return render_template("about.html")


if __name__ == '__main__':
    app.run(debug=True)