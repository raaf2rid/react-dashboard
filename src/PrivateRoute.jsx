import { useContext, useState} from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../src/Contexts/UserContext";

export default function PrivateRoute({children}){

  const {user} = useContext(UserContext)

  const [loggedInUser, setLoggedInUser] = useState()

  return user ? children : <Navigate to="/login" />
}