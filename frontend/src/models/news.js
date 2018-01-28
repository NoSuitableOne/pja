export default {

  namespace: 'news',

  state: {
    loading: true,
    total: 3,
    onChange: (page) => {
      console.log(page); // eslint-disable-line
    },
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      history.listen(({ pathname }) => {
        if (pathname === '/news') {
          dispatch({ type: 'load' });
        }
      });
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      // yield put({ type: 'save' });
    },
  },

  reducers: {
    load(state) {
      return {
        ...state,
        loading: false,
      };
    },
    setpage(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },

};
