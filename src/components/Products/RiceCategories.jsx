import React from "react";
import './RiceCategories.scss';
import riceimage from "../../images/—Pngtree—basmati rice on wooden background_15524877.png"


const riceCategories = [
    {
        title: "Basmati Rice",
        items: [
            "1121 Basmati Rice",
            "1509 Basmati Rice",
            "Traditional Basmati Rice",
            "1401 Basmati Rice",
            "Pusa Basmati Rice",
            "1718 Basmati Rice",
        ],
    },
    {
        title: "Non-Basmati Rice",
        items: [
            "Sugandha Rice",
            "Sharbati Rice",
            "PR 11 Rice",
            "Parmal Rice",
            "Sona Masoori Raw Rice",
        ],
    },
    {
        title: "Pesticide Free Rice",
        items: [
            "Raw Rice",
            "Steam Rice",
            "Sella Rice",
            "Golden Rice",
        ],
    },
    {
        title: "Other Rice",
        items: [
            "Brown Rice",
            "Broken Rice",
        ],
    },
];

function RiceCategories() {
    return (
        <section className="p-5 text-center">
            <h2 className="mb-5">Rice We Deal With</h2>
        <div className="row ricecategories justify-content-center">
            {riceCategories.map((category, index) => (
                <div className="col-md-3" key={index}>
                    <div className="card p-3">
                        <img src={riceimage} alt="Basmati Rice" className="mb-3"/>
                        <h4>{category.title}</h4>

                        <ul className="p-0">
                            {category.items.map((item, itemIndex) => (
                                <li key={itemIndex}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
        </section>
    );
}

export default RiceCategories;
