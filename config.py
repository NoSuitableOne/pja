#!/usr/bin/env python
# _*_ coding:utf-8 _*_

import os


basedir = os.path.abspath(os.path.dirname(__file__))


class Config(object):
    '''config class'''
    pass


class ProductConfig(Config):
    '''product environment config'''
    pass


class DevConfig(Config):
    '''devloping environment config'''
    DEBUG = True
    SECRET_KEY = '__secret_Key__'
    SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(basedir, 'db_dev.sqlite')
    SQLALCHEMY_TRACK_MODIFICATIONS = False


class TestConfig(Config):
    '''test environment config'''
    pass


configs = {
    'DEV': DevConfig,
    'PROD': ProductConfig,
    'TEST': TestConfig
}
