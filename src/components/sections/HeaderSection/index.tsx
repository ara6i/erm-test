import React from "react";
import HeaderTitle from "./HeaderTitle";
import HeaderControls from "./HeaderControls";

const HeaderSection: React.FC = () => {
  return (
    <div className="flex justify-between items-center  ">
      <HeaderTitle />
      <HeaderControls />
    </div>
  );
};

export default HeaderSection;
