"use client";

import React, { useState } from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import InputField from "./Inputs/InputField";
import DropdownField from "./Inputs/DropdownField";
import Button from "./Inputs/Button";
import Pagination from "./Pagination/Pagination";

const Table = ({ data }: any) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const totalRows = 100; // Example total rows count
  const paginatedData = data.slice(
    currentPage * rowsPerPage,
    (currentPage + 1) * rowsPerPage
  );

  return (
    <div className="w-full overflow-x-scroll absolute top-0 left-0  right-0 p-10 bg-table rounded-2xl py-6 px-4">
      <form>
        <div className="flex items-center gap-4 mb-4 text-sm text-textGray">
          <DropdownField
            label="Category"
            options={[
              { value: "All", label: "All" },
              { value: "finished-product", label: "Finished Product" },
            ]}
          />
          <DropdownField
            label="Location"
            options={[
              { value: "All", label: "All" },
              { value: "finished-product", label: "Finished Product" },
            ]}
          />
          <DropdownField
            label="Status"
            options={[
              { value: "All", label: "All" },
              { value: "finished-product", label: "Finished Product" },
            ]}
          />
          <DropdownField
            label="Show/Hide Columns"
            options={[
              { value: "All", label: "13 Column selected" },
              { value: "warehouse-2", label: "23 Column selected" },
            ]}
          />
        </div>
      </form>
      {/* Container with horizontal scroll */}
      <table className="bg-white rounded-xl  shadow max-w-full min-w-[1400px]">
        {" "}
        {/* Table setup */}
        <TableHeader />
        <tbody>
          {data.map((row: any, index: React.Key | null | undefined) => (
            <TableRow key={index} row={row} />
          ))}
        </tbody>
      </table>
      <Pagination
        totalRows={totalRows}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Table;
