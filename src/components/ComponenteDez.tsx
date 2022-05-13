export default function ComponenteDez(props) {

  //const estilo = { color: "White", padding: "10px", background: "red" };

  return (
    <div className="componente">
      <p className="titulo">Titulo: {props.titulo}</p>
      <div className="componente">
        <p className="titulo">Titulo: {props.titulo}</p>

        <p style={{color: props.corTexto}}>Titulo de analise</p>
      </div>
    </div>
  );
}
