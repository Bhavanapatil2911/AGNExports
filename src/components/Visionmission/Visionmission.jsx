import React from "react";
import "./Visionmission.css"

const Visionmission =()=>{
    return(
        <>
        <div className="row justify-content-center p-5 visionmission">
            <div className="col-5 vision d-flex justify-content-end p-5">
                <div className="">
                    <h3  className="blockheader">Our Vision</h3>
                    <span>Global Leadership in Premium Basmati Rice</span>
                    <p>To be recognized globally as the trusted leader in Basmati rice exports, delivering excellence in every grain. 
                    We aim to showcase India’s agricultural legacy while building long-lasting partnerships rooted in trust, reliability, and exceptional service. 
                    Our vision is to inspire sustainable practices, promote global trade, and bring the finest quality rice to tables around the world.</p>

                </div>

            </div>
            <div className="col-5 mission p-5">
                <div className="">
                    <h3  className="blockheader">Our Mission</h3>
                    <span>Preserving Tradition, Promoting Innovation</span>
                <p>
                    At AGN Exports, our mission is to deliver the highest-quality Basmati rice from India to the world. 
                    We uphold the authenticity and rich heritage of this iconic grain while embracing modern, sustainable sourcing 
                    practices. Our goal is to foster long-term relationships with our clients, supporting farmers and the environment 
                    while meeting the diverse needs of global markets.</p>

                </div>
            </div>
        </div>
        </>
    )
}

export default Visionmission