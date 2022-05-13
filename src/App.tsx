import "./App.css";
import ComponenteDois from "./components/ComponenteDois";

import ComponenteUm from "./components/ComponenteUm";
import ComponenteTres from "./components/ComponenteTres";
import ComponenteQuatro from "./components/ComponenteQuatro";
import ComponenteSeis from "./components/ComponenteSeis";
// import ComponenteCinco from "./components/ComponenteCinco";

function App() {
  return (
    <>
     <ComponenteSeis  titulo="Teste componente seis"/>
     <ComponenteQuatro titulo="Teste componente quatro"/>
     <ComponenteTres titulo="Teste componente três" subtitulo="Subtitulo" />
      <ComponenteDois />
      <ComponenteUm />   
      
     
    </>
  );
}

export default App;
