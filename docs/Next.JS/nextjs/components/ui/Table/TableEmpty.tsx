import React from "react";

export interface TableEmptyProps {
  colSpan?: number;
}

export default function TableEmpty({
  colSpan,
  children,
}: React.PropsWithChildren<TableEmptyProps>) {
  return (
    <tr>
      <td colSpan={colSpan}>
        <div className="flex justify-center">{children}</div>
      </td>
    </tr>
  );
}
