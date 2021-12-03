import React from 'react';

import { faCandyCane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const lista = ["Medias", "VitelTone", "Caramelos"];

function List () {
    return (
      <div className="Lista">
        <div className="list-wrapper">
          <h2>Regalos :</h2>
          <ul>
            {lista.map((item, i) => (
              <li key={i}>
                <FontAwesomeIcon icon={faCandyCane} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
}

export default List;