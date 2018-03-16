#!/usr/bin/env python3  
# _*_ coding:utf-8 _*_


import os
import sys
import hashlib


basedir = os.path.abspath(os.path.dirname(__file__))
sys.path.append(basedir + os.sep + '../')

database_uri = 'sqlite:///' + os.path.join(basedir, '../db/ForkNewsDB.db')


from config import configs


secret_key = hashlib.sha1('forknews_secret'.encode('utf-8')).hexdigest()


config = configs['PROD']

config.SECRET_KEY = secret_key
config.SQLALCHEMY_DATABASE_URI = database_uri

# os.putenv('FORKNEWS', config)
