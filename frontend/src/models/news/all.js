import { fetchNews } from '../../services/news';
import csdn from './csdn';
import jobbole from './jobbole';
import segmentfault from './segmentfault';

export default {

  namespace: 'news',

  state: {
    origin: [
      csdn,
      jobbole,
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
      yield put({ type: 'loadingState', payload: { key: 'all' } });
      const { ...data } = yield [
        call(fetchNews, '/csdn'),
        call(fetchNews, '/jobbole'),
        call(fetchNews, '/segmentfault'),
      ];
      yield [
        put({ type: 'loadAll', payload: { data } }),
      ];
      yield put({ type: 'loadingState', payload: { key: 'all' } });
    },
    *fetch({ payload }, { call, put }) {
      yield put({ type: 'loadingState', payload: { key: payload.origin } });
      const { data: { 0: { data: passage, status } } } = yield call(fetchNews, payload.url);
      yield put({ type: 'load', payload: { key: payload.origin, passage, page: payload.page, status } });
      yield put({ type: 'loadingState', payload: { key: payload.origin } });
    },
  },

  reducers: {
    loadingState(state, { payload: key }) {
      const loadingState = state.origin;
      switch (key.key) {
        case 'all':
          loadingState.map(ele => (ele.state.loading = !ele.state.loading)); // eslint-disable-line
          break;
        case 'csdn':
          loadingState[0].state.loading = !loadingState[0].state.loading;
          break;
        case 'jobbole':
          loadingState[1].state.loading = !loadingState[1].state.loading;
          break;
        case 'segmentfault':
          loadingState[2].state.loading = !loadingState[2].state.loading;
          break;
        default:
          return;
      }
      return {
        ...state,
        origin: loadingState,
      };
    },
    loadAll(state, { payload: { data } }) {
      let {
        0: { data: { 0: { data: csdnData, status: csdnStatus } } }, // eslint-disable-line
        1: { data: { 0: { data: jobboleData, status: jobboleStatus } } }, // eslint-disable-line
        2: { data: { 0: { data: segmentfaultData, status: segmentfaultStatus } } }, // eslint-disable-line
      } = data;
      const newOrigin = state.origin;
      if (csdnStatus === 'ok') {
        csdnData = csdnData.filter((item) => {
          return (localSetting(item));
        });
        newOrigin[0].passage = csdnData.slice(0, 3);
        newOrigin[0].total = csdnData.length;
      }
      if (jobboleStatus === 'ok') {
        jobboleData = jobboleData.filter((item) => {
          return (localSetting(item));
        });
        newOrigin[1].passage = jobboleData.slice(0, 3);
        newOrigin[1].total = jobboleData.length;
      }
      if (segmentfaultStatus === 'ok') {
        segmentfaultData = segmentfaultData.filter((item) => {
          return (localSetting(item));
        });
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
      const filteredPassage = passage.filter((item) => {
        return (localSetting(item));
      });
      switch (key) {
        case 'csdn':
          if (status === 'ok') {
            newOrigin[0].passage = filteredPassage.slice(start, end);
            newOrigin[0].state.current = page;
            newOrigin[0].total = filteredPassage.length;
          }
          break;
        case 'jobbole':
          if (status === 'ok') {
            newOrigin[1].passage = filteredPassage.slice(start, end);
            newOrigin[1].state.current = page;
            newOrigin[1].total = filteredPassage.length;
          }
          break;
        case 'segmentfault':
          if (status === 'ok') {
            newOrigin[2].passage = filteredPassage.slice(start, end);
            newOrigin[2].state.current = page;
            newOrigin[2].total = filteredPassage.length;
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

function localSetting(item) {
  if (localStorage.getItem(item.key) && JSON.parse(localStorage.getItem(item.key)).delete) {
    return false;
  } else {
    return true;
  }
}
