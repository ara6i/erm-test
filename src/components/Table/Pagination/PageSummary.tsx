import React from 'react';

const PageSummary = ({ currentPage, rowsPerPage, totalRows }) => {
  const rowStart = currentPage * rowsPerPage + 1;
  const rowEnd = Math.min(rowStart + rowsPerPage - 1, totalRows);

  return (
    <div className="text-gray-600">
      {rowStart} to {rowEnd} of {totalRows}
    </div>
  );
};

export default PageSummary;
