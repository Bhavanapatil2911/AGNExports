import React from "react";
import './whychooseus.css';

const WhyChooseUs = () => {
  const cardData = [
    {
      title: "Unmatched Quality",
      content: "Our rice is selected for its aroma, taste, and texture, meeting the highest international standards."
    },
    {
      title: "Global Reach",
      content: "We have the expertise and logistics to serve clients worldwide, ensuring reliable and timely deliveries."
    },
    {
      title: "Custom Solutions",
      content: "We offer packaging and branding tailored to your specific needs."
    },
    {
      title: "Sustainable & Ethical Practices",
      content: "We are committed to supporting farmers and protecting the environment through sustainable sourcing."
    },
    {
      title: "Customer-Centric Service",
      content: "We focus on building lasting relationships with our clients, ensuring seamless transactions and unparalleled service."
    }
  ];

  return (
    <section className="why-choose-us">
      <h1>Why Choose Us?</h1>
      <div className="row card-container mx-4 my-2">
        {cardData.map((card, index) => (
          <div className="card" key={index}>
            <h3>{card.title}</h3>
            <p>{card.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
