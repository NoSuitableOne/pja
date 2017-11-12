#!/usr/bin/env python
# _*_ coding:utf-8 _*_

from . import main
from .. import db
from flask import render_template, request, Response
from ..models import User


@main.route('/', methods=['GET'])
def index():
    return render_template('index.html')


@main.route('/login', methods=['GET'])
def login():
    return render_template('login.html')


@main.route('/dologin', methods=['POST'])
def dologin():
    data = request.form.to_dict()
    print(str(data))
    pass


def response_headers(content):
    resp = Response(content)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    return resp
