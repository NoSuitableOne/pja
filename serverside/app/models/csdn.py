#!/usr/bin/env python
# _*_ coding:utf-8 _*_

from app.ext import db


class CsdnNews(db.Model):
    __tablename__ = 'csdn_data'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    label = db.Column(db.String)
    read_times = db.Column(db.Integer)
    support = db.Column(db.Integer, index=True)
    href = db.Column(db.String, nullable=False)
    author = db.Column(db.String)

    def add_new_data(self, origin_data):
        for record in origin_data:
            data = parse_data(record)
            db.session.add(data)
        db.session.commit()

    def get_data_all(self):
        data = list()
        records = CsdnNews.query.all()
        for record in records:
            single_record = dict()
            single_record['title'] = record.title
            single_record['label'] = record.label
            single_record['read_times'] = record.read_times
            single_record['support'] = record.support
            single_record['href'] = record.href
            single_record['author'] = record.author
            data.append(single_record)
        return data

    def get_data(self, index):
        data = dict()
        record = CsdnNews.query.filter_by(id=index).first()
        data['title'] = record.title
        data['label'] = record.label
        data['read_times'] = record.read_times
        data['support'] = record.support
        data['href'] = record.href
        data['author'] = record.author
        return data

    def get_data_pagination(self, page):
        data = list()
        pagination = CsdnNews.query.paginate(page=page, per_page=3, error_out=True, max_per_page=3)
        for item in pagination.items:
            record = dict()
            record['title'] = item.title
            record['label'] = item.label
            record['read_times'] = item.read_times
            record['author'] = item.author
            record['support'] = item.support
            record['href'] = item.href
            data.append(record)
        return data

    def __repr__(self):
        return "<csdn: (title='%s', label='%s', read_times='%s', support='%s', href='%s, author='%s)>" % (
            self.title, self.label, self.read_times, self.support, self.href, self.author)


def parse_data(record):
    data = CsdnNews(title=record['title'], href=record['href'], label=record['label'], support=record['support'],
                    read_times=record['read_num'], author=record['author'])
    return data
