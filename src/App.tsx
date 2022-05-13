import "./App.css";
import ComponenteDois from "./components/ComponenteDois";

import ComponenteUm from "./components/ComponenteUm";
import ComponenteTres from "./components/ComponenteTres";
import ComponenteQuatro from "./components/ComponenteQuatro";

function App() {
  return (
    <>
      <ComponenteUm />
      <ComponenteDois />
      <ComponenteTres titulo="Teste texto" subtitulo="Subtitulo" />
      <ComponenteQuatro titulo="Teste quatro">
        <ul>
          <li>Teste 01</li>
          <li>Teste 02</li>
          <li>Teste 03</li>
          <li>Teste 04</li>
          <li>Teste 05</li>
        </ul>
      </ComponenteQuatro>
    </>
  );
}

export default App;
