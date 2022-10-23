import { useEffect, useContext } from "react";
import Home from "./Components/Home";
import Login from "./Components/Authentication/Login";
import "./styles/index.css";
import SignUp from "./Components/Authentication/SignUp";
import { UserContext } from "../src/Contexts/UserContext";


function App() {

  const { user } = useContext(UserContext)

  console.log(user)

  // return (
  //   <div>{!isLoggedIn ? <Login handleClick={handleClick} /> : <Home />}</div>
  // );

    return (
      <div>
        {user ? <Login/> : <SignUp/>}
      </div>
    )
}

export default App;
