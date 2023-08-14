import React from 'react';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function Guess({ value }) {
  return (
    <div className="guess-results">
      <p class="guess">
        {range(5).map((num) => (
          <span key={num} className="cell">
            {value ? value[num] : undefined}
          </span>
        ))}
      </p>
    </div>
  );
}

export default Guess;
