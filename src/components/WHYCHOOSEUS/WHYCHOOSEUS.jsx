import React from "react";
import "./WHYCHOOSEUS.scss"; // Create a CSS file for styling
// import premiunquality from "../../Pictures/premium-quality.png";
// import customerfocus from "../../Pictures/customer-centricity.png";
// import ethics from "../../Pictures/integrity.png";
// import global from "../../Pictures/global-navigation.png";
import global from "../../Pictures/No internet Icons.svg";
import premiunquality from "../../Pictures/Rewards Icons.svg"
import customerfocus from "../../Pictures/Testimonial Icons.svg";
import ethics from "../../Pictures/Sustainability Icons.svg";



const WHYCHOOSEUS = () => {
  const cardData = [
    {
      title: "Premium Quality",
      image: premiunquality,
      color: "#6892d7",
      content:
            "Offering premium long-grain basmati rice with rich flavor, exquisite aroma, and top quality, sourced to meet global standards for an authentic taste."    
    },  
    {
      title: "Global Accessibility",
      image: global,
      color: "#f15048",
      content:
        "Our strong logistics ensure efficient bulk order handling and reliable delivery of premium basmati rice globally.",
    },
    {
      title: "Sustainability & Ethics",
      image: ethics,
      color: "#5cb85c",
      content:
        "We're committed to ethical sourcing, eco-friendly practices, supporting farmers, sustainability, and conserving nature.",
    },
    {
      title: "Customer-First Focus",
      image: customerfocus,
      color: "#fb9056",
      content:
        "We foster trust and transparency, ensuring seamless transactions, prompt support, and timely shipments for a hassle-free experience.",
    },
  ];

  return (
    <>
      <section className="p-md-5 d-flex flex-column justify-content-center align-items-center mb-5 mt-3">
        <h1 className="headings text-center">Why choose Us</h1>
        <p className=" text-center w-50">
          Choose us for authentic basmati rice delivered with a commitment to
          quality, sustainability, and excellence. Partner with us for a
          dependable supply chain that adds value to your business.
        </p>
        <div className="content d-flex w-100 m-5 px-md-5 row mb-5">
          {cardData.map((feature, index) => (
            <div
              className={`p-0 col-md-3 mb-5 ${
                index % 2 === 0 ? "mt-md-5 pt-md-3" : ""
              }`}
            >
              <div className="featurecard m-4">
                <div className="featureicon p-3 ps-5" style={{ backgroundColor: feature.color }}>
                  <img src={feature.image} alt="" className="" />
                </div>
                <div className="featuredescript p-3 text-center">
                  <span className="title ">{feature.title}</span>
                  <p className="pt-3">{feature.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default WHYCHOOSEUS;
