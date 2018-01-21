import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers/rootReducer';

const middleware = [thunk];

let store;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//配置redux-devTool
if (window.__REDUX_DEVTOOLS_EXTENSION__) {
    store = createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(...middleware))
    );
} else {
    store = createStore(
        rootReducer,
        applyMiddleware(...middleware),
    );
}

export { store };
