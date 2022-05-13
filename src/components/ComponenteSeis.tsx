import clientes from "../dados_clientes/dados_clientes";

const ComponenteSeis = (props) => {

  function cliente() {
    return clientes.map((listCliente) => {
      return <li key={listCliente.id_cliente} >Nome: {listCliente.nome} | Email: {listCliente.email}</li>
    });
  }

  
  return (
    <div className="componente">
      <p className="titulo">Titulo: {props.titulo}</p>
      <ul>{cliente()}</ul>
    </div>
  );
};

export default ComponenteSeis;
