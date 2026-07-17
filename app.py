from flask import Flask, render_template, request
import pickle
import numpy as np

# Load the popularity-based model data
popular_df = pickle.load(open('popular.pkl', 'rb'))

# Load the collaborative filtering model data
pt = pickle.load(open('pt.pkl', 'rb'))
book = pickle.load(open('book.pkl', 'rb'))
similarity_score = pickle.load(open('similarity_score.pkl', 'rb'))

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
    
    user_input = request.form.get('user_input', '').strip()
   
    #index fetch
    old_index = np.where(pt.index == user_input)[0]
    if(old_index.size == 0):
        error_msg = ("Unfortunately, this book does not exist in our database at this time. "
                     "We will update this soon! Please try searching for another book to get similar choices.")
        return render_template('recommend.html', data=[], user_input=user_input, error_message=error_msg)
    
    index = old_index[0]
    similar_items = sorted(list(enumerate(similarity_score[index])),key = lambda x:x[1], reverse=True)[1:6]

    data =[]
    for i in similar_items:
        item = []
        temp_df = book[book['Book-Title'] == pt.index[i[0]]]
        item.extend(list(temp_df.drop_duplicates('Book-Title')['Book-Title']))
        item.extend(list(temp_df.drop_duplicates('Book-Title')['Book-Author']))
        item.extend(list(temp_df.drop_duplicates('Book-Title')['Image-URL-M']))

        data.append(item)

    return render_template('recommend.html', data=data, user_input=user_input)
  


@app.route('/about')
def about():
    """About page — project information and contact details."""
    return render_template("about.html")


if __name__ == '__main__':
    app.run(debug=True)