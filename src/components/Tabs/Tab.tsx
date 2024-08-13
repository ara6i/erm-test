import React from "react";

interface TabProps {
  id: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const Tab: React.FC<TabProps> = ({ id, label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`py-2 px-4 focus:outline-none transition-colors duration-300 ${
        isActive
          ? "text-purple-600 border-b-2 border-purple-600 font-semibold"
          : "text-gray-600"
      }`}
    >
      {label}
    </button>
  );
};

export default Tab;
