import React from 'react';

// Styles
import './styles.scss';

const Rules = ({ onPress }) => {
  return (
    <div className='button-container' onClick={onPress}>
      <button className='rules-button'>Rules</button>
    </div>
  );
};

export default Rules;
