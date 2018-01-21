import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import CountPage from './routes/CountPage';
import LayoutPage from './routes/Layout/LayoutPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/counter" exact component={CountPage} />
        <Route path="/layout" exact component={LayoutPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
