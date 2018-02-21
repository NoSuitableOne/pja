import request from '../utils/request';

function newsService(url) {
  const targetUrl = `/api/news${url}`;
  console.log(targetUrl);
  return request(targetUrl);
}

export { newsService };
