import React, { useState } from "react";

function Counter({ cantidad, setCantidad }) { // aca viene la prop de List por parametro, la variable y el setter
  const decrement = () => {
    setCantidad(cantidad - 1)
  }
  
  const increase = () => {
    setCantidad(cantidad + 1)
  }

  return (
    <div className="counter-wrapper">
      <button type="button" onClick={decrement} className="button-counter">-</button>
      <div>{cantidad}</div> {/* aca mostramos el valor actual de cantidad */} 
      <button type="button" onClick={increase} className="button-counter">+</button>
    </div>
  );
}


export default Counter;
