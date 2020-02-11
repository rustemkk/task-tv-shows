import { render } from '@testing-library/react';
import React from 'react';
import { HashRouter } from 'react-router-dom';

import { ShowPage } from './';


test('Should render "Show not found." for invalid showId', () => {
  const { getByText } = render(
    <HashRouter basename="/">
      <ShowPage loadEpisodes={() => { }} loadShow={() => { }} showId={+"bi76i678g"} />
    </HashRouter>
  );
  const showNotFoundElement = getByText(/Show not found./i);
  expect(showNotFoundElement).toBeInTheDocument();
});

test('Should render "Show not found."', () => {
  const { getByText } = render(
    <HashRouter basename="/">
      <ShowPage
        episodes={[]}
        loadEpisodes={() => { }}
        loadShow={() => { }}
        show={{ id: 1, status: 404 }}
        showId={1}
      />
    </HashRouter>
  );
  const showNotFoundElement = getByText(/Show not found./i);
  expect(showNotFoundElement).toBeInTheDocument();
});

test('Should render show name and episodes list', () => {
  const { getByText } = render(
    <HashRouter basename="/">
      <ShowPage
        episodes={[{ id: 23, name: 'Episode 1', season: 4, number: 11 }, { id: 24, name: 'Episode 2' }]}
        loadEpisodes={() => { }}
        loadShow={() => { }}
        show={{ id: 1, name: 'Californication', premiered: '2011-01-01', rating: { average: 8.2 }, genres: ['Drama'] }}
        showId={1}
      />
    </HashRouter>
  );
  const showNameElement = getByText(/Californication/i);
  expect(showNameElement).toBeInTheDocument();
  const episodesElement = getByText(/Episodes:/i);
  expect(episodesElement).toBeInTheDocument();
  const episodeLinkElement = getByText(/4x11 - Episode 1/i);
  expect(episodeLinkElement).toBeInTheDocument();
  expect(episodeLinkElement).toHaveProperty('href', 'http://localhost/#/episode/23');
});