import Image from "next/image";
import React, { useState } from "react";
import { FaCog, FaChevronDown } from "react-icons/fa";
import { MdUpdate, MdTransferWithinAStation, MdCategory } from "react-icons/md";

const ActionSelect: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="flex items-center border border-primary text-primary rounded-lg px-4 py-2 text-sm font-medium focus:outline-none transition-colors duration-300 hover:bg-purple-100"
      >
        <div className="flex items-center gap-2">
          <Image
            src="/icons/pink-settings.svg"
            alt="Info"
            width={20}
            height={20}
            className="ml-2"
          />
          <span>Actions</span>
        </div>
        <FaChevronDown className="ml-2" />
      </button>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-72 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
          <div className="py-1">
            <a
              href="#"
              className="flex gap-4 items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <Image
                src=" /icons/updateStock.svg"
                alt="Info"
                width={32}
                height={32}
                className="ml-2"
              />
              <div>
                <div className="font-medium">Update Product Stock</div>
                <div className="text-xs text-gray-500">
                  Add or reduce item quantity in bulk
                </div>
              </div>
            </a>
            <a
              href="#"
              className="flex gap-4 items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <Image
                src="/icons/stock.svg"
                alt="Info"
                width={32}
                height={32}
                className="ml-2"
              />
              <div>
                <div className="font-medium">Stock Transfer</div>
                <div className="text-xs text-gray-500">
                  Transfer your stock between stores
                </div>
              </div>
            </a>
            <a
              href="#"
              className="flex gap-4 items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <Image
                src="/icons/categories.svg"
                alt="Info"
                width={32}
                height={32}
                className="ml-2"
              />
              <div>
                <div className="font-medium">Item Categories (Add/Edit)</div>
                <div className="text-xs text-gray-500">
                  Create multiple categories for your items
                </div>
              </div>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ActionSelect;
