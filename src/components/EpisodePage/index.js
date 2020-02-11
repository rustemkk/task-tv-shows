import { get } from 'lodash';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { loadEpisode } from 'modules/episodes/actions';
import { getEpisodeById } from 'modules/episodes/selectors';

import s from './index.module.scss';


const mapStateToProps = (state, ownProps) => {
  const episodeId = +get(ownProps, 'match.params.episodeId');

  return {
    episode: getEpisodeById(episodeId)(state),
    episodeId,
  };
};

const mapDispatchToProps = {
  loadEpisode,
};

const EpisodePage = ({ episode, episodeId, loadEpisode }) => {

  useEffect(() => {
    if (episodeId && !episode) {
      loadEpisode(episodeId);
    }
  }, [episode, episodeId, loadEpisode]);

  return !episode ? null : (
    <div className={s.EpisodePage}>
      {get(episode, 'image.original') &&
        <div className={s.ImageContainer}>
          <img className={s.Image} alt={episode.name} src={get(episode, 'image.original')} />
        </div>
      }
      <div className={s.ContentContainer}>
        <div className={s.Name}>
          {episode.name}
        </div>
        <div dangerouslySetInnerHTML={{ __html: episode.summary }} />
        <div className={s.EpisodeProperty}>
          <span>Show</span>
          {': '}
          <Link className={s.Link} to={`/show/${episode.showId}`}>
            {episode.showName}
          </Link>
        </div>
        <div className={s.EpisodeProperty}>
          <span>Season</span>
          {': '}
          {episode.season}
        </div>
        <div className={s.EpisodeProperty}>
          <span>Episode</span>
          {': '}
          {episode.number}
        </div>
        <div className={s.EpisodeProperty}>
          <span>Airdate</span>
          {': '}
          {episode.airdate}
        </div>
      </div>
    </div>
  );
}

EpisodePage.propTypes = {
  episode: PropTypes.object,
  episodeId: PropTypes.number.isRequired,
  loadEpisode: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(EpisodePage);