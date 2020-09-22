import React from 'react';
import Home from './pages/Home';
import Todos from './pages/Todos/todos';
import NotFound from 'pages/NotFound/notfound';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from 'layout/index';

const App = (): JSX.Element => {
  return (
    <Layout>
      <BrowserRouter>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/todos" component={Todos} />
          <Route exact path="/" component={Home} />
          <Route exact path="/*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Layout>
  )
};

export default App;
