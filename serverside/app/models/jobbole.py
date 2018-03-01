#!/usr/bin/env python
# _*_ coding:utf-8 _*_

import hashlib
from app.ext import db


class JobboleNews(db.Model):
    __tablename__ = 'jobbole_data'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    label = db.Column(db.String)
    time = db.Column(db.String)
    href = db.Column(db.String, nullable=False)
    summary = db.Column(db.String, nullable=True)
    key = db.Column(db.String, nullable=False)

    def add_new_data(self, origin_data):
        for record in origin_data:
            data = parse_data(record)
            if JobboleNews.query.filter_by(key=data.key).first() is not None:
                new_record = JobboleNews.query.filter_by(key=data.key).first()
                new_record.time = data.time
                db.session.add(new_record)
            else:
                db.session.add(data)
        db.session.commit()

    def get_data_all(self):
        data = list()
        records = JobboleNews.query.all()
        for record in records:
            single_record = dict()
            single_record['title'] = record.title
            single_record['label'] = record.label
            single_record['time'] = record.time
            single_record['summary'] = record.summary
            single_record['href'] = record.href
            data.append(single_record)
        return data

    def get_data(self, index):
        data = dict()
        record = JobboleNews.query.filter_by(id=index).first()
        data['title'] = record.title
        data['label'] = record.label
        data['time'] = record.time
        data['summary'] = record.summary
        data['href'] = record.href
        return data

    def get_data_pagination(self, page):
        data = list()
        pagination = JobboleNews.query.paginate(page=page, per_page=3, error_out=True, max_per_page=3)
        for item in pagination.items:
            record = dict()
            record['title'] = item.title
            record['label'] = item.label
            record['time'] = item.time
            record['summary'] = item.summary
            record['href'] = item.href
            data.append(record)
        return data

    def delete_all(self):
        records = JobboleNews.query.all()
        db.session.delete(records)
        db.session.commit()

    def __repr__(self):
        return "<jobbole: (title='%s', label='%s', time='%s', summary='%s', href='%s)>" % (
            self.title, self.label, self.time, self.summary, self.href)


def parse_data(record):
    key = hashlib.md5(record['title'].encode('utf-8')).hexdigest()
    data = JobboleNews(title=record['title'], href=record['href'], label=record['label'], summary=record['summary'],
                       time=record['time'], key=key)
    return data
