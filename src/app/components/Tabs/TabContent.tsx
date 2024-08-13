"use client";
import React from "react";

interface TabContentProps {
  activeTab: string;
}

const TabContent: React.FC<TabContentProps> = ({ activeTab }) => {
  return (
    <div className="p-4">
      {activeTab === "item-master" && (
        <div>
          <h2 className="text-xl font-bold">Item Master Content</h2>
          <p>Here is the content for the Item Master tab.</p>
          {/* Include more detailed content or components for the Item Master tab */}
        </div>
      )}
      {activeTab === "stock-movement" && (
        <div>
          <h2 className="text-xl font-bold">Stock Movement Content</h2>
          <p>Here is the content for the Stock Movement tab.</p>
          {/* Include more detailed content or components for the Stock Movement tab */}
        </div>
      )}
      {/* Add more content blocks for additional tabs as needed */}
    </div>
  );
};

export default TabContent;
