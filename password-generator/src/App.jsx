import { useState, useCallback } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordGenerate = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "{}/()*&^%$#@!";

    // Array.from(length).forEach((el) => {
    //   el = Math.floor(Math.random() * length + 1);
    //   pass += str.charAt(el);
    // });

    for (let index = 1; index < length; index++) {
      let char = Math.floor(Math.random() * str.length + 1); // Generates a random number from the strings length
      pass += str.charAt(char); // random character generates on each iteration
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  return (
    <>
      <div className="w-full max-w-md mx-auto rounded-lg px-4 my-8 text-orange-500 bg-gray-800 ">
        <h1 className=" text-white text-center">Password Generator</h1>
        <div className="flex rounded-lg overflow-hidden my-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
          />
        </div>
      </div>
    </>
  );
}

export default App;
