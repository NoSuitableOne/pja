import CONSTANT from '../constant';
import request from '../utils/request';

function newsService(url) {
  const targetUrl = `/${CONSTANT.version}/news${url}`;
  return request(targetUrl);
}

export { newsService };
