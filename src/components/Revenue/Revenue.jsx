import React from "react";
import "./Revenue.css"

// Utils
import CardRevenue from '../../utils/CardRevenue'

function Revenue(props) {
    
    return (
        <section id="revenue">
            <div className="container">
                <h1>Our Best Recipes</h1>
                <p>Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.</p>

                <div className="grid-revenue">
                    <CardRevenue img="comida_primeira" title="Broccoli Salad with Bacon" link="#"></CardRevenue>
                    <CardRevenue img="comida_2" title="Classic Beef Burgers" link="#"></CardRevenue>
                    <CardRevenue img="comida_3" title="Classic Potato Salad" link="#"></CardRevenue>
                    <CardRevenue img="comida_4" title="Cherry Cobbler on the Grill" link="#"></CardRevenue>
                </div>
            </div>
        </section>
    )
}

export default Revenue