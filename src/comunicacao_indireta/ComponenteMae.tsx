import ComponenteFilha from "./ComponenteFilha";

export default function ComponenteMae(props) {
  
  function click() {
    console.log("Ateção! você Clickou, no botão da filha");
  }

  return (
    <div className="componente">
      <p className="titulo">Titulo: {props.titulo}</p>
      <p>Mãe</p>

      <ComponenteFilha titulo="Filha" ehClick={click}>Olifrans Oliveira</ComponenteFilha>
    </div>
  );
}
