import { useEffect, useContext } from "react";
import Home from "./Components/Home";
import Login from "./Components/Login";
import "./styles/index.css";
import {LoginContext} from "./loginContext"

function App() {

  const {isLoggedIn, handleClick} = useContext(LoginContext)

  useEffect(() => {
    localStorage.setItem("loginData", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  return (
    <div>{!isLoggedIn ? <Login handleClick={handleClick} /> : <Home />}</div>
  );
}

export default App;
