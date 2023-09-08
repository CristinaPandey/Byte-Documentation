'use client';
import React, { useState } from 'react';
import {
    useReactTable,
    getCoreRowModel,
    getPaginationRowModel,
    flexRender,
    ColumnDef,
} from '@tanstack/react-table';

const Table: React.FC<any> = ({
    data,
    columns,
}: {
    data: any[];
    columns: ColumnDef<any>[];
}) => {
    const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: true,
    });
  const [List, setList] = useState(data); // Make sure you define and import 'Users' array
    const [MasterChecked, setMasterChecked] = useState(false);
    const [selectedList, setSelectedList] = useState<any[]>([]);

  // Select/ Unselect Table rows
    const onMasterCheck = (e: any) => {
    const tempList = List.map((user) => ({
        ...user,
        selected: e.target.checked,
    }));

    setList(tempList);
    setMasterChecked(e.target.checked);
    setSelectedList(tempList.filter((e: any) => e.selected));
    };

  // Update List Item's state and Master Checkbox State
    const onItemCheck = (e: any, item: any) => {
    const tempList = List.map((user) =>
        user.id === item.id ? { ...user, selected: e.target.checked } : user
    );

    const totalItems = List.length;
    const totalCheckedItems = tempList.filter((e) => e.selected).length;

    setList(tempList);
    setMasterChecked(totalItems === totalCheckedItems);
    setSelectedList(tempList.filter((e) => e.selected));
    };

  // Event to get selected rows (Optional)
    const getSelectedRows = () => {
    setSelectedList(List.filter((e: any) => e.selected));
    };
    return (
    <div className="flex flex-col overflow-x-auto">
        <table className="w-full  font-medium text-center text-[#1E293B] mt-4 ">
        {/* <input
            type="checkbox"
            className="form-check-input"
            checked={MasterChecked}
            id="mastercheck"
            onChange={(e) => onMasterCheck(e)}
        /> */}
        {/* <div>
            <div>
            <input
                type="checkbox"
                className=" text-[#64748B] rounded h-4 w-4 border-l-0 border-t-0 border-b-0 "
            ></input>
            All Paramaters
            </div>
            <div>
            <input
                type="checkbox"
                className=" text-[#64748B] rounded h-4 w-4 border-l-0 border-t-0 border-b-0 "
            ></input>
            All Stations
            </div>
        </div> */}
        <thead className=" bg-[#e2e8f0]/30 border-y-1 text-center">
            {table?.getHeaderGroups()?.map((headerGroup) => (
            <tr key={headerGroup.id}>
                {headerGroup?.headers?.map((header) => {
                return (
                    <th
                    key={header.id}
                    colSpan={header.colSpan}
                    scope="col"
                    className="px-6 py-3"
                    >
                    {header.isPlaceholder ? null : (
                        <>
                        {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                        )}
                        </>
                    )}
                    </th>
                );
                })}
            </tr>
            ))}
        </thead>
        <tbody>
            {data.length === 0 ? (
            <>
                <tr>
                <td colSpan={columns.length} className="py-20 text-center">
                    <div className="inline-block align-middle">
                    No records available
                    </div>
                </td>
                </tr>
            </>
            ) : (
            <>
                {table?.getRowModel().rows.map((row) => {
                return (
                <tr key={row.id} className="bg-white border-b ">
                    {/* <input
                        type="checkbox"
                        checked={data.selectedList}
                        className="form-check-input"
                        id="rowcheck{user.id}"
                        onChange={(e) => onItemCheck(e, data)}
                    /> */}

                    {/* <input
                        type="checkbox"
                      checked={row.original.selected} // Access the 'selected' property of the row's original data
                        className="form-check-input"
                      id={`rowcheck${row.original.id}`} // Use backticks to interpolate the id correctly
                      onChange={(e) => onItemCheck(e, row.original)} // Pass the row's original data to onItemCheck
                    /> */}
                    {row.getVisibleCells().map((cell) => {
                        return (
                        <td key={cell.id} className="px-6 py-3 capitalize">
                            {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                            )}
                        </td>
                        );
                    })}
                    </tr>
                );
                })}
            </>
            )}
        </tbody>
        </table>
        <div className="flex items-center  self-end mt-4 text-[#64748B] text-base font-normal">
        <span className="flex items-center gap-1 mr-2 font-medium">
            {`Showing

            ${
            table.getState().pagination.pageIndex *
                table.getState().pagination.pageSize +
            1
            }

            to

            ${
            table.getState().pagination.pageIndex *
                table.getState().pagination.pageSize +
            table.getRowModel().rows.length
            }
            
            of
            
            ${data.length}
            `}
        </span>
        <button
            className="border border-[#E2E8F0]  p-1 bg-[#FFFFFF] w-12 h-12 flex items-center justify-center"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
        >
            {'<<'}
        </button>
        <button
            className="border border-[#E2E8F0]  p-1 bg-[#FFFFFF] w-12 h-12 flex items-center justify-center"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
        >
            {'<'}
        </button>
        <button
            className="border border-[#E2E8F0]  p-1 bg-[#FFFFFF] w-12 h-12 flex items-center justify-center"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
        >
            {'>'}
        </button>
        <button
            className="border border-[#E2E8F0]  p-1 bg-[#FFFFFF] w-12 h-12 flex items-center justify-center"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
        >
            {'>>'}
        </button>
        </div>
    </div>
    );
};

export default Table;
