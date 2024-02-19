import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);
  function addVal() {
    counter += 1;
    setCounter(counter);
  }
  function subVal() {
    counter -= 1;
    setCounter(counter);
  }
  function resetVal() {
    counter = 0;
    setCounter(counter);
  }
  if (counter < 0) {
    counter = 0;
  }
  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={addVal}>Add</button>
      <button onClick={subVal}>Subtract</button>
      <button onClick={resetVal}>Reset</button>
    </>
  );
}

export default App;
