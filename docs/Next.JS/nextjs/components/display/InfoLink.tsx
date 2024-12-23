import clsx from "clsx";
import React from "react";
import Link, { type LinkProps } from "next/link";
import { LinkIcon } from "lucide-react";

import InfoEmpty from "./InfoEmpty";

export interface InfoLinkProps
  extends Omit<
      React.DetailedHTMLProps<
        React.AnchorHTMLAttributes<HTMLAnchorElement>,
        HTMLAnchorElement
      >,
      keyof LinkProps
    >,
    Omit<LinkProps, "href">,
    Partial<Pick<LinkProps, "href">> {
  label?: string | null;
  mono?: boolean;
}

export default function InfoLink({
  mono,
  href,
  className,
  label,
  ...props
}: InfoLinkProps) {
  if (!href) {
    return <InfoEmpty />;
  }

  return (
    <Link
      target="_blank"
      {...props}
      href={href}
      className={clsx("badge badge-lg gap-2", mono && "font-mono", className)}
    >
      <LinkIcon size={16} className="text-info" />
      <span>{label}</span>
    </Link>
  );
}
