#!/usr/bin/env python
# _*_ coding:utf-8 _*_

from flask_restful import Resource
from app.utils.scheduler import start_scheduler


class Test(Resource):

    def get(self):
        start_scheduler()
        pass
