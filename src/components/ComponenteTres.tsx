

const ComponenteTres = (props) => {
  return (
    <div className="componente">
      <p className="texto">Exibição do titulo: {props.titulo}</p>
      <p className="texto">Exibição do subtitulo: {props.subtitulo}</p>
    </div>
  );
};

export default ComponenteTres;
