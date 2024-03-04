import { useState } from "react";

import "./App.css";
import UserContextProvider from "./context/UserContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  return (
    <UserContextProvider>
      <h1>hey</h1>
      <Login></Login>
      <Profile></Profile>
    </UserContextProvider>
  );
}

export default App;
