#!/usr/bin/env python
# _*_ coding:utf-8 _*_


class News:
    # {'url': 'csdn', 'status': 'ok', 'data': {['title': '', 'href': '', 'label': '', 'support': '', 'read_times': ''],
    # []}}
    def query(self, news, original, id=None):
        res = dict()
        try:
            if id is None:
                res['data'] = news.get_data_all()
            else:
                res['data'] = news.get_data(id)
            res['url'] = original
            res['status'] = 'ok'
            return res, 200
        except Exception as e:
            # print(e)
            res['data'] = None
            res['url'] = original
            res['status'] = str(e)
            return res
