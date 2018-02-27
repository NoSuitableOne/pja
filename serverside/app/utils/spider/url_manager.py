#!/usr/bin/env python
# _*_ coding:utf-8 _*_


class UrlManager(object):
    def __init__(self):
        self.jobs = list()

    def deal_jobs(self, urls):
        jobs = list()
        for key, values in urls.items():
            for value in values:
                jobs.append({'key': key, 'url': value})
        self.add_jobs(jobs)
        return self.jobs

    def add_jobs(self, urls):
        if urls is None:
            return
        self.jobs = urls
        # print(self.urls)
