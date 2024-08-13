"use client";

import React, { useMemo } from "react";
import Overview from "./overview";
import HeaderSection from "../../../components/sections/HeaderSection";

import Table from "@/components/Table/Table";
import { data } from "./data";

const ItemMaster: React.FC = () => {
  return (
    <div className="flex flex-col gap-8">
      <Overview />
      <HeaderSection />
      <div className=" relative min-h-full ">
        <Table data={data} />
      </div>
    </div>
  );
};

export default ItemMaster;
