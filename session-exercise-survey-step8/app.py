from flask import Flask, request, render_template, redirect, flash, session
from surveys import satisfaction_survey as survey
from flask_debugtoolbar import DebugToolbarExtension

app = Flask(__name__)

app.config['SECRET_KEY'] = 'meowmeow'
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)

RESPONSES = 'responses'

@app.route('/')
def survey_home():
    """Shows survey home page where user can start the survey""" 

    title = survey.title
    instructions= survey.instructions

    return render_template('survey_home.html', title = title, instructions = instructions)


@app.route('/start_survey', methods =['POST'])
def start():
    """Sets the session for the survey and redirects to the first question"""

    session[RESPONSES] = []

    return redirect('/questions/0')


@app.route('/questions/<int:num>')
def questions(num):
    """Displays individual question from survey and prevents users from accessing questions out of order/accessing questions that don't exist"""

    responses = session.get(RESPONSES)
    questions = survey.questions

    if (responses is None):
        return redirect("/")
    
    if (len(responses) == len(questions)):
        return redirect("/complete")
    
    if (len(responses) != num):
        flash("Invalid question request!")
        return redirect(f"/questions/{len(responses)}")
    

    question = questions[num]
    choices = question.choices
    question_text = question.question

    return render_template('question.html', question = question_text, choices = choices)


@app.route('/answer', methods=['POST'])
def add_answer():
    """Adds answer to responses and redirects to next question"""

    answer = request.form['choice']

    responses = session[RESPONSES]
    responses.append(answer)
    session[RESPONSES] = responses

    if (len(responses) == len(survey.questions)):
        return redirect("/complete")

    else:
        return redirect(f"/questions/{len(responses)}")


@app.route('/complete')
def complete():
    """Shows survey completion page"""

    return render_template('complete.html')
