import React from "react";
import RowsPerPage from "./RowsPerPage";
import PageControls from "./PageControls";
import PageSummary from "./PageSummary";

interface PaginationProps {
  totalRows: number;
  rowsPerPage: number;
  setRowsPerPage: (rowsPerPage: number) => void;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalRows,
  rowsPerPage,
  setRowsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalRows / rowsPerPage);

  return (
    <div className="flex items-center text-sm justify-center gap-10 p-4 border-t border-gray-200">
      <RowsPerPage rowsPerPage={rowsPerPage} setRowsPerPage={setRowsPerPage} />
      <PageControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
      <PageSummary
        currentPage={currentPage}
        rowsPerPage={rowsPerPage}
        totalRows={totalRows}
      />
    </div>
  );
};

export default Pagination;
