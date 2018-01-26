import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import CountPage from './routes/CountPage';
import NewsPage from './routes/News/NewsPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/counter" exact component={CountPage} />
        <Route path="/news" exact component={NewsPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
