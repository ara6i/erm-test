import React from "react";

interface PaginationProps {
  pageIndex: number;
  pageSize: number;
  pageCount: number;
  canPreviousPage: boolean;
  canNextPage: boolean;
  previousPage: () => void;
  nextPage: () => void;
  gotoPage: (updater: number) => void;
  setPageSize: (size: number) => void;
  rowStart: number;
  rowEnd: number;
  totalRows: number;
}

const Pagination: React.FC<PaginationProps> = ({
  pageIndex,
  pageSize,
  pageCount,
  canPreviousPage,
  canNextPage,
  previousPage,
  nextPage,
  gotoPage,
  setPageSize,
  rowStart,
  rowEnd,
  totalRows,
}) => {
  return (
    <div className="flex gap-10 justify-center items-center mt-4 py-4 border-t border-gray-200">
      <div className="flex items-center">
        <span className="text-sm text-gray-600 mr-2">Rows per page:</span>
        <select
          className="text-sm text-gray-600 border border-gray-300 rounded px-2 py-1"
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[10, 20, 30, 40, 50].map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center">
        <button
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
          className="px-2 py-1 mx-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        >
          icon
        </button>
        <button
          onClick={previousPage}
          disabled={!canPreviousPage}
          className="px-2 py-1 mx-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        >
          icon
        </button>
        <span className="text-sm text-gray-600">
          {pageIndex + 1} of {pageCount}
        </span>
        <button
          onClick={nextPage}
          disabled={!canNextPage}
          className="px-2 py-1 mx-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        >
          icon
        </button>
        <button
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
          className="px-2 py-1 mx-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        >
          icon
        </button>
      </div>

      <div className="text-sm text-gray-600">
        {rowStart} to {rowEnd} of {totalRows}
      </div>
    </div>
  );
};

export default Pagination;
