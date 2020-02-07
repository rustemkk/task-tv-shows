import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import s from './index.module.scss';


const RatingLabel = ({ className, value }) => {
  return !value ? null : (
    <div
      className={cn(
        className,
        s.RatingLabel,
        value >= 4 && s.ColorGrey,
        value >= 7 && s.ColorGreen,
        value >= 9 && s.ColorGold,
      )}
    >
      {value}
    </div>
  );
}

RatingLabel.propTypes = {
  className: PropTypes.string,
  value: PropTypes.number,
};

export default RatingLabel;