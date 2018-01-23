#!/usr/bin/env python
# _*_ coding:utf-8 _*_

from app.models.csdn import CsdnNews
from app.models.segmentfault import SegmentfaultNews
from app.models.juejin import JuejinNews
from app.models.cnblogs import CnblogsNews


class Outputer(object):

    def save_data(self, model_name, data):
        if data is None:
            return
        # print(data[data['table_name']])
        record = select_model(model_name)
        record.add_new_data(data[data['table_name']])


def select_model(model_name):
    model = {
        'csdn': CsdnNews(),
        'segmentfault': SegmentfaultNews(),
        'cnblogs': CnblogsNews(),
        'jejin': JuejinNews()
    }
    return model[model_name]