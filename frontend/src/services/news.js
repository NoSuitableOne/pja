import request from '../utils/request';

function service() {
  return request('/news');
}

export { service };
