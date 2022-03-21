import React from "react";
import "./CardRevenue.css"

function CardRevenue(props) {

    let path = `../src/img/${props.img}.svg`
    
    return (
       <div className="card-revenue">
           <img src={path} alt="" />
           <div className="content-revenue">
              <h2>{props.title}</h2>
              <a className="but-revenue" href={props.link}>See Recipe</a>
           </div>
       </div>
    )
}

export default CardRevenue