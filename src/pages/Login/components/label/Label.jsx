import React from 'react'
import Title from '../title/Title'
import "./Label.css";

const Label = ( { text }) => {

    // desestructurar fuera
    // const { text } = props

    return (
        <div className='title-container'>
            <label>{text}</label>
        </div>
    )
;
}

export default Label;