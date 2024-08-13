import React, { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  ColumnDef,
} from "@tanstack/react-table";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import Pagination from "./Pagination";
import DropdownFilter from "./DropdownFilter";

interface DynamicTableWithFiltersProps<T extends object> {
  columns: ColumnDef<T, any>[];
  data: T[];
  pageSize?: number;
}

const DynamicTableWithFilters = <T extends object>({
  columns,
  data,
  pageSize = 10,
}: DynamicTableWithFiltersProps<T>) => {
  const [filters, setFilters] = useState({
    category: "All",
    location: "All",
    status: "All",
  });

  const filteredData = data.filter((row) => {
    return (
      (filters.category === "All" || row.category === filters.category) &&
      (filters.location === "All" || row.location === filters.location) &&
      (filters.status === "All" || row.status === filters.status)
    );
  });

  const table = useReactTable({
    data: filteredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    initialState: { pagination: { pageSize } },
  });

  const {
    getRowModel,
    getState,
    setPageSize,
    previousPage,
    nextPage,
    gotoPage,
    getCanPreviousPage,
    getCanNextPage,
  } = table;
  const { pageIndex, pageSize: currentSize } = getState().pagination;
  const rowStart = pageIndex * currentSize + 1;
  const rowEnd = rowStart + table.getRowModel().rows.length - 1;
  const totalRows = filteredData.length;

  return (
    <div className="w-full">
      <div className="flex space-x-4 mb-4">
        <DropdownFilter
          label="Category"
          options={["All", "Category 1", "Category 2", "Category 3"]}
          value={filters.category}
          onChange={(value) =>
            setFilters((prev) => ({ ...prev, category: value }))
          }
        />
        <DropdownFilter
          label="Location"
          options={["All", "Location 1", "Location 2", "Location 3"]}
          value={filters.location}
          onChange={(value) =>
            setFilters((prev) => ({ ...prev, location: value }))
          }
        />
        <DropdownFilter
          label="Status"
          options={["All", "Active", "Inactive"]}
          value={filters.status}
          onChange={(value) =>
            setFilters((prev) => ({ ...prev, status: value }))
          }
        />
        {/* Show/Hide Columns dropdown can be implemented similarly if needed */}
      </div>

      <table className="min-w-full bg-white rounded-xl shadow overflow-hidden">
        <TableHeader headerGroups={table.getHeaderGroups()} />
        <tbody>
          {getRowModel().rows.map((row) => (
            <TableRow key={row.id} row={row} />
          ))}
        </tbody>
      </table>

      <Pagination
        pageIndex={pageIndex}
        pageSize={currentSize}
        pageCount={table.getPageCount()}
        canPreviousPage={getCanPreviousPage()}
        canNextPage={getCanNextPage()}
        previousPage={previousPage}
        nextPage={nextPage}
        gotoPage={gotoPage}
        setPageSize={setPageSize}
        rowStart={rowStart}
        rowEnd={rowEnd}
        totalRows={totalRows}
      />
    </div>
  );
};

export default DynamicTableWithFilters;
