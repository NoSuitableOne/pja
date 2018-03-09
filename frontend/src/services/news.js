import CONSTANT from '../constant';
import request from '../utils/request';

function fetchNews(url) {
  // const targetUrl = `/${CONSTANT.version}/news${url}`;
  const targetUrl = `/api/news${url}`;
  return request(targetUrl);
}

function setLocal(key, value) {
  localStorage.setItem(key, value);
}

export { fetchNews, setLocal };
