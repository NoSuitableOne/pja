export default {

  namespace: 'ui',

  state: {
    switch: {
      state: false,
      isLoading: false,
    },
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
    *filterOn({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'switchLoading' });
      yield put({ type: 'news/passagesFilter' });
      yield put({ type: 'switchState' });
      yield put({ type: 'switchLoading' });
    },
    *filterOff({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'switchLoading' });
      yield put({ type: 'news/fetchAll' });
      yield put({ type: 'switchState' });
      yield put({ type: 'switchLoading' });
    },
  },

  reducers: {
    switchState(state, action) {  // eslint-disable-line
      const newSwitch = state.switch;
      newSwitch.state = !newSwitch.state;
      return {
        ...state,
        newSwitch,
      };
    },
    switchLoading(state, action) {  // eslint-disable-line
      const newSwitch = state.switch;
      newSwitch.isLoading = !newSwitch.isLoading;
      return {
        ...state,
        newSwitch,
      };
    },
  },

};
