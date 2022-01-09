import React, { useState } from 'react'
import Title from './components/title/Title';
import Label from './components/label/Label';
import Input from "./components/input/Input";

import './Login.css'


function Login () {

    const [user, setUser] = useState(' ');
    const [password, setPassword] = useState(" ");
    const [passwordError, setPasswordError] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
     const [hasError, sethasError] = useState(false);


    function handleChange (name, value) {
        if (name === 'usuario') {
            setUser(value);
            console.log('Nombre de usuario agregado')
        } else {
            console.log("No es un texto de user");
            if (value.length < 6) {
                setPasswordError(true);
                console.log('Se activa el error')
            } else {
                setPasswordError(false);
                setPassword(value);
                console.log("Buena contrasena siga sigas");
            }
        }
    }

    function ifMatch (param) {
        if (param.user.length > 0 && param.password.length > 0) {
            if (param.user === 'Guillermo' && param.password === '123456') {
                const { user, password } = param;
                let ac = { user, password };
                let account = JSON.stringify(ac);
                localStorage.setItem('account', account);
                setIsLogin(true);
            } else {
                setIsLogin(false);
                sethasError(true);
            }
        } else {
            setIsLogin (false);
            sethasError(true);
        }
    }

    function handleSubmit () {
        let account = {user, password} 
        if (account) {
            console.log('account', account)
            ifMatch(account);
        }
    }

    return (
      <div className="login-container">
        {
        isLogin ? (
          <div>
              <h1>Bienvenido, { user }</h1>
              <p>Esta es la entrada de tu aplicacion</p>
          </div>
        ) : (
          <div className="login-content">
            <Title text="Bienvenido, esta es una aplicacion de Login con LocalStorage y Hooks. Puedes ingresar con los datos demo: Guillermo, 123456. Nos vemos dentro de la app." />
            {hasError && (
              <label className="label-error">
                Su usuario o contrasena no existe en nuestra plataforma. Por
                favor, revise los datos ingresados.
              </label>
            )}
            <Label text="Usuario" />
            <Input
              atributo={{
                id: "usuario",
                name: "usuario",
                type: "text",
                placeholder: "ingrese tu usuario",
              }}
              handleChange={handleChange}
            />
            <Label text="Contrasena" />
            <Input
              atributo={{
                id: "contrasena",
                name: "contrasena",
                type: "password",
                placeholder: "ingrese tu contrasena",
              }}
              handleChange={handleChange}
              param={passwordError}
            />
            {passwordError && (
              <label className="label-error">
                Contrasena invalida o incompleta
              </label>
            )}

            <div className="submit-button-container">
              <button onClick={handleSubmit}>Ingresar</button>
            </div>
          </div>
        )}
      </div>
    );
}

export default Login;