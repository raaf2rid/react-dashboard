import React, { useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile} from 'firebase/auth'
import app from "../firebase.config"

const UserContext = React.createContext()

const auth = getAuth(app)

function UserContextProvider ({children}){

  const [user, setUser] = useState({})


  function createUser(email, password){
    return createUserWithEmailAndPassword(auth, email, password)
  }

  function signIn(email, password){
    return signInWithEmailAndPassword(auth, email, password)
  }

  function addDisplayName(firstName,lastName){
    updateProfile(auth.currentUser,{
      displayName: firstName + " " + lastName
    })
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser=>{
      setUser(currentUser)
      console.log('auth state changed', currentUser)
    })

    return () => {
      unsubscribe()
    }
  },[])

  const authInfo = {user, createUser, signIn, addDisplayName}

  return(
    <UserContext.Provider value={authInfo}>
      {children}
    </UserContext.Provider>
  )
}

export {UserContextProvider, UserContext}