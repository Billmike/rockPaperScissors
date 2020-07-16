import React from 'react';
import Modal from 'react-modal';

// Images
import Rules from '../../assets/images/image-rules-bonus.svg';
import Close from '../../assets/images/icon-close.svg';

// Utils
import { isSmallScreen } from '../../utils/checkScreen';

import './styles.scss';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 25,
    width: isSmallScreen ? '100%' : 350,
    height: isSmallScreen ? '100%' : 450,
  },
};

const ModalComponent = ({ isModalOpen, closeModal }) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      {isSmallScreen ? (
        <div className='small-screen-modal'>
          <h4 className='rule-header'>RULES</h4>
          <img src={Rules} alt='Rules' className='rules-image' />
          <img src={Close} className='close' alt='Close' onClick={closeModal} />
        </div>
      ) : (
        <div className='wrapper'>
          <div className='header-container'>
            <h4 className='rule-header'>RULES</h4>
            <img
              src={Close}
              className='close'
              alt='Close'
              onClick={closeModal}
            />
          </div>
          <img src={Rules} alt='Rules' className='rules-image' />
        </div>
      )}
    </Modal>
  );
};

export default ModalComponent;
