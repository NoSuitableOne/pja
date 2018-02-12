import request from '../utils/request';

function service(url) {
  const targetUrl = `/news${url}`;
  console.log(targetUrl);
  return request(targetUrl);
}

export { service };
