import React from "react";

interface Option {
  value: string;
  label: string;
}

interface DropdownFieldProps {
  label: string;
  options: Option[];
}

const DropdownField: React.FC<DropdownFieldProps> = ({ label, options }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-600 text-sm mb-2 font-medium">
        {label}
      </label>
      <select className="w-full px-3 text-gray-600 py-2 border font-medium border-gray-300 rounded-md focus:outline-none">
        {options.map((option, index) => (
          <option key={index} value={option.value} className="text-gray-600 text-sm">
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownField;
