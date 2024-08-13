import React from "react";

const DropdownField = ({ label, options }: any) => {
  return (
    <div className="mb-4">
      <label className="block text-textGray text-sm mb-2 font-medium">
        {label}
      </label>
      <select className="w-full px-3 text-textGray py-2 border font-medium border-gray-300 rounded-md focus:outline-none f">
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
