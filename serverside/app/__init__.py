#!/usr/bin/env python
# _*_ coding:utf-8 _*_

from flask import Flask, render_template
from app.ext import db, api, scheduler
from app.resources.apimanager import register_api
# from app.views import main


def create_app(config):
    app = Flask(__name__)

    app.config.from_object(config)

    db.init_app(app)
    db.app = app

    register_api(api)
    api.init_app(app)

    scheduler.init_app(app)
    scheduler.start()

    # app.register_blueprint(main)
    @app.route('/')
    def index():
        return render_template('index.html')

    return app
