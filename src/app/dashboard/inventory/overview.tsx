import React from "react";
import Card from "../../../components/UI/Card";
import { cardData } from "./data";

const Overview: React.FC = () => {
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
