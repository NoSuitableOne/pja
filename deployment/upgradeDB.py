#!/usr/bin/env python3
# _*_ coding:utf-8 _*_

import os
import sys
import sqlite3


root_path = os.path.abspath(os.path.dirname(__file__) + os.sep + '..')
sys.path.append(root_path)



from app.constant import ForkNewsDB_db
from app.utils.spider.support import csdn_time, segmentfault_time


db_url = os.path.join(root_path, ForkNewsDB_db)

connect = sqlite3.connect(db_url)

csdn_data = list()
segmentfault_data = list()

for row in connect.execute("SELECT id, time from csdn"):
    csdn_data.append((csdn_time(row[1]), row[0]))
    # print("UPDATE csdn set time='%s' where id=%d;" % (csdn_time(row[1]), row[0]))
csdn_update = "UPDATE csdn set time='%s' where id=%d;"
connect.executemany("UPDATE csdn set time=? where id=?;", csdn_data)
connect.commit()

for row in connect.execute("SELECT id, time from segmentfault"):
    segmentfault_data.append((segmentfault_time(row[1]), row[0]))
    # print("UPDATE segmentfault set time='%s' where id=%d;" % (segmentfault_time(row[1]), row[0]))
segmentfault_update = "UPDATE segmentfault set time=? where id=?;"
connect.executemany(segmentfault_update, segmentfault_data)
connect.commit()

connect.close()
