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

    def get(self):
        res = self.query(self.news)
        return jsonify(res)


class Cnblogsid(Resource, News):
    def __init__(self):
        super(News, self).__init__()
        self.url = urls.get('cnblogs')
        self.news = CnblogsNews()

    def get(self, id):
        res = self.query(self.news, id)
        return jsonify(res)


class Cnblogspage(Resource, News):
    def __init__(self):
        super(News, self).__init__()
        self.url = urls.get('cnblogs')
        self.news = CnblogsNews()

    def get(self, page):
        res = self.query(self.news, page)
        return jsonify(res)
