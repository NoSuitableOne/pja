#!/usr/bin/env python
# _*_ coding:utf-8 _*_

from app.utils.spider import url_manager, downloader, html_parser, outputer


class CreateSpider(object):
    def __init__(self):
        self.url_manager = url_manager.UrlManager()
        self.downloader = downloader.Downloader()
        self.parser = html_parser.HtmlParser()
        self.outputer = outputer.Outputer()

    def craw(self, urls=None):
        target_urls = self.url_manager.add_new_url(urls)

        for key in target_urls:
            try:
                # print('download url s', target_urls[key])
                html_content = self.downloader.download(target_urls[key])
                new_data = self.parser.parse(key, html_content)
                self.outputer.save_data(key, new_data)
            except Exception as e:
                print('crawing went error:' + str(e))

    def __repr__(self):
        dictionary = {'urls': self.url_manager, 'downloader': self.downloader, 'parser': self.parser}
        return repr(dictionary)
