import React from "react";


function Count() {
  const [counter, setCounter] = React.useState(60);

  // Third Attempts
  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <div className="App">
      <h2>Hola como estas </h2>
      <div>{counter}</div>
    </div>
  );
}

export default Count;

