from flask import Flask, render_template, jsonify, request, make_response, abort
# from flask_sqlalchemy import SQLAlchemy
import  json, os


app = Flask(__name__)

### app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
###b = SQLAlchemy(app)
###class Movie(db.Model):
#    id = db.Column(db.String(20), primary_key=True)
#    entity = db.Column(db.String(50), primary_key=True)
#    year = db.Column(db.Integer)
#    category = db.Column(db.String(30), primary_key=True)
#    sub_category = db.Column(db.String(30), primary_key=True)
###    def __repr__(self):
#        return f"(id='{self.id}',name='{self.entity}')"


# import
filename = 'static/oscars_ids.json'
with open(filename, 'r', encoding='utf-8') as lst:
    movies = json.load(lst)

# home page
@app.route("/")
def home():
    return render_template('index.html')

# search page
@app.route("/search")
def search():
    return render_template('search.html')

# display search results by passing in ID
@app.route("/searchresult")
def generate_result():
    id = request.args.get('id')
    return render_template('searchresult.html', id=id)

### API ###

# GET
# collection resource
@app.route('/api/movies', methods=['GET'])
def get_movies():
    return jsonify({'movies':movies})

# singleton resource by ID
@app.route("/api/movies/<string:movie_id>", methods=["GET"])
def get_movie_by_id(movie_id):
    movie = [movie for movie in movies if movie["id"] == movie_id]
    if len(movie) == 0:
        abort(404)
    return jsonify({"movie":movie[0]})

# extra collection resource
# the difference between /api/movies and /api/category_search
# is that the former was made to route the ID search
# the latter is for category search
# each returns a different type of resource:
#        ID -> singleton
#  category -> collection
@app.route('/api/category_search', methods=['GET'])
def get_movie_categories():
    return jsonify({'movie_categories':movies})

@app.route("/api/category_search/<string:category>", methods=["GET"])
def get_movie_by_category(category):
    category = category.upper()
    movie = [movie for movie in movies if movie["category"] == category]
    if len(movie) == 0:
        abort(404)
    return jsonify({"movie":movie})

# error override to produce JSON instead of debug output on 404
@app.errorhandler(404)
def not_found(error):
    return make_response(jsonify({"error":"Not Found"}), 404)

if __name__ == '__main__':
    app.run(debug=True, port=8083)
