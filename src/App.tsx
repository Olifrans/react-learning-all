import { useState } from "react";
import "./App.css";

function App() {
  const [valor, setValor] = useState(77);

  function incremento() {
    setValor(valor + 1);
  }

  function decremento() {
    setValor(valor - 1);
  }

  return (
    <>
      <h1>Reacct Hooks</h1>
      <h3>Valor: {valor}</h3>
      <button onClick={incremento}>Incremento</button>
      <br></br>
      <button onClick={decremento}>Decremento</button>
    </>
  );
}

export default App;
