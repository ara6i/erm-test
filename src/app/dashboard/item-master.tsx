"use client";

import React, { useMemo } from "react";
import Overview from "./overview";
import HeaderSection from "../../components/sections/HeaderSection";

import Table from "@/components/Table/Table";

const ItemMaster: React.FC = () => {
  const data = [
    {
      itemCode: "SKU001",
      itemName: "Product 1",
      category: "Raw Material",
      stockLevel: 45,
      reorderLevel: 25,
      uom: "Kg",
      location: "WH 1",
      batchLot: "57559",
      expiryDate: "12/09/2025",
      status: "active",
    },
    {
      itemCode: "SKU001",
      itemName: "Product 1",
      category: "Raw Material",
      stockLevel: 45,
      reorderLevel: 25,
      uom: "Kg",
      location: "WH 1",
      batchLot: "57559",
      expiryDate: "12/09/2025",
      status: "active",
    },
    {
      itemCode: "SKU001",
      itemName: "Product 1",
      category: "Raw Material",
      stockLevel: 45,
      reorderLevel: 25,
      uom: "Kg",
      location: "WH 1",
      batchLot: "57559",
      expiryDate: "12/09/2025",
      status: "active",
    },
    {
      itemCode: "SKU001",
      itemName: "Product 1",
      category: "Raw Material",
      stockLevel: 45,
      reorderLevel: 25,
      uom: "Kg",
      location: "WH 1",
      batchLot: "57559",
      expiryDate: "12/09/2025",
      status: "active",
    },
    {
      itemCode: "SKU001",
      itemName: "Product 1",
      category: "Raw Material",
      stockLevel: 45,
      reorderLevel: 25,
      uom: "Kg",
      location: "WH 1",
      batchLot: "57559",
      expiryDate: "12/09/2025",
      status: "active",
    },
    {
      itemCode: "SKU001",
      itemName: "Product 1",
      category: "Raw Material",
      stockLevel: 45,
      reorderLevel: 25,
      uom: "Kg",
      location: "WH 1",
      batchLot: "57559",
      expiryDate: "12/09/2025",
      status: "active",
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      <Overview />
      <HeaderSection />
      <div className=" relative h-screen ">
        <Table data={data} />
      </div>
    </div>
  );
};

export default ItemMaster;
