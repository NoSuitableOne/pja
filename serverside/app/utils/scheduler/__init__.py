#!/usr/bin/env python
# _*_ coding:utf-8 _*_

import time
import schedule
from app.utils.spider import CreateSpider
from app.constant import urls


def craw():
    spider = CreateSpider()
    spider.craw(urls)


def test():
    print('test every min')

# schedule.every().day.at("01:01").do(craw).tag("spider")

schedule.every().minutes.do(test)


def start_schedule():
    while True:
        try:
            schedule.run_pending()
            time.sleep(1)
        except schedule.CancelJob as e:
            print("job canceld" + str(e))
