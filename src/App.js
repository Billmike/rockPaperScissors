import React, { useState } from 'react';

// Components
import {
  Score,
  Options,
  Button,
  ModalComponent,
  GameChoice,
} from './components';

// Images
import Logo from './assets/images/logo-bonus.svg';
import './App.scss';

function App() {
  const [isModalOpen, setModalState] = useState(false);
  const [isPlaying, setPlayingState] = useState(false);

  return (
    <div className='container'>
      <div className='info-container'>
        <div className='app-title-wrapper'>
          <img src={Logo} alt='Rock, Paper, Scissors, Lizard, Spock' />
        </div>
        <Score />
      </div>
      {isPlaying ? (
        <GameChoice onPress={() => setPlayingState(false)} />
      ) : (
        <Options onPress={() => setPlayingState(true)} />
      )}
      <Button onPress={() => setModalState(true)} />
      <ModalComponent
        closeModal={() => setModalState(false)}
        isModalOpen={isModalOpen}
      />
    </div>
  );
}

export default App;
