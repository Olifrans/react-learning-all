import CondicaoIf from "./CondicaoIf";

export default function ComponenteNove(props) {
  return (
    <div className="componente">
      <p className="titulo">Titulo: {props.titulo}</p>
      <CondicaoIf condicao={props.nome === "Olifrans"}>
        <p>Verdadeiro! {props.nome} é meu nome</p>
      </CondicaoIf>
      <CondicaoIf condicao={props.nome !== "Ana"}>
        <p>Falso! {props.nome} não é me inha irmã</p>
      </CondicaoIf>

      <CondicaoIf condicao={props.nome !== "Olifrans" && props.nome !== "Ana" }>
        <p>Falso! {props.nome} não é me minha irmã</p>
      </CondicaoIf>
    </div>
  );
}
