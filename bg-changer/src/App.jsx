import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="w-full bg-gray-300 py-3 px-3 mx-9 rounded-lg fixed bottom-1">
      <button className=" bg-red-500 px-5 py-2 mx-3 rounded-full text-white">
        Red
      </button>
      <button className=" bg-green-500 px-5 py-2 mx-3 rounded-full text-white">
        green
      </button>
      <button className=" bg-yellow-500 px-5 py-2 mx-3 rounded-full text-white">
        yellow
      </button>
    </div>
  );
}

export default App;
