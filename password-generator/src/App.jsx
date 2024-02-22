import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  const passwordGenerate = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "{}/()*&^%$#@!";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1); // Generates a random number from the strings length
      pass += str.charAt(char); // random character generates on each iteration
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerate();
  }, [length, numberAllowed, charAllowed, passwordGenerate]);

  return (
    <>
      <div className="w-full max-w-md mx-auto rounded-lg px-3 py-4 my-8 text-orange-500 bg-gray-800 ">
        <h1 className=" text-white text-center">Password Generator</h1>
        <div className="flex rounded-lg overflow-hidden my-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            ref={passwordRef}
            readOnly
          />
          <button
            onClick={copyToClipboard}
            className="outline-none bg-blue-500 text-white px-3 py-1 shrink-0"
          >
            Copy
          </button>
        </div>
        <div className="flex mx-1 items-center">
          <div className="flex text-sm gap-x-2">
            <input
              type="range"
              min={8}
              max={20}
              value={length}
              className=" cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex text-sm gap-x-2">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex text-sm gap-x-2">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charInput"> Special Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
