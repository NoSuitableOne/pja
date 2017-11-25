#!/usr/bin/env python
# _*_ coding:utf-8 _*_

from flask import abort, Blueprint, jsonify, make_response, render_template, request
from flask_login import login_required
from app.controllers.api.v1.tasks.task import tasks

main = Blueprint('main', __name__)


@main.route('/')
@login_required
def index():
    return render_template('main/index.html')


@main.app_errorhandler(404)
def page_not_found(e):
    return make_response(jsonify({'error': '404 error'}), 404)


@main.app_errorhandler(500)
def server_error(e):
    return make_response(jsonify({'error': '500 error'}), 500)


@main.route('/pja/api/v1.0/tasks', methods=['GET'])
def get_tasks(task_id):
    return jsonify({'tasks': tasks})


@main.route('/pja/api/v1.0/tasks/<int:task_id>', methods=['GET'])
def get_tasks_by_id(task_id):
    task = list(filter(lambda t: t['id'] == task_id, tasks))
    if len(task) == 0:
        abort(404)
    return jsonify({'tasks': task[0]})


@main.route('/pja/api/v1.0/tasks', methods=['POST'])
def create_task():
    if not request.json or 'title' not in request.json:
        abort(404)
    task = {
        'id': tasks[-1]['id'] + 1,
        'title': request.json['title'],
        'description': request.json.get('description', ""),
        'done': False
    }
    tasks.append(task)
    return jsonify({'tasks': tasks}, 201)
