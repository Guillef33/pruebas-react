import React, {useState} from 'react';


const useCounter = () => {
  const [counter, setCounter] = useState(0);

  const increase = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);
  const reset = () => setCounter(0);

  return {
    counter,
    increase,
    decrement,
    reset,
  };
};
function Counter () {

const {counter, increase, decrement, reset} = useCounter()
return (
  <div className='counter-wrapper'>
    <button onClick={increase}>+</button>
    <div>{counter}</div>
    <button onClick={decrement}>-</button>
    <button onClick={reset}>zero</button>
  </div>
);

}

export default Counter;