import request from '../utils/request';

function service(url) {
  console.log(url);
  const targetUrl = `/news${url}`;
  console.log(targetUrl);
  return request(targetUrl);
}

export { service };
