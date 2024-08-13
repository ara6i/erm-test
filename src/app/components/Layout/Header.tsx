"use client";

import React from "react";

import Image from "next/image";
import { useSidebar } from "@/app/context/SidebarContext";

const Header: React.FC = () => {
  const { isOpen, toggleSidebar } = useSidebar();

  return (
    <header
      className={`flex items-center justify-between h-[72px] bg-white  px-8 py-3 z-10 transition-all duration-300 ease-in-out shadow-header `}
    >
      <div className="flex items-center space-x-4">
        {/* Toggle Sidebar Button */}
        <button onClick={toggleSidebar} className="lg:hidden p-2">
          {/* You can use a menu icon here if you want to show it */}
        </button>
      </div>
      <div className="flex items-center justify-end gap-12">
        <button>
          <Image
            width={32}
            height={32}
            alt="notification"
            src="/icons/notifications.svg"
            className="w-8 h-8"
          />
        </button>
        <button>
          <Image
            width={32}
            height={32}
            alt="notification"
            src="/icons/settings.svg"
            className="w-8 h-8"
          />
        </button>

        <div className="relative w-10 h-10 rounded-full overflow-hidden">
          <Image
            src="/mock/profile.png" // Replace with the actual path to the avatar image
            alt="User Avatar"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
