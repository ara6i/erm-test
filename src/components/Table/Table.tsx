import React from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const Table = ({ data }: any) => {
  return (
    <div className="w-full ">
      <table className=" bg-white rounded-xl shadow overflow-x-scroll min-w-[1400px] ">
        <TableHeader />
        <tbody>
          {data.map((row: any, index: React.Key | null | undefined) => (
            <TableRow key={index} row={row} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
