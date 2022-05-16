export default function ComponenteFilha(props) {
  return (
    <div className="componente">
      <p className="titulo">Titulo: {props.titulo}</p>
      
      <button style={{color: "white", background: "green", borderBottom: "10px"}} onClick={props.ehClick}>Click</button>
    </div>
  );
}
