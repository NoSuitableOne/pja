#!/usr/bin/env python
# _*_ coding:utf-8 _*_

from app.models.csdn import CsdnNews
from app.models.segmentfault import SegmentfaultNews
from app.models.juejin import JuejinNews
from app.models.cnblogs import CnblogsNews
from app.models.jobbole import JobboleNews
from app.logger import spider_logger


class Outputer(object):

    def save_data(self, url_key, data):
        if data is None:
            return
        record = select_model(url_key)
        record.add_new_data(data[data['table_name']])
        spider_logger.info('save data ok')


def select_model(url_key):
    model = {
        'csdn': CsdnNews(),
        'segmentfault': SegmentfaultNews(),
        'cnblogs': CnblogsNews(),
        'jejin': JuejinNews(),
        'jobbole': JobboleNews()
    }
    return model[url_key]
