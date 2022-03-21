import React from "react";
import "./Service.css"

// Img
import IllustrationService from "../../img/bloco_services.svg"


function Service(props) {
    
    return (
        <section id="service">
            <img src={IllustrationService} />

            <div className="service-content">
                <h1>The best services ready To serve you</h1>

                <p className="text-visible">Far far away, behind the word mountains, far from
                the countries Vokalia and Consonantia, there live the
                blind texts.</p>

                <p className="text-visible">Separated they live in Bookmarksgrove right at the
                coast of the Semantics, a large language ocean.</p>

                <p className="text-visible">A small river named Duden flows by their place and
                supplies it with the necessary regelialia.</p>

                <p className="text-hidden">Far far away, behind the word mountains, far from
                the countries Vokalia and Consonantia, there live the
                blind texts. Separated they live in Bookmarksgrove right at the
                coast of the Semantics, a large language ocean. A small river named Duden flows by their place and
                supplies it with the necessary regelialia.</p>

                <button className="but-service">Know More</button>
            </div>

        </section>
    )
}

export default Service