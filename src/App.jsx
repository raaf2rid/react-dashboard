import { useState } from "react";
import Home from "./Components/Home";
import Login from "./Components/Login";
import "./styles/index.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleClick() {
    setIsLoggedIn(true);
  }

  return (
    <div>{!isLoggedIn ? <Login handleClick={handleClick} /> : <Home />}</div>
  );
}

export default App;
