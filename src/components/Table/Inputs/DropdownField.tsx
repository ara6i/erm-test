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
      <label className="block text-textGray text-sm mb-2 font-medium">
        {label}
      </label>
      <select className="w-full px-3 text-textGray py-2 border font-medium border-gray-300 rounded-md focus:outline-none">
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownField;
