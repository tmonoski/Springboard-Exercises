from flask import Flask, request
from operations import add, sub, mult, div

app = Flask(__name__)


@app.route('/add')
def do_add():
    """ Add a and b parameters"""

    a = int(request.args.get('a'))
    b = int(request.args.get('b'))
    result = add(a,b)

    return str(result)


@app.route('/sub')
def do_sub():
    """ Subtract a and b parameters"""

    a = int(request.args.get('a'))
    b = int(request.args.get('b'))
    result = sub(a,b)

    return str(result)


@app.route('/mult')
def do_mult():
    """ Multiply a and b parameters"""

    a = int(request.args.get('a'))
    b = int(request.args.get('b'))
    result = mult(a,b)

    return str(result)


@app.route('/div')
def do_div():
    """ Divide a and b parameters"""

    a = int(request.args.get('a'))
    b = int(request.args.get('b'))
    result = div(a,b)

    return str(result)


# Further study

operation = {
        "add": add,
        "sub": sub,
        "mult": mult,
        "div": div,
        }

@app.route("/math/<op>")
def do_math(op):
    """Do math operation on a and b."""

    a = int(request.args.get("a"))
    b = int(request.args.get("b"))
    result = operation[op](a, b)

    return str(result)