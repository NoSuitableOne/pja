export default {

  namespace: 'icon',

  state: {
    fold: true,
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    fold(state) {
      const foldState = !state.fold;
      return {
        ...state,
        fold: foldState,
      };
    },
  },

};
