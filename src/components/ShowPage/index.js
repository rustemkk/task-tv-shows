import { get } from 'lodash';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { loadEpisodes } from 'modules/episodes/actions';
import { getEpisodesByShowId } from 'modules/episodes/selectors';
import { loadShow } from 'modules/shows/actions';
import { getShowById } from 'modules/shows/selectors';

import s from './index.module.scss';


const mapStateToProps = (state, ownProps) => {
  const showId = get(ownProps, 'match.params.showId');

  return {
    episodes: getEpisodesByShowId(showId)(state),
    show: getShowById(showId)(state),
    showId,
  };
};

const mapDispatchToProps = {
  loadEpisodes,
  loadShow,
};

const ShowPage = ({ episodes, loadEpisodes, loadShow, show, showId }) => {

  const history = useHistory();

  useEffect(() => {
    if (showId && !show) {
      loadShow(showId);
    }
  }, [loadShow, show, showId]);

  useEffect(() => {
    if (showId && !episodes.length) {
      loadEpisodes(showId);
    }
  }, [episodes, loadEpisodes, showId]);

  return !show ? null : (
    <div className={s.Show}>
      <div className={s.ImageContainer}>
        <img className={s.Image} alt={show.name} src={get(show, 'image.original')} />
      </div>
      <div className={s.ContentContainer}>
        <div className={s.Name}>
          {show.name}
          {', '}
          {show.premiered.substring(0, 4)}
        </div>
        <div className={s.Summary} dangerouslySetInnerHTML={{ __html: show.summary }} />
        <div className={s.ShowProperty}>
          <span>Genre</span>
          {': '}
          {show.genres.join(', ')}
        </div>
        <div className={s.ShowProperty}>
          <span>Language</span>
          {': '}
          {show.language}
        </div>
        {episodes.length &&
          <div className={s.Episodes}>
            Episodes:
            {episodes.map(episode =>
              <div className={s.Episode} key={episode.id} onClick={() => history.push(`/episode/${episode.id}`)}>
                {episode.season}
                {'x'}
                {episode.number}
                {' - '}
                {episode.name}
              </div>
            )}
          </div>
        }
      </div>
    </div>
  );
}

ShowPage.propTypes = {
  episodes: PropTypes.array,
  loadEpisodes: PropTypes.func.isRequired,
  loadShow: PropTypes.func.isRequired,
  show: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowPage);