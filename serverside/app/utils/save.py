#!/usr/bin/env python
# _*_ coding:utf-8 _*_


def save_byte(stream, filename):
    with open(filename, 'wb') as fd:
        for chunk in stream.iter_content(chunk_size=4096):
            fd.write(chunk)


def save_simple(content, filename):
    with open(filename, 'w') as fd:
        fd.write(content)


def read_simple(filename):
    with open(filename, 'r') as fd:
        fd.read()
