import { useState } from "react";
import "./App.css";

function App() {
  const [valor, setValor] = useState(77);

  function incremento() {
    setValor((valor_anterior) => valor_anterior + 1);
    setValor((valor_anterior) => valor_anterior + 1);
    setValor((valor_anterior) => valor_anterior + 1);
  }

  function decremento() {
    setValor((valor_anterior) => valor_anterior - 1);
    setValor((valor_anterior) => valor_anterior - 1);
    setValor((valor_anterior) => valor_anterior - 1);
  }

  return (
    <>
      <h1>Reacct Hooks - useState</h1>
      <button onClick={incremento}>Incremento</button>
      <span>{valor}</span>
      <button onClick={decremento}>Decremento</button>

      <button
        onClick={() => {
          setValor(valor + 10);
        }}
      >
        Incremento
      </button>

      <button
        onClick={() => {
          setValor((valor_anterior) => valor_anterior + 777);
        }}
      >
        Incremento
      </button>
    </>
  );
}

export default App;
