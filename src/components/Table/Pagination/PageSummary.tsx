import React from "react";

interface PageSummaryProps {
  currentPage: number;
  rowsPerPage: number;
  totalRows: number;
}

const PageSummary: React.FC<PageSummaryProps> = ({
  currentPage,
  rowsPerPage,
  totalRows,
}) => {
  const rowStart = currentPage * rowsPerPage + 1;
  const rowEnd = Math.min(rowStart + rowsPerPage - 1, totalRows);

  return (
    <div className="text-gray-600">
      {rowStart} to {rowEnd} of {totalRows}
    </div>
  );
};

export default PageSummary;
