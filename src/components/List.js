import React, { useState } from "react";
import RegalosList from "./RegalosList";
import props from "prop-types"; // Las props que va a recibir nuestro componente si son requeridas o no

// Errores de compilacion
// Cuando react se rompe

// Errores de ejecucion
// Errores que encontramos cuando el codigo no genera lo que buscamos, son los mas dificiles de buscar

const lista = ["Medias", "VitelTone", "Caramelos"];

function List() {

  const [regalo, setRegalo] = useState('');

  function handleChange(e) {
    setRegalo(e.target.value);
  }

  function handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
    lista.push(regalo);
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
              value={regalo}
              onChange={handleChange}
            />
            <input type="submit" value="Agregar" />
          </div>
        </form>
        <ul>
          <RegalosList lista={lista} />
        </ul>
      </div>
    </div>
  );
}

export default List;
