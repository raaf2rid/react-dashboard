import React from "react";
import "../../../styles/main_app/dashboard/small-boxes.css";

export default function SmallBoxes(props) {
  return (
    <div className="small-box">
      <div className={`img-div ${props.sign}`} style={props.style}>
        <img src={props.logo} alt="" />
      </div>
      <div className="text-div">
        <p>{props.title}</p>
        <p>{props.number}</p>
      </div>
    </div>
  );
}
