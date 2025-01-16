import React from "react";
import "./Rice.scss";

const riceDetails = [
    {
      riceType: "1718 RAW Basmati Rice",
      purity: "95.00%",
      naturalAdmixture: "5.00%",
      averageGrainLength: "8.40 mm",
      moisture: "12.5% Max",
      brokenGrain: "1% Max",
      damageDiscolourGrain: "1% Max",
      immatureGrain: "1% Max",
      foreignMatter: "Nil",
      packagingType: "Jute bag, PP bag, Non-woven bag, or as per buyer's choice",
      supplyAbility: "2000 tons per week",
      mainExportMarkets:
        "Europe, USA, Australia, Saudi Arabia, Kuwait, Egypt, UAE, Jordan, Oman, Bahrain, Yemen, Syria, Iraq, Libya, Turkey",
      deliveryTime: "15 Days",
    },
    {
      riceType: "1718 STEAM Basmati Rice",
      purity: "95.00%",
      naturalAdmixture: "5.00%",
      averageGrainLength: "8.40 mm",
      moisture: "12.5% Max",
      brokenGrain: "1% Max",
      damageDiscolourGrain: "1% Max",
      immatureGrain: "1% Max",
      foreignMatter: "Nil",
      packagingType: "Jute bag, PP bag, Non-woven bag, or as per buyer's choice",
      supplyAbility: "2000 tons per week",
      mainExportMarkets:
        "Europe, USA, Australia, Saudi Arabia, Kuwait, Egypt, UAE, Jordan, Oman, Bahrain, Yemen, Syria, Iraq, Libya, Turkey",
      deliveryTime: "15 Days",
    },
    {
      riceType: "1718 SELLA Basmati Rice",
      purity: "95.00%",
      naturalAdmixture: "5.00%",
      averageGrainLength: "8.40 mm",
      moisture: "12.5% Max",
      brokenGrain: "1% Max",
      damageDiscolourGrain: "1% Max",
      immatureGrain: "1% Max",
      foreignMatter: "Nil",
      packagingType: "Jute bag, PP bag, Non-woven bag, or as per buyer's choice",
      supplyAbility: "2000 tons per week",
      mainExportMarkets:
        "Europe, USA, Australia, Saudi Arabia, Kuwait, Egypt, UAE, Jordan, Oman, Bahrain, Yemen, Syria, Iraq, Libya, Turkey",
      deliveryTime: "15 Days",
    },
    {
      riceType: "1718 GOLDEN SELLA Basmati Rice",
      purity: "95.00%",
      naturalAdmixture: "5.00%",
      averageGrainLength: "8.35 mm",
      moisture: "12.5% Max",
      brokenGrain: "1% Max",
      damageDiscolourGrain: "1% Max",
      immatureGrain: "1% Max",
      foreignMatter: "Nil",
      packagingType: "Jute bag, PP bag, Non-woven bag, or as per buyer's choice",
      supplyAbility: "2000 tons per week",
      mainExportMarkets:
        "Europe, USA, Australia, Saudi Arabia, Kuwait, Egypt, UAE, Jordan, Oman, Bahrain, Yemen, Syria, Iraq, Libya, Turkey",
      deliveryTime: "15 Days",
    },
 
    ]  ;

const Rice1718 = () => {
  const specifications = [
    "purity",
    "averageGrainLength",
    "moisture",
    "brokenGrain",
    "damageDiscolourGrain",
    "immatureGrain",
    "foreignMatter",
    "packagingType",
    "supplyAbility",
    "mainExportMarkets",
    "deliveryTime",
  ];

  return (
    <>
      <img class="ricetypesimage" src="images/ricetype.jpeg" alt="" />
      <table border="1" cellPadding="10" cellSpacing="0" class="mt-5">
        <thead>
          <tr>
            <th>Specification</th>
            {riceDetails.map((rice, index) => (
              <th key={index}>{rice.riceType}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {specifications.map((spec, index) => (
            <tr key={index}>
              <td>
                {spec.charAt(0).toUpperCase() +
                  spec.slice(1).replace(/([A-Z])/g, " $1")}
              </td>
              {riceDetails.map((rice, idx) => (
                <td key={idx}>{rice[spec]}</td>
              ))}
            </tr>
          ))}
          <tr>
            <td></td>
            {riceDetails.map((rice, idx) => (
              <td>
                <button className="requestbtn">Request Sample</button>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Rice1718;
