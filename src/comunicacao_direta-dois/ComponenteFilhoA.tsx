export default function ComponenteFilhoA(props) {
  return (
    <div className="componente">
      <p>Filho: {props.nome}</p>
      <p>Filho: {props.apelido}</p>
    </div>
  );
}
