import React, { Component } from "react";
import Axios from "axios";
import axios from "axios";

class User extends Component {
  constructor() {
    super();
    this.state = {
      usuarios: [],
    };
  }

  componentDidMount() {

    const respuesta = axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(respuesta)

    this.setState({
      usuarios: [
        {
          nombre: "Rodolfo",
          correo: "rodolfo@gmail.com",
          enlace: "rodolfo.com",
        },
        {
          nombre: "Platzi",
          correo: "platzi@platzi.com",
          enlace: "platzi.com",
        },
      ],
    });
  }

  ponerFilas = () => [
    this.state.usuarios.map((usuario) => (
      <tr>
        <td> {usuario.nombre}</td>
        <td> {usuario.correo}</td>
        <td> {usuario.enlace}</td>
      </tr>
    )),
  ];

  render() {
    return (
      <>
        <div className="margen">
          <table className="tabla">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Enlace</th>
              </tr>
            </thead>
            <tbody>{this.ponerFilas()}</tbody>
          </table>
        </div>
      </>
    );
  }
}

export default User;
