
import React, { useEffect, useState } from "react";
import './BasmatiRicePage.scss';
import 'animate.css';

const PestisideFree = () => {

    const riceVarieties = [
        {
            ricetype: "Raw Rice",
            riceimage: "/images/1401 Basmati rice.webp"
        },
        {
            ricetype: " Steam Rice",
            riceimage: "/images/1781 Basmati Rice.webp"
        },
        {
            ricetype: "Sella Rice",
            riceimage: "/images/Basmati Rice 1121.webp"
        },
        {
            ricetype: "Golden Sella Rice",
            riceimage: "/images/Basmati1509.webp"
        },

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
            <h2>PESTICIDE FREE RICE</h2>
            <span>We offer a wide range of pesticide-free rice, tailored to meet our clients’ specific requirements.</span>
            <p>
            As the global farming industry faces the challenge of pest management, pesticides are often used during harvest. However, growing concerns over the harmful effects of pesticide residues on both human health and the environment have led to the development of rice varieties that are grown with minimal pesticide use, adhering to strict residue tolerance levels. Ensuring the safety of our food by testing for pesticide residues in rice is a vital step toward maintaining food safety. Pesticide-free rice is not only safer but also offers superior nutritional benefits compared to conventionally grown rice.
                Basmati Rice is truly in a league of its own.
            </p>
            <p>
            In line with our commitment to your well-being, our range of pesticide-free rice is carefully cultivated with no harmful chemicals. The fertile lands of the Himalayan foothills provide an ideal environment for both basmati and non-basmati rice varieties, allowing them to grow naturally without any synthetic interventions. Our pesticide-free rice is grown with utmost care, ensuring it is completely safe for consumption, while maintaining excellent taste, quality, and texture.
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

export default PestisideFree;
