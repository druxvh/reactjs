import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("gray");

  return (
    <div
      className="w-full h-screen flex justify-center items-center"
      style={{ backgroundColor: color }}
    >
      {" "}
      <p className=" font-semibold text-2xl text-gray-300">
        Click any button below to change the background color of the screen
      </p>
      <div className="w-fit bg-gray-300 py-3 px-3 my-3 rounded-full fixed bottom-1">
        <button
          onClick={() => {
            setColor("red");
          }}
          className="px-5 py-2 mx-3 rounded-full text-white"
          style={{ backgroundColor: "red" }}
        >
          Red
        </button>
        <button
          onClick={() => {
            setColor("green");
          }}
          className="px-5 py-2 mx-3 rounded-full text-white"
          style={{ backgroundColor: "green" }}
        >
          Green
        </button>
        <button
          onClick={() => {
            setColor("yellow");
          }}
          className="px-5 py-2 mx-3 rounded-full text-white"
          style={{ backgroundColor: "yellow" }}
        >
          Yellow
        </button>
        <button
          onClick={() => {
            setColor("pink");
          }}
          className="px-5 py-2 mx-3 rounded-full text-white"
          style={{ backgroundColor: "pink" }}
        >
          Pink
        </button>
        <button
          onClick={() => {
            setColor("cyan");
          }}
          className="px-5 py-2 mx-3 rounded-full text-white"
          style={{ backgroundColor: "cyan" }}
        >
          Cyan
        </button>
        <button
          onClick={() => {
            setColor("blue");
          }}
          className="px-5 py-2 mx-3 rounded-full text-white"
          style={{ backgroundColor: "blue" }}
        >
          Blue
        </button>
      </div>
    </div>
  );
}

export default App;
