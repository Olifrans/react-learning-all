export default function ComponenteB(props) {


  
  function acaoExecutar() {
    props.funcao("Valor é igual:" + Math.random());
  }

  return (
    <div className="componente">
      <p className="titulo">Titulo: {props.titulo}</p>

      <button onClick={acaoExecutar}>Executar</button>
    </div>
  );
}
