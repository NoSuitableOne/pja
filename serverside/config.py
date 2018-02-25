#!/usr/bin/env python
# _*_ coding:utf-8 _*_

import os


basedir = os.path.abspath(os.path.dirname(__file__))


def job1(a, b):
    print(str(a) + ' ' + str(b))


class Config(object):
    # config class
    pass


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
            'id': 'crewer',
            'func': 'app.utils.scheduler.__init__:start_scheduler',
            'trigger': 'cron',
            'hour': 5,
            'minute': 30,
            'second': 30,
        }
    ]
    SCHEDULER_API_ENABLE = True


class TestConfig(Config):
    # test environment config
    pass


configs = {
    'DEV': DevConfig,
    'PROD': ProductConfig,
    'TEST': TestConfig
}
