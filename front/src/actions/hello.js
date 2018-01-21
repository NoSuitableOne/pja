import { createAction } from 'redux-actions';

const helloData = [
    {
        name: 'remote'
    }
];

const requestHello = createAction('REQUEST_HELLO');
const receiveHello = createAction('RECEIVE_HELLO');

const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(helloData);
        }, 20000);
    });
};

// const GET_HELLO = createAction(
//     'GET_HELLO',
//     payload => payload,
// );

const GET_HELLO = () => async dispatch => {
    dispatch(requestHello());
    let data = await fetchData();
    dispatch(receiveHello(data));
};

export default GET_HELLO;
