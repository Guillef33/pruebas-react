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
    <div  onClick={props.onClose}>
      <h2>Regalos:</h2>
      <form onSubmit={handleSubmit}>
        <div className="addRegalo">
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