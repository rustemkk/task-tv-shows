import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ShowsPage from 'components/ShowsPage';

import s from './index.module.scss';


const App = () => {
  return (
    <div className={s.App}>
      <Switch>
        <Route exact path="/" component={ShowsPage} />
        <Route component={() => <div>page not found</div>} />
      </Switch>
    </div>
  );
}

export default App;