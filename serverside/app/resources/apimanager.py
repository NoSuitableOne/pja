#!/usr/bin/env python
# _*_ coding:utf-8 _*_

from app.constant import version
from app.resources import spiderapi
from app.resources.news import cnblogs, csdn, segmentfault


def register_api(api):

    api.add_resource(cnblogs.Cnblogs, '/' + version + '/news/cnblogs', '/' + version + '/news/cnblogs/<int:id>')
    api.add_resource(csdn.Csdn, '/' + version + '/news/csdn', '/' + version + '/news/csdn/<int:id>')
    api.add_resource(segmentfault.Segmentfault, '/' + version + '/news/segmentfault',
                     '/' + version + '/news/segmentfault/<int:id>')
    api.add_resource(spiderapi.SpiderApi,  '/' + version + '/spider')

    return api
