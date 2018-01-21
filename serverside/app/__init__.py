#!/usr/bin/env python
# _*_ coding:utf-8 _*_

from flask import Flask
from app.ext import db, api
from app.resources.apimanager import register_api
# from app.views.main.main import main


def create_app(config):
    app = Flask(__name__)

    app.config.from_object(config)

    db.init_app(app)

    register_api(api)
    api.init_app(app)

    # app.register_blueprint(main)

    return app
