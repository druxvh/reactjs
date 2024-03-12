import { useContext } from "react";

import "./App.css";
import Counter from "../components/Counter";
import { CounterContext } from "./context/CounterContext";

function App() {
  const counterState = useContext(CounterContext);
  return (
    <>
      <h1>Count : {counterState.count}</h1>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </>
  );
}

export default App;
