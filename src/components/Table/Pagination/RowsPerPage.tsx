import React from "react";

interface RowsPerPageProps {
  rowsPerPage: number;
  setRowsPerPage: (rows: number) => void;
}

const RowsPerPage: React.FC<RowsPerPageProps> = ({
  rowsPerPage,
  setRowsPerPage,
}) => {
  return (
    <div className="flex items-center">
      <span className="text-gray-600 mr-2">Rows per page:</span>
      <select
        value={rowsPerPage}
        onChange={(e) => setRowsPerPage(Number(e.target.value))}
        className="border border-gray-300 rounded-md px-2 py-1 text-gray-600"
      >
        <option value={10}>10</option>
        <option value={25}>25</option>
        <option value={50}>50</option>
      </select>
    </div>
  );
};

export default RowsPerPage;
