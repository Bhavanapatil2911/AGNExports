import React from 'react';

const riceDetails = [
    {
      riceType: "Basmati Rice 1121",
      purity: "95% Min",
      averageGrainLength: "8.3 mm",
      moisture: "12% Max",
      brokenGrain: "1% Max",
      damageDiscolourGrain: "Nil",
      immatureGrain: "-",
      foreignMatter: "Nil",
      packagingType: "Jute bag, PP bag, Non-woven bag, or as per buyer's choice",
      supplyAbility: "2000 tons per week",
      mainExportMarkets: "Europe, USA, Australia, Saudi Arabia, Kuwait, Egypt, UAE, Jordan, Oman, Bahrain, Yemen, Syria, Iraq, Libya, Turkey",
      deliveryTime: "15 Days"
    },
    {
      riceType: "Basmati Rice 1718",
      purity: "95%",
      averageGrainLength: "8.35 mm",
      moisture: "12.5% Max",
      brokenGrain: "1% Max",
      damageDiscolourGrain: "1% Max",
      immatureGrrain: "1% Max",
      foreignMatter: "Nil",
      packagingType: "Jute bag, PP bag, Non-woven bag, or as per buyer's choice",
      supplyAbility: "2000 tons per week",
      mainExportMarkets: "Europe, USA, Australia, Saudi Arabia, Kuwait, Egypt, UAE, Jordan, Oman, Bahrain, Yemen, Syria, Iraq, Libya, Turkey",
      deliveryTime: "15 Days"
    },
    {
      riceType: "Basmati Rice 1509",
      purity: "95%",
      averageGrainLength: "8.4 mm",
      moisture: "12.5% Max",
      brokenGrain: "1% Max",
      damageDiscolourGrain: "1% Max",
      immatureGrain: "1% Max",
      foreignMatter: "Nil",
      packagingType: "Jute bag, PP bag, Non-woven bag, or as per buyer's choice",
      supplyAbility: "2000 tons per week",
      mainExportMarkets: "Europe, USA, Australia, Saudi Arabia, Kuwait, Egypt, UAE, Jordan, Oman, Bahrain, Yemen, Syria, Iraq, Libya, Turkey",
      deliveryTime: "15 Days"
    },
    {
      riceType: "Basmati Rice 1401",
      purity: "95%",
      averageGrainLength: "8.2 mm",
      moisture: "12% Max",
      brokenGrain: "1% Max",
      damageDiscolourGrain: "Nil",
      immatureGrain: "Nil",
      foreignMatter: "Nil",
      packagingType: "Jute bag, PP bag, Non-woven bag, or as per buyer's choice",
      supplyAbility: "2000 tons per week",
      mainExportMarkets: "Europe, USA, Australia, Saudi Arabia, Kuwait, Egypt, UAE, Jordan, Oman, Bahrain, Yemen, Syria, Iraq, Libya, Turkey",
      deliveryTime: "15 Days"
    },
    {
      riceType: "Pusa Basmati Rice",
      purity: "95%",
      averageGrainLength: "8.5 mm",
      moisture: "12% Max",
      brokenGrain: "1% Max",
      damageDiscolourGrain: "Nil",
      immatureGrain: "Nil",
      foreignMatter: "Nil",
      packagingType: "Jute bag, PP bag, Non-woven bag, or as per buyer's choice",
      supplyAbility: "2000 tons per week",
      mainExportMarkets: "Europe, USA, Australia, Saudi Arabia, Kuwait, Egypt, UAE, Jordan, Oman, Bahrain, Yemen, Syria, Iraq, Libya, Turkey",
      deliveryTime: "15 Days"
    },
    {
      riceType: "Traditional Basmati Rice",
      purity: "95%",
      averageGrainLength: "7.8 mm",
      moisture: "12% Max",
      brokenGrain: "1% Max",
      damageDiscolourGrain: "Nil",
      immatureGrain: "-",
      foreignMatter: "Nil",
      packagingType: "Jute bag, PP bag, Non-woven bag, or as per buyer's choice",
      supplyAbility: "1500 tons per week",
      mainExportMarkets: "India, Nepal, Pakistan, UAE, Saudi Arabia, Oman, Bahrain, Qatar",
      deliveryTime: "15 Days"
    }
];

const Rise1211 = () => {
  const specifications = [
    "purity", "averageGrainLength", "moisture", "brokenGrain",
    "damageDiscolourGrain", "immatureGrain", "foreignMatter", "packagingType",
    "supplyAbility", "mainExportMarkets", "deliveryTime"
  ];

  return (
    <table border="1" cellPadding="10" cellSpacing="0">
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
            <td>{spec.charAt(0).toUpperCase() + spec.slice(1).replace(/([A-Z])/g, ' $1')}</td>
            {riceDetails.map((rice, idx) => (
              <td key={idx}>{rice[spec]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Rise1211;
