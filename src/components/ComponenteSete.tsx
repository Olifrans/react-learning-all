export default function ComponenteSete(props) {
  return (
    <div className="componente">
      <p className="titulo">Titulo: {props.titulo}</p>

      {props.valor ? (
        <div>
          <p>O valares corespondete a esta operação é:</p>
          <p>Verdadeiro</p>
        </div>
      ) : (
        <div>
          <p>O valares corespondete a esta operação é:</p>
          <p>Falso</p>
        </div>
      )}
    </div>
  );
}
