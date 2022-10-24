import React from "react";
import UserImg from "../../assets/user-img.svg";
import { getAuth } from "firebase/auth";




export default function Header({title}) {

  const auth = getAuth();


  return (
    <div className="header">
      <h1>{title}</h1>
      <div className="user">
        <img src={UserImg} alt="" />
        <div>
          <p>Hello,</p>
          <p>{auth.currentUser?.displayName && auth.currentUser.displayName}</p>
        </div>
      </div>
    </div>
  );
}
