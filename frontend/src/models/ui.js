export default {

  namespace: 'ui',

  state: {
    light: true,
  },

  subscriptions: {
    setup({ dispatch, history, state }) {  // eslint-disable-line
      history.listen(({ pathname }) => {
        if (pathname === '/news') {
          // dispatch({ type: 'fetch' });
          return {
            ...state,
          };
        }
      });
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    light(state, action) {  // eslint-disable-line
      const lightState = state.light;
      return {
        ...state,
        light: !lightState,
      };
    },
  },

};
