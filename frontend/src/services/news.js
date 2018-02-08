import request from '../utils/request';

function service({ url = '' }) {
  const targetUrl = `/news${url}`;
  return request(targetUrl);
}

export { service };
