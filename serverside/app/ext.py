#!/usr/bin/env python
# _*_ coding:utf-8 _*_

from flask_sqlalchemy import SQLAlchemy
from flask_restful import Api
from flask_apscheduler import APScheduler


db = SQLAlchemy()
api = Api()
scheduler = APScheduler()
