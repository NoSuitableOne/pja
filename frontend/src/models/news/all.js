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
          dispatch({ type: 'fetch' });
        }
      });
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      const { data } = yield call(newsService);
      if (data.state) {
        yield put({
          type: 'load',
          payload: {
            data,
          },
        });
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
    pageTurn(state, action) { // eslint-disable-line
      const { page, title } = action.payload;
      const newOrigin = state.origin;
      let idx;
      switch (title) {
        case 'csdn':
          idx = 0;
          break;
        case 'cnblogs':
          idx = 1;
          break;
        case 'segmentfault':
          idx = 2;
          break;
        default:
          return;
      }
      newOrigin[idx].state.current = page;
      return {
        ...state,
        origin: newOrigin,
      };
    },
  },

};
