export default function ComponenteB(props) {
  let valor1 = 7;

  function acaoExecutar() {
    valor1 = Math.random();
    props.funcao("Valor é igual:" + valor1, "Olifrans", Math.LN10);
  }

  return (
    <div className="componente">
      <p className="titulo">Titulo: {props.titulo}</p>

      <button onClick={acaoExecutar}>Executar</button>
      <p>{valor1}</p>
    </div>
  );
}
