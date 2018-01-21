import key from 'keymaster';

export default {
  namespace: 'counter',
  state: {
    record: 0,
    current: 0,
  },
  subscriptions: {
    keyboardWatcher({ dispatch }) {
      key('ctrl+up', () => { dispatch({ type: 'add' }); });
    },
  },
  effects: {
    *adddelay(action, { call, put }) {
      yield call(delay, 1000);
      yield put({ type: 'minus' });
    },
  },
  reducers: {
    add(state) {
      const newCurrent = state.current + 1;
      return {
        ...state,
        current: newCurrent,
        record: newCurrent > state.record ? newCurrent : state.record,
      };
    },
    minus(state) {
      const newCurrent = state.current - 1;
      return {
        ...state,
        current: newCurrent,
      };
    },
  },
};

function delay(timeout) {
  return new Promise(
    (resolve) => {
      setTimeout(resolve, timeout);
    },
  );
}
