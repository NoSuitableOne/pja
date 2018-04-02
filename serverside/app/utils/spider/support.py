#!/usr/bin/env python
# _*_ coding:utf-8 _*_

import datetime
import re
from app.logger import spider_logger

now = datetime.datetime.now()
year = datetime.datetime.now().year
month = datetime.datetime.now().month
day = datetime.datetime.now().day


def csdn_time(raw_time):
    if re.search(re.compile(r'\d{1,2}\s*\u5c0f\u65f6\u524d'), raw_time):
        delta_hour = int(re.sub('\D', ',', raw_time).split(',')[0])
        delta = datetime.timedelta(hours=delta_hour)
        time = (now - delta).strftime('%Y-%m-%d %H:%M')
        spider_logger.info('change (csdn time) \u5c0f\u65f6\u524d to %s' % str(time))
        return time
    elif re.search(re.compile(r'\d{1,2}\u5206\u949f\u524d'), raw_time):
        delta_minute = int(re.sub('\D', ',', raw_time).split(',')[0])
        delta = datetime.timedelta(minutes=delta_minute)
        time = (now - delta).strftime('%Y-%m-%d %H:%M')
        spider_logger.info('change (csdn time) \u5206\u949f\u524d to %s' % str(time))
        return time
    else:
        spider_logger.info('save (csdn time) rawtime %s', str(raw_time))
        return raw_time


def segmentfault_time(raw_time):
    if re.search(re.compile(r'\d{1,2}\s*\u5929\u524d'), raw_time):
        delta_day = int(re.sub('\D', ',', raw_time).split(',')[0])
        delta = datetime.timedelta(days=delta_day)
        time = (now - delta).strftime('%Y/%m/%d')
        spider_logger.info('save (sf time) \u5929 to %s' % str(time))
        return time
    elif re.search(re.compile(r'\d{1,2}\s*\u5c0f\u65f6\u524d'), raw_time):
        time = now.strftime('%Y/%m/%d')
        spider_logger.info('save (sf time) \u5c0f\u65f6\u524d to %s' % str(time))
        return time
    elif re.search(re.compile(r'\d{1,2}\u6708\d{1,2}\u65e5'), raw_time):
        mid = re.sub('\D', ',', raw_time).split(',')
        unformated_time = datetime.date(year, int(mid[0]), int(mid[1]))
        time = unformated_time.strftime('%Y/%m/%d')
        spider_logger.info('save (sf time) \u6708 \u65e5 to %s' % str(time))
        return time
    else:
        spider_logger.info('save (sf time) rawtime %s', str(raw_time))
        return raw_time
