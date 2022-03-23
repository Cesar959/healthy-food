import React, { useState, useRef } from "react";
import "./Blog.css"

import CardBlog from "../../utils/CardBlog"


function Blog(props) {

    const carrosel = useRef(null)

    function next(e){
        console.log(carrosel.current.scrollLeft += carrosel.current.offsetWidth)
    }

    function back(e){
        console.log(carrosel.current.scrollLeft -= carrosel.current.offsetWidth)
    }
    
    return (
        <section id="blog">
            <div className="container">
                <h1>Read Our Blog</h1>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <div className="postagens-blog" ref={carrosel}>
                    <CardBlog img="bloco_image_1" title="Quick-start guide to nuts and seeds" avatar="avatar-1.png" author="Kevin Ibrahim"></CardBlog>
                    <CardBlog img="bloco_image_2" title="Nutrition: Tips for Improving Your Health" avatar="avatar-2.png" author="Mike Jackson"></CardBlog>
                    <CardBlog img="bloco_image_3" title="The top 10 benefits of eating healthy" avatar="avatar-3.png" author="Bryan McGregor"></CardBlog>
                    <CardBlog img="bloco_image_4" title="Top 10 risks of unhealthy eating" avatar="avatar-4.png" author="Kevin Ibrahim"></CardBlog>
                    <CardBlog img="bloco_image_1" title="Quick-start guide to nuts and seeds" avatar="avatar-5.png" author="Kevin Ibrahim"></CardBlog>
                    <CardBlog img="bloco_image_2" title="Nutrition: Tips for Improving Your Health" avatar="avatar-6.png" author="Kevin Ibrahim"></CardBlog>
                </div>
                <button className="arrow-carrosel" id="next" onClick={()=>{next()}}><img src="../../src/img/seta.png" alt="Next" /></button>
                <button className="arrow-carrosel " id="back" onClick={()=>{back()}}><img src="../../src/img/seta.png" alt="Next" /></button>
            </div>
            <div className="effect"></div>
        </section>
    )
}

export default Blog