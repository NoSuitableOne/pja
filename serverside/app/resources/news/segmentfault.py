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

    def get(self, id=None):
        res = self.query(self.news, self.url, id)
        return jsonify(res)
