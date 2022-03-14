import React from "react"
import "./Card.css"


function Card(props){
  return(
    <div className="card">
      <div className="card-content">
        <h1>{props.Header}</h1>
        <p>{props.Text}</p>
      </div>
      <div className="icon-holder"><img className="icon" src={props.Icon}/></div>
    </div>
  );
}

export default Card;