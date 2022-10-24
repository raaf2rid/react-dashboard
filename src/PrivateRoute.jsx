import { useContext} from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "./Contexts/UserContext";




export default function PrivateRoute({children}){

  const {user} = useContext(UserContext)

  console.log(user)

  return user ? children : <Navigate to="/login" />
}