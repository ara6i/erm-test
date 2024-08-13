"use client";

import { useSidebar } from "@/app/context/SidebarContext";
import Image from "next/image";
import React from "react";

const navItems = [
  {
    icon: "/icons/inventory.svg",
    label: "Inventory",
    alt: "inventory",
    link: "/dashboard",
  },
  {
    icon: "/icons/basket.svg",
    label: "Purchase Order",
    alt: "purchase order",
    link: "/dashboard/item-master",
  },
  {
    icon: "/icons/bill.svg",
    label: "GRN",
    alt: "grn",
    link: "/dashboard/stock-management",
  },
  {
    icon: "/icons/vendor.svg",
    label: "Vendor Management",
    alt: "vendor management",
    link: "/dashboard/reports",
  },
  {
    icon: "/icons/material.svg",
    label: "Material Management",
    alt: "material management",
    link: "/dashboard/settings",
  },
  {
    icon: "/icons/ware.svg",
    label: "Warehouse Management",
    alt: "warehouse management",
    link: "/logout",
  },
];

const SidebarNav: React.FC = () => {
  const { isOpen } = useSidebar();

  return (
    <nav className="flex flex-col justify-start items-center mt-20 w-full">
      {navItems.map((item, index) => (
        <a
          href={item.link}
          key={index}
          className={`flex items-center w-full h-[52px] hover:bg-customPurple px-4 ${
            isOpen ? "justify-start" : "justify-center"
          }`}
        >
          <Image
            src={item.icon}
            width={32}
            height={32}
            alt={item.alt}
            className="w-8 h-8"
          />
          {isOpen && (
            <span className="ml-4 text-sm text-gray-700 whitespace-nowrap">
              {item.label}
            </span>
          )}
        </a>
      ))}
    </nav>
  );
};

export default SidebarNav;
