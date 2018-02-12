#!/usr/bin/env python
# _*_ coding:utf-8 _*_


class News:
    # {'status': 'ok', 'data': {['title': '', 'href': '', 'label': '', 'support': '', 'read_times': ''],
    # []}}
    def query(self, news, page=None):
        res = dict()
        try:
            if page is None:
                res['data'] = news.get_data_all()
            else:
                res['data'] = news.get_data_pagination(page)
            res['status'] = 'ok'
            return res, 200
        except Exception as e:
            # print(e)
            res['data'] = None
            res['status'] = str(e)
            return res
