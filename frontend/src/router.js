import React from 'react';
import { Redirect, Router, Route, Switch } from 'dva/router';
import NewsPage from './routes/News/NewsPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/news" exact component={NewsPage} />
        <Route path="/" exact render={() => <Redirect to="/news" />} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
