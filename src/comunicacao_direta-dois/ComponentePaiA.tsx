import ComponenteFilhoA from "./ComponenteFilhoA";

export default function ComponentePaiA(props) {
  return (
    <div className="componente">
      <p>Pai</p>

      <ComponenteFilhoA nome={...props} />
    </div>
  );
}
