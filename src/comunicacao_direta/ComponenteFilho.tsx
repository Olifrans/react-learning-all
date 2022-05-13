export default function ComponenteFilho(props) {
  return (
    <div className="componente">
      <p className="titulo">Titulo: {props.titulo}</p>
      <p>Filho</p>
      <p>
      Nome: {props.children} - Função: {props.cargo} 
      </p>
    </div>
  );
}
