import React from "react";
import { FaSearch } from "react-icons/fa"; // Importing the search icon from react-icons

const SearchInput = () => {
  return (
    <div className="relative flex items-center w-5/6 mt-2">
      <FaSearch className="absolute left-3 text-gray-400" />
      <input
        type="text"
        placeholder="Search"
        className="w-full pl-8 pr-2 py-1 text-black border rounded-xl placeholder:text-gray-400 font-medium"
      />
    </div>
  );
};

export default SearchInput;
