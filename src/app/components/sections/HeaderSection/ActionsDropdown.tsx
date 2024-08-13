"use client";

import React, { useState } from "react";

const ActionsDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="flex items-center border border-purple-600 text-purple-600 rounded-lg px-4 py-2 text-sm font-medium focus:outline-none transition-colors duration-300 hover:bg-purple-100"
      >
        <img src="/icons/pink-settings.svg" className="mr-2" />
        <span>Actions</span>

        {/* Adding an icon next to the "Actions" text */}
      </button>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            <a
              href="#"
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Action 1
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              {/* Action 2 Icon */}
              Action 2
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ActionsDropdown;
