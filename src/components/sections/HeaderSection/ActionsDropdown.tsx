import Image from "next/image";
import React, { useState } from "react";
import { FaCog, FaChevronDown } from "react-icons/fa";

const ActionSelect: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="flex items-center w-32 border border-primary text-primary rounded-lg px-4 py-2 text-sm font-medium focus:outline-none transition-colors duration-300 hover:bg-purple-100"
      >
        <Image
          src="/icons/pink-settings.svg"
          width={20}
          height={20}
          alt="settings"
          className="mr-2"
        />
        <span>Actions</span>
        <FaChevronDown className="ml-2" />
      </button>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
          <div className="py-1">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Option 1
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Option 2
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Option 3
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ActionSelect;
