import { handleActions } from 'redux-actions';

const hello = handleActions(
    {
        REQUEST_HELLO: (state, action) => ({
            ...state,
            isFatching: true,
            name: 'request',
        })
    },
    {
        RECEIVE_HELLO: (state, action) => ({
            ...state,
            isFatching: false,
            name: 'clicked'
        })
    },
    {
        isFatching: false,
        name: 'test'
    },
);

function randomName(name, assignedName) {
    if (name !== 'test') {
        return 'test';
    } else {
        if (assignedName) {
            return assignedName
        }
        return 'random';
    }
}

export default hello;
