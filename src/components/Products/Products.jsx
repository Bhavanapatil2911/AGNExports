import React from "react";
import './Products.css';

const Products = () => {
    return(
        <>
            <section className="products  p-4 text-center">
            <h1 className="blockheader mb-4">Rice We Deal With</h1>
                <div className="row d-flex justify-content-center gap-2" >

                    <div className="col-3">
                        <div className="card">
                            <h4>Basmati Rice</h4>
                            <ul>
                                <li>1121 Basmati Rice</li>
                                <li>1509 Basmati Rice</li>
                                <li>Traditional Basmati Rice </li>
                                <li>1401 Basmati Rice</li>
                                <li>Pusa Basmati Rice</li>
                                <li>1718 Basmati Rice</li>
                            </ul>

                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card">
                        <h4>Non-Basmati Rice</h4>
                        <ul>
                        <li>Sugandha Rice</li>
                        <li>Sharbati Rice</li>
                        <li>PR 11 Rice</li>
                        <li>Parmal Rice</li>
                        <li>Sona Masoori Raw Rice</li>
                        </ul>

                            
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card">
                        <h4>Pesticide Free Rice</h4>
                        <ul>
                        <li>Raw Rice</li>
                        <li>Steam Rice</li>
                        <li>Sella Rice</li>
                        <li>Golden Rice</li>
                        </ul>

                            
                        </div>
                    </div>
                </div>
                <button className="primaryBtn mt-5 p-3 rounded-pill">
                    Our Products
                </button>

            </section>
        </>
    );
};

export default Products;
