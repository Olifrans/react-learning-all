import { useState } from "react";
import "./App.css";

function App() {
  // var valor = 0;

  // function incrementar() {
  //   valor++;
  //   console.log(valor);
  // }

  const [valor, setValor] = useState(50);

  function incrementar() {
    setValor(valor + 1);
  }

  return (
    <>
      <h1>Reacct Hooks</h1>
      <h3>{valor}</h3>
      <button onClick={incrementar}>Incrementar</button>
    </>
  );
}

export default App;
