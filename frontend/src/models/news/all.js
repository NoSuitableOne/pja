import { service as newsService } from '../../services/news';
import csdn from './csdn';
import cnblogs from './cnblogs';
import segmentfault from './segmentfault';

export default {

  namespace: 'news',

  state: {
    origin: [
      csdn,
      cnblogs,
      segmentfault,
    ],
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      history.listen(({ pathname }) => {
        if (pathname === '/news') {
          dispatch({ type: 'fetch', payload: {} });
        }
      });
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      const { data } = yield call(newsService, payload);
      if (data.state) {
        yield put({ type: 'load', payload: { data } });
      }
    },
  },

  reducers: {
    load(state, { payload: { data } }) {
      return {
        ...state,
        origin: data.data.origin,
      };
    },
  },

};
