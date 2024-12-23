import React from "react";
import clsx from "clsx";

import InfoField, { type InfoFieldProps } from "./InfoField";
import InfoChip, { type InfoChipProps } from "./InfoChip";
import InfoLink, { type InfoLinkProps } from "./InfoLink";
import InfoEmpty from "./InfoEmpty";

type Value = string | number | null | undefined;
type ValueOption =
  | ({
      type: "LINK";
    } & InfoLinkProps)
  | ({
      type: "CHIP";
    } & InfoChipProps);

interface Field
  extends Omit<
    React.DetailedHTMLProps<
      React.LiHTMLAttributes<HTMLLIElement>,
      HTMLLIElement
    >,
    "value"
  > {
  value?: Value | Array<ValueOption> | ValueOption;
  label?: string;
  mono?: boolean;
  props?: InfoFieldProps;
}

export interface InfoFieldsProps
  extends Pick<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLUListElement>,
      HTMLUListElement
    >,
    "className" | "style"
  > {
  fields?: Field[];
}

/** - 細項列表 */
export default function InfoFields({
  fields,
  className,
  ...props
}: InfoFieldsProps) {
  return (
    <ul {...props} className={clsx("grid gap-2", className)}>
      {fields?.map(_renderItem)}
    </ul>
  );
}

function _renderChip({ type, ...item }: ValueOption, index: number) {
  switch (type) {
    case "LINK":
      return <InfoLink {...(item as InfoLinkProps)} key={`link-${index}`} />;
    case "CHIP":
    default:
      return <InfoChip {...(item as InfoChipProps)} key={`chip-${index}`} />;
  }
}

function _renderItem(
  { label, value, mono, props, ...liProps }: Field,
  index: number,
) {
  function _renderContent() {
    if (typeof value === "object") {
      if (Array.isArray(value)) {
        return (
          <div className="flex flex-wrap gap-2">{value.map(_renderChip)}</div>
        );
      } else if (value) {
        return _renderChip(value, 0);
      } else {
        return <InfoEmpty />;
      }
    } else {
      return <InfoField {...props} value={value} mono={mono} />;
    }
  }

  return (
    <li
      key={`field-${index}`}
      {...liProps}
      className={clsx("form-control", liProps.className)}
    >
      {label ? (
        <label className="mb-1 text-sm text-secondary">
          <strong>{label}</strong>
        </label>
      ) : null}
      {_renderContent()}
    </li>
  );
}
