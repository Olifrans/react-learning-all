import "./App.css";
import ComponenteDois from "./components/ComponenteDois";

import ComponenteUm from "./components/ComponenteUm";
import ComponenteTres from "./components/ComponenteTres";
import ComponenteQuatro from "./components/ComponenteQuatro";
// import ComponenteCinco from "./components/ComponenteCinco";

function App() {
  return (
    <>
      <ComponenteUm />
      <ComponenteDois />
      <ComponenteTres titulo="Teste texto" subtitulo="Subtitulo" />
      <ComponenteQuatro titulo="Teste quatro"/>
    </>
  );
}

export default App;
