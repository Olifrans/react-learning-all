export default function ComponenteB(props) {
  return (
    <div className="componente">
      <p className="titulo">Titulo: {props.titulo}</p>

      <button
        onClick={() => {
          props.funcao(Math.random());
        }}
      >
        Executar
      </button>
    </div>
  );
}
