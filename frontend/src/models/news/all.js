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
      console.log(data);
      yield [
        put({ type: 'load', payload: { data } }),
      ];
    },
    *fetch({ payload }, { call, put }) {
      const data = call(newsService, 'csdn');
      yield put({ type: 'load', payload: { data } });
    },
  },

  reducers: {
    load(state, { payload: { data } }) {
      const { 0: csdnData, 1: cnblogsData, 2: segmentfaultData } = data;
      console.log(csdnData);
      return {
        ...state,
        origin: [
          csdnData.data.origin,
          cnblogsData.data.origin,
          segmentfaultData.data.origin,
        ],
      };
    },
  },

};
