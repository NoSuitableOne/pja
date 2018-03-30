#!/usr/bin/env python
# _*_ coding:utf-8 _*_

from app.logger import app_logger


class News:
    # {'status': 'ok', 'data': {['title': '', 'href': '', 'label': '', 'support': '', 'read_times': ''],
    # []}}
    def query(self, news, page=None):
        res = dict()
        try:
            if page is None:
                app_logger.info('get %s data' % news)
                res['data'] = news.get_data_all()
            else:
                print('xxx')
                app_logger.info('get %s(page:%s) data' % (news, page))
                res['data'] = news.get_data_pagination(page)
            res['status'] = 'ok'
            return res, 200
        except Exception as e:
            app_logger.error('catch an error: %s' % str(e))
            res['data'] = None
            res['status'] = str(e)
            return res
