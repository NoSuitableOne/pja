#!/usr/bin/env python
# _*_ coding:utf-8 _*_

from app.ext import db


class JuejinNews(db.Model):
    __tablename__ = 'juejin_data'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    label = db.Column(db.String)
    read_times = db.Column(db.Integer)
    support = db.Column(db.Integer, index=True)
    href = db.Column(db.String, nullable=False)

    def add_new_data(self, origin_data):
        pass

    def get_data(self):
        pass

    # def __repr__(self):
    #     return "<juejin: (title='%s', label='%s', read_times='%s', support='%s', href='%s')>" % (
    #         self.title, self.label, self.read_times, self.support, self.href)


def parse_data(record):
    pass
