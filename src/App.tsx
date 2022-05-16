import "./App.css";

function App() {
  var valor = 0;

  function incrementar() {
    valor++;
    console.log(valor);
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
