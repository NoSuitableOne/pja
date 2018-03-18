import CONSTANT from '../constant';
import request from '../utils/request';

// http请求
function fetchNews(url) {
  const targetUrl = `/${CONSTANT.version}/news${url}`;
  // const targetUrl = `/api/news${url}`;
  return request(targetUrl);
}

// 存储localStorage
function setLocal(key, value) {
  localStorage.setItem(key, value);
}

// filter origin data
function originFilter(origin, page) {
  const start = 3 * page - 3; // eslint-disable-line
  const end = 3 * page;
  let total;
  let passages;

  // eslint-disable-next-line prefer-const
  passages = origin.filter((item) => {
    return localSetting(item);
  });
  // eslint-disable-next-line prefer-const
  total = passages.length;
  passages = passages.slice(start, end);

  return { passages, total };
}

function localSetting(item) {
  if (localStorage.getItem(item.key) && JSON.parse(localStorage.getItem(item.key)).delete) {
    return false;
  } else {
    return true;
  }
}

export { fetchNews, originFilter, setLocal };
