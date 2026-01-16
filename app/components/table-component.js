export function DataTable({ headers, rows }) {
    return (
        <div className="w-full my-6 overflow-x-auto">
            <table className="w-full border-collapse border border-zinc-300">
                <thead>
                    <tr className="bg-zinc-100">
                        {headers.map((header, idx) => (
                            <th
                                key={idx}
                                className="border border-zinc-300 px-4 py-3 text-left font-semibold text-zinc-900"
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, rowIdx) => (
                        <tr
                            key={rowIdx}
                            className="hover:bg-zinc-50 even:bg-zinc-50 border-b border-zinc-300"
                        >
                            {row.map((cell, cellIdx) => (
                                <td
                                    key={cellIdx}
                                    className="border border-zinc-300 px-4 py-3 text-zinc-700"
                                >
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
