import React from "react";
import './BannerNew.scss';
import videoSrc from "../../images/newbannervideo.mp4";




const Bannernew = () => {
    return(
        <>
        <div className="bannersection">
            <video autoPlay muted loop className="w-100 p-0">
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
            <div className="row m-0">
                <div className="col-md-1">

                </div>
                <div className="col-4 m-5 p-5">
                    <div className="card p-5">
                        <h1>PREMIUM BASMATI RICE EXPORTS</h1>
                        <p>Whether you're a wholesaler, retailer, or food enthusiast, our export-quality basmati rice is the ideal choice.
                             Sourced directly from the fertile fields of India, our rice ensures unmatched aroma, length, and taste 
                             in every grain. Partner with us for reliable global supply and exceptional quality.
                         </p>
                         <button className="explorebtn">Explore Now</button>
                    </div>

                </div>
            </div>
        </div>
        </>
    )
}

export default Bannernew