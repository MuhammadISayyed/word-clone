import { format } from 'prettier';
import React from 'react';

function Form({ gameStatus, handleSubmitGuess }) {
  const [input, setInput] = React.useState('');

  return (
    <form
      className="get-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmitGuess(input);
        setInput('');
      }}
    >
      <label htmlFor="guess-input">Enter a guess: </label>
      <input
        disabled={gameStatus !== 'running'}
        id="guess-input"
        type="text"
        value={input}
        pattern="[a-zA-Z]{5}"
        onChange={(event) => {
          setInput(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default Form;
