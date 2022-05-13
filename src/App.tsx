import "./App.css";
import ComponenteDois from "./components/ComponenteDois";

import ComponenteUm from "./components/ComponenteUm";
import ComponenteTres from "./components/ComponenteTres";
import ComponenteQuatro from "./components/ComponenteQuatro";
import ComponenteSeis from "./components/ComponenteSeis";
import ComponenteSete from "./components/ComponenteSete";
import ComponenteOito from "./components/ComponenteOito";
import ComponenteNove from "./components/ComponenteNove";
import ComponenteDez from "./components/ComponenteDez";

function App() {
  return (
    <>
      <ComponenteDez titulo="Componente Dez" corTexto="red"/>
      <ComponenteNove titulo="Componente Nove" nome="Marcos" valor={4} />
      <ComponenteOito titulo="Componente Oito" nome="Marcos" valor={4} />
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
