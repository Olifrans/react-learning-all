function ComponenteUm() {
  return (
    <div className="componentes">
      <p className="componentes">{Maiusculas(props.titulo)}</p>
      <p className="texto">Comentrios Texto </p>
      <p className="author">Autor: {props.author}</p>
    </div>
  );
}

export default ComponenteUm;


// <section className="comment">
// <p className="titulo">{Maiusculas(props.titulo)}</p>
// <p className="texto">Comentrios Texto </p>
// <p className="author">Autor: {props.author}</p>
// </section>