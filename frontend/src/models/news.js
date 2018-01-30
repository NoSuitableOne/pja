import { service as newsService } from '../services/news';

export default {

  namespace: 'news',

  state: {
    origin: [
      {
        url: 'csdn',
        title: 'csdn news',
        total: 0,
        state: {
          loading: true,
        },
        passage: [
          {
            title: 'passage title 1',
          },
          {
            title: 'passage title 2',
          },
          {
            title: 'passage title 3',
          },
        ],
      },
      {
        url: 'cnblogs',
        title: 'cnblogs news',
        total: 0,
        state: {
          loading: true,
        },
        passage: [
          {
            title: 'passage title 1',
          },
          {
            title: 'passage title 2',
          },
          {
            title: 'passage title 3',
          },
        ],
      },
      {
        url: 'segmentfault',
        title: 'segmentfault news',
        total: 0,
        state: {
          loading: true,
        },
        passage: [
          {
            title: 'passage title 1',
          },
          {
            title: 'passage title 2',
          },
          {
            title: 'passage title 3',
          },
        ],
      },
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
      return {
        ...state,
      };
    },
  },

};
