import React from "react";
import Button from "./Button";
import ActionsDropdown from "./ActionsDropdown";

const HeaderControls: React.FC = () => {
  return (
    <div className="flex items-center space-x-4">
      <Button iconSrc="/icons/download.svg" />
      <ActionsDropdown />
      <Button label="Add Item" variant="primary" iconSrc="/icons/add.svg" />
    </div>
  );
};

export default HeaderControls;
