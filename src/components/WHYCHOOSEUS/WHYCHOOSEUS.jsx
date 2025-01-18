

import React from "react";
import "./WHYCHOOSEUS.scss"; // Create a CSS file for styling
import premiunquality from "../../Pictures/premium-quality.png"
import customerfocus from "../../Pictures/customer-centricity.png"
import ethics from "../../Pictures/integrity.png"
import global from "../../Pictures/global-navigation.png"

const WHYCHOOSEUS = () => {
    const cardData = [
        {
          title: "Premium Quality",
          image:premiunquality,
          content: "We take pride in offering carefully selected, long-grain aromatic basmati rice renowned for its rich flavor, exquisite aroma, and unmatched quality. Each grain is sourced to meet rigorous international standards, ensuring an authentic and superior culinary experience."
        },
        {
          title: "Global Accessibility",
          image:global,
          content: "Our robust logistics network and streamlined operations enable us to handle bulk orders efficiently, ensuring consistent and reliable delivery to clients worldwide. No matter your location, we make premium basmati rice accessible with ease."
        },
        {
          title: "Sustainability & Ethics",
          image:ethics,
          content: "At the heart of our business lies a commitment to ethical sourcing and eco-friendly practices. By working closely with farmers, we promote sustainable agriculture, empower local communities, and contribute to environmental conservation."
        },
        {
          title: "Customer-First Focus",
          image:customerfocus,
          content: "We believe in building long-lasting relationships through transparency and trust. Our dedicated team works hand-in-hand with clients to ensure seamless transactions, prompt responses, and timely shipments, making your experience with us stress-free and reliable."
        }
      ];



  return (
    <>
        <section className="p-md-5 d-flex flex-column justify-content-center align-items-center mb-5 mt-3">
            <h1 className="headings text-center">Why choose Us</h1>
            <p className=" text-center w-50">Choose us for authentic basmati rice delivered with a commitment to quality, sustainability, and excellence. Partner with us for a dependable supply chain that adds value to your business.</p>
            <div className="content d-flex w-100 m-5 px-md-5 row mb-5">
            {cardData.map((feature, index) => (
    <div className={`p-0 col-md-3 mb-5 ${index % 2 === 0 ? 'mt-md-5 pt-md-3' : ''}`}>
        <div className="featurecard m-4">
            <div className="featureicon p-3">
                <img src={feature.image} alt="" className=""/>
            </div>
            <div className="featuredescript p-3">
                <span className="title">
                    {feature.title}
                </span>
            </div>
        </div>
    </div>
))}

                
            </div>

        </section>
    </>
  )
};

export default WHYCHOOSEUS;
