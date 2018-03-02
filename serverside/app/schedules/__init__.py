#!/usr/bin/env python
# _*_ coding:utf-8 _*_

from app.utils.spider import CreateSpider
from app.constant import urls


def start_crawling():
    spider = CreateSpider()
    spider.bootstrap(urls)
