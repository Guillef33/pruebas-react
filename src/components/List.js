import React, { useState } from "react";
import RegalosList from "./RegalosList";
import props from "prop-types"; // Las props que va a recibir nuestro componente si son requeridas o no

// Errores de compilacion
// Cuando react se rompe

// Errores de ejecucion
// Errores que encontramos cuando el codigo no genera lo que buscamos, son los mas dificiles de buscar

function List() {
  const [regalo, setRegalo] = useState({
    addGift: "", // Propiedad addgift sin ningun valor
    // gifs: ["Medias", "Vitel tone", "Caramelos"],
    gifs: [
      // 'Intenta agregar'
      { id: "1", title: "Medias" },
      { id: "2", title: "Vitel Tone" },
      { id: "3", title: "Caramelos" },
    ],
    inicialState: 'Agrega un regalo'
  });

  function handleChange(e) {
    setRegalo({ ...regalo, addGift: e.target.value }); // mantiene lo que ya tiene y va agregando
  }

  const removeItem = (item) => {
    let newObject = regalo.gifs;
    newObject = newObject.filter((gift) => gift.id !== item.id); //guardamos el resultado del filtrado
    setRegalo({
      ...regalo,gifs: newObject,
    });
  };


  /// Revisar
  function handleSubmit(e) {
    e.preventDefault();
    if (regalo.gifs.length > 0) {
      let newContainer = regalo.gifs;
      newContainer[newContainer.length] = {
      id: regalo.gifs.length + 1,
      title: regalo.addGift,
    };
    setRegalo({
    ...regalo,
    gifs: newContainer,
    addGift: "",
  });
    } else {
      alert("Ingrese un texto");
    }
    // newContainer.push(regalo.addGift);

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
          {
            
          }
          <RegalosList lista={regalo.gifs} removeItem={removeItem} />
        </ul>
        <button
          className="btn"
          onClick={() =>setRegalo({...regalo, gifs: []})}
          style={{ width: "100%" }}
        >
          clear items
        </button>
      </div>
    </div>
  );
}

export default List;
