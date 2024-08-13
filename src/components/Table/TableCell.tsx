import React from "react";

const TableCell = ({ children }: any) => {
  return (
    <td className="p-4 text-center h-14 font-normal text-sm min-w-24 text-gray-500 border-r-2">
      {children}
    </td>
  );
};

export default TableCell;
