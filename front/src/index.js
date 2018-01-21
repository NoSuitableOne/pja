import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import './index.css';
import { store } from './store';
import registerServiceWorker from './registerServiceWorker';

const rootElement = document.getElementById('root');

registerServiceWorker();
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter >
            <div>
                <Switch>
                    <Route exac={true} path="/" component={App} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>,
    rootElement
);
