import { useState, useEffect } from "react";
import Home from "./Components/Home";
import Login from "./Components/Login";
import "./styles/index.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem("loginData")) || false
  );

  function handleClick() {
    setIsLoggedIn(true);
  }

  useEffect(() => {
    localStorage.setItem("loginData", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  return (
    <div>{!isLoggedIn ? <Login handleClick={handleClick} /> : <Home />}</div>
  );
}

export default App;
