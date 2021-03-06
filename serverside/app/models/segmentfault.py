#!/usr/bin/env python
# _*_ coding:utf-8 _*_

import hashlib
from app.ext import db


class SegmentfaultNews(db.Model):
    __tablename__ = 'segmentfault_data'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    label = db.Column(db.String)
    author = db.Column(db.String)
    support = db.Column(db.Integer, index=True)
    href = db.Column(db.String, nullable=False)
    time = db.Column(db.String, nullable=True)
    key = db.Column(db.String, nullable=False)

    def add_new_data(self, origin_data):
        for record in origin_data:
            data = parse_data(record)
            if SegmentfaultNews.query.filter_by(key=data.key).first() is not None:
                continue
            else:
                db.session.add(data)
        db.session.commit()

    def get_data_all(self):
        data = list()
        records = SegmentfaultNews.query.order_by(db.desc(SegmentfaultNews.time)).limit(100)
        for record in records:
            single_record = dict()
            single_record['title'] = record.title
            single_record['label'] = record.label
            single_record['author'] = record.author
            single_record['support'] = record.support
            single_record['time'] = record.time
            single_record['href'] = record.href
            single_record['key'] = record.key

            data.append(single_record)
        return data

    def get_data(self, index):
        data = dict()
        record = SegmentfaultNews.query.filter_by(id=index).first()
        data['title'] = record.title
        data['label'] = record.label
        data['author'] = record.author
        data['support'] = record.support
        data['time'] = record.time
        data['href'] = record.href
        return data

    def get_data_pagination(self, page):
        data = list()
        pagination = SegmentfaultNews.query.paginate(page=page, per_page=3, error_out=True, max_per_page=3)
        for item in pagination.items:
            record = dict()
            record['title'] = item.title
            record['label'] = item.label
            record['author'] = item.author
            record['support'] = item.support
            record['time'] = item.time
            record['href'] = item.href
            record['key'] = item.key
            data.append(record)
        return data

    def delete_all(self):
        records = SegmentfaultNews.query.all()
        db.session.delete(records)
        db.session.commit()

    def __repr__(self):
        return "<segmentfault: (title='%s', label='%s', author='%s', support='%s', time='%s', href='%s')>" % (
            self.title, self.label, self.author, self.support, self.time, self.href)


def parse_data(record):
    key = hashlib.md5(record['title'].encode('utf-8')).hexdigest()
    data = SegmentfaultNews(title=record['title'], href=record['href'], label=record['label'],
                            support=record['support'], author=record['author'], time=record['time'], key=key)
    return data
