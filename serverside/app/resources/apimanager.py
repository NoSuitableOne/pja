#!/usr/bin/env python
# _*_ coding:utf-8 _*_

from app.constant import version
from app.resources import spiderapi
from app.resources.news import jobbole, csdn, segmentfault


def register_api(api):

    api.add_resource(jobbole.Jobbole, '/' + version + '/news/jobbole')
    api.add_resource(jobbole.Jobbolepage, '/' + version + '/news/jobbole/<int:page>')

    api.add_resource(csdn.Csdn, '/' + version + '/news/csdn')
    api.add_resource(csdn.Csdnpage, '/' + version + '/news/csdn/<int:page>')

    api.add_resource(segmentfault.Segmentfault, '/' + version + '/news/segmentfault')
    api.add_resource(segmentfault.Segmentfaultpage, '/' + version + '/news/segmentfault/<int:page>')

    api.add_resource(spiderapi.SpiderApi,  '/' + version + '/spider')

    return api
