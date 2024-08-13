import React from "react";
import {
  FaAngleDoubleLeft,
  FaAngleLeft,
  FaAngleRight,
  FaAngleDoubleRight,
} from "react-icons/fa";

interface PageControlsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const PageControls: React.FC<PageControlsProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => onPageChange(0)}
        disabled={currentPage === 0}
        className="text-gray-600 p-2 hover:bg-gray-200 rounded disabled:opacity-50"
      >
        <FaAngleDoubleLeft />
      </button>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 0}
        className="text-gray-600 p-2 hover:bg-gray-200 rounded disabled:opacity-50"
      >
        <FaAngleLeft />
      </button>
      <span className="px-4 py-1 text-gray-700 border border-gray-300 rounded">
        {currentPage + 1}
      </span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages - 1}
        className="text-gray-600 p-2 hover:bg-gray-200 rounded disabled:opacity-50"
      >
        <FaAngleRight />
      </button>
      <button
        onClick={() => onPageChange(totalPages - 1)}
        disabled={currentPage === totalPages - 1}
        className="text-gray-600 p-2 hover:bg-gray-200 rounded disabled:opacity-50"
      >
        <FaAngleDoubleRight />
      </button>
    </div>
  );
};

export default PageControls;
