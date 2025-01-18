import React from "react";
import './BannerNew.scss';
import videoSrc from "../../images/watermarked_preview.mp4";




const Bannernew = () => {
    return(
        <>
        <div className="bannersection w-100 ">
            <video autoPlay muted loop className="w-100 p-0">
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
            <div className="row m-0">
                <div className="col-md-1 col-0">

                </div>
                <div className="col-md-6 m-md-5 p-md-5 col-12">
                    <div className="bannercard card  p-3">
                        <h1 className="headings">PREMIUM BASMATI RICE EXPORTS</h1>
                        
                         {/* <button className="explorebtn m-auto">Explore Now</button> */}
                    </div>

                </div>
            </div>
        </div>
        </>
    )
}

export default Bannernew