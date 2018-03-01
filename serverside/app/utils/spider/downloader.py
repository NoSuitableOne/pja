#!/usr/bin/env python
# _*_ coding:utf-8 _*_

import requests

headers = {'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) '
                         'Chrome/65.0.3315.3 Safari/537.36'}


class Downloader (object):
    def download(self, target_url):
        if target_url is None:
            return None
        else:
            try:
                response = requests.get(target_url, stream=True, timeout=15, headers=headers)
                print(response.reason)
                if response.status_code != 200:
                    print('-----status_code wrong----- s', response.status_code)
                    return None
                else:
                    return response.content
            except (requests.ConnectionError, requests.HTTPError, requests.TooManyRedirects, requests.Timeout) as e:
                print(str(e))
