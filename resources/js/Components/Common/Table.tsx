import React, { Fragment } from "react";

interface HeadersProps{
    id: string;
    label: string;
}

interface Props{
    paperClassName?: string;
    headers: HeadersProps[];
    rows: any[]
}

const Table = ({paperClassName, headers, rows}: Props) => {
    return (
        <div className={`relative overflow-x-auto shadow-md ${paperClassName}`}>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="p-4">
                            <div className="flex items-center">
                                <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                            </div>
                        </th>

                        {headers.map((item:HeadersProps, index:number) => (
                            <th scope="col" className="px-6 py-3" key={index}>
                                {item.label}
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {rows.map((row:any, rowIndex:number) => (
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={rowIndex}>
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="checkbox-table-search-3" className="sr-only">checkbox</label>
                                </div>
                            </td>

                            {headers.map((header:HeadersProps, index:number) => (
                                <td scope="row" className={`px-6 py-4 ${index === 0 && 'font-medium text-gray-900 whitespace-nowrap dark:text-white'}`} key={index}>
                                    {row[header.id]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            
            {rows.length === 0 && (
                <div className="p-2 flex items-center justify-center">
                    <p>No items found!</p>
                </div>
            )}
        </div>
    )
}

export default Table;