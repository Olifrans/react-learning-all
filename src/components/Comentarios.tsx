import "./comentario.css";

function Comentarios(props) {

  
  function Maiusculas(texto) {
    return texto.toUpperCase();
  }

  return (
    <>
      <section className="comment">
        <p className="titulo">{Maiusculas(props.titulo)}</p>
        <p className="texto">Comentrios Texto </p>
        <p className="author">Autor: {props.author}</p>
      </section>
    </>
  );
}

export default Comentarios;
