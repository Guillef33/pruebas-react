import React, { useState} from "react";
import { faCandyCane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function RegalosList ({lista, removeItem}) { // Aca traemos la lista de regalos, destructuring porque sabemos el nombre para identificar a la prop que esta recibiendo el componente hijo
  
    return (
      <>
        {lista.map((item, id) => (
          <li key={id}>
            <div>
              <FontAwesomeIcon icon={faCandyCane} />
              <div>{item.cantidad}</div>
              {item.title}
            </div>
            <button onClick={() => removeItem(item)}>X</button>
          </li>
        ))}
      </>
    );
};
    
    

export default RegalosList;

  // const removeItem = (id) => {
  //   let newPeople = regalo.gifs.filter((rega) => rega.id !== id);
  //   setRegalo(newPeople);
  // };