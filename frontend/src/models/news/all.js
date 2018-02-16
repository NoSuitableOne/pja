import { newsService } from '../../services/news';
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
      yield put({ type: 'loadState', payload: { key: 'all' } });
      const { ...data } = yield [
        call(newsService, '/csdn'),
        call(newsService, '/cnblogs'),
        call(newsService, '/segmentfault'),
      ];
      yield [
        put({ type: 'loadAll', payload: { data } }),
      ];
      yield put({ type: 'loadState', payload: { key: 'all' } });
    },
    *fetch({ payload }, { call, put }) {
      yield put({ type: 'loadState', payload: { key: payload.origin } });
      const { data: { data: passage, status } } = yield call(newsService, payload.url);
      yield put({ type: 'load', payload: { key: payload.origin, passage, page: payload.page, status } });
      yield put({ type: 'loadState', payload: { key: payload.origin } });
    },
  },

  reducers: {
    loadState(state, { payload: key }) {
      const loadState = state.origin;
      switch (key.key) {
        case 'all':
          loadState.map(ele => (ele.state.loading = !ele.state.loading)); // eslint-disable-line
          break;
        case 'csdn':
          loadState[0].state.loading = !loadState[0].state.loading;
          break;
        case 'cnblogs':
          loadState[1].state.loading = !loadState[1].state.loading;
          break;
        case 'segmentfault':
          loadState[2].state.loading = !loadState[2].state.loading;
          break;
        default:
          return;
      }
      return {
        ...state,
        origin: loadState,
      };
    },
    loadAll(state, { payload: { data } }) {
      const {
        0: { data: { data: csdnData, status: csdnStatus } },
        1: { data: { data: cnblogsData, status: cnblogsStatus } },
        2: { data: { data: segmentfaultData, status: segmentfaultStatus } },
      } = data;
      const newOrigin = state.origin;
      if (csdnStatus === 'ok') {
        newOrigin[0].passage = csdnData.slice(0, 3);
        newOrigin[0].total = csdnData.length;
      }
      if (cnblogsStatus === 'ok') {
        newOrigin[1].passage = cnblogsData.slice(0, 3);
        newOrigin[1].total = cnblogsData.length;
      }
      if (segmentfaultStatus === 'ok') {
        newOrigin[2].passage = segmentfaultData.slice(0, 3);
        newOrigin[2].total = segmentfaultData.length;
      }
      return {
        ...state,
        origin: newOrigin,
      };
    },
    load(state, { payload: { key, passage, page, status } }) {
      const start = 3 * page - 3; // eslint-disable-line
      const end = 3 * page;
      const newOrigin = state.origin;
      switch (key) {
        case 'csdn':
          if (status === 'ok') {
            newOrigin[0].passage = passage.slice(start, end);
            newOrigin[0].state.current = page;
          }
          break;
        case 'cnblogs':
          if (status === 'ok') {
            newOrigin[1].passage = passage.slice(start, end);
            newOrigin[1].state.current = page;
          }
          break;
        case 'segmentfault':
          if (status === 'ok') {
            newOrigin[2].passage = passage.slice(start, end);
            newOrigin[2].state.current = page;
          }
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
