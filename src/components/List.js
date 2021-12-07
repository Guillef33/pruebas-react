import React, { useState } from "react";
import RegalosList from "./RegalosList";
import props from "prop-types"; // Las props que va a recibir nuestro componente si son requeridas o no
import { faCandyCane } from "@fortawesome/free-solid-svg-icons";

// Ver LifeCicle y como funciona el renderizado.
// Use Effect - Estado de vida en Class Component y funcional Component

// Errores de compilacion
// Cuando react se rompe

// Errores de ejecucion
// Errores que encontramos cuando el codigo no genera lo que buscamos, son los mas dificiles de buscar

function List() {
  const [regalo, setRegalo] = useState({
    addGift: "", // Propiedad addgift sin ningun valor
    // gifs: ["Medias", "Vitel tone", "Caramelos"],
    gifs: [
      // 'Agrega todo
      { id: "1", title: "Medias" },
      // { id: "2", title: "Vitel Tone" },
      // { id: "3", title: "Caramelos" },
    ],
    inicialState: false,
  });

  function handleChange(e) {
    setRegalo({ ...regalo, addGift: e.target.value }); // mantiene lo que ya tiene y va agregando
  }

  const removeItem = (item) => {
    let newObject = regalo.gifs;
    newObject = newObject.filter((gift) => gift.id !== item.id); //guardamos el resultado del filtrado
    setRegalo({
      ...regalo,
      gifs: newObject,
    });
  };

  /// Revisar
  function handleSubmit(e) {
    e.preventDefault();



    if (regalo.gifs.length >= 0) {
      if (regalo.addGift === "") {
        alert("Debes agregar un titulo");
        // } if (regalo.addGift.includes(regalo.gifs)) {
        //   alert("Ese regalo esta repetido");
        // }
      } else {
        let newContainer = regalo.gifs;
        console.log(newContainer[0].id);
        if 
        (newContainer.filter((el) => el[0].id === id)) { // como agrego un console.logp para ver que tiene el?
          alert("Ese regalo esta repetido");
        } 
        else {
          newContainer[newContainer.length] = {
            id: regalo.gifs.length + 1,
            title: regalo.addGift,
          };
          setRegalo({
            ...regalo,
            gifs: newContainer,
            addGift: "",
            inicialState: true,
          });
        }
      }
    }
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
          {regalo.inicialState === false ? (
            <div className="empty-state">
              <p>Ahora puedes agregar regalos</p>
            </div>
          ) : (
            <>
              <RegalosList lista={regalo.gifs} removeItem={removeItem} />
              <button
                className="btn"
                onClick={() =>
                  setRegalo({ ...regalo, gifs: [], inicialState: false })
                }
                style={{ width: "80%", margin: "20px" }}
              >
                Borrar todo
              </button>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default List;
