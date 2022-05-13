import ComponenteCinco from "./ComponenteCinco";

const ComponenteQuatro = (props) => {
  return (
    <div className="componente">
      <p className="texto">Exibição do titulo: {props.titulo}</p>
      <ComponenteCinco dados="A casa da vida" />
      <ComponenteCinco dados="A casa da vida" />
    </div>
  );
};

export default ComponenteQuatro;
