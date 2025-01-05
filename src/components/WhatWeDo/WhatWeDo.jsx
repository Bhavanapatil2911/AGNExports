import React from "react";
import './WhatWeDo.scss'; // Include the new CSS file

const WhatWeDo = () => {
  return (
    <>
      <section className="whatwedo">
        <div className="header text-center">
          <h2 className="blockheader">What We Do</h2>
        </div>
        <div className="content">
          <section className="agn-exports-section">
            <div className="container text-center py-5">
              <h5 className="section-title">
                Bringing the Richness of Indian Basmati Rice to the World
              </h5>
              <p className="section-subtitle">
                At AGN Exports, we specialize in:
              </p>
              <ul className="specialization-list">
                <li>
                  <strong>Global Sourcing:</strong> We work with trusted Indian farmers to select only the finest Basmati rice varieties.
                </li>
                <li>
                  <strong>Quality Assurance:</strong> Our rigorous quality control checks ensure that only the best rice reaches you.
                </li>
                <li>
                  <strong>Sustainability:</strong> We prioritize eco-friendly farming practices to protect the environment and support local farmers.
                </li>
                <li>
                  <strong>Reliable Logistics:</strong> Our efficient supply chain guarantees timely deliveries to any destination worldwide.
                </li>
                <li>
                  <strong>Customized Solutions:</strong> We offer tailored packaging and rice grades to suit the unique needs of each customer.
                </li>
              </ul>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default WhatWeDo;
