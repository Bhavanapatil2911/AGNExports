import React from "react";
import './whychooseus.css';
import videoSrc from "../../images/newbannervideo.mp4";


const WhyChooseUs = () => {
  const cardData = [
    {
      title: "Premium Quality",
      content: "We take pride in offering carefully selected, long-grain aromatic basmati rice renowned for its rich flavor, exquisite aroma, and unmatched quality. Each grain is sourced to meet rigorous international standards, ensuring an authentic and superior culinary experience."
    },
    {
      title: "Global Accessibility",
      content: "Our robust logistics network and streamlined operations enable us to handle bulk orders efficiently, ensuring consistent and reliable delivery to clients worldwide. No matter your location, we make premium basmati rice accessible with ease."
    },
    {
      title: "Sustainability & Ethics",
      content: "At the heart of our business lies a commitment to ethical sourcing and eco-friendly practices. By working closely with farmers, we promote sustainable agriculture, empower local communities, and contribute to environmental conservation."
    },
    {
      title: "Customer-First Focus",
      content: "We believe in building long-lasting relationships through transparency and trust. Our dedicated team works hand-in-hand with clients to ensure seamless transactions, prompt responses, and timely shipments, making your experience with us stress-free and reliable."
    }
  ];
  
  return (
    <section className="row why-choose-us d-flex m-0">
      <video autoPlay muted loop className="w-100 p-0">
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="col-4 d-flex align-items-center justify-content-center flex-column">
        <h1 className="blockheader">Why Choose Us?</h1>
        <p className="text-center">Choose us for authentic basmati rice delivered with a commitment to quality, sustainability, and excellence. Partner with us for a dependable supply chain that adds value to your business.</p>
      </div>
      <div className="col-8">
        <div className="row gap-4 card-container my-2 justify-content-center m-0">
          {cardData.map((card, index) => (
            <div className="card col-5" key={index}>
              <h3>{card.title}</h3>
              <p>{card.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
