#!/usr/bin/env python3
# _*_ coding:utf-8 _*_

import os
from app import create_app
from deployment.setEnv import config

# load config of app
app_config = os.getenv('forknews') or config

# forknews app
forknews_app = create_app(app_config)
