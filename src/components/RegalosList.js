import React, { useState} from "react";
import List from './List';
import { faCandyCane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function RegalosList ({lista, removeItem}) { // Aca traemos la lista de regalos, destructuring porque sabemos el nombre para identificar a la prop que esta recibiendo el componente hijo
  

    return (
      <>
        {lista.map((item, i) => (
          <li key={i}>
            <FontAwesomeIcon icon={faCandyCane} />
            {item}
            {/* <input type="submit" value="Borrar" onClick={removeItem} />
            <form onSubmit={removeItem}> */}
            <button onClick={() => removeItem(i)}>remove</button>

            {/* <input type="button" value="Borrar" onClick={removeItem} /> */}
            {/* </form> */}
          </li>
        ))}
      </>
    );
};
    
    

export default RegalosList;

