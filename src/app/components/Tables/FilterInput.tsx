// src/components/Tables/FilterInput.tsx

import React from "react";
import { Column } from "@tanstack/react-table";

interface FilterInputProps<T> {
  column: Column<T, any>;
  setFilter: (columnId: string, filterValue: any) => void;
}

const FilterInput = <T,>({ column, setFilter }: FilterInputProps<T>) => {
  return (
    <div className="flex flex-col">
      <label className="text-sm text-gray-600">
        {column.columnDef.header as string}
      </label>
      <input
        className="border rounded-lg px-2 py-1 text-sm"
        value={(column.getFilterValue() as string) || ""}
        onChange={(e) => setFilter(column.id, e.target.value)}
        placeholder={`Filter ${column.columnDef.header as string}`}
      />
    </div>
  );
};

export default FilterInput;
