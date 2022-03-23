import React from "react";
import "./Join.css"

import ImgJoin from "../../img/bloco_final_image.svg"

function Join(props) {
    
    return (
        <section id="join">
            <div className="container">
                <div className="cell-join">
                    <form className="form-join">
                    <h1>Join our membership to get special offer</h1>
                        <input type="email" name="email" id="email" placeholder="Enter your email address" />
                        <button>Join</button>
                    </form>
                </div>
                <div className="cell-join">
                    <img src={ImgJoin} className="ImgJoin" id="illustration-little" alt="" />
                </div>
            </div>
            <img src={ImgJoin} className="ImgJoin" id="illustration-great" alt="" />
        </section>
    )
}

export default Join