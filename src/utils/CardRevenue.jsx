import React from "react";
import "./CardRevenue.css"

function CardRevenue(props) {
    return (
       <div className="card-revenue">
           <img src={props.img} alt={props.title} />
           <div className="content-revenue">
              <h2>{props.title}</h2>
              <a className="but-revenue" href={props.link}>See Recipe</a>
           </div>
       </div>
    )
}

export default CardRevenue