#!/usr/bin/env python
# _*_ coding:utf-8 _*_

import re
from bs4 import BeautifulSoup
from app.constant import segmentfault_label, csdn_label, jobbole_label
from app.utils.spider.support import csdn_time, segmentfault_time


class HtmlParser(object):

    def data_parser_manage(self, url_key):
        parsers = {
            'csdn': self.get_csdn_data,
            'cnblogs': self.get_cnblogs_data,
            'segmentfault': self.get_segmentfault_data,
            'juejin': self.get_juejin_data,
            'jobbole': self.get_jobbole_data
        }

        return parsers.get(url_key)

    # csdn data parser
    def get_csdn_data(self, soup, target_url):
        res_data = dict()
        res_data['table_name'] = 'csdn'
        res_data['csdn'] = []

        label = csdn_label.get(target_url.split('/')[-1])

        target_node = soup.select('#geek_list .geek_list')
        for node in target_node:
            record = dict()
            record['title'] = node.select('.title')[0].get_text(strip=True)
            record['label'] = label
            record['href'] = node.select('.title')[0].get('href')
            record['support'] = int(node.select('.count')[0].get_text(strip=True))
            record['read_num'] = int(node.select('.read_num em')[0].get_text(strip=True))
            record['author'] = node.select('.right a')[0].get('href').split('/')[-1]
            raw_time = node.select('.list-inline li:nth-of-type(2)')[0].get_text(strip=True)
            record['time'] = csdn_time(raw_time=raw_time)
            res_data['csdn'].append(record)

        return res_data

    # cnblogs data parser
    def get_cnblogs_data(self, soup, target_url=None):
        res_data = dict()
        res_data['table_name'] = 'cnblogs'
        res_data['cnblogs'] = []

        target_node = soup.select('#post_list .post_item')
        for node in target_node:
            record = dict()
            record['title'] = node.select('.titlelnk')[0].get_text(strip=True)
            record['href'] = node.select('.titlelnk')[0].get('href')
            record['support'] = int(node.select('.digg .diggnum')[0].get_text(strip=True))
            record['author'] = node.select('.post_item_foot a')[0].get_text(strip=True)
            record['summary'] = node.select('.post_item_summary')[0].get_text(strip=True)
            res_data['cnblogs'].append(record)

        return res_data

    # segmentfault data parser
    def get_segmentfault_data(self, soup, target_url):
        url_prifix = 'https://segmentfault.com'

        res_data = dict()
        res_data['table_name'] = 'segmentfault'
        res_data['segmentfault'] = []

        label = segmentfault_label.get(target_url.split('/')[-1])

        target_node = soup.select('.news-list .news-item,.stream__item')
        for node in target_node:
            record = dict()
            record['title'] = node.select('.news__item-title a')[0].get_text(strip=True)
            record['label'] = label
            record['href'] = url_prifix + node.select('.news__item-title a')[0].get('href')
            raw_time = node.select('.news__item-meta span:nth-of-type(2)')[0].get_text(strip=True)
            record['time'] = segmentfault_time(raw_time=raw_time)
            try:
                record['support'] = int(node.select('.stream__item-zan-number')[0].get_text(strip=True))
            except ValueError:
                record['support'] = 0
            record['author'] = node.select('.news__item-meta a:nth-of-type(2)')[0].get_text(strip=True)
            res_data['segmentfault'].append(record)

        return res_data

    # jobbole data parser
    def get_jobbole_data(self, soup, target_url):
        res_data = dict()
        res_data['table_name'] = 'jobbole'
        res_data['jobbole'] = []

        label = jobbole_label.get(target_url)
        pattern = re.compile(r'\d{4}/\d{2}/\d{2}')

        target_node = soup.select('#archive .post')
        for node in target_node:
            record = dict()
            record['title'] = node.select('.post-meta p a:nth-of-type(1)')[0].get_text(strip=True)
            record['label'] = label
            record['href'] = node.select('.read-more a')[0].get('href')
            time_str = re.sub(r'\s*', "", node.select('.post-meta p:nth-of-type(1)')[0].get_text(strip=True))
            record['time'] = re.search(pattern, time_str).group()
            record['summary'] = node.select('.post-meta .excerpt')[0].get_text(strip=True)
            res_data['jobbole'].append(record)

        return res_data

    # juejin data parser
    def get_juejin_data(self, soup):
        pass

    def parse(self, url_key, target_url, html_content):
        if html_content is None:
            return
        soup = BeautifulSoup(html_content, 'html.parser')
        parser = self.data_parser_manage(url_key)
        new_data = parser(soup, target_url)
        return new_data
