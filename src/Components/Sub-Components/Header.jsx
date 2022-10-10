import React from "react";
import UserImg from "../../assets/user-img.svg";

export default function Header(props) {
  return (
    <div className="header">
      <h1>{props.title}</h1>
      <div className="user">
        <img src={UserImg} alt="" />
        <div>
          <p>Hello,</p>
          <p>Al Pacino</p>
        </div>
      </div>
    </div>
  );
}
