import React from "react";
import Tabs from "../../components/Tabs/Tabs";
import ItemMaster from "./inventory/item-master";
import StockMovement from "./inventory/stock-movement";

const DashboardPage: React.FC = () => {
  const tabs = [
    {
      label: "Item Master",
      content: <ItemMaster />,
    },
    {
      label: "Stock Movement",
      content: <StockMovement />,
    },
  ];
  return (
    <div className="p-6 bg-content min-h-screen ">
      <Tabs tabs={tabs} />
    </div>
  );
};

export default DashboardPage;
