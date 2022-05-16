import ComponenteB from "./ComponenteB";

export default function ComponenteA(props) {

  function executar(valor1, valor2, valor3) {
    console.log(valor1);
    console.log(valor2);
    console.log(valor3);
  }

  return (
    <div className="componente">
      <p className="titulo">Titulo: {props.titulo}</p>
      <ComponenteB titulo="Filho B" funcao={executar} />
    </div>
  );
}
