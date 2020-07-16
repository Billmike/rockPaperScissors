import React from 'react';
import './style.scss';

const Score = ({ status: { score } }) => {
  return (
    <div className='score-container'>
      <h6 className='score-text'>SCORE</h6>
      <p
        className='score-value'
        style={{ color: score < 0 ? 'red' : 'hsl(229, 25%, 31%)' }}
      >
        {score}
      </p>
    </div>
  );
};

export default Score;
