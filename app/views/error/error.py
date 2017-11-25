#!/usr/bin/env python
# _*_ coding:utf-8 _*_

from flask import render_template
from app.views import main


@main.app_errorhandler(404)
def page_not_found(e):
    return render_template('error/404.html')


@main.app_errorhandler(500)
def server_error(e):
    return render_template('error/500.html')
