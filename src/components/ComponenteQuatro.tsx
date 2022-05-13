

const ComponenteQuatro = (props) => {
  return (
    <div className="componente">
      <p className="texto">Exibição do titulo: {props.titulo}</p>
      {props.children}
    </div>
  );
};

export default ComponenteQuatro;
