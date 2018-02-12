#!/usr/bin/env python
# _*_ coding:utf-8 _*_

from flask import jsonify
from flask_restful import Resource
from app.resources.news import News
from app.models.segmentfault import SegmentfaultNews
from app.constant import urls


class Segmentfault(Resource, News):
    def __init__(self):
        super(News, self).__init__()
        self.url = urls.get('segmentfault')
        self.news = SegmentfaultNews()

    def get(self):
        res = self.query(self.news)
        return jsonify(res)


class Segmentfaultid(Resource, News):
    def __init__(self):
        super(News, self).__init__()
        self.url = urls.get('segmentfault')
        self.news = SegmentfaultNews()

    def get(self, id):
        res = self.query(self.news, id)
        return jsonify(res)


class Segmentfaultpage(Resource, News):
    def __init__(self):
        super(News, self).__init__()
        self.url = urls.get('segmentfault')
        self.news = SegmentfaultNews()

    def get(self, page):
        print(page)
        res = self.query(self.news, page)
        return jsonify(res)
