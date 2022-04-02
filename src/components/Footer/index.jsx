import React from "react";
import "./Footer.css"

function Rodape(props) {
    
    return (
      <footer>
          <div className="container">
            <h2>© Copyrights 2019 Stack. All Rights Reserved.</h2>
            <div className="term">
                <a>Privacy Policy</a>
                <a>Terms and Conditions</a>
            </div>
          </div>
      </footer>
    )
}

export default Rodape