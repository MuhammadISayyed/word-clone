import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import Form from '../Form/Form';
import GuessResults from '../GuessResults/GuessResults';
import Guess from '../Guess/Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  // running / won / lost
  const [gameStatus, setGameStatus] = React.useState('running');
  const [guesses, setGuesses] = React.useState([]);

  function handleSubmitGuess(guess) {
    const nextGuesses = [...guesses, guess];
    console.log(`Received guess, ${guess}`);
    setGuesses(nextGuesses);

    if (guess.toUpperCase() === answer) {
      setGameStatus('won');
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  }

  return (
    <>
      {gameStatus}
      <GuessResults guesses={guesses} answer={answer} />
      <Form gameStatus={gameStatus} handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;
