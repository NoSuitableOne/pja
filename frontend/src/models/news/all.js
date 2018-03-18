import { fetchNews, dealOriginData, originFilter } from '../../services/news';
import { csdnOrigin, csdnDisplay } from './csdn';
import { jobboleOrigin, jobboleDisplay } from './jobbole';
import { segmentfaultOrigin, segmentfaultDisplay } from './segmentfault';

export default {

  namespace: 'news',

  state: {
    origin: [
      csdnOrigin,
      jobboleOrigin,
      segmentfaultOrigin,
    ],
    display: [
      csdnDisplay,
      jobboleDisplay,
      segmentfaultDisplay,
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
      yield put({ type: 'reassignOrigin', payload: { data } });
      yield put({ type: 'reassignDisplay', payload: { key: 'all', page: 1 } });
      yield put({ type: 'loadingState', payload: { key: 'all' } });
    },
    *turnPage({ payload: { key: kwd, page: pageNum } }, { put }) {
      yield put({ type: 'loadingState', payload: { key: kwd } });
      yield put({ type: 'reassignDisplay', payload: { key: kwd, page: pageNum } });
      yield put({ type: 'loadingState', payload: { key: kwd } });
    },
  },

  reducers: {

    loadingState(state, { payload: { key: kwd } }) {
      const newDisplay = state.display;

      switch (kwd) {
        case 'csdn':
          newDisplay[0].state.loading = !newDisplay[0].state.loading;
          break;
        case 'jobbole':
          newDisplay[1].state.loading = !newDisplay[1].state.loading;
          break;
        case 'segmentfault':
          newDisplay[2].state.loading = !newDisplay[2].state.loading;
          break;
        case 'all':
          // eslint-disable-next-line no-param-reassign
          newDisplay.map(ele => (ele.state.loading = !ele.state.loading));
          break;
        default:
          return;
      }

      return {
        ...state,
        display: newDisplay,
      };
    },

    reassignOrigin(state, { payload: { data } }) {
      let {
        0: { data: { 0: { data: csdnData, status: csdnStatus } } }, // eslint-disable-line
        1: { data: { 0: { data: jobboleData, status: jobboleStatus } } }, // eslint-disable-line
        2: { data: { 0: { data: segmentfaultData, status: segmentfaultStatus } } }, // eslint-disable-line
      } = data;
      const newOrigin = state.origin;
      Object.assign(newOrigin[0], { passages: dealOriginData(csdnStatus, csdnData) });
      Object.assign(newOrigin[1], { passages: dealOriginData(jobboleStatus, jobboleData) });
      Object.assign(newOrigin[2],
        { passages: dealOriginData(segmentfaultStatus, segmentfaultData) });
      return {
        ...state,
        origin: newOrigin,
      };
    },

    reassignDisplay(state, { payload: { key: kwd, page: pageNum } }) {
      const { origin, newDisplay } = { origin: state.origin, newDisplay: state.display };
      switch (kwd) {
        case 'csdn': {
          const { passages: filteredPassages, total: totalNum } =
            originFilter(origin[0].passages, pageNum);
          Object.assign(
            newDisplay[0],
            {
              passages: filteredPassages,
              total: totalNum,
              state: { current: pageNum, loading: true },
            },
          );
          break;
        }
        case 'jobbole': {
          const { passages: filteredPassages, total: totalNum } =
            originFilter(origin[1].passages, pageNum);
          Object.assign(
            newDisplay[1],
            {
              passages: filteredPassages,
              total: totalNum,
              state: { current: pageNum, loading: true },
            },
          );
          break;
        }
        case 'segmentfault': {
          const { passages: filteredPassages, total: totalNum } =
            originFilter(origin[2].passages, pageNum);
          Object.assign(
            newDisplay[2],
            {
              passages: filteredPassages,
              total: totalNum,
              state: { current: pageNum, loading: true },
            },
          );
          break;
        }
        case 'all':
          // eslint-disable-next-line no-plusplus
          for (let i = 0; i < newDisplay.length; i++) {
            const { passages: filteredPassages, total: totalNum } =
              originFilter(origin[i].passages, pageNum);
            Object.assign(
              newDisplay[i],
              {
                passages: filteredPassages,
                total: totalNum,
                state: { current: pageNum, loading: true },
              },
            );
          }
          break;
        default:
          return;
      }
      return {
        ...state,
        display: newDisplay,
      };
    },
  },
};
