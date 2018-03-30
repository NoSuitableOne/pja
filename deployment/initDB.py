#!/usr/bin/env python3  
# _*_ coding:utf-8 _*_

import sqlite3
 
 
connect = sqlite3.connect('./db/ForkNewsDB.db')
print("connect database success!")

cursor = connect.cursor()
cursor.executescript("""
    create table csdn (
        id INTEGER NOT NULL,
        title VARCHAR NOT NULL,
        label VARCHAR,
        read_times INTEGER,
        support INTEGER,
        href BLOB NOT NULL,
        author VARCHAR,
        time TEXT,
        "key" VARCHAR NOT NULL,
        PRIMARY KEY (id)
    );

    create table segmentfault (
        id INTEGER NOT NULL,
        title VARCHAR NOT NULL,
        label VARCHAR,
        author VARCHAR,
        support INTEGER,
        href BLOB NOT NULL,
        time VARCHAR,
        "key" VARCHAR NOT NULL,
        PRIMARY KEY (id)
    );
    
    create table jobbole (
        id INTEGER NOT NULL,
        title VARCHAR NOT NULL,
        label VARCHAR,
        time VARCHAR,
        href BLOB NOT NULL,
        summary VARCHAR,
        "key" VARCHAR NOT NULL,
        PRIMARY KEY (id)
   );
   """)
print("create tables success!")

connect.commit()
connect.close()
