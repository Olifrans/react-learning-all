export default function ComponenteFilha(props) {
  return (
    <div className="componente">
      <p className="titulo">Titulo: {props.titulo}</p>
      <button className="primary" onClick={props.ehClick}>Click</button>
    </div>
  );
}
