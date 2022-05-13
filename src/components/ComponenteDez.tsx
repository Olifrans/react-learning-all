export default function ComponenteDez(props) {
  return (
    <div className="componente">
      <p className="titulo">Titulo: {props.titulo}</p>
      <div className="componente">
        <p className="titulo">Titulo: {props.titulo}</p>

        <p style={{ color: "red", padding: "10px", background: "yellow" }}>Titulo de analise</p>
      </div>
    </div>
  );
}
