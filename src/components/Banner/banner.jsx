import React from "react";
import './banner.css';
import { Link } from "react-router-dom";
import videoSrc from "../../images/184811-874264378_small.mp4";


const Banner = () => {
  return (
    <section className="banner">
      <div className="zoom-out-background"></div>
      <div className="banner-content d-flex flex-column align-items-center">
        <Link className="nav-link d-flex justify-content-center" to="/products">
          <button className="explore-btn rounded-pill">Explore</button>
        </Link>
      </div>
    </section>
  );
};

export default Banner;


// import React from "react";
// import './banner.css';
// import { Link } from "react-router-dom";
// import videoSrc from "../../images/184811-874264378_small.mp4"; // Ensure the path is correct

// const Banner = () => {
//   return (
//     <section className="banner">
//       {/* Video element with autoplay, loop, and muted attributes */}
//       <video className="banner-video" autoPlay loop muted>
//         <source src={videoSrc} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
      
//       <div className="banner-content d-flex flex-column align-items-center">
//         <Link className="nav-link" to="/products">
//           <button className="explore-btn rounded-pill">Explore</button>
//         </Link>
//       </div>
//     </section>
//   );
// };

// export default Banner;

