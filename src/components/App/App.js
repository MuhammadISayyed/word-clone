import Game from "../Game";
import Header from "../Header";
import Form from "../Form";

function App() {
  return (
    <div className="wrapper">
      <Header />

      <div className="game-wrapper">
        <Game />
        <Form />
      </div>
    </div>
  );
}

export default App;
