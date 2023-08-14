import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import Form from '../Form/Form';
import GuessResults from '../GuessResults/GuessResults';
import Guess from '../Guess/Guess';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleSubmitGuess(guess) {
    console.log(`Received guess, ${guess}`);
    setGuesses([...guesses, guess]);
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <Form handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;
