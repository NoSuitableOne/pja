#!/usr/bin/env python
# _*_ coding:utf-8 _*_

from flask_restful import Resource
from app.utils.spider import CreateSpider
from app.constant import urls


class SpiderApi(Resource):

    def get(self):
        spider = CreateSpider()
        spider.craw(urls=urls)
        return {'msg': 'spider started'}
