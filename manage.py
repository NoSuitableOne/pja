#!/usr/bin/env python
# _*_ coding:utf-8 _*_

import os
from app import create_app
from config import configs
from app.ext import db
from flask_script import Manager
from flask_migrate import Migrate, MigrateCommand

# load config of app
app_config = os.getenv('pja') or configs['DEV']

# create app
app = create_app(app_config)

manager = Manager(app)
migrate = Migrate(app, db)


def make_shell_context():
    return dict(app=app, db=db)


if __name__ == '__main__':
    manager.run()
