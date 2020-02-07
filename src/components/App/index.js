import React from 'react';
import { Route, Switch } from 'react-router-dom';

import EpisodePage from 'components/EpisodePage';
import ShowPage from 'components/ShowPage';
import ShowsPage from 'components/ShowsPage';

import s from './index.module.scss';


const App = () => {
  return (
    <div className={s.App}>
      <Switch>
        <Route exact path="/" component={ShowsPage} />
        <Route exact path="/episode/:episodeId" component={EpisodePage} />
        <Route exact path="/show/:showId" component={ShowPage} />
        <Route component={() => <div>page not found</div>} />
      </Switch>
    </div>
  );
}

export default App;