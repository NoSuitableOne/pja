#!/usr/bin/env python
# _*_ coding:utf-8 _*_

from app.ext import db


class SegmentfaultNews(db.Model):
    __tablename__ = 'segmentfault_data'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    label = db.Column(db.String)
    author = db.Column(db.String)
    support = db.Column(db.Integer, index=True)
    href = db.Column(db.String, nullable=False)

    def add_new_data(self, origin_data):
        for record in origin_data:
            data = parse_data(record)
            db.session.add(data)
        db.session.commit()

    def get_data_all(self):
        data = list()
        records = SegmentfaultNews.query.all()
        for record in records:
            single_record = dict()
            single_record['title'] = record.title
            single_record['label'] = record.label
            single_record['author'] = record.author
            single_record['support'] = record.support
            single_record['href'] = record.href
            data.append(single_record)
        return data

    def get_data(self, id):
        data = dict()
        record = SegmentfaultNews.query.first()
        data['title'] = record.title
        data['label'] = record.label
        data['author'] = record.author
        data['support'] = record.support
        data['href'] = record.href
        return data

    def __repr__(self):
        return "<segmentfault: (title='%s', label='%s', author='%s', support='%s', href='%s')>" % (
            self.title, self.label, self.author, self.support, self.href)


def parse_data(record):
    data = SegmentfaultNews(title=record['title'], href=record['href'], label=record['label'],
                            support=record['support'], author=record['author'])
    return data
