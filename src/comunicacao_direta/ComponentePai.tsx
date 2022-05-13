import ComponenteFilho from "./ComponenteFilho";

export default function ComponentePai(props) {
  return (
    <div className="componente">
      <p className="titulo">Titulo: {props.titulo}</p>
      <p>Pai</p>
      <ComponenteFilho
        titulo="Componente filho"
        cargo="Desenvolvedor Full Stack"
      >
        Olifrans Oliveira
      </ComponenteFilho>
      <ComponenteFilho
        titulo="Componente filho"
        cargo="Escrum Master"
      >
        Gracia Oliveira
      </ComponenteFilho>
    </div>
  );
}
