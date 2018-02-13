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
          dispatch({ type: 'fetchAll', payload: {} });
        }
      });
    },
  },

  effects: {
    *fetchAll({ payload }, { call, put }) {  // eslint-disable-line
      const { ...data } = yield [
        call(newsService, '/csdn'),
        call(newsService, '/cnblogs'),
        call(newsService, '/segmentfault'),
      ];
      yield [
        put({ type: 'loadAll', payload: { data } }),
      ];
    },
    *fetch({ payload: url }, { call, put }) {
      const { data: { data: origin } } = yield call(newsService, url.url);
      yield put({ type: 'load', payload: { origin } });
    },
  },

  reducers: {
    loadAll(state, { payload: { data } }) {
      const { 0: csdnData, 1: cnblogsData, 2: segmentfaultData } = data;
      return {
        ...state,
        origin: [
          csdnData.data.origin,
          cnblogsData.data.origin,
          segmentfaultData.data.origin,
        ],
      };
    },
    load(state, { payload: { origin } }) {
      const newOrigin = state.origin;
      switch (origin.origin.key) {
        case 'csdn':
          newOrigin[0] = origin.origin;
          break;
        case 'cnblogs':
          newOrigin[1] = origin.origin;
          break;
        case 'segmentfault':
          newOrigin[2] = origin.origin;
          break;
        default:
          return;
      }

      return {
        ...state,
        origin: newOrigin,
      };
    },
  },

};
