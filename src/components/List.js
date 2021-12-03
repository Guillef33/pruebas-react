import React, { useState } from "react";
import RegalosList from "./RegalosList";
import props from "prop-types"; // Las props que va a recibir nuestro componente si son requeridas o no

// Errores de compilacion
// Cuando react se rompe

// Errores de ejecucion
// Errores que encontramos cuando el codigo no genera lo que buscamos, son los mas dificiles de buscar

function List() {

  const [regalo, setRegalo] = useState({
    addGift: "",
    gifs: ["Medias", "VitelTone", "Caramelos"]
  });

  function handleChange(e) {
    setRegalo({...regalo, addGift: e.target.value}); // mantiene lo que ya tiene y va agregando
  }

  function handleSubmit(e) {
    e.preventDefault()
    // los regalos son inmutables, entonces tenemos que crear uno nuevo
    let newContainer = regalo.gifs;
    newContainer.push(regalo.addGift);
    setRegalo({
      ...regalo, gifs: newContainer,
      addGift: ""
    })
    // regalo.gifs.push(regalo);
  }

  return (
    <div className="Lista">
      <div className="list-wrapper">
        <h2>Regalos:</h2>
        <form onSubmit={handleSubmit}>
          <div className="addRegalo">
            <input
              type="text"
              placeholder="Agrega regalo..."
              value={regalo.addGift}
              onChange={handleChange}
            />
            <input type="submit" value="Agregar" />
          </div>
        </form>
        <ul>
          <RegalosList lista={regalo.gifs} />
        </ul>
      </div>
    </div>
  );
}

export default List;
