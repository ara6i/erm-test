import React from "react";
import SortIcon from "./icons/SortIcon";
import SearchInput from "./Inputs/SearchInput";
import Image from "next/image";

const headers = [
  { title: "Item Code", sortable: true, search: true },
  { title: "Item Name", sortable: true, search: true },
  { title: "Category", sortable: false, search: true },
  { title: "Current Stk. Level", sortable: true, search: false },
  { title: "Reorder Stk. Lvl.", sortable: true, search: false },
  { title: "UOM", sortable: false, search: false },
  { title: "Loc.", sortable: false, search: false },
  { title: "Batch/Lot #", sortable: true, search: false },
  { title: "Expiry Date", sortable: true, search: false },
  { title: "Status", sortable: false, search: false },
  { title: "Actions", sortable: false, search: false },
];

const TableHeader = () => {
  return (
    <thead className="bg-tableHeader text-white font-normal rounded-xl ">
      <tr>
        {headers.map((header, index) => (
          <th key={index} className="px-4 py-6 rounded text-center border-r-2 text-base font-semibold ">
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center space-x-2">
                <span className="font-normal">{header.title}</span>
                {header.sortable && (
                  <Image
                    src="/icons/sort.svg"
                    width={24}
                    height={24}
                    alt="sort"
                  />
                )}
              </div>
              {header.search && <SearchInput />}
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
