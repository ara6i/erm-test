import React from "react";
import Image from "next/image";

interface CardProps {
  iconSrc: string;
  title: string;
  subtitle: string;
  value: string | number;
  valueLabel?: string; // Optional label for the value, e.g., currency
}

const Card: React.FC<CardProps> = ({
  iconSrc,
  title,
  subtitle,
  value,
  valueLabel,
}) => {
  return (
    <div className="bg-white  rounded-lg p-4 flex items-center justify-between h-20 shadow-card">
      <div className="w-8 h-8 mr-2">
        <Image src={iconSrc} width={32} height={32} alt={title} />
      </div>
      <div className="flex flex-col">
        <span className="text-sm text-gray-600">{title}</span>
        <span className="text-xs text-gray-400">{subtitle}</span>
      </div>
      <div className="ml-auto text-right">
        <span className="text-lg font-bold">
          {valueLabel} {value}
        </span>
      </div>
    </div>
  );
};

export default Card;
