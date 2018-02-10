#!/usr/bin/env python
# _*_ coding:utf-8 _*_

from flask import jsonify
from flask_restful import Resource
from app.resources.news import News
from app.models.csdn import CsdnNews
from app.constant import urls


class Csdn(Resource, News):
    def __init__(self):
        super(News, self).__init__()
        self.url = urls.get('csdn')
        self.news = CsdnNews()

    def get(self):
        res = self.query(self.news, self.url)
        return jsonify(res)


class Csdnid(Resource, News):
    def __init__(self):
        super(News, self).__init__()
        self.url = urls.get('csdn')
        self.news = CsdnNews()

    def get(self, id):
        res = self.query(self.news, self.url, id)
        return jsonify(res)


class Csdnpage(Resource, News):
    def __init__(self):
        super(News, self).__init__()
        self.url = urls.get('csdn')
        self.news = CsdnNews()

    def get(self, page):
        res = self.query(self.news, self.url, page)
        return jsonify(res)
