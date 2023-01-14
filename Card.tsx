import React from "react";
import Pages from "./Pages"

function Card(props) {
 return(
 <div className="card">
    <div className="top">
    <p className="vue">{props.id}</p>
      
      <h2 className="name">{props.name}</h2>
      <img 
      className="circle-img"
      scr={props.img}
      
      alt="family-img"/>

    </div>

    <div className="bottom">
    
     <Pages
     details={props.tel}
     />
     <Pages
     details={props.email}
     />

    </div>
  </div>
 )

}

export default Card;