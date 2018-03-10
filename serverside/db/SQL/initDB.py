#!/usr/bin/env python3  
# _*_ coding:utf-8 _*_

import sqlite3
 
 
connect = sqlite3.connect('./db/ForkNewsDB.db')
print("connect database success!")

cursor = connect.cursor()
cursor.executescript("""
    create table csdn(
        id INTEGER,
		title TEXT,
        label TEXT,
        href BLOB,
		author TEXT,
		time TEXT,
		key TEXT,
    );

    create table segmentfault(
        id INTEGER,
        title TEXT,
        label TEXT,
		author TEXT,
		support INTEGER,
		href BLOB,
		time TEXT,
		key TEXT,
    );
	
    create table jobbole(
        id INTEGER,
        title TEXT,
        label TEXT,
		time TEXT,
		href BLOB,
		summary TEXT,
		key TEXT,
   );
   """)	
print("create tables success!")

connect.commit()
connect.close()
 