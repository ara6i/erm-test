"use client";

import React, { useMemo } from "react";
import Overview from "./overview";
import HeaderSection from "../components/sections/HeaderSection";
import DynamicTable from "../components/Tables/DynamicTable";
import DynamicTableWithFilters from "../components/Tables/DynamicTable";

const ItemMaster: React.FC = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: "itemCode",
        header: "Item Code", // Ensure this is defined
      },
      {
        accessorKey: "itemName",
        header: "Item Name", // Ensure this is defined
      },
      {
        accessorKey: "category",
        header: "Category", // Ensure this is defined
      },
      {
        accessorKey: "stockLevel",
        header: "Stock Level", // Ensure this is defined
      },
      {
        accessorKey: "reorderLevel",
        header: "Reorder Level", // Ensure this is defined
      },
    ],
    []
  );

  const data = useMemo(
    () => [
      {
        itemCode: "SKU001",
        itemName: "Product 1",
        category: "Raw Material",
        stockLevel: 45,
        reorderLevel: 25,
      },
      {
        itemCode: "SKU002",
        itemName: "Product 2",
        category: "Consumable",
        stockLevel: 30,
        reorderLevel: 15,
      },
      // Add more data here
    ],
    []
  );
  return (
    <div className="flex flex-col gap-8">
      <Overview />
      <HeaderSection />
      <div className="bg-table rounded-2xl py-6 px-4">
        <DynamicTableWithFilters columns={columns} data={data} pageSize={10} />
      </div>
    </div>
  );
};

export default ItemMaster;
