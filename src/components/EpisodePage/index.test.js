import { render } from '@testing-library/react';
import React from 'react';
import { HashRouter } from 'react-router-dom';

import { EpisodePage } from './';



test('Should render "Episode not found." for invalid episodeId', () => {
  const { getByText } = render(
    <HashRouter basename="/">
      <EpisodePage episodeId={+"bi76i678g"} loadEpisode={() => { }} />
    </HashRouter>
  );
  const episodeNotFoundElement = getByText(/Episode not found./i);
  expect(episodeNotFoundElement).toBeInTheDocument();
});

test('Should render "Episode not found."', () => {
  const { getByText } = render(
    <HashRouter basename="/">
      <EpisodePage episode={{ id: 1, status: 404 }} episodeId={1} loadEpisode={() => { }} />
    </HashRouter>
  );
  const episodeNotFoundElement = getByText(/Episode not found./i);
  expect(episodeNotFoundElement).toBeInTheDocument();
});

test('Should render show name', () => {
  const { getByText } = render(
    <HashRouter basename="/">
      <EpisodePage
        loadEpisode={() => { }}
        episode={{ id: 1, season: 2, showName: 'Californication', showId: 456 }}
        episodeId={1}
      />
    </HashRouter>
  );
  const showNameElement = getByText(/Californication/i);
  expect(showNameElement).toBeInTheDocument();
  expect(showNameElement).toHaveProperty('href', 'http://localhost/#/show/456');
});