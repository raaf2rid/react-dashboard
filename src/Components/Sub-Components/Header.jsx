import React, { useContext } from "react";
import UserImg from "../../assets/user-img.svg"
import { UserContext } from "../../Contexts/UserContext";




export default function Header({title}) {

  const {user} = useContext(UserContext)

  return (
    <div className="header">
      <h1>{title}</h1>
      <div className="user">
        <img src={UserImg} alt="" />
        <div>
          <p>Hello,</p>
          <p>{user?.displayName && user.displayName}</p>
        </div>
      </div>
    </div>
  );
}
