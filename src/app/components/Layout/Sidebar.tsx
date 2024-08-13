"use client";

import { useSidebar } from "@/app/context/SidebarContext";
import Image from "next/image";
import React from "react";
import SidebarNav from "../Navigation/SidebarNav";
import Logo from "../Logo/Logo";

const Sidebar: React.FC = () => {
  const { isOpen, toggleSidebar } = useSidebar();

  return (
    <aside
      className={`min-h-screen bg-white flex flex-col transition-width duration-300 ease-in-out transform ${
        isOpen ? "w-72" : "w-20"
      } shadow-sidebar`}
    >
      <div className="flex items-center gap-2 px-6 py-5">
        <button
          onClick={toggleSidebar}
          className=" flex justify-center items-center"
        >
          <Image src="/icons/menu.svg" width={32} height={32} alt="menu" />
        </button>
        {isOpen && <Logo />}
      </div>

      <SidebarNav />
    </aside>
  );
};

export default Sidebar;
