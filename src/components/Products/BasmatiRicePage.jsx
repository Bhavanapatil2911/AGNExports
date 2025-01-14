import React, { useEffect, useState } from "react";
import './BasmatiRicePage.scss';
import 'animate.css';

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
                qualities, some with extra-long grains, others with a mesmerizing
                aroma, and all offering a rich taste that sets them apart. No matter the
                variety, one thing remains constant: the authentic, savory flavor that
                makes Basmati Rice a staple in kitchens worldwide.
            </p>
            <div className="ricevarities row mt-5">
                {riceVarieties.map((rice, index) => (
                    <div className="col-md-4 my-3" key={index}>
                        <div
                            id={`ricecard-${index}`}
                            className={`ricecard mb-4 p-3 d-flex flex-column gap-3 ${
                                inView.includes(`ricecard-${index}`) ? 'animate__animated animate__rotateIn' : ''
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
    );
};

export default BasmatiRicePage;
