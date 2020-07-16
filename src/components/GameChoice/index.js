import React from 'react';

// Components
import { Option } from '../../components';

// utils
import { isSmallScreen } from '../../utils/checkScreen';

import './styles.scss';

const GameChoice = ({ onPress }) => {
  return isSmallScreen ? (
    <div className='small-screen'>
      <div className='small-screen-wrapper'>
        <div className='choice-wrapper'>
          <Option name='rock' />
          <p className='who-picked'>You Picked</p>
        </div>
        <div className='choice-wrapper'>
          <Option name='rock' />
          <p className='who-picked'>The House Picked</p>
        </div>
      </div>
      <div className='play-again-wrapper'>
        <p className='result'>You Win</p>
        <button className='play-again' onClick={onPress}>
          Play Again
        </button>
      </div>
    </div>
  ) : (
    <div className='playing-wrapper'>
      <div className='choice-wrapper'>
        <p className='who-picked'>You Picked</p>
        <Option name='rock' />
      </div>
      <div className='play-again-wrapper'>
        <p className='result'>You Win</p>
        <button className='play-again' onClick={onPress}>
          Play Again
        </button>
      </div>
      <div className='choice-wrapper'>
        <p className='who-picked'>The House Picked</p>
        <Option name='rock' />
      </div>
    </div>
  );
};

export default GameChoice;
