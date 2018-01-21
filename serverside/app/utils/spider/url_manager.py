#!/usr/bin/env python
# _*_ coding:utf-8 _*_


class UrlManager(object):
    def __init__(self):
        self.urls = dict()

    def add_new_url(self, urls):
        if urls is None:
            return
        self.urls = urls
        # print(self.new_urls)
        return self.urls
