// src/components/Tables/TableHeader.tsx

import React from "react";
import { HeaderGroup, flexRender } from "@tanstack/react-table";

interface TableHeaderProps<T extends object> {
  headerGroups: HeaderGroup<T>[];
}

const TableHeader = <T extends object>({
  headerGroups,
}: TableHeaderProps<T>) => {
  return (
    <thead className="bg-tableHeader ">
      {headerGroups.map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((column) => (
            <th
              key={column.id}
              className="px-4 py-6 text-center text-white border-r-2 "
            >
              {column.columnDef?.header
                ? flexRender(column.columnDef.header, column.getContext())
                : "Untitled"}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
};

export default TableHeader;
