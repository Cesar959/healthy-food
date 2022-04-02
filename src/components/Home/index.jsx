import React from "react";
import "./Home.css"

// IMG
import Illustration from "../../img/Illustration.svg"
import Lupa from "../../img/lupa.png"

function Home(props) {
    
    return (
        <section id="home" >
            { props.children}
            <div className="cell-total container">
                <div className="cell-quite">
                    <div>
                        <h1>Ready for Trying a new recipe?</h1>
                        <div className="cell-field">
                            <input type="search" id="search" placeholder="Search healthy recipes"/>
                            <button><img src={Lupa} alt="Lupa" /></button>
                        </div>
                    </div>
                </div>
                <div className="cell-quite">
                    {/* Coluna falsa */}
                </div>
            </div>
            <img id="illustration-home" src={Illustration} alt="Ilustração" />
        </section>
    )
}

export default Home