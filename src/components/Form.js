import React, { useState }  from 'react';
import "../form.css";

import { useForm } from "../hooks/useForm";

const initialForm = {
    name:"",
    email: "",
    subject: "",
    comments: ""
};
const validationForm = (form) => {
    let errors = {};

    if (!form.name.trim()) {
        errors.name = "El campo 'Nombre' es requerido";
    }

        if (!form.email.trim()) {
          errors.email = "El campo 'Email' es requerido";
        }

    return errors;
};

let styles = {
    fontWeight: 'bold',
    color: '#FF0000'
}


const Form = () => {
    const {form,errors,loading,response, handleChange,handleBlur,handleSubmit,
    } = useForm(initialForm, validationForm)

    return (
      <>
        <h2>Dejanos tus datos</h2>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <label>Nombre</label>
            <input
              type="text"
              name="nombre"
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Escribe tu nombre"
              value={form.name}
              required
            />
            {/* {errors.name && <span style={styles}>{errors.name}</span>}  */}
            {/* {errors.name && <p>{errors.name}</p>} */}
            <label>Apellido</label>
            <input
              type="text"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Escribe tu email"
              value={form.email}
              required
            />
            {/* {errors.email && <span>{errors.email}</span>}  */}

            <label>Comentarios</label>
            <textarea
              name="comments"
              cols="50"
              rows="5"
              placeholder="Escribe los comentarios"
              onChange={handleChange}
              onBlur={handleBlur}
              value={form.comments}
              required
            ></textarea>

            <input type="submit" value="Enviar" />
          </form>
        </div>
      </>
    );



}


export default Form;

// function handleSubmit (e) {
    // e.preventDefault();
    // console.log('prevenido!')
    // }
