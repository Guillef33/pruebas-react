import React from 'react'
import "./Input.css";

const Input = ( { atributo, handleChange, param }) => {



    return (
        <div>
            <input 
            type='text' 
            name={atributo.name} 
            id={atributo.id} 
            placeholder={atributo.placeholder} 
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            className={param ? 'input-error' : 'regular-style'} />
        </div>
    )
;
}

export default Input;