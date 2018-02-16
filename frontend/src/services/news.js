import request from '../utils/request';

function newsService(url) {
  const targetUrl = `/news${url}`;
  console.log(targetUrl);
  return request(targetUrl);
}

export { newsService };
