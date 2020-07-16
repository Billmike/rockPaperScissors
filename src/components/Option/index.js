import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const iconStyle = {
  rock: {
    borderColor: 'hsl(349, 71%, 52%)',
  },
  lizard: {
    borderColor: 'hsl(261, 73%, 60%)',
  },
  paper: {
    borderColor: 'hsl(230, 89%, 62%)',
  },
  spock: {
    borderColor: 'hsl(189, 59%, 53%)',
  },
  scissors: {
    borderColor: 'hsl(39, 89%, 49%)',
  },
};

const Option = ({ name, style = {}, onPress }) => {
  return (
    <div
      className='option'
      style={{ ...iconStyle[name], ...style }}
      onClick={onPress}
    >
      <img
        src={require(`../../assets/images/icon-${name}.svg`)}
        alt={name.toUpperCase()}
      />
    </div>
  );
};

Option.propTypes = {
  name: PropTypes.oneOf(['rock', 'paper', 'scissors', 'lizard', 'spock']),
};

export default Option;
