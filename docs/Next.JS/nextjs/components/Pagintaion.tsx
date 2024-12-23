"use client";

import React, { memo, useCallback } from "react";
import clsx from "clsx";
import { deepEqual } from "fast-equals";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  ChevronFirstIcon,
  ChevronLastIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  EllipsisIcon,
} from "lucide-react";

import usePagination, {
  type UsePaginationItem,
  type UsePaginationProps,
} from "@/hook/usePagination";
import combinSearchUrl from "@/utils/combinSearchUrl";

export interface PagintaionProps extends UsePaginationProps {
  /**
   * - 重新指向搜尋參數
   *
   * @default "page"
   * */
  queryString?: string;
}

/** - 頁數組件 */
export default memo(function Pagintaion({
  queryString = "page",
  onChange,
  ...props
}: PagintaionProps) {
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const _onChange = useCallback(
    (_: unknown, p: number) => {
      push(
        combinSearchUrl(
          pathname,
          { [queryString]: p },
          searchParams.toString(),
        ),
      );
    },
    [pathname, push, queryString, searchParams],
  );

  const { items } = usePagination({
    ...props,
    onChange: onChange ?? _onChange,
  });

  return (
    <div className="flex justify-center">
      <div className="join font-mono">{items.map(_renderPage)}</div>
    </div>
  );
});

/** - 渲染頁數 */
function _renderPage(item: UsePaginationItem, index: number) {
  return <PaginationItem key={"page" + index} {...item} />;
}

/** - 頁數物件 */
const PaginationItem = memo(function PaginationItem({
  type,
  onClick,
  page,
  selected,
  disabled,
}: UsePaginationItem) {
  switch (type) {
    case "start-ellipsis":
    case "end-ellipsis":
      return (
        <PageButton disabled>
          <EllipsisIcon size={ICON_SIZE} />
        </PageButton>
      );
    default:
      return (
        <PageButton onClick={onClick} disabled={disabled} active={selected}>
          {type === "page" ? page : <PageIcon type={type} />}
        </PageButton>
      );
  }
}, deepEqual);

const PageIcon = memo(function Component({
  type,
}: Pick<UsePaginationItem, "type">) {
  switch (type) {
    case "previous":
      return <ChevronLeftIcon size={ICON_SIZE} />;
    case "next":
      return <ChevronRightIcon size={ICON_SIZE} />;
    case "first":
      return <ChevronFirstIcon size={ICON_SIZE} />;
    case "last":
      return <ChevronLastIcon size={ICON_SIZE} />;
    default:
      return null;
  }
});

interface PageButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  active?: boolean;
}

function PageButton({
  children,
  className,
  active,
  ...props
}: PageButtonProps) {
  return (
    <button
      {...props}
      type="button"
      className={clsx(
        "btn join-item",
        "max-md:btn-sm max-md:min-w-8",
        "btn-md min-w-12",
        "2xl:btn-lg 2xl:min-w-16",
        active ? "btn-primary btn-active pointer-events-none" : null,
        className,
      )}
    >
      {children}
    </button>
  );
}

/** - 圖標尺寸 */
const ICON_SIZE = 14;
