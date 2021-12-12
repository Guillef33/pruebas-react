import React, { useState } from "react";
import RegalosList from "./RegalosList";
import props from "prop-types"; // Las props que va a recibir nuestro componente si son requeridas o no
import { faCandyCane } from "@fortawesome/free-solid-svg-icons";
import Counter from "./Counter";
import Modal from './Modal'

function List() {

  if (localStorage.getItem("Nuevo Regalo")) {
    console.log("tenemos local storage");
  } else {
    console.log("No hay nada en el storage")
  }

  const [cantidad, setCantidad] = useState(1);

  const regaloLocal = localStorage.getItem("Nuevo Regalo");

  const [regalo, setRegalo] = useState({
    addGift: "", // Llamarlo ultimoRegalo /////////////////////////////
    gifs: [
      // 'Agrega todo
      // { id: "1", title: "Medias" },
      // { id: "2", title: "Vitel Tone" },
      // { id: "3", title: "Caramelos" },
    ],
    inicialState: false,
    regaloLocal,
    url: "",
    dedicatoria: ""
  });

  function handleChange(e) {
    const { name, value } = e.target.value;
    // setRegalo({ ...regalo, addGift: e.target.value, regaloLocal: e.target.value, url: "", dedicatoria: "" }); //aca tengo un problema, porque es el mismo target value
    setRegalo({ ...regalo, [name]: value });// mantiene lo que ya tiene y va agregando
    // setRegalo(e.target.value);
  }

  // const LocalStorage = value => {
  //   try {
  //     setRegalo(value)
  //     window.localStorage.setItem ("Nuevo Regalo", value)
  //     console.log(exito)
  //     console.log(window.localStorage.setItem("Nuevo Regalo", value));
  //     } catch (error) {
  //       console.error(error)
  //     }
  // }

  const removeItem = (item) => {
    let prevRegalo = regalo.gifs;
    prevRegalo = prevRegalo.filter((gift) => gift.id !== item.id); //guardamos el resultado del filtrado
    setRegalo({
      ...regalo,
      gifs: prevRegalo,
    });
  };

  const validarRepetidos = (gifs, addGift) => {
    let response = -1;
    gifs.forEach((el, index) => {
      if (el.title.toUpperCase() === addGift.toUpperCase()) {
        response = index;
      }
    });
    return response;
  };

    // const [modalIsOpen, setModalIsOpen] = useState(false);

    // const setModalIsOpenToTrue = () => {
    //   setModalIsOpen(true);
    // };

  /// Revisar
  function handleSubmit(e) {
    e.preventDefault();
    if (regalo.gifs.length >= 0) {
      if (!regalo.addGift || regalo.addGift === " ") {
        alert("Debes agregar un titulo");
      } else if (validarRepetidos(regalo.gifs, regalo.addGift) !== -1) {
        alert("Ese regalo esta repetido");
      } else {
        let newContainer = regalo.gifs;
        newContainer[newContainer.length] = {
          id: regalo.gifs.length + 1,
          title: regalo.addGift,
          url: regalo.url,
          cantidad, /// aca estamos agregando un atributo al array gift, que es una constante del componente padre List. Y este atributo lo pasaremos como prop al componente hijo Counter
          dedicatoria: ""
        };
        setRegalo({
          ...regalo,
          gifs: newContainer,
          addGift: "",
          inicialState: true,
          regaloLocal,
          url: "",
          dedicatoria: ""
          // RegaloLocal: localStorage.getItem(
          //   "Nuevo Regalo",
          //   JSON.stringify(newContainer)
          // ),
        });
        localStorage.setItem("Nuevo Regalo", JSON.stringify(newContainer));
        // JSON.parse(localStorage.getItem("Nuevo Regalo", JSON.stringify(newContainer)));
      }
    }
  }

  const [show, setShow] = useState(false); 



  return (
    <div className="Lista" onClick={props.onClose}>
      <div className="list-wrapper">
        <input
          type="submit"
          value="Mostrar Modal"
          onClick={() => setShow(true)}
        />
        {/* <div className={show ? "hideModal" : "showModal"}> */}
        {/* <div className="modal"> */}
        <Modal onClose={() => setShow(false)} show={show} />
        {/* </div> */}
        {/* </div> */}

        <h2>Regalos:</h2>
        <form onSubmit={handleSubmit}>
          <div className="addRegalo">
            <input
              type="text"
              placeholder="Agrega regalo..."
              value={regalo.addGift} // probe con default value, no funciono
              onChange={handleChange}
              name="regalo"
            />
            <input
              type="text"
              placeholder="Agrega imagen..."
              value={regalo.url}
              className="imagen-input"
              onChange={handleChange}
              name="imagen"
            />
            <input
              type="text"
              placeholder="A quien se lo vas a regalar"
              value={regalo.dedicatoria}
              onChange={handleChange}
              name="dedicatoria"
            />
            <Counter
              cantidad={cantidad}
              setCantidad={setCantidad} // aca estamos pasando la prop hacia el componente counter
            />
            <input type="submit" value="Agregar" />
          </div>
        </form>
        <ul>
          {regalo.gifs.length === 0 ? ( // 0 elementos del array, esto aplica tanto para el boton de borrar como para el borrado
            <div className="empty-state">
              <p>Ahora puedes agregar regalos</p>
            </div>
          ) : (
            <>
              <RegalosList lista={regalo.gifs} removeItem={removeItem} />{" "}
              {/* cambiar o unificar los nombres */}
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

/* 

  const pressHandler = (id) => {
    console.log(id);
    const [regalo, setRegalo] = useState([])

    let prevGifts = regalo.gifts;

    setPeople((prevGifts) => {
      return prevGifts.filter(gift => person.id  != id);
    });
  }; */


  // Ver LifeCicle y como funciona el renderizado.
// Use Effect - Estado de vida en Class Component y funcional Component

// Errores de compilacion
// Cuando react se rompe

// Errores de ejecucion
// Errores que encontramos cuando el codigo no genera lo que buscamos, son los mas dificiles de buscar



  // const [text, setText] = useState(
  //   window.localStorage.getItem('text')
  // )


