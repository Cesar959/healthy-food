import React from "react";
import "./CardBlog.css"

function CardBlog(props) {
    
    return (
       <div className="card-blog">
           <img src={props.img} alt={props.title}/>
           <div className="content-blog">
              <h2>{props.title}</h2>
              <div className="content-author">
                <img src={props.avatar} alt={props.title-avatar}/>
                <h3>{props.author}</h3>
              </div>
           </div>
       </div>
    )
}

export default CardBlog