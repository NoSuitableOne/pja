#!/usr/bin/env python
# _*_ coding:utf-8 _*_

import logging


# log instance
app_logger = logging.getLogger('app')
spider_logger = logging.getLogger('spider')

# log formatter
formatter = logging.Formatter('[%(levelname)s](%(asctime)s) %(message)s', datefmt='%Y/%b/%d %H:%M:%S')

# logger file handler
file_handler = logging.FileHandler('/var/log/forknews/log.txt', encoding='UTF-8')
file_handler.setFormatter(fmt=formatter)

# logger config
app_logger.addHandler(file_handler)
app_logger.setLevel(logging.INFO)

spider_logger.addHandler(file_handler)
spider_logger.setLevel(logging.INFO)
