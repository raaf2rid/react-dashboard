import React, { useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'
import app from "../firebase.config"

const UserContext = React.createContext()

const auth = getAuth(app)

function UserContextProvider ({children}){

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("userData")))

  console.log(user)

  function createUser(email, password){
    return createUserWithEmailAndPassword(auth, email, password)
  }

  function logIn(email, password){
    return signInWithEmailAndPassword(auth, email, password)
  }

  function logOut(){
    return signOut(auth)
    .then(()=>{
      console.log("Sign out successful")
    })
    .catch((e)=>{
      console.log(e)
    })
  }

  function addDisplayName(firstName,lastName){
    updateProfile(auth.currentUser,{
      displayName: firstName + " " + lastName
    })
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser=>{
      setUser(currentUser)
      localStorage.setItem("userData", JSON.stringify(currentUser))
      console.log('auth state changed', currentUser)
    })

    return () =>  unsubscribe()
    
  },[])

  const authInfo = {user, createUser, logIn, addDisplayName, logOut}

  return(
    <UserContext.Provider value={authInfo}>
      {children}
    </UserContext.Provider>
  )
}

export {UserContextProvider, UserContext}