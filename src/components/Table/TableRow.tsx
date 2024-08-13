import React from "react";
import TableCell from "./TableCell";
import DropdownMenu from "./DropdownMenu";
import StatusIcon from "./icons/StatusIcon";
import Image from "next/image";
import Link from "next/link";

const TableRow = ({ row }: any) => {
  return (
    <tr className="border-b last:border-none h-14 p-4 text-center textGray">
      <TableCell>{row.itemCode}</TableCell>
      <TableCell>
        {" "}
        <Link
          href={"/"}
          className="text-primary flex items-center justify-center gap-2"
        >
          {row.itemName}
          <Image src="/icons/newTab.svg" width={24} height={24} alt="newTab" />
        </Link>
      </TableCell>
      <TableCell>{row.category}</TableCell>
      <TableCell>
        <button className="flex items-center justify-around gap-2 w-full">
          <p> {row.stockLevel}</p>
          <Image src="/icons/edit.svg" width={24} height={24} alt="edit" />
        </button>
      </TableCell>
      <TableCell>{row.reorderLevel}</TableCell>
      <TableCell>{row.uom}</TableCell>
      <TableCell>{row.location}</TableCell>
      <TableCell>{row.batchLot}</TableCell>
      <TableCell>{row.expiryDate}</TableCell>
      <TableCell>
        <StatusIcon status={row.status} />
      </TableCell>
      <TableCell>
        <DropdownMenu />
      </TableCell>
    </tr>
  );
};

export default TableRow;
