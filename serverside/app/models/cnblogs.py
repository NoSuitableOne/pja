#!/usr/bin/env python
# _*_ coding:utf-8 _*_

import hashlib
from app.ext import db


class CnblogsNews(db.Model):
    __tablename__ = 'cnblogs_data'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    author = db.Column(db.String)
    support = db.Column(db.Integer, index=True)
    href = db.Column(db.String, nullable=False)
    key = db.Column(db.String, nullable=True)
    summary = db.Column(db.String, nullable=False)

    def add_new_data(self, origin_data):
        for record in origin_data:
            data = parse_data(record)
            if CnblogsNews.query.filter_by(title=data.key).first() is not None:
                print(data.title)
            else:
                db.session.add(data)
        db.session.commit()

    def get_data_all(self):
        data = list()
        records = CnblogsNews.query.all()
        for record in records:
            single_record = dict()
            single_record['title'] = record.title
            single_record['author'] = record.author
            single_record['support'] = record.support
            single_record['href'] = record.href
            single_record['summary'] = record.summary
            data.append(single_record)
        return data

    def get_data(self, index):
        data = dict()
        record = CnblogsNews.query.filter_by(id=index).first()
        data['title'] = record.title
        data['author'] = record.author
        data['support'] = record.support
        data['href'] = record.href
        data['summary'] = record.summary
        return data

    def get_data_pagination(self, page):
        data = list()
        pagination = CnblogsNews.query.paginate(page=page, per_page=3, error_out=True, max_per_page=3)
        for item in pagination.items:
            record = dict()
            record['title'] = item.title
            record['author'] = item.author
            record['support'] = item.support
            record['href'] = item.href
            record['summary'] = item.summary
            data.append(record)
        return data

    def delete_all(self):
        records = CnblogsNews.query.all()
        db.session.delete(records)
        db.session.commit()

    def __repr__(self):
        return "<cnblogs: (title='%s', author='%s', support='%s', href='%s', summary='%s')>" % (
            self.title, self.author, self.support, self.href, self.summary)


def parse_data(record):
    key = hashlib.md5(record['title'].encode('utf-8')).hexdigest()
    data = CnblogsNews(title=record['title'], href=record['href'], support=record['support'],
                       author=record['author'], key=key, summary=record['summary'])
    return data
