/* eslint-disable no-param-reassign */
import CONSTANT from '../constant';
import request from '../utils/request';

// http请求
function fetchNews(url) {
  // const targetUrl = `/${CONSTANT.version}/news${url}`;
  const targetUrl = `/api/news${url}`;
  return request(targetUrl);
}

// 存储localStorage
function setLocal(key, value) {
  if (value === 'delete') {
    if (localStorage.getItem(key)) {
      localStorage.removeItem(key);
    }
    localStorage.setItem(key, JSON.stringify({ delete: true }));
  }
  if (value === 'favourite') {
    if (localStorage.getItem(key)) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, JSON.stringify({ favourite: true }));
    }
  }
}

// filter origin data
function originFilter(origin, page) {
  const start = 3 * page - 3; // eslint-disable-line
  const end = 3 * page;
  let total;
  let passages;

  // eslint-disable-next-line prefer-const
  passages = origin.filter((item) => {
    return deleteFilter(item);
  });
  // eslint-disable-next-line prefer-const
  total = passages.length;
  passages = passages.slice(start, end);
  passages = markFavourite(passages);

  return { passages, total };
}

function deleteFilter(item) {
  if (localStorage.getItem(item.key) && JSON.parse(localStorage.getItem(item.key)).delete) {
    return false;
  } else {
    return true;
  }
}

function favouriteFilter(item) {
  if (localStorage.getItem(item.key) && JSON.parse(localStorage.getItem(item.key)).favourite) {
    return true;
  } else {
    return false;
  }
}

function markFavourite(origin) {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < origin.length; i++) {
    // eslint-disable-next-line max-len,no-unused-expressions
    (localStorage.getItem(origin[i].key) && JSON.parse(localStorage.getItem(origin[i].key)).favourite) ?
      origin[i].favourite = true : origin[i].favourite = false;
  }
  return origin;
}

export { fetchNews, favouriteFilter, originFilter, setLocal };
