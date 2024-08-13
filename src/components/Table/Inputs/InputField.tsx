import React from "react";

const InputField = ({ label, placeholder }: any) => {
  return (
    <div className="mb-4">
      <label className="block text-textGray text-sm font-medium mb-2">
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
    </div>
  );
};

export default InputField;
