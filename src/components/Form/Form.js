import { format } from "prettier";
import React from "react";

function Form() {
  const [input, setInput] = React.useState("");

  return (
    <form
      className="get-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        console.log(input);
        setInput("");
      }}
    >
      <label htmlFor="guess-input">Enter a guess: </label>
      <input
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
