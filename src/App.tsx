import Comentarios from "./components/Comentarios";

function App() {
  return (
    <>
      <h1>Comentários realizados</h1>
      <Comentarios titulo="Cometarios um" author="Olifrans" />
      <Comentarios titulo="Cometarios DOIS" author="Olifrans" />
      <Comentarios titulo="Cometarios TRÊS" author="Olifrans" />
    </>
  );
}

export default App;
