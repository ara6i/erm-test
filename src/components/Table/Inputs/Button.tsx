import React from "react";

const Button = ({ label, onClick }: any) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
    >
      {label}
    </button>
  );
};

export default Button;
