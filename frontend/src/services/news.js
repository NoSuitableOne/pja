import CONSTANT from '../constant';
import request from '../utils/request';

function newsService(url) {
  const targetUrl = `/${CONSTANT.version}/news${url}`;
  console.log(targetUrl);
  return request(targetUrl);
}

export { newsService };
