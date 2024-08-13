"use client";

import { useSidebar } from "@/context/SidebarContext";
import Image from "next/image";
import React from "react";
import { navItems } from "./nav";

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
            <span className="ml-4 text-sm text-gray-700 whitespace-wrap">
              {item.label}
            </span>
          )}
        </a>
      ))}
    </nav>
  );
};

export default SidebarNav;
