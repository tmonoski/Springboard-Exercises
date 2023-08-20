from flask import Flask, request, render_template
from stories import story
from flask_debugtoolbar import DebugToolbarExtension

app = Flask(__name__)

app.config['SECRET_KEY'] = 'catsrule1234'
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0
debug = DebugToolbarExtension(app)


@app.route('/')
def home_page():
    """Shows form thats asks for words"""

    prompts = story.prompts

    return render_template('home.html', prompts = prompts)


@app.route('/story')
def show_story():
    """Shows the story result"""

    text = story.generate(request.args)

    return render_template('story.html', text = text)