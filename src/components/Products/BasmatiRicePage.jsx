import React from "react";
import './BasmatiRicePage.scss'

const BasmatiRicePage = () => {
    const riceVarieties = [
        {
            ricetype: "1121 Basmati Rice",
            riceimage: "/images/1401 Basmati rice.webp"
        },
        {
            ricetype: "1718 Basmati Rice",
            riceimage: "/images/1781 Basmati Rice.webp"
        },
        {
            ricetype: "1509 Basmati Rice",
            riceimage: "/images/Basmati Rice 1121.webp"
        },
        {
            ricetype: "1401 Basmati Rice",
            riceimage: "/images/Basmati1509.webp"
        },
        {
            ricetype: "Pusa Basmati Rice",
            riceimage: "/images/1781 Basmati Rice.webp"
        },
        {
            ricetype: "Traditional Basmati Rice",
            riceimage: "/images/Basmati Rice 1121.webp"
        }
    ];
    

  return (
    <div className="basmati-rice-page">
      <h2>Indian Original Basmati Rice</h2>
      <p>
        Basmati Rice is celebrated worldwide for its unmatched qualities. With
        the longest grains, both uncooked and cooked, it offers up to 30% more
        volume than other rice varieties. Known for its excellent cooking
        properties, unique aroma, sweet flavor, and high nutritional value,
        Basmati Rice is truly in a league of its own.
      </p>
      <p>
        India, renowned for its rich culinary heritage, is home to some of the
        finest Basmati Rice varieties. Each type has its own distinctive
        qualities some with extra-long grains, others with a mesmerizing
        aroma, and all offering a rich taste that sets them apart. No matter the
        variety, one thing remains constant: the authentic, savory flavor that
        makes Basmati Rice a staple in kitchens worldwide.
      </p>
      <div className="ricevarities row m-0">
        {riceVarieties.map((rice)=>(
            <div className="col-md-4 ">
                <div className="ricecard mb-4 p-3">
                    <div className="pointer"></div>
                    <h4 className="ricetype">{rice.ricetype}</h4>
                    <img src={rice.riceimage} alt="" />
                </div>
            </div>

        ))}
        

      </div>
    </div>
  );
};

export default BasmatiRicePage;
