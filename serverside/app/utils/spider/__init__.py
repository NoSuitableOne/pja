#!/usr/bin/env python
# _*_ coding:utf-8 _*_

from app.utils.spider import url_manager, downloader, html_parser, outputer
from app.logger import spider_logger


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
            spider_logger.info('do spider %s' % job)
            (url_key, target_url) = (job['key'], job['url'])
            try:
                pass
                spider_logger.info('download "%s"' % target_url)
                html_content = self.downloader.download(target_url=target_url)
                spider_logger.info('finish download "%s"' % target_url)
                new_data = self.parser.parse(target_url=target_url, url_key=url_key, html_content=html_content)
                spider_logger.info('finish parse "%s" html content' % target_url)
                self.outputer.save_data(url_key=url_key, data=new_data)
            except Exception as e:
                spider_logger.error('crawing went error: %s' % str(e))

    def __repr__(self):
        dictionary = {'urls': self.url_manager, 'downloader': self.downloader, 'parser': self.parser}
        return repr(dictionary)
