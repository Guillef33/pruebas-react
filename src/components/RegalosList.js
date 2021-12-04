import React, { useState} from "react";

import { faCandyCane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function RegalosList ({lista}) { // Aca traemos la lista de regalos, destructuring porque sabemos el nombre para identificar a la prop que esta recibiendo el componente hijo
    
//   const [regalo, setRegalo] = useState({
//     addGift: "",
//     deleteGift: "",
//     gifs: ["Medias", "Vitel tone", "Caramelos"],
//   });

  const [borrarRegalo, setBorrarRegalo] = React.useState(lista);

  const removeItem = (id) => {
    let newPeople = borrarRegalo.filter((regalo) => regalo.id !== id);
    setBorrarRegalo(newPeople);
  };


// //   function deleteArray(e) {
//     let newContainer = regalo.gifs;
//     newContainer.splice(regalo.deleteGift);
//     setRegalo({
//       ...regalo,
//       gifs: newContainer,
//       deleteGift: "",
//     });

    // const removeItem = {} => {
    //     let newArray = 
    // }


    return (
      <>
        {lista.map((item, i) => (
          <li key={i}>
            <FontAwesomeIcon icon={faCandyCane} />
            {item}
            <button onClick={() => removeItem(id)}>borrar</button>
          </li>
        ))}
      </>
    );
};
    
    

export default RegalosList;
