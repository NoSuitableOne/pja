#!/usr/bin/env python
# _*_ coding:utf-8 _*_

import os


basedir = os.path.abspath(os.path.dirname(__file__))


class Config(object):
    # config class
    SECRET_KEY = ''
    SQLALCHEMY_DATABASE_URI = ''
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    JOBS = [
        {
            'id': 'spider',
            'func': 'app.schedules.__init__:start_crawling',
            'trigger': 'cron',
            'hour': 5,
            'minute': 50,
            'seconds': 15,
        }
    ]
    SCHEDULER_API_ENABLE = True


class ProductConfig(Config):
    # product environment config
    pass


class DevConfig(Config):
    # devloping environment config
    DEBUG = True
    SECRET_KEY = '__secret_Key__'
    SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(basedir, 'db\db_dev.sqlite')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    JOBS = [
        {
            'id': 'spider',
            'func': 'app.schedules.__init__:start_crawling',
            'trigger': 'cron',
            'hour': 5,
            'minute': 50,
            'second': 15,
        }
    ]
    SCHEDULER_API_ENABLE = True
    SSL_CONTEXT = "ssl_context_PJA"


class TestConfig(Config):
    # test environment config
    pass


configs = {
    'DEV': DevConfig,
    'PROD': ProductConfig,
    'TEST': TestConfig
}
