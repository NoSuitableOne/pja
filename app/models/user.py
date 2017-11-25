#!/usr/bin/env python
# _*_ coding:utf-8 _*_

from flask_login import AnonymousUserMixin, UserMixin
from app.ext import db


# user model
class User(db.Model, UserMixin):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), unique=True, index=True)
    role_id = db.Column(db.Integer, db.ForeignKey('roles.id'))
    hash_password = db.Column(db.String(28))

    def is_authenticated(self):
        return True

    def is_active(self):
        return True

    def is_anonymous(self):
        return False

    def get_id(self):
        return '1'

    def confirm_password(self, password):
        if self.get_id() is not None:
            if self.hash_password == str(password):
                return True
            else:
                return False
        else:
            return False

    def __repr__(self):
        return '<User %r>' % self.username


class AnonymousUser(AnonymousUserMixin):
    def is_active(self):
        return False

    def is_authenticated(self):
        return False

    def is_anonymous(self):
        return True

    def get_id(self):
        return None
