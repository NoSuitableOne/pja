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
            link: 'www.csdn.com/p1',
            author: 'authorcs1',
            label: '',
            support: 0,
          },
          {
            title: 'passage title 2',
            link: 'www.csdn.com/p2',
            author: 'authorcs2',
            label: '',
            support: 0,
          },
          {
            title: 'passage title 3',
            link: 'www.csdn.com/p3',
            author: 'authorcs3',
            label: '',
            support: 0,
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
            link: 'www.cnblogs.com/p1',
            author: 'authorcn1',
            label: '',
            support: 0,
          },
          {
            title: 'passage title 2',
            link: 'www.cnblogs.com/p2',
            author: 'authorcn2',
            label: '',
            support: 0,
          },
          {
            title: 'passage title 3',
            link: 'www.cnblogs.com/p3',
            author: 'authorcn3',
            label: '',
            support: 0,
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
            link: 'www.segmentfault.com/p1',
            author: 'authorsf1',
            label: '',
            support: 0,
          },
          {
            title: 'passage title 2',
            link: 'www.segmentfault.com/p2',
            author: 'authorsf2',
            label: '',
            support: 0,
          },
          {
            title: 'passage title 3',
            link: 'www.segmentfault.com/p3',
            author: 'authorsf3',
            label: '',
            support: 0,
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
