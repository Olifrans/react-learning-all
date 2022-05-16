import ComponenteB from "./ComponenteB";

export default function ComponenteA(props) {
  function executar(valor) {
    console.log(valor);
  }

  return (
    <div className="componente">
      <p className="titulo">Titulo: {props.titulo}</p>
      <ComponenteB titulo="Filho B" funcao={executar} />
    </div>
  );
}
