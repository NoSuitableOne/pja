#!/usr/bin/env python
# _*_ coding:utf-8 _*_

import os
from app import create_app
from app.models import csdn, cnblogs, segmentfault, jobbole
from config import configs
from app.ext import db
from flask_script import Manager, Shell
from flask_migrate import Migrate, MigrateCommand

# load config of app
app_config = os.getenv('pja_DEV') or configs['DEV']

# create app
app = create_app(app_config)

manager = Manager(app)
migrate = Migrate(app, db)


def make_shell_context():
    return dict(app=app, db=db, csdn_news=csdn.CsdnNews, cnblogs_news=cnblogs.CnblogsNews,
                segmentfault=segmentfault.SegmentfaultNews, jobbole=jobbole.JobboleNews)

manager.add_command('shell', Shell(make_context=make_shell_context))
manager.add_command('db', MigrateCommand)


if __name__ == '__main__':
    manager.run()
