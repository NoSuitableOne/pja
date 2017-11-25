#!/usr/bin/env python
# _*_ coding:utf-8 _*_

from flask import Flask
from flask_login import LoginManager
from app.ext import db
from app.models.user import User
from app.models.user import AnonymousUser
from app.models.role import Role
from app.views.main.main import main
from app.views.auth.auth import auth


login_manager = LoginManager()
login_manager.session_protection = 'strong'
login_manager.login_view = 'auth.loginpage'
login_manager.anonymous_user = AnonymousUser


def create_app(config):
    app = Flask(__name__)

    app.config.from_object(config)

    db.init_app(app)
    login_manager.init_app(app)

    @login_manager.user_loader
    def load_user(user_id):
        print(user_id)
        user = User.query.get(int(user_id))
        return user

    app.register_blueprint(main)
    app.register_blueprint(auth)

    return app
