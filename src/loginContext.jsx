import React, {useState, useEffect} from "react";
const LoginContext = React.createContext();

function LoginContextProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem("loginData")) || false
  );

  useEffect(() => {
    localStorage.setItem("loginData", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  function handleClick() {
    setIsLoggedIn((prev) => !prev);
  }

  return(
    <LoginContext.Provider value= {{isLoggedIn, handleClick}}>
      {props.children}
    </LoginContext.Provider>
  )

}


export {LoginContextProvider, LoginContext}