#!/usr/bin/env python
# _*_ coding:utf-8 _*_

from flask import jsonify
from flask_restful import Resource
from app.resources.news import News
from app.models.cnblogs import CnblogsNews
from app.constant import urls


class Cnblogs(Resource, News):
    def __init__(self):
        super(News, self).__init__()
        self.url = urls.get('cnblogs')
        self.news = CnblogsNews()

    def get(self, id=None):
        res = self.query(self.news, self.url, id)
        return jsonify(res)
