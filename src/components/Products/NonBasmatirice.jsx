import React, { useEffect, useState } from "react";
import "./BasmatiRicePage.scss";


const NonBasmatirice = () => {
    const riceVarieties = [
        {
            ricetype: "Sugandha Rice",
            riceimage: "/images/1401 Basmati rice.webp"
        },
        {
            ricetype: "Sharbati Rice",
            riceimage: "/images/1401 Basmati rice.webp"
        },
        {
            ricetype: "PR 11 Rice",
            riceimage: "/images/1401 Basmati rice.webp"
        },
        {
            ricetype: "PR 14 Rice",
            riceimage: "/images/1401 Basmati rice.webp"
        },
        {
            ricetype: "Parmal Rice",
            riceimage: "/images/1401 Basmati rice.webp"
        },
        {
            ricetype: "Sona Masoori Rice",
            riceimage: "/images/1401 Basmati rice.webp"
        }
    ];
        const [inView, setInView] = useState([]);
    
        useEffect(() => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.id;
                        setInView((prev) => [...prev, id]);
                    }
                });
            }, {
                threshold: 0.5,  // Trigger when 50% of the element is visible
            });
    
            const elements = document.querySelectorAll(".ricecard");
            elements.forEach((element) => observer.observe(element));
    
            return () => observer.disconnect();
        }, []);
    
  return (
    <>
      <div className="basmati-rice-page">
        <h2>Indian Original Non-Basmati Rice</h2>
        <p>
          We offer a comprehensive range of high-quality non-Basmati rice
          varieties tailored to meet the specific needs of our clients. Our
          non-Basmati rice selection is known for its exceptional taste and
          versatility in cooking, making it a popular choice in kitchens around
          the world.
        </p>
        <p>
          Our non-Basmati rice includes varieties in different shapes and sizes,
          ranging from long, slender grains to short, round grains, perfect for
          a wide array of culinary preferences.
        </p>
        <div className="ricevarities row mt-5">
          {riceVarieties.map((rice, index) => (
            <div className="col-md-4 my-3" key={index}>
              <div
                id={`ricecard-${index}`}
                className={`ricecard mb-4 p-3 d-flex flex-column gap-3 ${
                  inView.includes(`ricecard-${index}`)
                    ? "animate__animated animate__rotateIn"
                    : ""
                }`}
              >
                <div className="pointer"></div>
                <h4 className="ricetype m-0 p-0">{rice.ricetype}</h4>
                <img src={rice.riceimage} alt={rice.ricetype} />
                <button className="knowbtn">Know More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NonBasmatirice