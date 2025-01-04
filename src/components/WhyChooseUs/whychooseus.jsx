import React from "react";
import './whychooseus.css';

const WhyChooseUs = () => {
  // const cardData = [
  //   {
  //     title: "Unmatched Quality",
  //     content: "Our rice is selected for its aroma, taste, and texture, meeting the highest international standards."
  //   },
  //   {
  //     title: "Global Reach",
  //     content: "We have the expertise and logistics to serve clients worldwide, ensuring reliable and timely deliveries."
  //   },
  //   {
  //     title: "Custom Solutions",
  //     content: "We offer packaging and branding tailored to your specific needs."
  //   },
  //   {
  //     title: "Sustainable & Ethical Practices",
  //     content: "We are committed to supporting farmers and protecting the environment through sustainable sourcing."
  //   },
  //   {
  //     title: "Customer-Centric Service",
  //     content: "We focus on building lasting relationships with our clients, ensuring seamless transactions and unparalleled service."
  //   }
  // ];
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
    <section className="why-choose-us d-flex align-items-center flex-column">
      <h1 className="blockheader">Why Choose Us?</h1>
      <p className="w-50 text-center">Choose us for authentic basmati rice delivered with a commitment to quality, sustainability, and excellence. Partner with us for a dependable supply chain that adds value to your business.</p>
      <div className="row card-container mx-4 my-2">
        {cardData.map((card, index) => (
          <div className="card col-5" key={index}>
            <h3>{card.title}</h3>
            <p>{card.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
