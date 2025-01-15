import React from "react";
import './Wedeal.scss'
import riceimage from "../../images/—Pngtree—basmati rice on wooden background_15524877.png"


const Wedeal = () => {
    const features = [
        {
          icon: "riceimage", // Replace with actual image path or URL
          title: "Basmati rice",
          description: [
            "1121 Basmati Rice",
            "1509 Basmati Rice",
            "Traditional Basmati Rice",
            "1401 Basmati Rice",
            "Pusa Basmati Rice",
            "1718 Basmati Rice"
          ]
        },
        {
          icon: "riceimage", // Replace with actual image path or URL
          title: "Non Basmati rice",
          description:["Sugandha Rice",
            "Sharbati Rice",
            "PR 11 Rice",
            "Parmal Rice",
            "Sona Masoori Raw Rice"]
        },
        {
          icon: "image3.jpg", // Replace with actual image path or URL
          title: "Pestiside free",
          description:[
            "Raw Rice",
            "Steam Rice",
            "Sella Rice",
            "Golden Rice"]
        },
        {
          icon: "image4.jpg", // Replace with actual image path or URL
          title: "Other varities",
          description:["Broken Rice","Brown Rice"]
        },
      ];
  return (
    <>
      <section className="wedealwith py-5">
        <div className="container text-center">
          <h2 className="mb-3">
            Rice We Deal With
          </h2>
          <p className="mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="row">
            {features.map((feature, index) => (
              <div className="col-md-6 col-lg-3 mb-4" key={index}>
                <div className="card bg-light text-dark h-100 shadow-sm">
                  <div className="card-body text-center">
                    <div className="icon mb-3">
                      <img
                        src={riceimage}
                        alt={feature.title}
                        className="img-fluid rounded-circle"
                        style={{ width: "120px", height: "120px" }}
                      />
                    </div>
                    <h5 className="card-title">{feature.title}</h5>
                    <ul className="card-text">
                    {feature.description.map((item, index) => (
                        <li>{item}</li>
                    ))}

                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Wedeal;
