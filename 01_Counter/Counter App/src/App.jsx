import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCount] = useState(0);
  const addVal = () => {
    counter += 1;
    setCount(counter);
  };
  const subVal = () => {
    counter -= 1;
    setCount(counter);
  };
  const resetBtn = () => {
    counter = 0;
    setCount(counter);
  };
  return (
    <>
      <h1>Counter App</h1>
      <p>Count: {counter}</p>
      <button onClick={addVal}>Add</button>
      <button onClick={subVal}>Sub</button>
      <button onClick={resetBtn}>Reset</button>
    </>
  );
}

export default App;
