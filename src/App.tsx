import "./App.css";
import ComponenteDois from "./components/ComponenteDois";

import ComponenteUm from "./components/ComponenteUm";
import ComponenteTres from "./components/ComponenteTres";
import ComponenteQuatro from "./components/ComponenteQuatro";
import ComponenteSeis from "./components/ComponenteSeis";
import ComponenteSete from "./components/ComponenteSete";

function App() {
  return (
    <>
      <ComponenteSete titulo="Componente Sete" valor={100} />
      <ComponenteSeis titulo="Componente Seis" />
      <ComponenteQuatro titulo="Componente Quatro" />
      <ComponenteTres titulo="Componente Três" subtitulo="Subtitulo" />
      <ComponenteDois />
      <ComponenteUm />
    </>
  );
}

export default App;
