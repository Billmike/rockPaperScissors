import React from 'react';

// Components
import { Option } from '../../components';

// utils
import { isSmallScreen } from '../../utils/checkScreen';

import './styles.scss';

const GameChoice = ({ onPress, choice, status }) => {
  return isSmallScreen ? (
    <div className='small-screen'>
      <div className='small-screen-wrapper'>
        <div className='choice-wrapper'>
          <Option name={choice} />
          <p className='who-picked'>You Picked</p>
        </div>
        <div className='choice-wrapper'>
          {!!status.aiChoice && <Option name={status.aiChoice} />}
          <p className='who-picked'>The House Picked</p>
        </div>
      </div>
      <div className='play-again-wrapper'>
        <p className='result'>{!!status.userWon ? 'You Win' : 'You Lose'}</p>
        <button className='play-again' onClick={onPress}>
          Play Again
        </button>
      </div>
    </div>
  ) : (
    <div className='playing-wrapper'>
      <div className='choice-wrapper'>
        <p className='who-picked'>You Picked</p>
        <Option name={choice} />
      </div>
      <div className='play-again-wrapper'>
        <p className='result'>{!!status.userWon ? 'You Win' : 'You Lose'}</p>
        <button className='play-again' onClick={onPress}>
          Play Again
        </button>
      </div>
      <div className='choice-wrapper'>
        <p className='who-picked'>The House Picked</p>
        {!!status.aiChoice && <Option name={status.aiChoice} />}
      </div>
    </div>
  );
};

export default GameChoice;
