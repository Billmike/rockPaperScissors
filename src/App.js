import React, { useState, useEffect } from 'react';

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
import { rules } from './utils/rules';

const CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

function App() {
  const [isModalOpen, setModalState] = useState(false);
  const [isPlaying, setPlayingState] = useState(false);
  const [status, setStatus] = useState({
    score: 0,
    userWins: false,
    aiChoice: '',
  });
  const [playerChoice, setPlayerChoice] = useState('');

  const setChoice = (iconName) => {
    setPlayerChoice(iconName);
    setPlayingState(true);
  };

  const iconSelect = () => {
    const filteredChoices = CHOICES.filter((ch) => ch !== playerChoice);
    const randomIndex = Math.floor(
      Math.random() * (filteredChoices.length - 0) + 0
    );
    const aiChoice = filteredChoices[randomIndex];

    const userWins = rules[playerChoice][aiChoice];
    setStatus({
      score: userWins ? status.score + 1 : status.score - 1,
      userWon: userWins,
      aiChoice: aiChoice,
    });
  };

  useEffect(() => {
    !!playerChoice && iconSelect();
    // eslint-disable-next-line
  }, [playerChoice]);

  return (
    <div className='container'>
      <div className='info-container'>
        <div className='app-title-wrapper'>
          <img src={Logo} alt='Rock, Paper, Scissors, Lizard, Spock' />
        </div>
        <Score status={status} />
      </div>
      {isPlaying ? (
        <GameChoice
          status={status}
          choice={playerChoice}
          onPress={() => setPlayingState(false)}
        />
      ) : (
        <Options setChoice={setChoice} onPress={() => setPlayingState(true)} />
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
