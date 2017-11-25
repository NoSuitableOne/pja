#!/usr/bin/env python
# _*_ coding:utf-8 _*_

from flask import abort, Blueprint, jsonify, render_template, request, redirect, url_for
from flask_login import login_user, logout_user, login_required
from app.models.user import User


auth = Blueprint('auth', __name__, url_prefix='/auth')


@auth.route('/loginpage', methods=['GET'])
def loginpage():
    user = User()
    login_user(user)
    return render_template('auth/login.html')


@auth.route('/logout', methods=['GET', 'POST'])
@login_required
def logout():
    logout_user()
    return '<div>auth login page</div>'


@auth.route('/login', methods=['POST'])
def login():
    login_username = request.form.get('username')
    user = User.query.filter_by(username=login_username).first()
    print(user)
    if user is not None:
        if user.confirm_password(request.form.get('password')):
            return redirect(url_for('main.index'))
        else:
            return jsonify({'message': 'wrong password'})
    else:
        return jsonify({'message': 'unavailable user'})


@auth.route('/register', methods=['POST'])
def register():
    new_username = request.form.get('username')
    print(check_username_existed(new_username=new_username))
    if check_username_existed(new_username=new_username):
        return jsonify({'message': 'resister failed'})
    else:
        return jsonify({'message': 'register a new user success'})


@auth.route('/register/username', methods=['POST'])
def username_info():
    new_username = request.form.get('username')
    if check_username_existed(new_username=new_username):
        return jsonify({'message': {'available': False}})
    else:
        return jsonify({'message': {'available': True}})


def check_username_existed(**kwargs):
    user = User.query.filter_by(username=kwargs['new_username']).first()
    if user is None:
        return False
    else:
        return True
