import React from 'react'

export default function Table() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-800 text-black text-start">
          <tr>
            <th className="w-1/3 py-2 px-4">Column 1</th>
            <th className="w-1/3 py-2 px-4">Column 2</th>
            <th className="w-1/3 py-2 px-4">Column 3</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-100 border-b hover:bg-gray-200">
            <td className="py-2 px-4">Row 1, Cell 1</td>
            <td className="py-2 px-4">Row 1, Cell 2</td>
            <td className="py-2 px-4">Row 1, Cell 3</td>
          </tr>
          <tr className="bg-white border-b hover:bg-gray-200">
            <td className="py-2 px-4">Row 2, Cell 1</td>
            <td className="py-2 px-4">Row 2, Cell 2</td>
            <td className="py-2 px-4">Row 2, Cell 3</td>
          </tr>
          <tr className="bg-gray-100 border-b hover:bg-gray-200">
            <td className="py-2 px-4">Row 3, Cell 1</td>
            <td className="py-2 px-4">Row 3, Cell 2</td>
            <td className="py-2 px-4">Row 3, Cell 3</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
