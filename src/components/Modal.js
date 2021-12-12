import React from 'react';
import Counter from './Counter';

function Modal(
  props,
  handleSubmit,
  handleChange,
  regalo,
  cantidad,
  setCantidad,
  targetRegalo,
  display,
  diplayModal,
  notDisplayModal,
  show
) {

  if (!props.show) {
    return null
  }

  return (
    <div onClick={props.onClose}>
      <h2>Regalos:</h2>
      <form onSubmit={handleSubmit}>
        <div className="addRegaloEnModal">
          <input
            type="text"
            placeholder="Agrega regalo..."
            // value={regalo.addGift}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Agrega imagen..."
            // value={regalo.url}
            className="imagen-input"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="A quien se lo vas a regalar"
            // value={regalo.dedicatoria}
            onChange={handleChange}
          />
          <Counter
            cantidad={cantidad}
            setCantidad={setCantidad} // aca estamos pasando la prop hacia el componente counter
          />
          <input type="submit" value="Agregar" />
          <button onClick={props.onClose}>x</button>
        </div>
      </form>
    </div>
  );
}

export default Modal;

  // const displayModal = () => {
  //   // console.log('clic')
  //   // let modal = document.getElementById('modal');
  //   // modal.style.display = "block";
  //   setShow(true);
  // }
  
  // const notDisplayModal = () => {
  //   // document.getElementById("modal").style.display = "none";
  //   setShow(false);
  // }

        // <Modal
        //   display={false}
        //   // handleChange={handleChange}
        //   // cantidad={cantidad}
        //   // targetRegalo={regalo.addGift}
        //   // handleSubmit={handleSubmit}
        //   // isOpen={status}
        //   // text={text}
        //   // handleChanges={handleChanges}
        //   // handleClick={this.handleClick}
        // />;