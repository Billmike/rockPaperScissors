import React from 'react';

// Components
import { Option } from '../../components';

// Images
import BGPentagon from '../../assets/images/bg-pentagon.svg';

// Utils
import { isSmallScreen } from '../../utils/checkScreen';

// styles
import './style.scss';

const Options = ({ onPress }) => {
  return (
    <div>
      <div className='options-container'>
        <div className='bg-pentagon'>
          <img src={BGPentagon} alt='Pentagon' />
        </div>
        <Option name='scissors' onPress={onPress} />
        <div className='row-wrapper'>
          <Option
            name='spock'
            style={{ marginRight: isSmallScreen ? 100 : 200 }}
            onPress={onPress}
          />
          <Option name='paper' onPress={onPress} />
        </div>
        <div
          className='row-wrapper'
          style={{ marginTop: isSmallScreen ? 20 : 50 }}
        >
          <Option
            name='lizard'
            style={{ marginRight: isSmallScreen ? 60 : 100 }}
            onPress={onPress}
          />
          <Option name='rock' onPress={onPress} />
        </div>
      </div>
    </div>
  );
};

export default Options;
