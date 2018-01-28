import request from '../utils/request';

function service() {
  return request('/test/msg');
}

export { service };
