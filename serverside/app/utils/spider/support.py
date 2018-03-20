#!/usr/bin/env python
# _*_ coding:utf-8 _*_

import datetime
import re


now = datetime.datetime.now()
year = datetime.datetime.now().year
month = datetime.datetime.now().month
day = datetime.datetime.now().day


def csdn_time(raw_time):
    if re.search(re.compile(r'\d{1,2}\s*\u5c0f\u65f6\u524d'), raw_time):
        delta_hour = int(re.sub('\D', ',', raw_time).split(',')[0])
        delta = datetime.timedelta(hours=delta_hour)
        time = (now - delta).strftime('%Y-%m-%d %H:%M')
        # print('\u5c0f\u65f6\u524d ok')
        return time
    else:
        return raw_time


def segmentfault_time(raw_time):
    if re.search(re.compile(r'\d{1,2}\s*\u5929\u524d'), raw_time):
        delta_day = int(re.sub('\D', ',', raw_time).split(',')[0])
        delta = datetime.timedelta(days=delta_day)
        time = (now - delta).strftime('%Y/%m/%d')
        # print('\u5929 ok')
        return time
    elif re.search(re.compile(r'\d{1,2}\s*\u5c0f\u65f6\u524d'), raw_time):
        time = now.strftime('%Y/%m/%d')
        # print('\u5c0f\u65f6\u524d ok')
        return time
    elif re.search(re.compile(r'\d{1,2}\u6708\d{1,2}\u65e5'), raw_time):
        mid = re.sub('\D', ',', raw_time).split(',')
        unformated_time = datetime.date(year, int(mid[0]), int(mid[1]))
        time = unformated_time.strftime('%Y/%m/%d')
        # print('\u6708 \u65e5 ok')
        return time
