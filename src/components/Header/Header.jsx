import React from "react";
import "./Header.css"

function Header(props) {

    function Menu() {
        let nav = document.getElementById('menu')
        let btnMenu = document.querySelector('.toggle')
        nav.classList.toggle('active')
        btnMenu.classList.toggle('active')
    }
    
    return (
        <header>
            <div className="container">
                <h1>Healthy Food</h1>
                <nav id="menu">
                    <ul>
                        <li><a href="#">Healthy  recipes</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Join</a></li>
                        <li><a href="#" className="but">register</a></li>
                    </ul>
                </nav>
                <button className="toggle" onClick={() => { Menu() }}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    )
}

export default Header