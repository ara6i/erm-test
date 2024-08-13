import React from "react";
import Image from "next/image";

const HeaderTitle: React.FC = () => {
  return (
    <div className="flex items-center">
      <h1 className="text-xl font-semibold text-gray-800">Item Master</h1>
      <Image
        src="/info.svg"
        alt="Info"
        width={20}
        height={20}
        className="ml-2"
      />
    </div>
  );
};

export default HeaderTitle;
