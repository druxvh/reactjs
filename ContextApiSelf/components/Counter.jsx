import React, { useContext } from "react";
import { CounterContext } from "../src/context/CounterContext";
function Counter() {
  const incVal = () => {
    counterState.setCount(counterState.count + 1);
  };
  const decVal = () => {
    counterState.setCount(counterState.count - 1);
  };
  const counterState = useContext(CounterContext);
  return (
    <div>
      <button onClick={incVal}>Increment</button>
      <button onClick={decVal}>Decrement</button>
    </div>
  );
}

export default Counter;
