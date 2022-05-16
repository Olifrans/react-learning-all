import ComponentePaiA from "./ComponentePaiA";

export default function ComponenteAvoA(props) {
  return (
    <div className="componente">
      <p>Avô</p>

      <ComponentePaiA nome="Herança do componente avô" apelido="Herança direta ao neto"/>
    </div>
  );
}
