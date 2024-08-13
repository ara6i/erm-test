// src/components/Tables/TableRow.tsx

import React from "react";
import { Row, flexRender } from "@tanstack/react-table";

interface TableRowProps<T extends object> {
  row: Row<T>;
}

const TableRow = <T extends object>({ row }: TableRowProps<T>) => {
  return (
    <tr className="border-b last:border-none">
      {row.getVisibleCells().map((cell) => (
        <td
          key={cell.id}
          className="px-4 py-2 text-center text-gray-800 border-r border-2"
        >
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </td>
      ))}
    </tr>
  );
};

export default TableRow;
