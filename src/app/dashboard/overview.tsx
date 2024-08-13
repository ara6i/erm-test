// src/pages/dashboard/overview.tsx

import React from "react";
import Card from "../../components/UI/Card";

const Overview: React.FC = () => {
  const cardData = [
    {
      iconSrc: "/mock/stock.png",
      title: "Stock Value",
      subtitle: "RM over 60 days",
      value: "₹ 3,17,500",
    },
    {
      iconSrc: "/mock/stock.png",
      title: "Stock Value",
      subtitle: "PM over 60 days",
      value: "₹ 1,17,500",
    },
    {
      iconSrc: "/mock/Reorder.png",
      title: "Items Below Reorder Level",
      subtitle: "",
      value: 10,
    },
    {
      iconSrc: "/mock/layer.png",
      title: "Items Out of Stock",
      subtitle: "",
      value: 25,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {cardData.map((card, index) => (
        <Card
          key={index}
          iconSrc={card.iconSrc}
          title={card.title}
          subtitle={card.subtitle}
          value={card.value}
        />
      ))}
    </div>
  );
};

export default Overview;
