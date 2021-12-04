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
    deleteGift: "",
    gifs: ["Medias", "Vitel tone", "Caramelos"],
    // gifs: [{id:"1", title:"Medias"}, {id:"2", title :"Vitel Tone"}, {id:"3", title : "Caramelos"}]
  });

  function handleChange(e) {
    setRegalo({ ...regalo, addGift: e.target.value }); // mantiene lo que ya tiene y va agregando
  }

    const removeItem = (e) => {
          e.preventDefault();

      let newObject = regalo.gifs;
   newObject.pop(regalo.addGift);
   setRegalo({
     ...regalo,
     gifs: newObject,
     addGift: "",
   });
      // let newPeople = regalo.gifs.filter((regalo) => regalo.id !== id);
      // setRegalo(newPeople);
    };

  function handleSubmit(e) {
    e.preventDefault();
    let newContainer = regalo.gifs;
    newContainer.push(regalo.addGift);
    setRegalo({
      ...regalo,
      gifs: newContainer,
      addGift: "",
    });
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
        <form onSubmit={removeItem}>
          <input type="submit" value="Borrar" />
        </form>
        <ul>
          <RegalosList lista={regalo.gifs} />
        </ul>
      </div>
    </div>
  );
}

export default List;
