import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import Form from '../Form/Form';
import GuessResults from '../GuessResults/GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleSubmitGuess(input) {
    // TODO
    console.log(`Received guess, ${input}`);
    setGuesses([...guesses, input]);
  }

  return (
    <>
      <Form handleSubmitGuess={handleSubmitGuess} />
      <GuessResults guesses={guesses} />
    </>
  );
}

export default Game;
