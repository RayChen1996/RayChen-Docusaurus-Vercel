import clsx from "clsx";
import React from "react";
import InofSectionHeaderContainer from "./InofSectionHeaderContainer";

export interface InfoSectionProps
  extends Pick<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
    "className" | "style"
  > {
  title?: string;
}

export default function InfoSection({
  title,
  className,
  children,
  ...props
}: React.PropsWithChildren<InfoSectionProps>) {
  return (
    <section {...props} className={clsx("grid gap-2", className)}>
      {title ? (
        <InofSectionHeaderContainer>
          <h1>{title}</h1>
        </InofSectionHeaderContainer>
      ) : null}
      {children}
    </section>
  );
}
