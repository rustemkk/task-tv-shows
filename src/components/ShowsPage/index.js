import { get } from 'lodash';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import RatingLabel from 'components/RatingLabel';
import { loadShows } from 'modules/shows/actions';
import { getAllShows } from 'modules/shows/selectors';

import s from './index.module.scss';


const mapStateToProps = (state) => ({
  shows: getAllShows(state),
})

const mapDispatchToProps = {
  loadShows,
};

const ShowsPage = ({ loadShows, shows }) => {

  useEffect(() => {
    loadShows();
  }, [loadShows]);

  return (
    <div className={s.Shows}>
      {shows.map(show =>
        <Link className={s.Show} key={show.id} to={`/show/${show.id}`}>
          <RatingLabel className={s.Rating} value={get(show, 'rating.average')} />
          <img alt={show.name} src={get(show, 'image.medium')} />
          <span className={s.Name}>
            {show.name}
            {', '}
            {show.premiered.substring(0, 4)}
          </span>
          <span className={s.Genre}>
            {show.genres.join(', ')}
          </span>
        </Link>
      )}
      {/* to keep correct width of shows on the last row: */}
      {[...Array(50)].map((_, index) =>
        <div key={index} className={s.ShowPlaceholder} />
      )}
    </div>
  );
}

ShowsPage.propTypes = {
  loadShows: PropTypes.func.isRequired,
  shows: PropTypes.array,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowsPage);