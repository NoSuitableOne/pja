#!/usr/bin/env python
# _*_ coding:utf-8 _*_

from flask import current_app
from app.utils.spider import url_manager, downloader, html_parser, outputer


class CreateSpider(object):
    def __init__(self):
        self.url_manager = url_manager.UrlManager()
        self.downloader = downloader.Downloader()
        self.parser = html_parser.HtmlParser()
        self.outputer = outputer.Outputer()

    def bootstrap(self, urls=None):
        jobs = self.url_manager.deal_jobs(urls)

        while len(jobs) > 0:
            job = jobs.pop()
            print(job)
            (url_key, target_url) = (job['key'], job['url'])
            try:
                pass
                # current_app.logger.info('download url s', target_urls[key])
                html_content = self.downloader.download(target_url=target_url)
                # print('finish download url')
                new_data = self.parser.parse(target_url=target_url, url_key=url_key, html_content=html_content)
                # print('finish parse html content')
                self.outputer.save_data(url_key=url_key, data=new_data)
            except Exception as e:
                print('crawing went error:' + str(e))

    def __repr__(self):
        dictionary = {'urls': self.url_manager, 'downloader': self.downloader, 'parser': self.parser}
        return repr(dictionary)
