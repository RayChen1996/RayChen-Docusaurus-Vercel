import React, { memo } from "react";
import clsx from "clsx";
import numbro from "numbro";

import InfoEmpty from "./InfoEmpty";

export interface InfoFieldProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  value?: string | number | null | undefined;
  mono?: boolean;
}

export default memo(function InfoField({
  value,
  mono,
  className,
  ...props
}: InfoFieldProps) {
  return (
    <p
      {...props}
      className={clsx("text-xs", mono ? "font-mono" : null, className)}
    >
      {_renderContent(value) || <InfoEmpty />}
    </p>
  );
});

function _renderContent(params: string | number | null | undefined) {
  switch (typeof params) {
    case "number":
      return numbro(params).format({ thousandSeparated: true });
    case "string":
      return params || null;
    default:
      break;
  }
  return null;
}
