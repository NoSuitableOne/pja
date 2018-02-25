#!/usr/bin/env python
# _*_ coding:utf-8 _*_

from app.utils.spider import CreateSpider
from app.constant import urls


def start_scheduler():
    spider = CreateSpider()
    spider.craw(urls)


def test():
    print('test every min')
