#!/usr/bin/env python
# _*_ coding:utf-8 _*_

from flask import jsonify
from flask_restful import Resource
from app.resources.news import News
from app.models.jobbole import JobboleNews
from app.constant import urls


class Jobbole(Resource, News):
    def __init__(self):
        super(News, self).__init__()
        self.url = urls.get('jobbole')
        self.news = JobboleNews()

    def get(self):
        res = self.query(self.news)
        return jsonify(res)


class Jobboleid(Resource, News):
    def __init__(self):
        super(News, self).__init__()
        self.url = urls.get('jobbole')
        self.news = JobboleNews()

    def get(self, id):
        res = self.query(self.news, id)
        return jsonify(res)


class Jobbolepage(Resource, News):
    def __init__(self):
        super(News, self).__init__()
        self.url = urls.get('jobbole')
        self.news = JobboleNews()

    def get(self, page):
        res = self.query(self.news, page)
        return jsonify(res)
