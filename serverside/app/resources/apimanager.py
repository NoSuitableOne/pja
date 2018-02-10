#!/usr/bin/env python
# _*_ coding:utf-8 _*_

from app.constant import version
from app.resources import spiderapi
from app.resources.news import cnblogs, csdn, segmentfault


def register_api(api):

    api.add_resource(cnblogs.Cnblogs, '/' + version + '/news/cnblogs')
    api.add_resource(cnblogs.Cnblogsid, '/' + version + '/news/cnblogs/<int:id>')
    api.add_resource(cnblogs.Cnblogspage, '/' + version + '/news/cnblogs/page/<int:page>')

    api.add_resource(csdn.Csdn, '/' + version + '/news/csdn')
    api.add_resource(csdn.Csdnid, '/' + version + '/news/csdn/<int:id>')
    api.add_resource(csdn.Csdnpage, '/' + version + '/news/csdn/page/<int:page>')

    api.add_resource(segmentfault.Segmentfault, '/' + version + '/news/segmentfault')
    api.add_resource(segmentfault.Segmentfaultid, '/' + version + '/news/segmentfault/<int:id>')
    api.add_resource(segmentfault.Segmentfaultpage, '/' + version + '/news/segmentfault/page/<int:page>')

    api.add_resource(spiderapi.SpiderApi,  '/' + version + '/spider')

    return api
