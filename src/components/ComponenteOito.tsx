export default function ComponenteOito(props) {
  function condicaoIf() {
    if (props.valor >= 10) {
      return <p>O valor é igual o superior a 10</p>;
    } else {
      return <p>O valor é igual o inferior a 10</p>;
    }
  }

  function condicaoSwitch() {
    switch (props.nome) {
      case "Olifrans":
        return <p>É o meu nome</p>;
        break;

      case "Marcos":
        return <p>É o meu irmão</p>;
        break;

      case "Joana":
        return <p>É o meinha tia</p>;
        break;

      default:
        return <p>Não sei quem é</p>;
        break;
    }
  }

  return (
    <div className="componente">
      <p className="titulo">Titulo: {props.titulo}</p>
      {condicaoIf()}
      <br></br>
      {condicaoSwitch()}
    </div>
  );
}
