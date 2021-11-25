import os
from flask import Flask, render_template, request, session, flash, url_for
from flask_cors import CORS
from flask_migrate import Migrate
from flask_wtf.csrf import CSRFProtect, generate_csrf
from flask_login import LoginManager

from .models import db, User
from .routes.user_routes import user_routes
from .routes.api.project_routes import project_routes
from .routes.api.pledge_routes import pledge_routes
from .routes.api.obit_routes import obit_routes
from .routes.api.donation_routes import donation_routes

from .seeds import seed_commands

from .config import Config

app = Flask(__name__)
UPLOAD_FOLDER = '/app/obit_planks/'
ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'}

with app.app_context():
    # Setup login manager
    login = LoginManager(app)
    login.login_view = 'auth.unauthorized'

    #For testing, disable CSRF
    # app.config['WTF_CSRF_ENABLED'] = False

    # Tell flask about our seed commands
    app.cli.add_command(seed_commands)
    app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
    app.config.from_object(Config)
    app.register_blueprint(pledge_routes, url_prefix='/api')
    app.register_blueprint(donation_routes, url_prefix='/api')
    app.register_blueprint(obit_routes, url_prefix='/api')
    app.register_blueprint(project_routes, url_prefix='/api/projects')
    app.register_blueprint(user_routes, url_prefix='/users')
    app.register_blueprint(obit_routes, url_prefix='/api/obits')
    db.init_app(app)
    Migrate(app, db)

    # Application Security
    CORS(app)

@login.user_loader
def load_user(id):
    return User.query.get(int(id))

@app.after_request
def inject_csrf_token(response):
    print(f"CSRF Token injected")
    response.set_cookie('csrf_token',
                        generate_csrf(),
                        secure=True if os.environ.get(
                            'FLASK_ENV') == 'production' else False,
                        samesite='Strict' if os.environ.get(
                            'FLASK_ENV') == 'production' else None,
                        httponly=True)
    return response


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def react_root(path):
    print("path", path)
    if path == 'favicon.ico':
        return app.send_static_file('favicon.ico')
    return app.send_static_file('index.html')

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/upload', methods=['GET', 'POST'])
def upload_file():
    if request.method == 'POST':
        # check if the post request has the file part
        if 'file' not in request.files:
            flash('No file part')
            return redirect(request.url)
        file = request.files['file']
        # If the user does not select a file, the browser submits an
        # empty file without a filename.
        if file.filename == '':
            flash('No selected file')
            return redirect(request.url)
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            return redirect(url_for('download_file', name=filename))
    return '''
    <!doctype html>
    <title>Upload new File</title>
    <h1>Upload new File</h1>
    <form method=post enctype=multipart/form-data>
      <input type=file name=file>
      <input type=submit value=Upload>
    </form>
    '''