import React from "react";

import { faCandyCane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function RegalosList ({lista}) { // Aca traemos la lista de regalos, destructuring porque sabemos el nombre para identificar a la prop que esta recibiendo el componente hijo
    
    return (
        <>
        {lista.map((item, i) => (
            <li key={i}>
                <FontAwesomeIcon icon={faCandyCane} />
                {item}
            </li>
        ))
        }
        </>
    )
}

export default RegalosList;
